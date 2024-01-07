// prefix: "B" | "C" | "F" | "RF" | "R" | "RT" | "S" | "SV"

const createID = ({ prefix }) => {
  return `${prefix}${Math.floor(Math.random() * 100000)}`;
};

module.exports = { createID };
