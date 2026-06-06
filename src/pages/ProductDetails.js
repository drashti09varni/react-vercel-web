import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaCheckCircle, FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import Data from '../Data'
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaTrashCan } from 'react-icons/fa6'
import Card from '../components/Card';
import Header2 from '../components/Header2';
import Trusted from "../assets/plue-fassured.png";
import Increase from "../assets/Incresase.svg";
import { useLocation } from "react-router-dom";
import image11 from "../assets/delivery-image.png";

import R1 from "../assets/review_1.jpg"
import R2 from "../assets/review_2.jpg"
import R3 from "../assets/review_3.jpg"
import R4 from "../assets/review_4.jpg"

const ProductDetails = ({ cart }) => {
  const navigate = useNavigate()
  const [data, setdata] = useState({})
  const [alldata] = useState(Data)
  const [category, setcategory] = useState([])
  const [active] = useState("m");
  const [cartlnt, setcartlnt] = useState(0)
  const [offer, setoffer] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)
  const [cartData, setcartData] = useState([])
  const [sizeData, setsizeData] = useState([])
  const [price, setprice] = useState(0)
  const [offprice, setoffprice] = useState(0)
  const [seconds, setSeconds] = useState(15 * 60);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const rating = queryParams.get("rating");
  const reviews = queryParams.get("reviews");
  const id = queryParams.get("id");
  console.log(rating, reviews, id);



  //  const [selectedSize, setSelectedSize] = useState("M");

    //  const sizes = ["S", "M", "L", "XL", "2XL"];

  // const handleSizeSelect = (size) => {
  //   setSelectedSize(size);
  // };




  useEffect(() => {
    localStorage.setItem("size", active)
  }, [active])
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Optional cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSidebar]);

    const pChange = () => {
    const alldata = [...Data]
    if (cart) {
      setdata(alldata[localStorage.second])
    } else {
      setdata(alldata[localStorage.id])
    }
    setcategory(alldata.slice(0, 20))
    localStorage.setItem("size", active)
  }

  useEffect(() => {
    pChange()
    if (localStorage.cart && localStorage.cart !== 0) {
      const oldcartjson = localStorage.cart
      const oldarr = JSON.parse(oldcartjson)
      setcartlnt(oldarr.length)
    }
    window.scroll(0, 0)
  }, [])



  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  useEffect(() => {
    if (localStorage.cart && localStorage.cart !== 0) {
      const oldcartjson = localStorage.cart
      const oldarr = JSON.parse(oldcartjson)
      setcartlnt(oldarr.length)
    }
    pChange()

  }, [localStorage.id, localStorage.cart])

  useEffect(() => {
    console.log(cartData)
    let tprice = 0
    if (cartData.length >= 3) {
      let dprice = 0
    cartData.forEach((item) => {
  tprice += item.price;
});
      setoffprice(dprice)
    } else {
      setoffprice(0)
    }
    cartData.map((item, index) => {
      tprice = tprice + item.price
    })

  }, [cartData])

  // const addCartcard = () => {
  //   if (!addcart) {
  //     setaddcart(true)
  //     setTimeout(() => {
  //       setaddcart(false)
  //     }, 2000)
  //   }
  // }

  const CheckoutPage = () => {
    if (cartData.length >= 3) {
      localStorage.setItem("tprice", offprice)
    } else {
      localStorage.setItem("tprice", price)
    }
    navigate("/checkout")
  }



  const BuyNow = () => {
    // Addtocart()
    navigate("/address")
  }

  const loadCart = () => {
    const cartdata = []

    if (localStorage.cart && localStorage.cart !== 0) {
      const sizesjson = localStorage.sizearr
      const sizes = JSON.parse(sizesjson)
      setsizeData(sizes)
      const oldcartjson = localStorage.cart
      const oldarr = JSON.parse(oldcartjson)
      if (oldarr.length >= 5) {
        setoffer(false)
      } else {
        setoffer(true)
      }
     oldarr.forEach((item) => {
  cartdata.push(alldata[item]);
});
      setcartData(cartdata)
      calculatePrice()
    }
  }

  const calculatePrice = () => {
    let dprice = 0
    const oldcartjson = localStorage.cart
    const oldarr = JSON.parse(oldcartjson)
   oldarr.forEach((item) => {
  dprice += alldata[item].price;
});
    setprice(dprice)
  }

  const removeFromcart = (i) => {
    const newcart = [...cartData]
    newcart.splice(i, 1)
    setcartData(newcart)

    const sizesjson = localStorage.sizearr
    const sizes = JSON.parse(sizesjson)
    sizes.splice(i, 1)
    const newsizes = JSON.stringify(sizes)
    localStorage.setItem("sizearr", newsizes)

    const oldcartjson = localStorage.cart
    const oldarr = JSON.parse(oldcartjson)
    oldarr.splice(i, 1)
    const newarr = JSON.stringify(oldarr)
    localStorage.setItem("cart", newarr)
    calculatePrice()
  }

 
  return (
    <>
      <Header2 />
      {data &&
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mt-2"
          >
            {data.image && data.image.map((item) => (
              <SwiperSlide><img src={item} className="h-[300px] mx-auto" alt="" /></SwiperSlide>
            ))}
          </Swiper>

         <div
  style={{
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "rgba(240, 240, 240, 0.95)",
    padding: "6px 8px",
    borderRadius: "8px",
    fontSize: "12px",
    fontFamily: "InterRegularCustom",
    gap: "4px",
    marginLeft:"20px"
  }}
>
  {/* Rating */}
  <span
    style={{
      display: "flex",
      alignItems: "center",
      fontWeight: "600",
      color: "#212121"
    }}
  >
    4.1
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      style={{ marginLeft: "2px" }}
    >
      <path
        d="M12 .587l3.668 7.431L24 9.587l-6 5.848 1.417 8.265L12 18.896l-7.417 4.804L6 15.435 0 9.587l8.332-1.569z"
        fill="#008C00"
      />
    </svg>
  </span>

  {/* Divider */}
  <span style={{ color: "#9e9e9e" }}>|</span>

  {/* Reviews */}
  <span
    style={{
      color: "#616161",
      fontWeight: "500"
    }}
  >
    70.8K+
  </span>
</div>
      


          <div className='font-bold text-[16px] text-center mt-2'>Only <span className='text-red-500'>4</span> Left In Stock</div>

          <div className="border-b border-slate-200">
            <div className='px-3 pb-4'>
               <div>
          {/* <h3 className="text-base font-medium mb-2">Select Size:</h3>
          <div className="flex gap-3 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`px-4 py-2 rounded-md border transition-all duration-150
                ${
                  selectedSize === size
                    ? "border-black bg-gray-100 font-semibold scale-105"
                    : "border-gray-300 bg-white hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div> */}


         
        </div>
              <h1 className="text-[16px] text-slate-600 mt-4 font-[600]"  style={{ fontFamily: "InterRegularCustom"}}>{data.title}</h1>
              <div style={{background: 'linear-gradient(90deg, rgb(0, 128, 66), #008042)',
                width: 'fit-content',
                padding: '2px 7px',
                color: 'white',
                borderRadius: '5px',
                fontSize: '13px',
                fontWeight: '600'}}>Hot Deal</div>

                <div className='flex mt-2 '  style={{ fontFamily: "InterRegularCustom"}}>
                    <div className='mt-1'>
                      <svg width="25" height="25" fill="none" viewBox="0 0 12 12"><path d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75" stroke="#008042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                      <span className="text-[21px] text-[#008042] font-[700]" style={{ fontFamily: "inter_extra_bold"}}>{(((data.cancelprice - data.price) / data.cancelprice) * 100).toFixed(0)}%</span>
                      <span className="text-[#707070] line-through ml-2 font-[500] text-[21px] mr-3">₹{data.cancelprice}</span>
                      <div className="text-[21px] text-slate-800 font-[700]" style={{ fontFamily: "inter_extra_bold"}}>₹{data.price}</div>

                </div>


                <div
  style={{
    width: "100%",
    maxWidth: "400px",
    fontFamily: "Inter, Roboto, Arial, sans-serif"
  }}
>
  {/* Title */}
  <h3
    style={{
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "12px",
      color: "#212121",
       marginTop:'10px'
    }}
  >
    Delivery details
  </h3>

  {/* Card Container */}
  <div
    style={{
      backgroundColor: "#f1f3f6",
      borderRadius: "12px",
      overflow: "hidden"
    }}
  >
    {/* Location Row */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "#eef7ff",
        fontSize: "14px",
        fontWeight: "500"
      }}
    >
      <span style={{ marginRight: "8px" }}> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" 
      style={{marginRight: '8px'}}>
        <path d="M9.08414 13.8688L8.68438 13.4214L8.68438 13.4214L9.08414 13.8688ZM6.91586 13.8688L7.31562 13.4214L6.91586 13.8688ZM12.4 6.75C12.4 8.16783 11.8481 9.50544 11.0906 10.6696C10.3343 11.832 9.39653 12.7851 8.68438 13.4214L9.4839 14.3162C10.2422 13.6387 11.2624 12.606 12.0964 11.3241C12.9292 10.0441 13.6 8.47922 13.6 6.75H12.4ZM11.1113 3.63873C11.9364 4.46389 12.4 5.58305 12.4 6.75H13.6C13.6 5.26479 13.01 3.84041 11.9598 2.7902L11.1113 3.63873ZM8 2.35C9.16695 2.35 10.2861 2.81357 11.1113 3.63873L11.9598 2.7902C10.9096 1.74 9.48521 1.15 8 1.15V2.35ZM4.88873 3.63873C5.71389 2.81357 6.83305 2.35 8 2.35V1.15C6.51479 1.15 5.09041 1.74 4.0402 2.7902L4.88873 3.63873ZM3.6 6.75C3.6 5.58305 4.06357 4.46389 4.88873 3.63873L4.0402 2.7902C2.99 3.84041 2.4 5.26479 2.4 6.75H3.6ZM7.31562 13.4214C6.60347 12.7851 5.66569 11.832 4.90943 10.6696C4.15193 9.50544 3.6 8.16783 3.6 6.75H2.4C2.4 8.47922 3.07077 10.0441 3.90359 11.3241C4.73765 12.606 5.75779 13.6387 6.5161 14.3162L7.31562 13.4214ZM8 13.8964C7.94117 13.8964 7.89717 13.887 7.81199 13.833C7.69818 13.7607 7.56373 13.643 7.31562 13.4214L6.5161 14.3162C6.93321 14.6889 7.34507 15.0964 8 15.0964V13.8964ZM8.68438 13.4214C8.43627 13.643 8.30182 13.7607 8.18801 13.833C8.10283 13.887 8.05883 13.8964 8 13.8964V15.0964C8.65493 15.0964 9.06679 14.6889 9.4839 14.3162L8.68438 13.4214ZM8 9.85C9.71208 9.85 11.1 8.46208 11.1 6.75H9.9C9.9 7.79934 9.04934 8.65 8 8.65V9.85ZM4.9 6.75C4.9 8.46208 6.28792 9.85 8 9.85V8.65C6.95066 8.65 6.1 7.79934 6.1 6.75H4.9ZM8 3.65C6.28792 3.65 4.9 5.03792 4.9 6.75H6.1C6.1 5.70066 6.95066 4.85 8 4.85V3.65ZM11.1 6.75C11.1 5.03792 9.71208 3.65 8 3.65V4.85C9.04934 4.85 9.9 5.70066 9.9 6.75H11.1Z" fill="#333333ff"></path></svg> </span>
      {/* <span style={{ color: "#212121", marginRight: "6px", fontFamily: "InterRegularCustom",fontWeight:'600' }}>
        395006
      </span> */}
      <span
        style={{
          color: "#2874f0",
          cursor: "pointer", fontFamily: "InterRegularCustom", fontWeight:'600'
        }}
      >
        Select delivery location ›
      </span>
    </div>

    {/* Express Delivery */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        borderTop: "1px solid #e0e0e0",
        fontSize: "14px",
        color: "#212121"
      }}
    >
      <span style={{ marginRight: "8px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{
    backgroundColor: "rgb(245, 245, 245)",
    marginRight: "8px"
  }}><path d="M10.7852 4.62843H13.2575C13.35 4.62783 13.4405 4.65522 13.5172 4.70701C13.5938 4.7588 13.653 4.83256 13.6869 4.91861L14.4994 6.94986" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.5 8.34277H10.7857" stroke="#333333" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.4827 12.5216C12.252 12.5216 12.8756 11.898 12.8756 11.1287C12.8756 10.3594 12.252 9.73584 11.4827 9.73584C10.7134 9.73584 10.0898 10.3594 10.0898 11.1287C10.0898 11.898 10.7134 12.5216 11.4827 12.5216Z" stroke="#333333ff" stroke-width="1.2" stroke-miterlimit="10"></path><path d="M4.51786 12.5216C5.28711 12.5216 5.91072 11.898 5.91072 11.1287C5.91072 10.3594 5.28711 9.73584 4.51786 9.73584C3.7486 9.73584 3.125 10.3594 3.125 11.1287C3.125 11.898 3.7486 12.5216 4.51786 12.5216Z" stroke="#333333ff" stroke-width="1.2" stroke-miterlimit="10"></path><path d="M10.0887 11.1284H5.91016" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.125 11.1288H1.96429C1.84115 11.1288 1.72306 11.0799 1.63599 10.9928C1.54892 10.9057 1.5 10.7876 1.5 10.6645V4.16448C1.5 4.04134 1.54892 3.92325 1.63599 3.83618C1.72306 3.74911 1.84115 3.7002 1.96429 3.7002H10.7857V9.92163" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.7852 6.9502H14.4994V10.6645C14.4994 10.7876 14.4505 10.9057 14.3635 10.9928C14.2764 11.0799 14.1583 11.1288 14.0352 11.1288H12.8744" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
      <span>
        <b style={{ fontStyle: "italic", fontSize:'12px', fontFamily: "InterRegularCustom" }}>EXPRESS</b> Delivery by Tomorrow
      </span>
    </div>

    {/* Seller Info */}
    <div
      style={{
        padding: "12px",
        borderTop: "1px solid #e0e0e0"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
          color: "#212121",
          marginBottom: "4px", fontFamily: "InterRegularCustom"
        }}
      >
        <span style={{ marginRight: "8px" }}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path d="M4.5 13.054v6.219c0 .192.079.378.22.514.14.136.33.213.53.213h13.5c.199 0 .39-.077.53-.213a.717.717 0 0 0 .22-.514v-6.219M5.063 4h13.875c.162.001.32.053.45.148s.225.228.271.38L21 9.09H3l1.34-4.564a.737.737 0 0 1 .272-.379.775.775 0 0 1 .45-.148v0Z" stroke="#333333ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9.09v1.456c0 .771-.316 1.511-.879 2.056A3.048 3.048 0 0 1 6 13.455a3.048 3.048 0 0 1-2.121-.853A2.865 2.865 0 0 1 3 10.546V9.09M15 9.09v1.456c0 .771-.316 1.511-.879 2.056a3.048 3.048 0 0 1-2.121.853 3.048 3.048 0 0 1-2.121-.853A2.865 2.865 0 0 1 9 10.546V9.09M21 9.09v1.456c0 .771-.316 1.511-.879 2.056a3.048 3.048 0 0 1-2.121.853 3.048 3.048 0 0 1-2.122-.853A2.865 2.865 0 0 1 15 10.546V9.09" stroke="#333333ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
        Fulfilled by SuperComNet
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#878787",  fontFamily: "InterRegularCustom"
        }}
      >
        4.2 ★ • 9 years with Flipkart
      </div>
    </div>
  </div>
