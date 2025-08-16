import React from "react";

export const Welcomemsg = ({ item }) => {
  return (
    <>
      <div>{item.length === 0 && "no item to Display"}</div>;
    </>
  );
};
export default Welcomemsg;
