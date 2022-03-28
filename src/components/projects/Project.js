import React from 'react'
import header from "../../img/header.png";
import "./project.css"

export default function Project() {
  return (
    <div className="text-center mt-5 pt-3">
            <h2 className='my-5 '>Out Projects</h2>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfw6_vue5Bii6n2gyzTLl4hxt7w4I-yH_YgA&usqp=CAU" class="img mb-3 w-75" alt="..." />
                        <h3>Creating Furniture for google</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                    </div>
                    <div class="carousel-item " data-bs-interval="10000">
                        <img src="http://www.w3bai.com/css/img_forest.jpg" class="img mb-3 w-75" alt="..." />
                        <h4>Evian</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit.</p>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

        </div>
        <button className="btn  btn-outline-secondary my-5">All projects</button>
    </div>

  )
}
