import React from "react";
import { IC_add } from "../../assets/icons";

const BtnAdd = (props) => {
  return (
    <div className="m-2 p-2 mr-2 flex bg-thirdColor rounded-3xl items-center">
      <img src={IC_add} alt="add" />
      <p
        className=" align-middle m-2 text-white text-xl font-medium"
        src={IC_add}
      >
        {props.text}
      </p>
    </div>
  );
};

export default BtnAdd;
