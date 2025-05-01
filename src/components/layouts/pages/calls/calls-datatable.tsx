"use client";
import { getCallData } from "@/services/call-service";
import { Button, Dropdown, MenuProps, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { TablePaginationConfig, TableProps } from "antd";
import { CallHeader, CallSection } from "./calls.style";
import { Container } from "@/components/styles";
import { CallRecord } from "@/lib/types";
import { formatDuration } from "@/lib/helpers";
import AddNotes from "./add-notes";

const columns: TableProps<CallRecord>["columns"] = [
  {
    title: "CALL TYPE",
    dataIndex: "call_type",
    key: "call_type",
    render: (callType: string) => {
      const colorMap: Record<string, string> = {
        answered: "green",
        missed: "red",
        voicemail: "blue",
      };

      return (
        <span
          style={{
            color: colorMap[callType] || "blue",
            textTransform: "capitalize",
          }}
        >
          {callType}
        </span>
      );
    },
  },
  {
    title: "DIRECTION",
    dataIndex: "direction",
    key: "direction",
    render: (direction: string) => (
      <span style={{ color: "#1e40af", textTransform: "capitalize" }}>
        {direction}
      </span>
    ),
  },
  {
    title: "DURATION",
    dataIndex: "duration",
    key: "duration",
    render: (duration: string) => {
      const time = formatDuration(Number(duration));
      return (
        <div>
          {time}
          <div style={{ fontSize: "0.75rem", color: "#1e40af" }}>
            ({duration} seconds)
          </div>
        </div>
      );
    },
  },
  {
    title: "FROM",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "TO",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "VIA",
    dataIndex: "via",
    key: "via",
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    key: "created_at",
    render: (createdAt: string) => {
      return <div style={{ color: "#4b5563" }}>{createdAt.split("T")[0]}</div>;
    },
  },
  {
    title: "STATUS",
    dataIndex: "is_archived",
    key: "is_archived",
    render: (isArchived: boolean) => (
      <div
        style={{
          backgroundColor: isArchived ? "#ecfeff" : "#f3f4f6",
          color: isArchived ? "#06b6d4" : "#4b5563",
          textTransform: "capitalize",
          borderRadius: "0.375rem",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        {isArchived ? "Archived" : "UnArchived"}
      </div>
    ),
  },
  {
    title: "ACTIONS",
    dataIndex: "id",
    key: "actions",
    render: (id: string, record: CallRecord) => (
      <AddNotes
        id={id}
        call_type={record.call_type}
        duration={record.duration}
        from={record.from}
        to={record.to}
        via={record.via}
      />
    ),
  },
];

const CallsDatatable = () => {
  const [callsData, setCallsData] = useState<CallRecord[]>([]);
  const [originalData, setOriginalData] = useState<CallRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const getData = async (page: number, pageSize: number) => {
    try {
      setLoading(true);
      const response = await getCallData(page - 1, pageSize); // Adjusting for zero-based indexing
      setOriginalData(response.nodes);
      setCallsData(response.nodes);
      setPagination({
        ...pagination,
        total: response.totalCount,
      });
    } catch (error) {
      console.log("Error fetching call data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(pagination.current, pagination.pageSize);
  }, [pagination.current]);

  useEffect(() => {
    let filteredData = originalData;
    if (filter === "Archived") {
      filteredData = originalData.filter((call) => call.is_archived);
    } else if (filter === "Unarchive") {
      filteredData = originalData.filter((call) => !call.is_archived);
    }
    setCallsData(filteredData);
  }, [filter, originalData]);
  const items: MenuProps["items"] = [
    {
      label: "Archived",
      key: "Archived",
    },
    {
      label: "Unarchive",
      key: "Unarchive",
    },
    {
      label: "All",
      key: "All",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setFilter(e.key);
  };
  const handleTableChange = (newPagination: TablePaginationConfig) => {
    setPagination({
      ...pagination,
      current: newPagination.current || 1,
    });
  };
  const itemRender = (
    page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return <Button size="small">&lt;</Button>;
    }
    if (type === "next") {
      return <Button size="small">&gt;</Button>;
    }
    if (type === "page") {
      return (
        <Button
          size="small"
          type={pagination.current === page ? "primary" : "default"}
          style={
            pagination.current === page
              ? { backgroundColor: "#2563eb", color: "white" }
              : {}
          }
        >
          {page}
        </Button>
      );
    }
    return originalElement;
  };
  return (
    <CallSection>
      <Container>
        <h1 className="title">Turing Technologies Frontend Test</h1>
        <CallHeader>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: 8 }}>Filter by:</span>
            <Dropdown
              menu={{ items, onClick: handleMenuClick }}
              trigger={["click"]}
            >
              <Button>
                <Space>
                  {filter}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <Table
            columns={columns}
            dataSource={callsData}
            rowKey="id"
            pagination={{
              ...pagination,
              itemRender,
              showSizeChanger: false,
              position: ["bottomCenter"],
            }}
            loading={loading}
            onChange={handleTableChange}
            bordered
          />
          <div
            style={{
              textAlign: "center",
              fontSize: "0.875rem",
              marginTop: "1rem",
            }}
          >
            {(pagination.current - 1) * pagination.pageSize + 1} -{" "}
            {Math.min(
              pagination.current * pagination.pageSize,
              pagination.total
            )}{" "}
            of {pagination.total} results
          </div>
        </CallHeader>
      </Container>
    </CallSection>
  );
};

export default CallsDatatable;
