import React from "react";
import App from "./App";
import one from "./assets/images/1.jpg"
import two from "./assets/images/2.jpg"
import three from "./assets/images/3.jpg"

   let slides = [{
           text: "This is a slide starting from one",
           title:"One out of three",
           page:1,
           pic:one
    },
{
text: "This is a slide starting from two",
           title:"tow out of three",
           page:2,
           pic:two
},
{
    text: "This is a slide starting from three",
    title:"three out of three",
    page:3,
    pic:three
}];
function Slide(){
return(
 <App Name="This is A slide" />
) 
}
    
 export default slides;