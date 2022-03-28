import React from 'react'
import header from "../../img/header.png";
export default function FeaturedProducts() {

  return (
    <div>
        <h2 className='text-center py-5'>Featured Products</h2>
        <div className= "row  px-5 animate__slow animate__animated animate__bounceInUp" >
            <div className="col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://images.squarespace-cdn.com/content/v1/588bedbb2994ca8c2ad844c3/1549331404834-MLNNUU5DBC4XY3GYMNRJ/2000px-Adidas_Logo.svg.png?format=2500w" alt="product image" />
                <p className='fs-4'>Cherry Moon Coffee Table - <span>$1859</span></p>
                <span>Learn more</span>
            </div>
            <div className="animate__bounceInUp col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://preview.thenewsmarket.com/Previews/NBAS/StillAssets/800x600/388786.JPEG" alt="product image" />
                <p className='fs-4'>Club Deep Seating Settee - <span>$1500</span></p>
                <span>Learn more</span>
            </div>
            <div  className="animate__bounceInUp col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://wp.foriowa.org/iowaladiesfootballacademy/wp-content/uploads/2014/02/nike.png" alt="product image" />
                <p className='fs-4'>Contemporary Windsor Chair - <span>$989</span></p>
                <span>Learn more</span>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203423165819&ssbinary=true" alt="product image" />
                <p className='fs-4'>Small Classic Dining Set - <span>$185</span></p>
                <span>Learn more</span>
            </div>
        </div>

        <div className="row animate__slow animate__animated animate__bounceInUp px-5 mt-5">
            <div className="col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://www.pngkit.com/png/detail/491-4916868_sponsors-college-of-new-jersey-football-logo.png" alt="product image" />
                <p className='fs-4'>Classic American Armchair - <span>$2185</span></p>
                <span>Learn more</span>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Umbro_logo_%28current%29.svg/800px-Umbro_logo_%28current%29.svg.png" alt="product image" />
                <p className='fs-4'>Contemporary Furi Writing Desk - <span>$1859</span></p>
                <span>Learn more</span>
            </div>
            <div  className="col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://logos-world.net/wp-content/uploads/2020/03/Asics-Logo-1997-2003.jpg" alt="product image" />
                <p className='fs-4'>Classic Furi Writing Desk Set - <span>$1859</span></p>
                <span>Learn more</span>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
                <img className='rounded w-100' src="https://www.macron.com/media/wysiwyg/2021_05_20_Icone_post_WA_Hero.jpg" alt="product image" />
                <p className='fs-4'>Club Deep Seating Settee - <span>$1859</span></p>
                <span>Learn more</span>
            </div>
        </div>

    </div>
  )
}