</div>
<img src={image11} alt="dd"/>



{/* <div class="v1zwn21k v1zwn22 _1psv1zeb9 _1psv1ze0 _1psv1zek9 _1psv1zei0 _1psv1zeel _1psv1zegc" font="default-fk-font-l"  style={{
    color: "rgb(51, 51, 51)",
    boxSizing: "border-box",
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    borderWidth: "0px",
    fontWeight: "normal", 
    marginTop:"10px",
    fontFamily: "inter_extra_bold"}}>Delivery details</div> */}

              {/* <div className="flex items-center mt-2">
                <div className="text-[12px] text-white font-[500] bg-green-700 rounded-md flex items-center px-1">
                  <sapn>{rating} </sapn> &nbsp;
                  <FaStar size={12} />
                </div>
                <span className="text-gray-600 ml-2 text-[14px] mr-3 font-semibold">{reviews} Ratings</span>
                <img src={Trusted} alt="" className="h-5 ml-4" />
              </div> */}
              {/* <p className="mt-2 flex items-center">
                <span className="text-[15px] text-green-600 font-[500]">{(((data.cancelprice - data.price) / data.cancelprice) * 100).toFixed(0)}% Off</span>
                <span className="text-gray-400 line-through ml-2 font-[500] text-[16px] mr-3">₹{data.cancelprice}</span>
                <p className="text-[18px] text-slate-800 font-bold">₹{data.price}</p>
              </p> */}
            </div>
 
            {/* <div className="bg-slate-100 py-2">
              <div className='bg-white px-2'>
                <div className='bg-white py-5 flex items-center w-max mx-auto'>
                  <img src={Increase} alt='' className='h-8 mr-3' />
                  <p className='text-[16px]'><span className='text-red-500 font-bold'>{Math.floor(Math.random() * (2467 - 2000 + 1)) + 2000}</span> people ordered this in the last 7 days</p>
                </div>
              </div>
            </div> */}

            {/* <div className="py-3 px-4">
              <div className="text-slate-800 text-center text-[18px]">Offer Ends In: <span className='text-red-600'>{minutes}:{remainingSeconds}</span></div>
            </div> */}


