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
        className="datagrid shadow-5 shadow p-3 mb-5 bg-body-tertiary rounded"
        dataSource={employees}
        showBorders={true}
        defaultPageSize={50}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
        scrolling={true}
      >
        <SearchPanel visible={true} width={240} placeholder="Search..." />
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        {/* <FilterRow visible={true} /> */}
        <ColumnFixing enabled={true} />

        <Column caption="S.No" dataField="id" width={80} />
        <Column caption="Identifier" dataField="_id" width={190} />
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
        <Paging enabled={true} defaultPageSize={20} defaultPageIndex={1} />
      </DataGrid>
    </React.Fragment>
  );
};
export default DataGridData;
