import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Segmented } from "antd";
import {
  MinusCircleOutlined,
  AlignRightOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import { setType } from "../../store/slices/typeSlice";

const options = [
  { label: "Sum", value: "sum", icon: <PlusCircleOutlined /> },
  { label: "Substract", value: "substract", icon: <MinusCircleOutlined /> },
  { label: "List", value: "list", icon: <AlignRightOutlined /> },
];

export const TypeSelector = () => {
  const type = useSelector((state) => state.type.value);
  const dispatch = useDispatch();

  const handleCahnge = (type) => {
    dispatch(setType(type));
  };

  return (
    <Segmented value={type} options={options} block onChange={handleCahnge} />
  );
};
