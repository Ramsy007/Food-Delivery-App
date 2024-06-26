import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,setShowIndex,  dummy }) => {
   const [showItems,setshowItems]=useState(false);
  const handleClick = () => {
    setShowIndex();
     setshowItems(!showItems);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
          {/**accordian body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />} {/** if my itemlist is true then only expend  */}
      </div>
    </div>
  );
};

export default RestaurantCategory;
