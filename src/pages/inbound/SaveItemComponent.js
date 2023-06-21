import React, { useState } from "react";
import {
  Form,
  GroupItem,
  SimpleItem,
  ButtonItem,
  ButtonOptions,
} from "devextreme-react/form";
// Updated import statement
import "devextreme-react/text-area";

import { positions, states } from "./data.js";

const SaveItemComponent = () => {
  const [formData, setFormData] = useState({}); // State to store the form data

  const birthDateOptions = { width: "100%" };
  const positionOptions = {
    items: positions,
    value: "",
  };
  const stateOptions = {
    items: states,
  };
  const phoneOptions = { mask: "+1 (000) 000-0000" };
  const notesOptions = { height: 140 };

  const handleSubmit = () => {
    // Handle the form data here
    console.log(formData);
  };

  const handleFormChange = (e) => {
    // Update the form data state on form field change
    setFormData((prevData) => ({
      ...prevData,
      [e.dataField]: e.value,
    }));
  };

  return (
    <>
      <h2 className={"content-block"}>All Items</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Form formData={formData} onFieldDataChanged={handleFormChange}>
            <GroupItem cssClass="first-group" colCount={4}>
              <GroupItem colSpan={3}>
                <SimpleItem dataField="Item Group Name" />
                <SimpleItem dataField="QR Managed By" />
                <SimpleItem dataField="Locked" />
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
