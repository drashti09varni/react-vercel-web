import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { State, City } from "country-state-city";
import CheckoutBar from '../assets/topbar.svg'
import { FaArrowLeft } from 'react-icons/fa6';
import { getStateByCodeAndCountry } from 'country-state-city/lib/state';

const Address = () => {
  const [pay, setPay] = useState(false)
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [hnumber, setHnumber] = useState("");
  const [vname, setVname] = useState("");
  const [error, setError] = useState("");
  const [stateName, setStateName] = useState("")
  const [cityName, setCityName] = useState("")
  const navigate = useNavigate();


  const handelclick = () => {
    const dataset =
      fname.length === 0 ||
      phone.length === 0 ||
      pincode.length === 0 ||
      hnumber.length === 0 ||
      vname.length === 0;
    if (dataset) {
      setError("Please fill all the required fields!");
    } else {

      localStorage.setItem("fname", fname)
      localStorage.setItem("address", hnumber + ", " + vname + ", " + cityName + ", " + stateName + ", " + pincode)
      localStorage.setItem("mobile", phone)
      navigate("/order-summary");
    }
  };

  useEffect(() => {
    setState(State.getStatesOfCountry("IN"));
  }, [])
  return (
    <div className="font-sans min-h-[75vh] pb-4" style={{ fontFamily: "InterRegularCustom" }}>
      {/* <h1 className="text-lg mt-4 my-2 text-green-700 font-bold border-b border-green-700 mx-4 w-fit">Checkout</h1>
      <form class="max-w-sm mx-auto mt-5">
        <div className="flex ">
          <div class="mb-5 w-1/2 pr-2">
            <label class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="first name" />
          </div>
          <div class="mb-5 w-1/2 pl-2">
            <label class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="first name" />
          </div>
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
          </div>
        </div>
      </form> */}
      <div>
        <Link to="/product-details" className="px-4 mt-4 font-bold flex items-center"><FaArrowLeft className="mr-2" /> Add Delivery Address</Link>
        {/* <div className="bg-white py-1">
        <h1 className=" text-[14px] mt-1 mb-2 font-semibold mx-4 w-fit">Add Delivery Address</h1>
        </div> */}
        <div>
          <img src={CheckoutBar} alt='' className='mt-4' />
        </div>
        <div className="px-4">
          <div className="text-center mt-4 text-red-600 text-[14px]">{error}</div>
          <div className=" mx-auto sm:px-6 lg:px-60 lg:py-16 sm:py-6 mt-5 ">
            <div className="grid gap-5 mb-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="fname"
                  className=" border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5"
                  placeholder="Full Name (Required)*"
                  required
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Mobile Number (Required)*"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  name="pincode"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Pin Code (Required)*"
                  required
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div>
                <select
                  className="form-select border border-gray-300 text-gray-900 rounded text-sm block w-full p-2.5"
                  onChange={(e) => {
                  }}
                >
                  <option value="India">India </option>
                </select>
              </div>
              <div>
                <select
                  className="form-select border border-gray-300 text-gray-900 rounded text-sm block w-full p-2.5"
                  onChange={(e) => {
                    setStateName(getStateByCodeAndCountry(e.target.value, "IN").name)
                    setCity(City.getCitiesOfState("IN", e.target.value));
                  }}
                >
                  <option selected>State (Required)*</option>
                  {state.map((item, index) => (
                    <option value={item.isoCode}>{item.name}</option>
                  ))}

                </select>
              </div>
              <div>
             
                    <input
                  type="text"
                  name="city"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="City"
                  required
                   onChange={(e) => {
                    setCityName(e.target.value)
                  }}
                />
              
              </div>
              <div>
                <input
                  type="text"
                  name="hnumber"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Flat, House no, Building, Company"
                  required
                  onChange={(e) => setHnumber(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="vname"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Area, Colony, Street, Sector, Village"
                  required
                  onChange={(e) => setVname(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-4 text-red-600 text-[14px]">{error}</div>
            <div className="text-center mt-5">
              <button className="uppercase text-center bg-yellow-500 text-slate-800 py-3 px-6 mt-2 text-sm font-semibold w-full" onClick={handelclick}>Save Address</button>
            </div>
          </div>
        </div>
      </div>
    
    
    
    
    
    
    </div >
  )
}

export default Address