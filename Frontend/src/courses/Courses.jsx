import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Course from "../Components/Course";
import list from "../../public/list.json"

function Courses() {
    
  return (
   <>
     <div>
      <Navbar />
    <div className="min-h-screen">
    <Course/>
    </div>
      <Footer />
    </div>
   </>
  );
}

export default Courses;