<div className="bg-slate-100 pt-3 px-4">
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">

   
    {/* Main Content */}
    <div className="flex items-center justify-center gap-3">

      <img src={Increase} alt="" className="h-7" />

      <p className="text-[15px] text-slate-700 font-medium"  style={{ fontFamily: "InterRegularCustom" }}>
        <span className="text-blue-600 font-bold text-[16px]">
          {Math.floor(Math.random() * (2467 - 2000 + 1)) + 2000}
        </span>{" "}
        customers ordered this product in the last 7 days
      </p>
    </div>
  </div>
</div>


<div className="py-4 px-4 bg-slate-100" style={{ fontFamily: "InterRegularCustom" }}>
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">

    {/* Trust Row */}
    <div className="flex items-center justify-center gap-2 mb-3" style={{ fontFamily: "InterRegularCustom" }}>
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded">
        ✓ Assured Deal
      </span>

      <span className="text-slate-500 text-xs">
        Secure & Verified Offer
      </span>
    </div>

    {/* Countdown */}
    <div className="text-center">
      <p className="text-slate-700 text-[16px] font-medium">
        Offer Ends In
      </p>

      <div className="mt-2 inline-block bg-blue-600 text-white 
                      px-5 py-2 rounded-md 
                      text-lg font-bold tracking-wider shadow-sm">
        {minutes}:{remainingSeconds}
      </div>
    </div>

    {/* Bottom Trust Line */}
    <div className="text-center mt-3 text-xs text-slate-500">
      ⭐ 4.5 Rated by 10,000+ Customers
    </div>

  </div>
