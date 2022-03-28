import React from 'react'
import header from "../../img/header.png";
import "./news.css"

export default function News() {
  return (
    <div className='container my-5'>
        <h3 className='text-center py-3'>Latest News</h3>
        <div className="row">
            <div className="col-md-4">
                <img src="https://www.gettyimages.fr/gi-resources/images/500px/983703508.jpg" className="w-100" alt="" />
                <span>Post by Furi Team | September 22, 2018</span>
                <h5 className='py-2'>Outdoor Furniture Items for this Summer</h5>
                <p>Explore your local thrift store and you just might find the unexpected; a polka dotted bowl, a fluffy plant, a faux typewriter or camera, some books...</p>
                <span>Read more</span>
            </div>
            <div className="col-md-4">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" className="w-100" alt="" />
                <span>Post by Furi Team | September 18, 2018</span>
                <h5 className='py-2'>New Furniture Collection Release 2018/2019</h5>
                <p>Explore this new collection which is introduced in the new finish, handmade of the finest wood that will add a touch of nature and at the same time luxury to your...</p>
                <span>Read more</span>
            </div>
            <div className="col-md-4">
                <img src="https://c8.alamy.com/compfr/bb4jjt/senegal-dakar-moderne-de-skyline-bb4jjt.jpg" className="w-100" alt="" />
                <span>Post by Furi Team | September 11, 2018</span>
                <h5 className='py-2'>What's New? Leather Hickory Chair Sofas</h5>
                <p>We are happy to offer our brand new product, Hickory chair sofa. It differs from other sofas by the material. We have used leather which looks more elegant, has a soft texture and...</p>
                <span>Read more</span>
            </div>
        </div>
        <div className="text-center mt-5">
            <button className="btn  btn-outline-secondary">All news</button>
        </div>
    </div>
  )
}
