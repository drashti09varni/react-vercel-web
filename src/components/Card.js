import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Trusted from '../assets/ass.png'
import { CiHeart } from "react-icons/ci";
import { FaStar } from 'react-icons/fa6'
import { useMemo } from "react";
import { Link } from "react-router-dom";





const Card = ({ data, cart }) => {
  const PRODUCTS_PER_PAGE = 30;
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [product, setProduct] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (data && data.length > 0) {
      setProduct(data.slice(0, visibleCount));
    }
  }, [data, visibleCount]);

  const loadMoreProducts = useCallback(() => {
    if (visibleCount < data.length) {
      setVisibleCount(prev => prev + PRODUCTS_PER_PAGE);
    }
  }, [visibleCount, data.length]);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      loadMoreProducts();
    }
  }, [loadMoreProducts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  const openProduct = (i) => {
    if (cart) {
      localStorage.setItem("second", i)
    } else {
      localStorage.setItem("id", i)
    }

    const selectedProduct = product[i];
    const selectedRating = productRatings[i];

    navigate(
      `/product-details?id=${selectedProduct.id}&rating=${selectedRating?.rating}&reviews=${selectedRating?.reviews}`,
      { replace: true }
    );

    // navigate("/product-details", { replace: true })
    // window.scroll(0, 0)
  }

  const productRatings = useMemo(() => {
    return data?.map(() => ({
      rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(1),
      reviews: Math.floor(Math.random() * (10000 - 500 + 1)) + 500,
    }));
  }, [data]);

  const ratingsList = [
    4.0, 4.1, 4.2, 4.3, 4.4,
    4.5, 4.6, 4.7, 4.8, 4.9,
    5.0
  ];
  const randomRatings = useMemo(() => {
    return product.map(() =>
      ratingsList[Math.floor(Math.random() * ratingsList.length)]
    );
  }, [product]);

  

  return (
    // <div className="mx-0 grid grid-cols-2 text-sm mt-0 gap-0 bg-white">
    //     {product && product.map((item, index) => (

    //         <div className="border border-slate-200 relative p-2" key={item.id} onClick={() => openProduct(index)}>
    //             <div className="w-full flex items-center justify-center relative">
    //                 <img src={item.image[0]} onClick={() => openProduct(index)} className="w-full mx-auto" alt="" />
    //             </div>
    //             <div className="">
    //                 <p className="mt-1 text-[12px] font-normal whitespace-nowrap overflow-hidden text-ellipsis text-[#878787] " style={{ fontFamily: "inter_regular, Roboto, Helvetica, Arial, sans-serif" }} onClick={() => openProduct(index)}>{item.title}</p>
    //                 <p className="mt-1 flex items-center">
    //                     <span className="text-[14px] text-green-600 font-[600]">{(((item.cancelprice - item.price) / item.cancelprice) * 100).toFixed(0)}% Off</span>
    //                     <span className="text-gray-400 line-through ml-2 text-[14px] font-[600] mr-3">₹{item.cancelprice}</span>
    //                 </p>
    //                 <div className="flex items-center mt-1">
    //                     <p className="text-[16px] text-slate-800 font-bold">₹{item.price}</p>
    //                     <img src={Trusted} alt="" className="h-5 ml-4" />
    //                 </div>
    //                 <div className="flex items-center mt-1">
    //                     <div className="text-[12px] text-white font-bold bg-green-700 rounded-md flex items-center px-1">
    //                         <span>{productRatings[index]?.rating}</span>
    //                         <FaStar size={12} className="ml-1" />
    //                     </div>

    //                     <span className="text-gray-600 ml-2 text-[12px] mr-3 font-semibold">
    //                         {productRatings[index]?.reviews} Ratings
    //                     </span>
    //                 </div>


    //                 <p className="text-[14px] text-green-600 text-center mt-1 font-semibold">Free Delivery in Two Days</p>
    //             </div>
    //         </div>))}
    // </div>

    <div className="grid grid-cols-2 bg-white">
      {product && product.map((item, index) => {

        const discount = (((item.cancelprice - item.price) / item.cancelprice) * 100).toFixed(0);


        const rating = randomRatings[index];

   const randomPrice =
      Math.floor(Math.random() * (399 - 199 + 1)) + 199;
      
        return (
          <div
            key={item.id}
            onClick={() => openProduct(index)}
            className="border border-gray-200 p-3 relative cursor-pointer hover:shadow-md transition"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 256 256">
                <path fill="none" d="M0 0h256v256H0z"></path>
                <path
                  d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"
                  fill="#fff"
                  stroke="#B8BBBF"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>



            {/* Sponsored */}
            {/* <p className="text-gray-400 text-[12px] mb-1">Sponsored</p> */}

            {/* Image */}
            <div className="flex justify-center items-center h-40" style={{ marginTop: '-4px' }}>
              <img
                src={item.image[0]}
                alt=""
                className="h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-[11px] mb-1">Sponsored</p>
            {/* Title */}
            <p style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#1f2937",
              fontFamily: "InterRegularCustom",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}>
              {item.title}
            </p>


            {/* Rating + Assured */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "6px"
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "2px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    {star <= Math.floor(rating) ? (
                      <path
                        d="M12 .587l3.668 7.431L24 9.587l-6 5.848 1.417 8.265L12 18.896l-7.417 4.804L6 15.435 0 9.587l8.332-1.569z"
                        fill="#008C00"
                      />
                    ) : star === Math.ceil(rating) ? (
                      <>
                        <defs>
                          <linearGradient id={`halfGrad-${star}`}>
                            <stop offset="50%" stopColor="#008C00" />
                            <stop offset="50%" stopColor="#D3D3D3" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 .587l3.668 7.431L24 9.587l-6 5.848 1.417 8.265L12 18.896l-7.417 4.804L6 15.435 0 9.587l8.332-1.569z"
                          fill={`url(#halfGrad-${star})`}
                        />
                      </>
                    ) : (
                      <path
                        d="M12 .587l3.668 7.431L24 9.587l-6 5.848 1.417 8.265L12 18.896l-7.417 4.804L6 15.435 0 9.587l8.332-1.569z"
                        fill="#D3D3D3"
                      />
                    )}
                  </svg>
                ))}
              </div>

              {/* Assured Badge */}
              <img
                src="https://rukminim2.flixcart.com/www/60/16/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png"
                alt="Assured"
                style={{ height: "16px" }}
              />
            </div>


            {/* Discount Row */}
            <div className="flex items-center mt-1 space-x-2">
              <span className="text-green-600 font-semibold text-[14px] flex" style={{ fontFamily: "InterRegularCustom", }}>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ marginTop: '4px' }}><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00" ></path></svg>    {discount}%
              </span>
              <span className="line-through text-gray-400  text-[14px]" style={{ fontFamily: "InterRegularCustom", }}>
                ₹{item.cancelprice}
              </span>
              <span className="text-gray-900 font-semibold text-[14px]" style={{ fontFamily: "InterRegularCustom", }}>
                ₹{item.price}
              </span>
            </div>

            {/* Hot Deal */}
            {/* <span className="inline-block bg-green-100 text-green-700 text-[12px] px-2 py-[2px] rounded"  >
                            Hot Deal
                        </span> */}

            {/* Rating + Assured */}
            {/* <div className="flex items-center mt-2 space-x-2">
                            <div className="flex items-center bg-green-600 text-white text-[12px] px-2 py-[2px] rounded">
                                {productRatings[index]?.rating}
                                <FaStar size={10} className="ml-1" />
                            </div>

                            <span className="text-gray-500 text-[12px]">
                                {productRatings[index]?.reviews} Ratings
                            </span>

                            <img src={Trusted} alt="Assured" className="h-4" />
                        </div> */}



            {/* <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px"
  }}
>
  <div style={{ display: "flex", gap: "2px" }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={star <= Math.floor(rating) ? "#008C00" : "#D3D3D3"}
      >
        <path d="M12 .587l3.668 7.431L24 9.587l-6 5.848 1.417 8.265L12 18.896l-7.417 4.804L6 15.435 0 9.587l8.332-1.569z" />
      </svg>
    ))}
  </div>

  <span
    style={{
      fontSize: "14px",
      fontWeight: "500",
      color: "#212121"
    }}
  >
    {rating}
  </span>

  <img
    src="https://rukminim2.flixcart.com/www/60/16/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png"
    alt="Assured"
    style={{ height: "16px" }}
  />
</div> */}



           <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginTop: "4px",
  }}
