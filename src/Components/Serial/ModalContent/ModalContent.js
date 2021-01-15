import React from "react";
import { Input, Checkbox } from "antd";

function ModalContent({ show }) {
  const description = show.show.summary.replace(/<[^>]*>/g, "");

  return <div>{description}</div>;
}

export default ModalContent;
