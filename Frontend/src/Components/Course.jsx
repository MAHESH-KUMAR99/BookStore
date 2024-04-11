import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto md:px-20 px-4 ">
        <div className="mt-28 text-center">
          <h1 className="text-2xl font-xl md:text-4xl">
            we're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptates aliquam nostrum molestiae earum minus excepturi voluptas animi placeat quae maiores distinctio qui natus, totam accusamus dolore pariatur impedit, ratione autem? Autem, voluptatibus illo facilis minima quos quod adipisci numquam aut suscipit eveniet esse voluptatum, unde temporibus voluptatem repellat a.</p>
          <Link to={'/'}><button className="bg-pink-500 px-6 py-3 mt-6 rounded-lg hover:bg-pink-700 text-white duration-300">Back</button></Link>
        </div>
        <div className="mt-12 grid  grid-cols-1 md:grid-cols-4">
          {
            list.map((items)=>(
              <Cards key={items.id} items={items}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
