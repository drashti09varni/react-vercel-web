import React, { useEffect, useState } from "react";
import Back from "../assets/Back.svg"
import Upi from "../assets/upi.svg"
import Secure from "../assets/secure.webp"
import Card from "../assets/card.webp"
import Vip from "../assets/vip-card.webp"
import CCart from "../assets/cart.webp"
import Data from '../Data'
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useMemo } from "react";


const OrderSummary = () => {
  const [data, setdata] = useState("")

  useEffect(() => {
    const alldata = [...Data]

    setdata(alldata[localStorage.id])
  }, []);


  const { rating, reviews } = useMemo(() => {
    const randomRating = (Math.random() * (5 - 4) + 4).toFixed(1); // 3.5 - 5.0
    const randomReviews = Math.floor(Math.random() * (500 - 100) + 100); // 100 - 500
    return {
      rating: parseFloat(randomRating),
      reviews: randomReviews
    };
  }, []);


  return (
    <div className="max-w-md mx-auto bg-white min-h-screen border shadow-sm relative">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <Link to="/product-details">
            <img
              src={Back}
              alt="Back"
              className="w-5 h-5"
            />
          </Link>
          <h2 className="font-semibold text-gray-800 text-sm">
            Order Summary
          </h2>
        </div>
      </header>

      {/* Step Tracker */}
      <div className="flex items-center justify-around p-4 text-sm border-b">
        <div className="flex flex-col items-center text-gray-400">
          <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center text-xs">
            1
          </div>
          <span>Address</span>
        </div>
        <div className="flex-1 border-t border-gray-300 mx-2"></div>
        <div className="flex flex-col items-center text-blue-600 font-semibold">
          <div className="w-6 h-6 border-2 border-blue-600 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
            2
          </div>
          <span>Order Summary</span>
        </div>
        <div className="flex-1 border-t border-gray-300 mx-2"></div>
        <div className="flex flex-col items-center text-gray-400">
          <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center text-xs">
            3
          </div>
          <span>Payment</span>
        </div>
      </div>

      {/* Delivery Address */}
      <section className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-800">Deliver to:</h3>
            <p className="font-medium text-gray-700">{localStorage.fname}</p>
            <p className="text-sm text-gray-600">
              {localStorage.address}
            </p>
            <p className="text-sm text-gray-600 mt-1">{localStorage.mobile}</p>
          </div>
          <Link to="/address" className="text-blue-600 font-semibold text-sm">Change</Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="p-4 border-b">
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded">
            BESTSELLER
          </span>
          <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
            Hot Deal
          </span>
        </div> 
        <div className="flex items-start space-x-3 mt-5">
     <div className="flex flex-col items-center justify-center text-center">
  {data && (
    <>
      <img
        src={data.image[0]}
        alt="Product"
        className="w-20 h-20 object-cover rounded-md"
      />

      {/* <div className="mt-2 text-[14px] font-medium text-gray-700 border border-gray-600 px-2 py-1" >
        Qty: 1
      </div> */}


      <div className="inline-flex items-center bg-gray-100 border border-gray-300 
                rounded px-1 py-1 cursor-pointer mt-2">

  <span className="text-gray-800 text-[12px] font-medium mr-2" style={{ fontFamily: "InterRegularCustom" }}>
    Qty: 1
  </span>

  {/* Down Arrow */}
  <svg
    className="w-4 h-4 text-gray-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>

</div>



    </>
  )}
</div>
          <div className="flex-1">


            <h4 className="text-sm font-medium text-gray-800 leading-snug 
               w-[250px] 
               overflow-hidden 
               whitespace-nowrap 
               text-ellipsis">
              {data.title}
            </h4>

            <div className="flex items-center gap-2 text-sm my-2">

              {/* Stars */}
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= Math.floor(rating) ? (
                    <FaStar key={star} className="text-green-600 text-base" />
                  ) : (
                    <FaRegStar key={star} className="text-gray-300 text-base" />
                  )
                )}
              </div>

              {/* Rating Number */}
              <span className="text-green-700 font-medium">
                {rating}
              </span>

              {/* Review Count */}
              <span className="text-gray-500">
                · ({reviews})
              </span>

            </div>

            {/* <p className="text-xs text-gray-500 mt-0.5">Multicolor</p> */}

            <div className="flex items-center gap-2 mt-1" style={{ fontFamily: "InterRegularCustom" }}>
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path></svg>  <span className="text-green-600 font-semibold flex" >
                {(((data.cancelprice - data.price) / data.cancelprice) * 100).toFixed(0)}%
              </span>
              <span className="text-gray-400 line-through ">₹{data.cancelprice}</span>
              <span className="text-gray-800 font-semibold ">₹{data.price}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 text-sm">

      <span className="text-gray-700" style={{fontSize:'12px'}}>
        Or Pay ₹170 +
      </span>

  <span className="flex items-center ml-1 
                   text-gray-900  
                    py-0.5 
                   rounded" style={{fontSize:'12px'}}>

    <img src="https://rukminim2.flixcart.com/www/24/24/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png" style={{width:'12px'}} />   &nbsp;   10
  </span>

