import CallsDatatable from "@/components/common/calls-datatable";
import { Container } from "@/components/styles";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="space">
        <CallsDatatable />
      </div>
    </Container>
  );
};

export default page;
