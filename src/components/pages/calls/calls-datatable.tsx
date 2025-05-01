"use client";
import { getCallData } from "@/services/call-service";
import { Button, Dropdown, MenuProps, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { CallSection } from "./calls.style";
import { Container } from "@/components/styles";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const CallsDatatable = () => {
  const [filter, setFilter] = useState<string>("All");

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
  const getData = async (page: number, pageSize: number) => {
    try {
      const response = await getCallData(page, pageSize);
      console.log("Response from API:", response);
      // setOriginalData(response.nodes);
      // setCallsData(response.nodes);
      // setPageSize(response.totalCount);
    } catch (error) {
      console.log("Error fetching call data:", error);
    }
  };

  useEffect(() => {
    getData(1, 10);
  }, []);
  return (
    <CallSection>
      <Container>
        <h1 className="title">Turing Technologies Frontend Test</h1>
        <div>
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
          <Table<DataType> columns={columns} dataSource={data} />
        </div>
      </Container>
    </CallSection>
  );
};

export default CallsDatatable;