</div>

            {/* <div className="flex items-center mt-2">
              <p className="text-sm text-green-600 ml-4 font-bold">Delivery by Free</p>
            </div>

            <div className="flex gap-2 mt-1 text-xs text-green-700">
              <span>1 coupon applied</span>•<span>1 offer available</span>
            </div> */}
          </div>
       
        </div>
           <div className="inline-flex items-center 
                px-3 pt-2 
                rounded 
                text-sm">

  <img 
    src="https://rukminim2.flixcart.com/www/42/42/promos/08/02/2024/63b2986a-2e31-4812-ae8a-cc676b233161.png?q=10"
    alt="Express"
    className="w-5 h-5 mr-2"
  />

  <span className="italic font-semibold text-gray-800 mr-1">
    EXPRESS
  </span>

  <span className="text-gray-700">
    Delivery in 2 days, Mon
  </span>

</div>
      </section>

      {/* Cancellation Policy */}
      <div className="flex items-center p-4 border-b text-sm text-gray-600">
        <img
          src={CCart}
          alt="Cancel"
          className="h-8 mr-2"
        />
        <p>Cancellation is allowed up to 48 hours after placing the order.</p>
      </div>

      {/* Invoice */}
      <div className="flex justify-between items-center p-4 border-b">
        <p className="text-gray-700 font-medium">Invoice</p>
        <button className="text-blue-600 font-semibold text-sm">
          Add Email
        </button>
      </div>

      {/* VIP Membership Banner */}
     <div className="bg-[#f5f1df] border border-yellow-400 
                rounded-xl p-3 m-4">

  {/* Top Row */}
  <div className="flex justify-between items-start">

    <div className="flex gap-3 flex-1">

      <img
        src={Vip}
        alt="VIP"
        className="w-9 h-9 mt-1"
      />

      <p className="text-sm font-semibold text-gray-900 leading-snug">
        Get Benefit Worth of ₹10000 Per Year
      </p>

    </div>

    <button className="bg-yellow-400 hover:bg-yellow-500 
                       text-gray-900 font-semibold 
                       px-4 py-2 rounded-lg text-sm 
                       whitespace-nowrap transition active:scale-95">
      Get VIP Member
    </button>

  </div>

  {/* Bottom Full Width Content */}
  <div className="mt-3 ml-12" style={{ fontFamily: "InterRegularCustom" }}>

    <p className="text-xs text-gray-700 leading-relaxed">
      For Exclusive Discount up to 80% on All products for 12 Months.
      Limited Time Offer | Become VIP Member
    </p>

    <p className="mt-3 text-xs">
      <span className="font-bold text-gray-900 text-base">₹199</span>
      <span className="text-gray-800"> For 12 Months</span>
    </p>

  </div>

