import React from "react";
import { StyledList } from "./styles";

interface Props {
  direction?: "row" | "col";
  children: React.ReactNode;
}

const ListComponent = ({ direction = "col", children }: Props) => {
  return <StyledList direction={direction}>{children}</StyledList>;
};

export default ListComponent;
