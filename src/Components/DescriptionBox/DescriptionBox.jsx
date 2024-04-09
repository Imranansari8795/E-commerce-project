import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>

        <div className="descriptionbox-description">
            <p>
            An e-commerce website is an online platform that allows businesses to sell products or services over the internet. It enables customers to browse through a catalog of products, add items to a virtual shopping cart, and complete transactions securely using various payment methods. E-commerce websites typically include features such as product listings, search functionality, shopping cart management, payment processing, and order tracking. They provide a convenient and accessible way for businesses to reach a global audience and for customers to shop from anywhere at any time.
            </p>
            <p>
            E-commerce websites typically display products or services in an organized and visually appealing manner. This includes showcasing product images, descriptions, prices, and any available variations (such as size or color options).
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox