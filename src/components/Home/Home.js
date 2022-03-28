import React from 'react';
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import FeaturedProducts from "../featured-product/FeaturedProducts";
import Categories from "../categories/Categories";
import Materials from "../materials/Materials";
import Project from "../projects/Project";
import CatalogueDownload from "../catalogueDownload/CatalogueDownload";
import Services from '../services/Services';
import Innovations from '../innovations/Innovations';
import News from '../news/News';
import HomeContact from '../contact/HomeContact';
import Footer from '../footer/Footer';
{/*import "animate.css";*/}
{/*import Project from '../projects/Project';*/}

export default function Home() {
  return (
    <div>
        <Header />
         <FeaturedProducts />
        <Categories />
        <Materials /> 
        <Project />
        <CatalogueDownload />
        <Services />
        <Innovations />
        <News />
        <HomeContact />
        <Footer /> 
    </div>
  )
}
