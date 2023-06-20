import React from "react";
import { Form, GroupItem, SimpleItem, Label } from "devextreme-react/form";

import "devextreme-react/text-area";

import { employee, positions, states } from "./data.js";

const SaveItemComponent = () => {
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

  const avatarRender = () => {
    return <div className="form-avatar"></div>;
  };

  return (
    <>
      <h2 className={"content-block"}>All Items</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <Form formData={employee}>
            <GroupItem cssClass="first-group" colCount={4}>
              <GroupItem colSpan={3}>
                <SimpleItem dataField="Item Group Name" />
                <SimpleItem dataField="QR Managed By" />
                <SimpleItem dataField="Locked" />
              </GroupItem>
            </GroupItem>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SaveItemComponent;
