import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import slides from "./slides";

function App(Name){
  const [index,setindex] = useState(0);
 

useEffect( ()=>{
  const interval = setInterval(()=>
{index <= 0 ? setindex(slides.length -1):setindex (()=>index -1);},3000);

  return () => clearInterval(interval);
}

,[index]

);

 function next(){
   index >=  slides.length-1 ? setindex(0): setindex (()=>index +1);}

   function prev(){
     index <= 0 ? setindex(slides.length -1):setindex (()=>index -1);}
return(



  <div  className="text-2xl text-center  w-[100vw] h-[100vh] m-auto p-5">
 <span className="bg-green-800 text-white rounded-[5px] p-5 text-3xl text-center w-[50%]">{slides[index].title}</span>


 <div className="w-[100%] h-[70%] bg-[indigo]"> 
    <img src={slides[index].pic}  className=" w-full h-full object-cover" />
  
 </div>


    <p className="text-5xl font-mono bg-yellow-300 text-black">
    {slides[index].text}
    <p> page number {slides[index].page}</p>
    </p>
    <div className="flex flex-row w-full justify-center gap-10  p-5 h-fit">
      <button className="bg-blue-700 text-white px-5  py-2" onClick={prev}>Prev</button> 
       
       <button className="bg-red-700 text-white px-5  py-2" onClick={()=>setindex(0)}>Home</button> 
      <button className="bg-green-700 text-white px-5 py-2" onClick={next}> Next</button>
    </div>

  </div>
)




}
export default App;