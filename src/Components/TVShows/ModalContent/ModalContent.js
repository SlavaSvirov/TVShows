import React from "react";

const ModalContent = ({ item }) => {
  const description = item.show.summary.replace(/<[^>]*>/g, "");
  const year = new Date(item.show.premiered);
  console.log(year);
  return (
    <div>
      year: {year.toLocaleDateString("ru")} {description}
    </div>
  );
};

export default ModalContent;
