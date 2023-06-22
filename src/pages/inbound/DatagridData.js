import {
  DataGrid,
  Column,
  ColumnChooser,
  ColumnFixing,
  SearchPanel,
  Paging,
  Pager,
  FilterRow,
} from "devextreme-react/data-grid";
import { LoadIndicator } from "devextreme-react/load-indicator";
import { fetchAllEmployees } from "../../utils/fetch-data";
import React, { useEffect, useState } from "react";
const pageSizes = [10, 25, 50, 100];

const DataGridData = () => {
  const [employees, setEmployees] = useState("");
  useEffect(() => {
    const renderEmployees = async () => {
      const employeeData = await fetchAllEmployees();
      setEmployees(employeeData);
      console.log(employeeData);
    };
    renderEmployees();
  }, []);
  return (
    <React.Fragment>
      <DataGrid
        keyExpr="_id"
        dataSource={employees}
        showBorders={true}
        defaultPageSize={50}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={false}
        scrolling={true}
        height={500}
      >
        <SearchPanel visible={true} width={240} placeholder="Search..." />

        <FilterRow visible={true} />
        <ColumnFixing enabled={true} />

        <Column caption="S.No" dataField="id" width={50} alignment="left" />
        <Column caption="Identifier" dataField="_id" />
        <Column caption="First Name" dataField="first_name" />
        <Column caption="Last Name" dataField="last_name" />
        <Column caption="Email" dataField="email" />
        <Column caption="Gender" dataField="gender" />
        <Column
          caption="Hiring Date"
          dataField="hiring_date"
          dataType="date"
          format="dd/MM/yyyy"
        />
        <Pager
          allowedPageSizes={pageSizes}
          showPageSizeSelector={true}
          showInfo={true}
        />
        <Paging enabled={true} defaultPageSize={10} defaultPageIndex={1} />
      </DataGrid>
    </React.Fragment>
  );
};
export default DataGridData;
