import React from "react";
import DataGridData from "./DatagridData";

const inbound = () => {
  return (
    <React.Fragment>
      <h2 className={"content-block"}>All Items</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <DataGridData />
        </div>
      </div>
    </React.Fragment>
  );
};

export default inbound;
