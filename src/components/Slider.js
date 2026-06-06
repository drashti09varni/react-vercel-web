import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import C1 from '../assets/1.webp'
import C2 from '../assets/2.webp'
import C3 from '../assets/3.webp'
import C4 from '../assets/4.webp'
import C5 from '../assets/5.webp'
import C6 from '../assets/6.webp'
import C7 from '../assets/7.webp'
import C8 from '../assets/8.webp'
import C9 from '../assets/9.webp'
import C10 from '../assets/10.webp'
import C11 from '../assets/11.webp'

const Slider = () => {
    const categories = [
        { name: "For You", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M9.93061 6.51562H22.0706C24.0006 6.51562 25.6206 7.98562 25.8306 9.92562L27.5106 25.2356C27.7606 27.5056 26.0006 29.4856 23.7506 29.4856H8.25061C5.99061 29.4856 4.24061 27.5056 4.49061 25.2356L6.17061 9.92562C6.38061 7.98562 8.00061 6.51562 9.93061 6.51562Z" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M22.0507 11.7061C22.0507 15.0861 19.3407 17.8261 16.0107 17.8261C12.6807 17.8261 9.9707 15.0861 9.9707 11.7061" fill="#ffe51fff"></path>
<path d="M22.0507 11.7061C22.0507 15.0861 19.3407 17.8261 16.0107 17.8261C12.6807 17.8261 9.9707 15.0861 9.9707 11.7061" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
</svg> },
        { name: "Fashion", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M8.58301 24.6445H23.3717V25.7525C23.3717 27.4093 22.0285 28.7525 20.3717 28.7525H11.583C9.92615 28.7525 8.58301 27.4093 8.58301 25.7525V24.6445Z" fill="#ffe51fff"></path>
<path d="M16.0003 10.6766C13.1536 10.6766 12.1563 8.21071 11.9404 6.48294C11.8966 6.13193 11.5352 5.88942 11.2056 6.01794C10.418 6.3251 9.33827 6.73537 8.60601 6.97946C7.6201 7.3081 6.82589 8.75958 6.55203 9.44424L4.79622 14.7117C4.62878 15.214 4.88191 15.7597 5.37351 15.9564L8.60601 17.2494V26.7517C8.60601 27.8562 9.50144 28.7517 10.606 28.7517H21.3947C22.4992 28.7517 23.3947 27.8562 23.3947 26.7517V17.2494L26.6645 15.9414C27.1406 15.751 27.3961 15.232 27.2499 14.7405C26.631 12.6601 25.6079 9.47765 25.0379 8.62264C24.3806 7.63673 23.6685 7.11639 23.3947 6.97946L20.7839 6.00041C20.457 5.87783 20.1047 6.11968 20.0623 6.4662C19.8508 8.19473 18.8563 10.6766 16.0003 10.6766Z" stroke="#333333ff" stroke-width="1.4"></path>
<path d="M8.99414 24.6445H22.9612" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round"></path>
<path d="M23.3941 17.661V13.9639M8.60547 17.661V13.9639" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round"></path>
</svg> },
        { name: "Mobile", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<g clip-path="url(#clip0_3415_178959)">
<path d="M9.7998 24.9199V27.1199C9.7998 28.5899 10.9898 29.7799 12.4598 29.7799H19.7598C21.2298 29.7799 22.4198 28.5899 22.4198 27.1199V25.0799" fill="#ffe51fff"></path>
<path d="M9.7998 24.9199V27.1199C9.7998 28.5899 10.9898 29.7799 12.4598 29.7799H19.7598C21.2298 29.7799 22.4198 28.5899 22.4198 27.1199V25.0799" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M12.4198 6.7998H19.7998C21.2498 6.7998 22.4198 7.9698 22.4198 9.4198V27.1298C22.4198 28.5998 21.2298 29.7898 19.7598 29.7898H12.4598C10.9898 29.7898 9.7998 28.5998 9.7998 27.1298V9.4198C9.7998 7.9698 10.9698 6.7998 12.4198 6.7998Z" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M14.8994 9.24023H16.8994" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M14.1699 27.4102H18.1699" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
</g>
<defs>
<clipPath id="clip0_3415_178959">
<rect width="14.22" height="24.59" fill="#ffe51fff" transform="translate(9 6)"></rect>
</clipPath>
</defs>
</svg> },
        { name: "Toys", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M12.2291 14.4229H19.5191C20.3191 14.4229 20.9691 15.0729 20.9691 15.8729V26.9529C20.9691 28.2529 19.9091 29.3129 18.6091 29.3129H13.1491C11.8491 29.3129 10.7891 28.2529 10.7891 26.9529V15.8729C10.7891 15.0729 11.4391 14.4229 12.2391 14.4229H12.2291Z" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M18.1886 14.4427V9.24269C18.1886 9.06269 18.1086 8.88269 17.9586 8.77269L14.5386 6.03269C14.1386 5.71269 13.5586 6.00269 13.5586 6.50269V14.4427H18.1886Z" fill="#ffe51fff" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M11.3691 17.4727L20.8691 17.6027" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
</svg> },
        { name: "Groceries", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M4.99121 23.2591V10.0236C4.99121 9.03574 5.78867 8.23828 6.77657 8.23828H25.3086C26.2965 8.23828 27.094 9.03574 27.094 10.0236V23.2591" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M2.26483 24.3418H29.7475V26.508C29.7475 28.0315 28.5096 29.2694 26.9861 29.2694H5.01428C3.49078 29.2694 2.25293 28.0315 2.25293 26.508V24.3418H2.26483Z" fill="#ffe51fff" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M13.751 26.9131H18.3453" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
</svg> },
        { name: "Fashion", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M27.6826 23.6752H3V26.0571H27.6826V23.6752Z" fill="#ffe51fff"></path>
<path d="M27.7912 10.3187H3.519C3.23236 10.3187 3 10.5527 3 10.8413V25.2545C3 25.5431 3.23236 25.7771 3.519 25.7771H27.7912C28.0779 25.7771 28.3102 25.5431 28.3102 25.2545V10.8413C28.3102 10.5527 28.0779 10.3187 27.7912 10.3187Z" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M23.6321 29.6176L17.7421 28.0256C17.2351 27.8919 16.873 27.4179 16.873 26.8832V26.4457H13.747V26.8832C13.747 27.4179 13.3849 27.8797 12.878 28.0256L7 29.6176" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M11.3089 28.4509C11.3089 28.4509 14.3384 27.5637 15.1109 27.5637C15.9557 27.5637 18.937 28.3537 18.937 28.3537" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg> },
        { name: "Electronics", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M10.725 18.1602L7.58504 20.9801C6.86504 21.7001 6.41504 22.7001 6.41504 23.7901C6.41504 25.4901 7.59504 27.4802 9.81504 28.2202" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M14.125 29.0898H18.125" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M11.1454 7.4703C10.0854 6.7603 8.64538 7.0403 7.92538 8.1003C7.21538 9.1603 7.49538 10.6003 8.55538 11.3203L9.05538 11.6803" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M20.2852 7.36016C21.3852 6.70016 22.8051 7.06015 23.4651 8.15015C24.1251 9.24015 23.7652 10.6702 22.6752 11.3302" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M10.5948 18.0101C9.57484 16.8101 8.96484 15.2502 8.96484 13.5602C8.96484 9.75015 12.0548 6.66016 15.8648 6.66016C19.6748 6.66016 22.7648 9.75015 22.7648 13.5602C22.7648 15.2702 22.1448 16.8301 21.1148 18.0401" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M12.3148 29.7498C13.7508 29.7498 14.9148 28.5857 14.9148 27.1498C14.9148 25.7139 13.7508 24.5498 12.3148 24.5498C10.8789 24.5498 9.71484 25.7139 9.71484 27.1498C9.71484 28.5857 10.8789 29.7498 12.3148 29.7498Z" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M20.265 29.7498C21.701 29.7498 22.865 28.5857 22.865 27.1498C22.865 25.7139 21.701 24.5498 20.265 24.5498C18.8291 24.5498 17.665 25.7139 17.665 27.1498C17.665 28.5857 18.8291 29.7498 20.265 29.7498Z" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M21.2754 18.29L24.4154 21.11C25.1354 21.83 25.5854 22.83 25.5854 23.92C25.5854 25.62 24.5154 27.0701 23.0254 27.6301" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M15.9651 22.5905C18.4338 22.5905 20.4351 20.8399 20.4351 18.6805C20.4351 16.5211 18.4338 14.7705 15.9651 14.7705C13.4964 14.7705 11.4951 16.5211 11.4951 18.6805C11.4951 20.8399 13.4964 22.5905 15.9651 22.5905Z" fill="#ffe51fff" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
</svg> },
        { name: "Dry Fruits", img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<g clip-path="url(#clip0_3415_179007)">
<path d="M20.1605 9.0098V6.8698C20.1605 6.2798 17.8805 5.7998 15.0705 5.7998C12.2605 5.7998 9.98047 6.2798 9.98047 6.8698V9.0098C9.98047 9.5998 12.2605 10.0798 15.0705 10.0798C17.8805 10.0798 20.1605 9.5998 20.1605 9.0098Z" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M18.9098 11.9404H11.0998C8.72498 11.9404 6.7998 13.8656 6.7998 16.2404V25.0204C6.7998 27.3953 8.72498 29.3204 11.0998 29.3204H18.9098C21.2846 29.3204 23.2098 27.3953 23.2098 25.0204V16.2404C23.2098 13.8656 21.2846 11.9404 18.9098 11.9404Z" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
<path d="M22.6597 24.2096H6.96973V17.3096H22.6597" fill="#ffe51fff"></path>
<path d="M22.6597 24.2096H6.96973V17.3096H22.6597" stroke="#333333ff" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"></path>
</g>
<defs>
<clipPath id="clip0_3415_179007">
<rect width="18.01" height="25.12" fill="#ffe51fff" transform="translate(6 5)"></rect>
</clipPath>
</defs>
</svg> }
    ];
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={6}
            className="bg-white"
        >
            {categories.map((item, index) => (
                <SwiperSlide>
                    <div key={index}>
                          <div className="category-icon" style={{marginLeft:'17px', marginBottom:'5px'}}>{item.img}</div>
                        <p className="text-[10px] text-center">{item.name}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider