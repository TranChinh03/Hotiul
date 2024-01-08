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
function areDatesEqualIgnoringTime(date1, date2) {
  const strippedDate1 = new Date(date1);
  const strippedDate2 = new Date(date2);

  strippedDate1.setHours(0, 0, 0, 0);
  strippedDate2.setHours(0, 0, 0, 0);

  return strippedDate1.getTime() === strippedDate2.getTime();
}
function formatDateToDDMMYYYY(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Lưu ý rằng tháng bắt đầu từ 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

module.exports = { createID, formatCurrency, removeCommas, convertStringToDate, areDatesEqualIgnoringTime, formatDateToDDMMYYYY };
