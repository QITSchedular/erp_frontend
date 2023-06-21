import React, { useState } from "react";
import {
  Form,
  GroupItem,
  SimpleItem,
  ButtonItem,
  ButtonOptions,
} from "devextreme-react/form";
import "devextreme-react/text-area";

import { positions, states } from "./data.js";
import { itemsGroupSave } from "../../utils/save-data.js";

const SaveItemComponent = () => {
  const [formData, setFormData] = useState({}); // State to store the form data

  const handleSubmit = async () => {
    // Handle the form data here
    const response = await itemsGroupSave(formData);
    console.log(response);
  };

  const handleFormChange = (e) => {
    // Exclude label fields when updating the form data state
    if (e.event?.target?.type !== "label") {
      setFormData((prevData) => ({
        ...prevData,
        [e.dataField]: e.value,
      }));
    }
  };

  return (
    <>
      <h2 className={"content-block"}>All Items</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Form formData={formData} onFieldDataChanged={handleFormChange}>
            <GroupItem cssClass="first-group" colCount={4}>
              <GroupItem colSpan={3}>
                <SimpleItem
                  dataField="itmsGrpNam"
                  label={{ text: "Item Group Name" }}
                />
                <SimpleItem
                  dataField="qrMngBy"
                  label={{ text: "QR Managed By" }}
                />
                <SimpleItem dataField="locked" label={{ text: "Locked" }} />
              </GroupItem>
            </GroupItem>
            <ButtonItem horizontalAlignment="left">
              <ButtonOptions text="Save" onClick={handleSubmit} />
            </ButtonItem>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SaveItemComponent;
