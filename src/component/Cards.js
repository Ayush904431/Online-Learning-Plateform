import React from 'react'
import Card from './Card';
import { useState } from "react";
 function Cards(props) {
  let courses = props.courses;
  let category = props.category;
    const [likedCourse, setLikedCourses] = useState([]);
    //returnes you a list of all courses received from the api response and insert an array
    function getCourses(){
      if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach(array => {
          array.forEach(courseData => {
              allCourses.push(courseData);
          })
      })
      return allCourses;
      }
      else{
        //specific category array pass
        return courses[category];//array element so it use squire brackets 
      }

    }
   return ( 
     <div className="flex flex-wrap justify-center gap-4 mb-4">
         {
         getCourses().map( (course) =>(
            <Card key={course.id} 
            course={course} 
            likedCourse={likedCourse}
            setLikedCourses={setLikedCourses}
            />
         ))
        }
     </div>
   )
 }
 
 export default Cards