</div>


            <div>
              {/* <div className="fixed z-[999] bottom-0 left-0 w-full bg-white border-t border-slate-200 font-semibold">
                <div className="flex items-center">
                  <button className="bg-white text-slate-800 px-6 py-2 text-[16px] w-1/2 text-center" onClick={BuyNow}>
                    Add to Bag
                  </button>
                  <button className="bg-yellow-500 text-slate-800 px-6 py-2 text-[16px] w-1/2 text-center" onClick={BuyNow}>
                    Buy Now
                  </button>
                </div>
              </div> */}

              <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-50" style={{ fontFamily: "InterRegularCustom" }}>

  <div className="flex gap-3">

    {/* Add to Cart */}
    <button
      onClick={BuyNow}
      className="w-1/2 bg-gray-100 
                 border border-gray-300 
                 text-gray-800 
                 font-semibold 
                 py-3 
                 rounded-xl 
                 text-[15px] 
                 transition 
                 hover:bg-gray-200 
                 active:scale-95"
    >
      Add to cart
    </button>

    {/* Buy Now */}
    <button
      onClick={BuyNow}
      className="w-1/2 bg-yellow-400 
                 text-gray-900 
                 font-semibold 
                 py-3 
                 rounded-xl 
                 text-[15px] 
                 shadow-sm 
                 transition 
                 hover:bg-yellow-500 
                 active:scale-95"
    >
      Buy at ₹{data.price}
    </button>

  </div>

