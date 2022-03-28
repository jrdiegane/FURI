import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import header from  "../../img/header.png";
import "./categories.css";

export default function Categories() {

    const [scrolled , setScrolled] =useState(false);
    const [animateThis , setAnimateThis] = useState("");
    useEffect(() => {

            
          window.onscroll = ()=>{
            let scrolledDiv = window.document.querySelector(".scrolledDiv")
            let top = window.scrollY;
            let offset = scrolledDiv.offsetTop -400;

            if(top>= offset ){
                handleScroll()
            }
        }
    },[]);

    // const scrolled = ()=> console.log("scrolled ")
    const handleScroll = () => {
        setScrolled(true)
        setAnimateThis("row d-flex  px-5 justify-content-center animate__slow animate__animated animate__bounceInUp");
      };
     
  return (
    <div className='scrolledDiv container text-center' >
        <div className={scrolled? animateThis : "d-none"} >
        {console.log(scrolled)}
            <h2 className="text-center py-5 text-uppercase" >Categories </h2>
            <div className="col-sm-6 col-md-4 ">
                <div className="bg-content d-flex align-items-center justify-content-center img1 p-3">
                    <h3 className='text-white fs-2'>Bedroom Furniture Bedroom</h3>    
                </div>
                <p className='fs-md-4'>Handcrafted living room furniture made of wood will give your room more style and harmony.</p>
            </div>
            <div className="col-sm-6 col-md-4 ">
                <div className=" bg-content d-flex align-items-center justify-content-center img2 p-3">
                    <h3 className='text-white fs-2'>Living Room Furniture</h3>    
                </div>
                <p className='fs-md-4'>We offer custom-made wooden bedroom furniture which adds more tranquility and comfort.</p>
            </div>
            <div className="col-sm-6 col-md-4 ">
                <div className="bg-content d-flex align-items-center justify-content-center img3 p-3">
                    <h3 className='text-white fs-2'>Home Office Furniture</h3>    
                </div>
                <p className='fs-md-4'>Well-organized home office workplace designed especially for you will make you more productive.</p>
            </div>
        </div>
        <button className="btn  btn-outline-secondary my-5">All categories</button>
    </div>
  )
}
