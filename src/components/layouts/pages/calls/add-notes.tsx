"use client";
import React, { FC, memo, useState } from "react";
import { Modal, Button, Input, Divider, Typography, Row, Col } from "antd";
import { AddNotesProps } from "@/lib/types";
import { AddNotesApi } from "@/services/call-service";
import { formatDuration } from "@/lib/helpers";
import { StyledButton } from "./elements";

const { TextArea } = Input;
const { Title, Text } = Typography;

const AddNotes: FC<AddNotesProps> = ({
  id,
  call_type,
  duration,
  from,
  to,
  via,
  notes,
  getData,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<string>("");

  const callDetails = [
    {
      label: "Call Type",
      value: call_type,
      extraStyle: { color: "#2563eb", textTransform: "capitalize" },
    },
    { label: "Durations", value: formatDuration(Number(duration)) },
    { label: "From", value: from },
    { label: "To", value: to },
    { label: "Via", value: via },
  ];
  // const getNotes=async()=>{
  //   const response = await AddNotesApi(id, content);
  //   if (response) {
  //     setOpen(false);
  //     setContent("");
  //   }
  // }
  const handleSaveNote = async () => {
    setLoading(true);
    try {
      const response = await AddNotesApi(id, content);
      if (response) {
        setContent("");
        getData();
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          type="primary"
          size="small"
          onClick={showModal}
          style={{ backgroundColor: "#2563eb" }}
        >
          Add Note
        </Button>
      </div>
      <Modal
        title={
          <div>
            <Title level={5} style={{ marginBottom: 4 }}>
              Add Notes
            </Title>
            <Text type="secondary" style={{ color: "#2563eb" }}>
              Call ID {id}
            </Text>
          </div>
        }
        open={open}
        onCancel={handleCancel}
        footer={[
          <StyledButton
            key="submit"
            color="primary"
            type="primary"
            loading={loading}
            onClick={handleSaveNote}
            disabled={content.length === 0}
          >
            Save
          </StyledButton>,
        ]}
        width={720}
      >
        <Divider style={{ margin: "16px 0" }} />
        <Row gutter={16}>
          {callDetails.map(({ label, value, extraStyle }, index) => (
            <React.Fragment key={index}>
              <Col span={12}>
                <Text>{label}</Text>
              </Col>
              <Col span={12}>
                <Text style={(extraStyle as React.CSSProperties) || {}}>
                  {value}
                </Text>
              </Col>
            </React.Fragment>
          ))}
        </Row>
        <div style={{ marginTop: 24 }}>
          <Text style={{ display: "block", marginBottom: 8 }}>Notes</Text>
          {notes.map((note) => (
            <div key={note.id}>{note.content}</div>
          ))}
          <TextArea
            rows={4}
            placeholder="Add your notes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ height: 128 }}
          />
        </div>
        {error && (
          <div
            style={{
              color: "#ef4444",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginTop: 16,
            }}
          >
            {error}
          </div>
        )}
      </Modal>
    </>
  );
};

export default memo(AddNotes);
