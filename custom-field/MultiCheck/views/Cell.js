export default function MultiCheckCell({ data, field }) {
  // This is the cell in the list table.
  // Not sure what to return here.
  // For now I will return a string like: "true, false, true"
  const { defaultValue } = field.config;
  const newData = data ? JSON.parse(data) : defaultValue;
  // console.log({ newData, defaultValue, data });
  return Object.keys(newData)
    .map(label => (newData[label] ? "true" : "false"))
    .join(", ");
}