</div>

      {/* Direct UPI Payment Section */}  
      <section className="px-4 pb-4 border-b">
        <p className="text-gray-700 font-medium mb-2">Direct UPI Payment</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-600 w-2/3">
            Support transformative social work in India
          </p>
          <img
            src={Upi}
            alt="UPI"
            className="h-8 object-cover rounded"
          />
        </div>

        <div className="flex gap-3 mt-3">
          {["₹10", "₹20", "₹50", "₹100"].map((amt) => (
            <button
              key={amt}
              className="px-4 py-1.5 text-sm border rounded-full text-gray-700 hover:bg-gray-100"
            >
              {amt}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Note: GST and No cost EMI will not be applicable
        </p>

        <div className="mt-3 bg-green-50 text-green-700 text-sm py-2 px-3 rounded flex items-center">
          <img
            src={Card}
            alt="Next"
            className="h-8 mr-2"
          />
          Continue to the next page for Bank Offers.
        </div>
      </section>

      {/* Price Details Section */}
      {/* <section className="p-4 border-b">
        <p className="font-semibold text-gray-800 mb-3">Price Details</p>
        <div className="text-sm text-gray-700 space-y-1">
          <div className="flex justify-between">
            <span>Price (1 item)</span>
            <span>₹{data.cancelprice}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">-₹{data.cancelprice - data.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600 font-medium">FREE Delivery</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total Amount</span>
            <span>₹{data.price}</span>
          </div>
          <p className="text-green-600 text-xs mt-1">
            You will save ₹{data.cancelprice - data.price} on this order
          </p>
        </div>
        <div className="flex items-center text-xs text-gray-500 mb-24 border-y border-slate-200 py-4 mt-2">
          <img
            src={Secure}
            alt="Secure"
            className="h-8 mr-1"
          />
          <span>
            Safe and secure payments. Easy returns. 100% Authentic products.
          </span>
        </div>
      </section> */}




<section className="bg-gray-100 p-4 rounded-2xl" style={{ fontFamily: "InterRegularCustom" }} >

  <div className="bg-white rounded-xl p-4 shadow-sm">

    {/* Heading */}
    <p className="font-semibold text-gray-800 mb-4 text-sm">
      Price Details
    </p>

    <div className="text-sm text-gray-700 space-y-3">

      {/* MRP */}
      <div className="flex justify-between border-b border-dashed pb-2">
        <span className="text-gray-600">MRP</span>
        <span className="text-gray-800">₹{data.cancelprice}</span>
      </div>

      {/* Fees */}
      <div className="flex justify-between border-b border-dashed pb-2">
        <span className="flex items-center gap-1 text-gray-600">
          Fees
          <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
        <span>₹7</span>
      </div>

      {/* Discount */}
      <div className="flex justify-between border-b border-dashed pb-2">
        <span className="flex items-center gap-1 text-gray-600">
          Discounts
          <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
        <span className="text-green-600 font-medium">
          - ₹{data.cancelprice - data.price}
        </span>
      </div>

      {/* Total */}
      <div className="flex justify-between pt-2 font-semibold text-gray-800">
        <span>Total Amount</span>
        <span>₹{data.price}</span>
      </div>

      {/* Savings Badge */}
      <div className="bg-green-100 text-green-700 text-sm 
                      rounded-lg px-3 py-2 mt-2 
                      flex items-center gap-2">

        <span className="bg-green-600 text-white rounded-full p-1 text-xs">
          %
        </span>

        You'll save ₹{data.cancelprice - data.price} on this order!
      </div>

    </div>
  </div>

  {/* Secure Info */}
  <div className="flex items-center text-xs text-gray-500 mt-4 bg-white rounded-xl p-3 shadow-sm">
    <img
      src={Secure}
      alt="Secure"
      className="h-6 mr-2"
    />
    Safe and secure payments. Easy returns. 100% Authentic products.
  </div>

</section>


      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="line-through text-gray-400 text-[14px]">₹{data.cancelprice}</span>
          <span className="font-semibold text-gray-800 text-[16px]">₹{data.price}</span>
        </div>
        <div className="flex flex-col items-end">

          <Link to="/payment" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md shadow-md transition">
            Continue To Payment
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default OrderSummary;