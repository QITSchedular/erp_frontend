import React, { useEffect, useState } from "react";
import "./itemsmaster.scss";
import {
  Button,
  DataGrid,
  Form,
  Popover,
  Popup,
  ScrollView,
} from "devextreme-react";
import {
  GroupItem,
  Item,
  SimpleItem,
  Tab,
  TabPanelOptions,
  TabbedItem,
} from "devextreme-react/form";
import { employee } from "./data";
import { Editing, Scrolling } from "devextreme-react/data-grid";
const columns = ["SrNo", "Whscode", "InStock", "InStock"];

const ItemMasterComponent = () => {
  const [employeeData, setEmployee] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    setPopupVisible(true);
  };

  const hideInfo = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    setEmployee(employee);
    console.log(employeeData);
  }, []);
  return (
    <>
      <div className="content-block" id="content-block">
        <span>Items master</span>
      </div>
      <div className="content-block" id="action-block">
        <Button icon="refresh" type="success" text="Refresh" /> &nbsp;
        <Button
          icon="add"
          type="info"
          text="Add New"
          onClick={handleShowPopup}
        />
      </div>

      {/* dataGrid */}
      <Popup
        maxWidth={720}
        height={500}
        visible={popupVisible}
        onHiding={hideInfo}
        dragEnabled={false}
        hideOnOutsideClick={true}
        showTitle={true}
        title="Information"
        container=".dx-viewport"
      >
        <ScrollView width="100%" height="100%">
          <div className={"dx-card content-block responsive-paddings"}>
            <Form colCount={2} id="form">
              <GroupItem>
                <SimpleItem dataField="Item Code" />
                <SimpleItem dataField="Item Name" />
                <Item dataField="Item Group" editorType="dxSelectBox" />
                <Item dataField="Item Sub Group" editorType="dxSelectBox" />
                <Item dataField="UOM" editorType="dxSelectBox" />
              </GroupItem>
              <GroupItem>
                <Item dataField="Item Managed By" editorType="dxSelectBox" />
                <Item dataField="Qr Managed By" editorType="dxSelectBox" />
                <Item
                  dataField="Item Category"
                  editorType="dxRadioGroup"
                  editorOptions={{
                    items: ["Goods", "Service"],
                    layout: "horizontal",
                  }}
                />
                <SimpleItem dataField="On Hand" />
              </GroupItem>
            </Form>
            <Form style={{ marginTop: "2rem" }}>
              <GroupItem caption="General Information">
                <TabbedItem>
                  <TabPanelOptions deferRendering={false} />
                  <Tab title="General">
                    <DataGrid
                      keyExpr="SrNo"
                      dataSource={employeeData}
                      showBorders={true}
                      defaultColumns={columns}
                      columnAutoWidth={true}
                      columnHidingEnabled={false}
                    />
                  </Tab>
                  <Tab title="Bin Allocations">
                    <DataGrid
                      keyExpr="SrNo"
                      dataSource={employeeData}
                      showBorders={true}
                      defaultColumns={columns}
                      columnAutoWidth={true}
                      columnHidingEnabled={false}
                    ></DataGrid>
                  </Tab>
                  <Tab title="Attachments">
                    <DataGrid
                      keyExpr="SrNo"
                      dataSource={employeeData}
                      showBorders={true}
                      defaultColumns={columns}
                      columnAutoWidth={true}
                      columnHidingEnabled={false}
                    />
                  </Tab>
                </TabbedItem>
              </GroupItem>
            </Form>
          </div>
        </ScrollView>
      </Popup>
    </>
  );
};

export default ItemMasterComponent;