</div>
            </div>
          </div>
          {/* <div className="bg-slate-100 py-2">
            <div className="bg-white px-2">
              <div className="px-4 pt-2 text-orange-400">Available Offers</div>
              <div className="flex items-center justify-between gap-4 pt-3 mb-4">
                <div className={`${offer ? "bg-orange-400 text-white" : "bg-white border border-orange-400 text-orange-400"} text-[14px] py-2 px-4 w-full rounded text-center`} onClick={() => setoffer(true)}>
                  Buy 2 Get 1 Free</div>
                <div className={`${!offer ? "bg-orange-400 text-white" : "bg-white border border-orange-400 text-orange-400"} text-[14px] py-2 px-4 w-full rounded text-center`} onClick={() => setoffer(false)}>
                  Buy 3 Get 2 Free</div>
              </div>
              <div className="px-4 pt-2 text-orange-400">Select Size</div>
              <div className="pb-5 pt-3">
                <div className="flex justify-between">
                  <div
                    onClick={() => setactive("m")}
                    className={`text-[10px] border rounded-full flex items-center justify-center bg-white w-full h-[6vh] cursor-pointer ${active === "m" ? "border-orange-400 text-orange-400" : "border-slate-400"}`}>M</div>
                  <div
                    onClick={() => setactive("l")}
                    className={`text-[10px] border rounded-full flex items-center justify-center mx-2 bg-white w-full h-[6vh] cursor-pointer ${active === "l" ? "border-orange-400 text-orange-400" : "border-slate-400"}`}>L</div>
                  <div
                    onClick={() => setactive("xl")}
                    className={`text-[10px] border rounded-full flex items-center justify-center mx-2 bg-white w-full h-[6vh] cursor-pointer ${active === "xl" ? "border-orange-400 text-orange-400" : "border-slate-400"}`}>XL</div>
                  <div
                    onClick={() => setactive("xxl")}
                    className={`text-[10px] border rounded-full flex items-center justify-center mx-2 bg-white w-full h-[6vh] cursor-pointer ${active === "xxl" ? "border-orange-400 text-orange-400" : "border-slate-400"}`}>XXL</div>
                  <div
                    onClick={() => setactive("3xl")}
                    className={`text-[10px] border rounded-full flex items-center justify-center mx-2 bg-white w-full h-[6vh] cursor-pointer ${active === "3xl" ? "border-orange-400 text-orange-400" : "border-slate-400"}`}>3XL</div>
                  <div
                    onClick={() => setactive("4xl")}
                    className={`text-[10px] border rounded-full flex items-center justify-center mx-2 bg-white w-full h-[6vh] cursor-pointer ${active === "4xl" ? "border-orange-400 text-orange-400" : "border-slate-400"}`}>4XL</div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="my-6 px-4" style={{ fontFamily: "InterRegularCustom" }}>
            <div className="text-slate-800 px-2">Description</div>
            <div className="padding-md productDetailsContainer ">
              <ul className="details list-unstyled text-[12px] text-slate-600 px-4">
                <li className="product-list my-2">
                  <p
  className="description"
  dangerouslySetInnerHTML={{ __html: data.desc }}
></p>
                </li>
               </ul>
            </div>
            <div className="flex items-center justify-between mt-12 mb-16">
              <div className="text-[14px] text-slate-600">
                <svg viewBox="0 0 30 30" className="image-banner-image h-12 mx-auto"><defs><path id="trust_original_svg__a" d="M.535.099h23.547v23.33H.535z"></path></defs><g fill="none" fill-rule="evenodd"><g transform="translate(2.885 3.473)"><mask id="trust_original_svg__b" fill="#fff"><use xlinkHref="#trust_original_svg__a"></use></mask><path fill="#3E4152" d="M12.31 1.242c-1.406 0-2.813.281-4.146.842a10.495 10.495 0 00-5.696 5.74 10.36 10.36 0 00.071 8.049 10.501 10.501 0 005.795 5.64 10.643 10.643 0 008.126-.07c5.388-2.265 7.912-8.45 5.624-13.788a10.496 10.496 0 00-5.795-5.641 10.697 10.697 0 00-3.979-.772m.003 22.187a11.86 11.86 0 01-4.41-.856 11.645 11.645 0 01-6.426-6.254 11.48 11.48 0 01-.078-8.923 11.633 11.633 0 016.313-6.364 11.796 11.796 0 019.01-.078 11.642 11.642 0 016.425 6.254c2.535 5.918-.262 12.776-6.236 15.287a11.84 11.84 0 01-4.598.934" mask="url(#trust_original_svg__b)"></path></g><path fill="#3E4152" d="M17.881 22.57a.569.569 0 01-.031-1.036c.187-.093.379-.18.573-.26a.579.579 0 01.752.314.568.568 0 01-.315.745 6.788 6.788 0 00-.492.222.583.583 0 01-.487.015zM11.533 9.194a.57.57 0 01-.032-1.036c.188-.093.38-.18.575-.259a.58.58 0 01.752.313.57.57 0 01-.317.745 7.29 7.29 0 00-.491.222.58.58 0 01-.487.015zm3.022-.752a.575.575 0 01-.574-.523.573.573 0 01.525-.618c.212-.018.422-.028.631-.029h.004c.317 0 .575.253.577.567a.574.574 0 01-.573.576 6.838 6.838 0 00-.59.027zM18 8.958a.578.578 0 01-.217-.042 7.18 7.18 0 00-.51-.182.57.57 0 01-.374-.717c.096-.3.42-.468.724-.372.2.063.399.134.593.212A.57.57 0 0118 8.958zm2.433 1.581a.578.578 0 01-.404-.164 6.582 6.582 0 00-.4-.36.567.567 0 01-.071-.805.58.58 0 01.813-.07c.16.134.316.274.467.42.227.222.23.583.006.809a.578.578 0 01-.41.17zm-10.947.507a.577.577 0 01-.371-.135.568.568 0 01-.07-.805c.136-.16.277-.313.425-.462a.58.58 0 01.816-.005.567.567 0 01.006.808 6.8 6.8 0 00-.364.396.58.58 0 01-.442.203zm12.582 1.879a.578.578 0 01-.53-.345c0-.003-.002-.006-.004-.01a6.664 6.664 0 00-.227-.479.57.57 0 01.246-.77.58.58 0 01.778.244 7.687 7.687 0 01.284.608.57.57 0 01-.547.752zm-13.984.647a.57.57 0 01-.55-.745c.064-.198.135-.394.214-.587a.578.578 0 01.75-.315.57.57 0 01.32.744 6.61 6.61 0 00-.184.504.578.578 0 01-.55.4zm14.577 2.175a.574.574 0 01-.577-.566 6.649 6.649 0 00-.026-.535.573.573 0 01.525-.619.567.567 0 01.625.52c.018.208.028.416.03.624a.574.574 0 01-.572.576h-.005zm-14.903.69a.574.574 0 01-.574-.524 7.788 7.788 0 01-.029-.624.575.575 0 01.574-.575h.003c.317 0 .575.254.577.568.001.179.01.357.024.535a.573.573 0 01-.575.62zm14.356 2.142a.57.57 0 01-.535-.786 6.61 6.61 0 00.184-.504.579.579 0 01.724-.372.57.57 0 01.376.718 8.492 8.492 0 01-.214.587.578.578 0 01-.535.357zm-13.545.627a.577.577 0 01-.513-.31 7.984 7.984 0 01-.26-.548.576.576 0 111.063-.445c.068.16.143.316.223.47a.568.568 0 01-.25.77.58.58 0 01-.263.063zm11.95 1.784a.576.576 0 01-.405-.164.568.568 0 01-.007-.808c.127-.127.248-.26.363-.396a.582.582 0 01.813-.07.568.568 0 01.072.804c-.136.16-.277.314-.425.463a.575.575 0 01-.412.171zm-10.135.47a.579.579 0 01-.372-.135 7.846 7.846 0 01-.465-.422.567.567 0 01-.006-.808.58.58 0 01.816-.005c.129.126.261.246.399.36a.568.568 0 01.07.806.58.58 0 01-.442.203zm2.55 1.391a.591.591 0 01-.177-.027 8.381 8.381 0 01-.592-.213.57.57 0 01-.317-.744.58.58 0 01.752-.314c.167.067.337.128.51.182a.57.57 0 01-.177 1.116zm2.307.35a.574.574 0 01-.577-.568.575.575 0 01.573-.575c.18 0 .36-.009.54-.024a.571.571 0 11.097 1.139c-.21.017-.42.027-.63.028h-.003z"></path><path fill="#FFF" stroke="#3E4152" d="M0 17.61L26.618 6.42l-.38 4.174 3.296 2.63-26.618 11.19.452-4.205z"></path><path fill="#FF3F6C" d="M6.129 18.078c-.507.214-.635.754-.36 1.397.276.642.757.927 1.263.714.512-.215.64-.756.364-1.399-.274-.642-.761-.925-1.267-.712m1.1 2.58c-.842.354-1.65-.03-2.038-.936-.39-.91-.105-1.757.741-2.113.85-.357 1.65.03 2.038.936.389.905.11 1.756-.741 2.113m1.694-3.708l-.314.13.4.932.286-.12c.354-.148.501-.407.37-.713-.126-.293-.386-.38-.742-.23zm1.781 2.217l-1.267-.827-.24.1.48 1.124-.566.238-1.258-2.936.92-.386c.66-.278 1.193-.135 1.437.435.185.43.068.795-.247 1.078l1.297.815-.556.359zm.974-.445l-1.257-2.935.571-.24 1.257 2.935zm2.579-1.019c-.94.396-1.719 0-2.106-.906-.39-.91-.11-1.756.792-2.135a1.85 1.85 0 011.002-.146l.143.557a1.52 1.52 0 00-.935.067c-.58.244-.693.784-.424 1.41.269.629.748.92 1.345.668a1.07 1.07 0 00.447-.329l-.278-.65-.602.252-.261-.422 1.19-.5.6 1.4a2.098 2.098 0 01-.913.734m1.616-.744l-1.258-2.935.572-.24 1.257 2.935zm3.139-1.319l-2.262-1.434.866 2.02-.528.222-1.258-2.935.537-.226 2.155 1.364-.823-1.924.528-.221 1.257 2.934zm1.343-1.987l.806-.339-.885-.967.079 1.306zm-.619-1.797l.606-.255 2.319 2.419-.528.342-.615-.655-1.121.471.062.853-.572.24-.15-3.415zm3.358 2.067l-1.258-2.935.571-.24 1.043 2.433.988-.416.292.47z"></path></g></svg>
                <p>7 days Replacement</p>
              </div>
              <div className="text-[12px] text-slate-600">
                <svg viewBox="0 0 30 30" className="image-banner-image h-12 mx-auto"><g fill="none" fill-rule="evenodd"><path fill="#FF3F6C" d="M14.853 15.402a4.114 4.114 0 01-4.109-4.109 4.114 4.114 0 014.11-4.108 4.114 4.114 0 014.108 4.108 4.114 4.114 0 01-4.109 4.11m0-9.318a5.215 5.215 0 00-5.209 5.208 5.215 5.215 0 005.21 5.21 5.215 5.215 0 005.208-5.21 5.215 5.215 0 00-5.209-5.208m1.819 3.117l-3.21 2.99-.813-.842a.55.55 0 10-.792.764l1.187 1.231a.546.546 0 00.77.021l3.607-3.36a.55.55 0 10-.75-.804"></path><path fill="#3E4152" d="M21.966 12.413a.929.929 0 00-.38 1.405c.287.387.315.903.07 1.315a1.295 1.295 0 01-1.221.608.944.944 0 00-.758.263.921.921 0 00-.275.761c.049.468-.175.896-.602 1.145-.355.208-.907.307-1.391-.035a.94.94 0 00-.789-.144.936.936 0 00-.617.516c-.238.522-.75.708-1.15.708h-.001c-.4 0-.911-.186-1.149-.709a.937.937 0 00-.859-.547.945.945 0 00-.546.174 1.31 1.31 0 01-1.376.07 1.212 1.212 0 01-.618-1.177.924.924 0 00-.274-.762.95.95 0 00-.757-.264c-.598.059-1.02-.296-1.22-.648a1.142 1.142 0 01.067-1.275.932.932 0 00-.38-1.404 1.177 1.177 0 01-.715-1.11c0-.5.267-.916.715-1.112a.928.928 0 00.38-1.405 1.141 1.141 0 01-.067-1.273c.2-.354.629-.707 1.219-.65a.94.94 0 00.758-.263.92.92 0 00.274-.761c-.05-.475.192-.938.618-1.178a1.31 1.31 0 011.377.07.947.947 0 001.405-.374c.237-.521.749-.707 1.148-.707.4 0 .913.185 1.151.708a.944.944 0 001.405.373c.485-.345 1.037-.245 1.392-.037.427.25.651.677.602 1.144-.03.283.07.56.276.763.2.196.473.29.755.263.487-.052.98.194 1.224.607a1.19 1.19 0 01-.071 1.316.931.931 0 00.38 1.404c.447.196.715.612.715 1.111 0 .5-.268.915-.715 1.111zm-1.143 10.932l-1.73-.546a.55.55 0 00-.645.256l-.84 1.5-1.854-4.67a2.277 2.277 0 001.167-1.017 2.387 2.387 0 002.162.128l1.74 4.35zm-8.757 1.21l-.84-1.5a.551.551 0 00-.645-.256l-1.73.546L10.589 19a2.395 2.395 0 002.196-.132c.256.462.658.81 1.14 1.007l-1.86 4.68zM23.78 11.302a2.28 2.28 0 00-1.196-2.032c.44-.718.453-1.624.02-2.358a2.365 2.365 0 00-2.097-1.154c.016-.822-.413-1.58-1.152-2.013a2.397 2.397 0 00-2.435-.009C16.511 3 15.735 2.55 14.852 2.55s-1.659.45-2.067 1.186a2.397 2.397 0 00-2.404-.033 2.314 2.314 0 00-1.183 2.055A2.409 2.409 0 007.096 6.97a2.242 2.242 0 00.025 2.302 2.278 2.278 0 00-1.196 2.031c0 .869.454 1.63 1.196 2.031a2.24 2.24 0 00-.024 2.303 2.39 2.39 0 002.1 1.21 2.3 2.3 0 00.488 1.454l-2.287 5.715a.549.549 0 00.676.73l2.41-.762L11.67 26.1a.55.55 0 00.48.281l.037-.001a.551.551 0 00.474-.346l2.176-5.479 2.176 5.48a.551.551 0 00.475.345l.036.001a.55.55 0 00.48-.281l1.185-2.118 2.41.761a.549.549 0 10.676-.729l-2.28-5.703c.337-.411.524-.924.513-1.465a2.389 2.389 0 002.096-1.154 2.286 2.286 0 00-.019-2.36 2.278 2.278 0 001.196-2.03z"></path></g></svg>
                <p> No Cash On Delivery </p>
              </div>
              <div className="text-[12px] text-slate-600">
                <svg viewBox="0 0 30 30" className="image-banner-image h-12 mx-auto"><defs><path id="trust_secure_svg__a" d="M0 .327h18.705V23H0z"></path></defs><g fill="none" fill-rule="evenodd"><g transform="translate(6 3)"><mask id="trust_secure_svg__b" fill="#fff"><use xlinkHref="#trust_secure_svg__a"></use></mask><path fill="#3E4152" d="M1.118 4.6c.026 5.218 1.258 9.559 3.664 12.91 1.2 1.67 2.736 3.104 4.571 4.27a16.585 16.585 0 004.572-4.273c2.405-3.32 3.636-7.661 3.662-12.907a23.754 23.754 0 01-3.857-1.07c-1.33-.488-2.802-1.163-4.377-2.006-1.561.835-3.037 1.51-4.39 2.006A23.732 23.732 0 011.118 4.6zM9.353 23a.555.555 0 01-.29-.081c-2.093-1.274-3.838-2.874-5.188-4.754C1.256 14.517-.047 9.793 0 4.122a.56.56 0 01.47-.549 21.956 21.956 0 004.11-1.096C5.959 1.97 7.475 1.269 9.087.394a.555.555 0 01.531 0c1.629.884 3.142 1.585 4.496 2.083 1.394.511 2.78.88 4.12 1.096a.56.56 0 01.47.549c.048 5.702-1.255 10.428-3.875 14.045-1.37 1.892-3.116 3.49-5.187 4.752a.554.554 0 01-.289.08z" mask="url(#trust_secure_svg__b)"></path></g><path fill="#FF3F6C" d="M17.584 13h-.46a2.719 2.719 0 00-.384-1h.844c.23 0 .416-.224.416-.5s-.187-.5-.416-.5h-4.168c-.23 0-.416.224-.416.5s.187.5.416.5h1.668c.542 0 1 .42 1.173 1h-2.84c-.23 0-.417.224-.417.5s.187.5.416.5h2.84c-.172.581-.63 1-1.172 1h-1.668a.363.363 0 00-.159.038.47.47 0 00-.225.271.589.589 0 000 .382.48.48 0 00.091.163l3.332 4a.383.383 0 00.295.146.39.39 0 00.295-.146.575.575 0 000-.707L14.423 16h.66c1.007 0 1.848-.86 2.041-2h.46c.23 0 .416-.224.416-.5s-.187-.5-.416-.5"></path></g></svg>
                <p> Plus (F-Assured) </p>
              </div>
            </div>
          </div>
          {/* <img src={R1} alt='' className=''/>
          <img src={R2} alt='' className=''/>
          <img src={R3} alt='' className=''/>
          <img src={R4} alt='' className=''/> */}
          <h1 className="text-[16px] font-bold px-4 my-4 text-slate-800">Fastest Selling Similar Products</h1>
          {category &&
            <Card data={category} />
          }
          <div>
            <img src={data.rate} alt="" className="w-full" />
          </div>
        </div>
      }

      {showSidebar && (
        <div className="fixed top-0 right-0 z-[1000] h-full w-80 bg-white shadow-lg border-l border-gray-300 p-4 transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-orange-400">Checkout</h2>
            <button onClick={() => setShowSidebar(false)} className="text-gray-500 hover:text-orange-400">×</button>
          </div>
          <div className="h-[65vh] overflow-scroll">
            {cartData && cartData.length > 0 ? cartData.map((item, index) => (
              <div className="flex items-center py-4 px-4 bg-white">
                <div className='w-1/4'><img src={item.image[0]} alt="" className="h-16 w-auto" /></div>
                <div className="w-3/4">
                  <div className="flex items-center justify-between ps-4">
                    <div className="mr-2 text-[12px]">{item.title}</div>
                    <div className="text-gray-500" onClick={() => removeFromcart(index)}><FaTrashCan size={16} /></div>
                  </div>
                  <div className="flex items-center ps-4 text-[14px] my-1">
                    <div className="font-semibold text-slate-700 text-[12px]">₹{item.price}</div>
                    <div className="text-gray-500 ml-5 line-through text-[12px]">₹{item.cancelprice}</div>
                  </div>
                  <div className="flex items-center justify-between ps-4 text-[10px]">
                    <div className="">Size:<span className="uppercase ml-1">{sizeData[index]}</span></div>
                    <div className="">Qty: 1</div>
                  </div>
                </div>
              </div>
            )) :
              <div>
                <h1 className="text-[30px] font-bold text-center py-16">Empty Cart!</h1>
              </div>
            }
          </div>
          <div className="h-[35vh] bg-white pt-4">

            {cartData && cartData.length > 0 ?
              <>
                <div className="bg-white my-2 text-[12px]">
                  <div className="flex items-center justify-between px-2">
                    <div className="">Shipping</div>
                    <div className="text-gray-500">Free</div>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <div className="">Total Product Price</div>
                    <div className="">₹{price}</div>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <div className="">{offer ? "Buy 2 Get 1 Free" : "Buy 3 Get 2 Free"} Price</div>
                    <div className="">₹{offprice}</div>
                  </div>
                </div>
                <button
                  onClick={CheckoutPage}
                  className="mt-auto w-full bg-orange-400 text-white py-2 rounded text-sm hover:bg-orange-500 transition mt-5"
                >
                  Checkout
                </button>
              </> :
              <button
                onClick={() => navigate("/")}
                className="mt-auto w-full bg-orange-400 text-white py-2 rounded text-sm hover:bg-orange-500 transition"
              >
                Continue to Shopping
              </button>
            }
          </div>
        </div>
      )}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[999]"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </>

  )
}

export default ProductDetails