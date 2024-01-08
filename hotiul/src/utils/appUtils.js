// prefix: "B" | "C" | "F" | "RF" | "R" | "RT" | "S" | "SV"

const createID = ({ prefix }) => {
  return `${prefix}${Math.floor(Math.random() * 100000)}`;
};
const formatCurrency = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const removeCommas = (inputString) => {
  return inputString.replace(/,/g, '');
}
function convertStringToDate(dateString) {
  const [day, month, year] = dateString.split('/');
  const convertedDate = new Date(year, month - 1, day);
  return convertedDate;
}

module.exports = { createID, formatCurrency, removeCommas, convertStringToDate };
