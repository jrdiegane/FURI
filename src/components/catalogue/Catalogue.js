import React from 'react'
import header from "../../img/header.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Catalogue() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <div>
        <header className='d-flex justify-content-center align-items-center bg-secondary py-5'>
            <h2 className='py-5 text-white fs-1'>Furniture</h2>
        </header>

        <div className="container mt-5">
        <Carousel renderButtonGroupOutside={true} responsive={responsive}   itemClass="carousel-item-padding-40-px">
            <div>
                <div >
                    <img className='w-100' src={header} alt="product image" />
                    <p className='fs-md-4'>Handcrafted living room furniture made of wood will give your room more style and harmony.</p>
                </div>
            </div>
            <div>
            <div >
                <img className='w-100' src="https://www.lequipe.fr/_medias/img-photo-jpg/uniforia-le-ballon-de-l-euro-2020-qui-se-deroulera-dans-12-villes-differentes-adidas/1500000001254920/201:219,1778:1271-828-552-75/567bf.jpg" alt="product image" />
                    <p className='fs-md-4'>Handcrafted living room furniture made of wood will give your room more style and harmony.</p>
                </div>
            </div>
            
            <div>
            <div >
                <img className='w-100' src={header} alt="product image" />
                <p className='fs-md-4'>Handcrafted living room furniture made of wood will give your room more style and harmony.</p>
            </div>
            </div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
        </Carousel>
        </div>
    </div>
  )
}


