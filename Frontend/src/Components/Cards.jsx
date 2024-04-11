import React from "react";

const Cards = ({ items }) => {
  console.log(items);
  return (
    <div className="p-2 md:p-3">
      <div className="card w-90 bg-base-100 shadow-md my-10 mt-10 p-6 hover:scale-105 duration-200">
       <div>
       <figure>
          <img src={items.image} alt="" className="h-60 w-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {items.name}
            <div className="badge badge-secondary">{items.category}</div>
          </h2>
          <p>{items.title}</p>
          <div className="card-actions  flex justify-between  ">
            <div className="badge  h-8 cursor-pointer ">Rs.{items.price}</div>
            <div className="badge badge-outline h-8 hover:bg-pink-600 hover:text-white ">
              Buy now
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Cards;
