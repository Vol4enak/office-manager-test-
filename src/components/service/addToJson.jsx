import { saveAs } from "file-saver";

export const downloadJsonFile = (jsonArray) => {
    console.log(jsonArray);
  const jsonString = JSON.stringify(jsonArray, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  saveAs(blob, "fact.json");
};
