import React from 'react'
import header from "../../img/header.png";
import "./teimoignages.css"
export default function Teimoignages() {
  return (
    <div>
        {/*  poeple say */}
        <div className="container my-5">
            <div className="row text-center bg-light">
                <div className="col-md-6 ">
                    <img src=" https://image.shutterstock.com/z/stock-photo-woman-traveler-with-backpack-holding-hat-and-looking-at-amazing-mountains-and-forest-wanderlust-463417910.jpg" alt="image" className='w-100 p-img '/>
                </div>
                <div className="col-md-6 ">
                    <div id="carouselExampleIndicators" className="carousel slide w-100 h-100 pt-5" data-bs-ride="carousel">
                        
                        <div class="carousel-inner">
                            
                            <div class="carousel-item active">
                                <h3 className='fw-bold '>What People Say</h3>
                                <hr className='w-25 m-auto'/>
                                <p className='text-secondary'>"Thank you very much for a great experience working with your furniture manufacturing company! We were extremely happy to find a retailer who really shares our interests and values. The furniture is excellent and of the highest quality!"</p>
                                <p>Kate Holmes</p>
                            </div>

                            <div class="carousel-item">
                            <h3 className='fw-bold'>What People Say</h3>
                                <hr className='w-25 m-auto'/>
                                <p className='text-secondary'>"We have been looking for a dresser which will fit our bedroom style for nearly 2 months. And finally, we have found it here, at Furi. This Contemporary Craftsman 3-Drawer Dresser perfectly meets our needs and completes the look of our room. Thank you!"</p>
                                <p>Jane Stone</p>
                            </div>

                            <div class="carousel-item">
                            <h3 className='fw-bold'>What People Say</h3>
                                <hr className='w-25 m-auto'/>
                                <p className='text-secondary'>"I was highly surprised with such a smooth ordering process, unlike anywhere else. The delivery of our Classic Shaker Dining Table was on time. Everybody is satisfied with the price and quality of our new table. Thanks a lot!"</p>
                                <p>Ann Robertson</p>
                            </div>

                        </div>
                        <div class="carousel-indicators position-static">
                            <button  type="button" className='btn active' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" className='btn' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" className='btn' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}
