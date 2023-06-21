import axios from "axios";
export const itemsGroupSave = async (formData) => {
  const addVal = await axios.post(
    "http://192.168.1.102:8091/api/ItemGroups/Save",
    formData
  );
  const respData = await addVal.json();
  console.log(respData);
};