>
  <div
    style={{
      display: "inline-flex",
      position: "relative",
      marginRight: "2px",
      alignSelf: "center",
      width: "38px",
      height: "16px",
    }}
  >
    <img
      alt=""
      loading="lazy"
      height="16"
      width="38"
      src="https://rukminim2.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90"
      style={{
        filter: "none",
        opacity: 1,
        transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
        width: "100%",
        height: "100%",
        margin: "auto",
        objectFit: "contain",
      }}
    />
  </div>

  <div
    style={{
      backgroundColor: "rgba(0, 0, 0, 0)",
      fontSize: "12px",
      color: "rgb(6, 31, 128)",
      fontFamily:
        '"Roboto Medium", Roboto, Helvetica, Arial, sans-serif',
      fontStyle: "normal",
      fontWeight: 500,
    }}
  >
    ₹{randomPrice}   with Bank offer
  </div>

  
</div>


            {/* Delivery */}
            {/* <p className="text-[13px] text-black mt-2 flex items-center" style={{fontWeight:'400'}}>
                            <span className="mr-1"><img src='https://rukminim2.flixcart.com/www/132/36/promos/09/02/2024/0b0b6063-507e-45e7-b8b0-f22a591bb06b.png?q=90' style={{width:'70px'}} /></span>
                            2 day delivery
                        </p> */}

          </div>

        );
      })}
    </div>
  )
}

export default Card