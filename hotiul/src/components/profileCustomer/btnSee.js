import React from "react";
import { IC_add, IC_eye } from "../../assets/icons";

const BtnSee = (props) => {
  return (
    <div className=" m-2 p-2 mr-2 flex bg-secondColor rounded-3xl items-center">
      <img src={IC_add} alt="add" />
      <p
        className=" align-middle m-2 text-white text-xl font-medium"
        src={IC_eye}
      >
        {props.text}
      </p>
    </div>
  );
};

export default BtnSee;
