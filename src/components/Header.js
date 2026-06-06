import React from "react";
import Menu from "../assets/Mneu.svg"
import Logo from "../assets/svg-image-1.svg"
import User from "../assets/Login.svg"
import Search from "../assets/Search Icon.svg"
import Cart from "../assets/Cart.svg"
import { Link } from "react-router-dom";


export default function Header() {

  return (
    // <div className="w-full bg-white">
    //   {/* Header */}
    //   <header className="flex justify-between items-center p-3 ">
    //     <Link to="/" className="flex items-center">
    //       <img
    //         alt="menu"
    //         src={Menu}
    //         className="w-6 h-6 md:w-8 md:h-8"
    //       />
    //       <img
    //         alt="logo"
    //         src={Logo}
    //         className="h-6 -ml-6"
    //       />
    //     </Link>

    //     <div className="flex items-center ">
    //       <img
    //         alt="search"
    //         src={Search}
    //         className="w-5 h-5 md:w-6 md:h-6"
    //       />
    //       <a href="#">
    //         <img
    //           alt="cart"
    //           src={Cart}
    //           className="w-6 h-6 ml-3"
    //         />
    //       </a>
    //     </div>
    //   </header>

    //   {/* Search bar */}
    //   <div className="px-3">
    //     <input
    //       type="text"
    //       placeholder="Search for Products, Brands and More"
    //       className="w-full border rounded-lg px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-blue-500"
    //     />
    //   </div>
    // </div>
    <>
  
    <div
  style={{
    background: "linear-gradient(rgb(86, 173, 255), rgb(222, 239, 255), rgb(222, 239, 255))",
    padding: "12px",
    fontFamily: "Arial, sans-serif",
  }}
>

  {/* Top Buttons */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
      marginBottom: "16px",
    }}
  >

    {/* Flipkart */}
    <div
      style={{
        height: "44px",
        borderRadius: "12px",
        background: "rgb(255, 229, 31)",
        border: "1.4px solid rgba(255,255,255,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/52/44/image/d2ecfddf891a3922.png?q=90"
          style={{
            width: "26px",
            height: "22px",
            objectFit: "contain",
          }}
        />

        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/92/36/image/31f7e3af490c225f.png?q=90"
          style={{
            width: "46px",
            height: "18px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>

    {/* Travel */}
    <div
      style={{
        height: "44px",
        borderRadius: "12px",
        background: "#fff",
        border: "1.4px solid #fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/58/44/image/7ab4040af860941d.png?q=90"
          style={{
            width: "29px",
            height: "22px",
            objectFit: "contain",
          }}
        />

        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/72/36/image/5a9ff48eef96b876.png?q=90"
          style={{
            width: "36px",
            height: "18px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  </div>

  {/* Location */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginBottom: "18px",
    }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{backgroundColor: "rgba(0, 0, 0, 0);"}}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.08414 13.8688C10.5546 12.555 13 9.89704 13 6.75C13 5.42392 12.4732 4.15215 11.5355 3.21447C10.5979 2.27678 9.32608 1.75 8 1.75C6.67392 1.75 5.40215 2.27678 4.46447 3.21447C3.52678 4.15215 3 5.42392 3 6.75C3 9.89704 5.4454 12.555 6.91586 13.8688C7.38418 14.2872 7.61834 14.4964 8 14.4964C8.38166 14.4964 8.61582 14.2872 9.08414 13.8688ZM10.5 6.75C10.5 8.13071 9.38071 9.25 8 9.25C6.61929 9.25 5.5 8.13071 5.5 6.75C5.5 5.36929 6.61929 4.25 8 4.25C9.38071 4.25 10.5 5.36929 10.5 6.75Z" fill="#1F1F1F"></path><path d="M9.08414 13.8688L8.68438 13.4214L8.68438 13.4214L9.08414 13.8688ZM6.91586 13.8688L7.31562 13.4214L6.91586 13.8688ZM12.4 6.75C12.4 8.16783 11.8481 9.50544 11.0906 10.6696C10.3343 11.832 9.39653 12.7851 8.68438 13.4214L9.4839 14.3162C10.2422 13.6387 11.2624 12.606 12.0964 11.3241C12.9292 10.0441 13.6 8.47922 13.6 6.75H12.4ZM11.1113 3.63873C11.9364 4.46389 12.4 5.58305 12.4 6.75H13.6C13.6 5.26479 13.01 3.84041 11.9598 2.7902L11.1113 3.63873ZM8 2.35C9.16695 2.35 10.2861 2.81357 11.1113 3.63873L11.9598 2.7902C10.9096 1.74 9.48521 1.15 8 1.15V2.35ZM4.88873 3.63873C5.71389 2.81357 6.83305 2.35 8 2.35V1.15C6.51479 1.15 5.09041 1.74 4.0402 2.7902L4.88873 3.63873ZM3.6 6.75C3.6 5.58305 4.06357 4.46389 4.88873 3.63873L4.0402 2.7902C2.99 3.84041 2.4 5.26479 2.4 6.75H3.6ZM7.31562 13.4214C6.60347 12.7851 5.66569 11.832 4.90943 10.6696C4.15193 9.50544 3.6 8.16783 3.6 6.75H2.4C2.4 8.47922 3.07077 10.0441 3.90359 11.3241C4.73765 12.606 5.75779 13.6387 6.5161 14.3162L7.31562 13.4214ZM8 13.8964C7.94117 13.8964 7.89717 13.887 7.81199 13.833C7.69818 13.7607 7.56373 13.643 7.31562 13.4214L6.5161 14.3162C6.93321 14.6889 7.34507 15.0964 8 15.0964V13.8964ZM8.68438 13.4214C8.43627 13.643 8.30182 13.7607 8.18801 13.833C8.10283 13.887 8.05883 13.8964 8 13.8964V15.0964C8.65493 15.0964 9.06679 14.6889 9.4839 14.3162L8.68438 13.4214ZM8 9.85C9.71208 9.85 11.1 8.46208 11.1 6.75H9.9C9.9 7.79934 9.04934 8.65 8 8.65V9.85ZM4.9 6.75C4.9 8.46208 6.28792 9.85 8 9.85V8.65C6.95066 8.65 6.1 7.79934 6.1 6.75H4.9ZM8 3.65C6.28792 3.65 4.9 5.03792 4.9 6.75H6.1C6.1 5.70066 6.95066 4.85 8 4.85V3.65ZM11.1 6.75C11.1 5.03792 9.71208 3.65 8 3.65V4.85C9.04934 4.85 9.9 5.70066 9.9 6.75H11.1Z" fill="#1F1F1F"></path></svg>

    <div
      style={{
        marginLeft: "8px",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          color: "#1f1f1f",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        Location not set
      </span>

      <span
        style={{
          color: "#1254E7",
          fontSize: "14px",
          marginLeft: "8px",
          fontWeight: "500",
        }}
      >
        Select delivery location
      </span>

      <svg
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 17 17"
      >
        <path
          d="m6.627 3.749 5 5-5 5"
          stroke="#1254E7"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

</div>

<div
  style={{
    background: "linear-gradient(rgb(222,239,255), #fff, #fff)",
    padding: "10px 12px",
    marginTop:"-24px"
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "48px",
      background: "#fff",
      border: "1.6px solid rgb(88,171,250)",
      borderRadius: "12px",
      padding: "0 14px",
      boxSizing: "border-box",
    }}
  >
    <svg width="24" height="24" viewBox="0 0 256 256">
      <path fill="none" d="M0 0h256v256H0z"></path>
      <circle
        cx="116"
        cy="116"
        r="84"
        fill="none"
        stroke="#1254E7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
      <path
        fill="none"
        stroke="#1254E7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M175.4 175.4 224 224"
      ></path>
    </svg>

    <input
      type="text"
      placeholder="Search for Products"
      style={{
        border: "none",
        outline: "none",
        marginLeft: "12px",
        width: "100%",
        fontSize: "16px",
        color: "#111",
        background: "transparent",
        fontFamily: "Arial, sans-serif",
      }}
    />
  </div>
</div>
    
    </>
  );
}
