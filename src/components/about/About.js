import React from 'react'
import header from "../../img/header.png";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineInstagram } from "react-icons/ai";
import {BsYoutube}  from "react-icons/bs";
import News from '../news/News';
import "./about.css";
import Teimoignages from '../teimoignages/Teimoignages';
import Footer from '../footer/Footer';
export default function About() {
  return (
    <div >
        <header className='d-flex justify-content-center align-items-center bg-secondary py-5'>
            <h2 className='py-5'>About us</h2>
        </header>
        <div className="container pt-5">
          <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                  <div>
                  <h2 className='py-3'>Shortly About Us</h2>
                  <p>We are a leading furniture manufacturer known worldwide for the highest quality and exceptional customer service. We value our dedicated employees committed to design and build the best-in-class furniture for wholesale dealers at reasonable prices. </p>
                  </div>
              </div>
              <div className="col-md-6">
                <img className='w-100' src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" alt="" />  
              </div>  
          </div>  
        </div>
        <div className="container py-5">
          <h3 className='text-center py-5'>Partners</h3>
          <div className="row gy-4">
                <div className="col-md-3">
                  <img className='w-100 rounded' src=" https://media.gettyimages.com/photos/dakar-city-center-overview-at-sunset-picture-id625222994?s=612x612" alt ="" />  
                </div>
                <div className="col-md-3">
                  <img className='w-100 rounded' src=" https://media.istockphoto.com/photos/aerial-view-of-dakar-land-and-water-picture-id471986285?k=20&m=471986285&s=612x612&w=0&h=jQ-Du16b5JfFvbN5yMlK2mSDIv_V2Mi2lloDLP9hv4E=" alt="" />  
                </div>
                <div className="col-md-3">
                  <img className='w-100 rounded' src=" https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=" alt="" />  
                </div>
                <div className="col-md-3">
                  <img className='w-100 rounded' src="https://media.istockphoto.com/photos/overview-of-dakar-from-the-observation-deck-picture-id499051816?k=20&m=499051816&s=612x612&w=0&h=Ackcdi15FgkBug47nYNeaoGZBiQuPAX0l2iZksMBHUc=" alt="" />  
                </div>
                <div className="col-md-3">
                  <img className='w-100 rounded' src=" https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt=""/>  
                </div>
                <div className="col-md-3">
                  <img className='w-100 rounded' src="https://www.gettyimages.fr/gi-resources/images/500px/983794168.jpg" alt=""  />  
                </div>
                <div className="col-md-3">
                  <img className='w-100' src="https://images-photo.com/img/cms/Images-Photo-France-Banner-2.jpg" alt="" />  
                </div>
                <div className="col-md-3 ">
                  <img className='w-100 rounded' src="https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg" alt=""/>  
                </div>
          </div>  
        </div>
        <News />  
        <Teimoignages />

        <div className="container py-5">
           <div className="text-center">
              <h3 className='fs-1'>FAQ</h3>  
              <p>Look through the answers to the most popular questions from our customers. Didn’t find what you need? Just send us a request and we will get in touch with you shortly.</p>
            </div>
            <div className="row py-5">

                <div className="col-md-4">
                    <h3>Do you use family-friendly fabrics?</h3>
                    <p>Yes! We use only family-friendly fabrics. Additionally, these fabrics have a function of repelling of any spills and stains which may occur during the daily usage.</p>
                </div>
                <div className="col-md-4">
                    <h3>When can I expect my order?</h3>
                    <p>Any furniture products available for purchase can be delivered after your request. Special orders will arrive at your location in nearly 6 - 8 weeks after the moment you pay for your order. You can also track your order status.</p>
                </div>
                <div className="col-md-4">
                    <h3>Can I order an individual design of furniture item?</h3>
                    <p>Yes. We also provide custom furniture manufacturing service. Contact us to discuss what item you need, your ideas, design, fabric, and measurements. </p>
                </div>

                <div className="col-md-4">
                    <h3>What wood species do you use?</h3>
                    <p>We manufacture all furniture products from natural wood. We currently use such wood types like cherry, pine tree, oak, maple, and other hardwoods.</p>
                </div>
                <div className="col-md-4">
                    <h3>Can furniture be dissembled to move?</h3>
                    <p>It depends on the type of furniture. Some products can be disassembled to facilitate transportation and movement; others cannot. If you have any questions, feel free to get in touch with us and specify all the details.</p>
                </div>
                <div className="col-md-4">
                    <h3>Do you offer any guarantee?</h3>
                    <p>Yes. We have more than 25 years of experience in the industry and proudly provide our clients with a 1-year guarantee against manufacturing defects on all our furniture items. </p>
                </div>

            </div>

            {/* map */}
            <div className="row">
                <div className="col-md-8 ">
                  <div class="mapouter">
                    <div class="gmap_canvas">
                      <iframe width="661" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=dakar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                      </iframe>
                      <a href="https://123movies-to.org"></a><br />
                      <a href="https://www.embedgooglemap.net">embed google maps in wordpress</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                    <h3>Company Logo</h3>
                    <h5>Adress</h5>
                    <p>Head office - 171 Tavistock Road, London</p>
                    <h3>Phone</h3>
                    <p>+1 (234) 567 89 00</p>
                    <h3>E-mail</h3>
                    <p>furi@a.weblium.com</p>
                    <span ><FaFacebookF className='fs-2 border border-secondary rounded-circle p-1  mx-1' /></span>
                    <span><AiOutlineInstagram  className='fs-2 border border-secondary rounded-circle p-1  mx-1' /></span>
                    <span><BsYoutube  className='fs-2 border border-secondary rounded-circle p-1  mx-1' /></span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
