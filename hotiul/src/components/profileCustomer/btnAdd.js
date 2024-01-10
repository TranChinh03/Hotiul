import React from "react";
import { IC_add } from "../../assets/icons";

const BtnAdd = (props) => {
  return (
    <button
      className="m-2 p-2 mr-2 flex bg-thirdColor rounded-3xl items-center"
      onClick={props.onClick}
    >
      <img src={IC_add} alt="add" />
      <p
        className=" align-middle m-2 text-white text-xl font-medium"
        src={IC_add}
      >
        {props.text}
      </p>
    </button>
  );
};

export default BtnAdd;
