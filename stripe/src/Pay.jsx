import { useState,useEffect, } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const KEY = 'pk_test_51MZAQzAHluDGsHOYdRZBAWvzzY3mHvjVRMTwGbWDg25zn7tJPHmTgUskLHFC1UimqdEljKHQTmFMvLLS3a7DC09v00dXuOeMpc';

const Pay = () => {
  const [stripeToken,setStripeToken] = useState(null);
  const history = useNavigate()

  const onToken = (token) =>{
    setStripeToken(token);
  }
 
  useEffect(()=>{ 
    const makeRequest = async () =>{
      try{
       const res = await axios.post(
        "http://localhost:5000/api/checkout/payment",{
          tokenId: stripeToken.id,
          amount: 2000
        }
        );
      
        console.log(res.data);
        history.push("/success")
      }catch(err){
        console.log(err);
      }
    };
    stripeToken && makeRequest()
  },[stripeToken,history]);

  return (
    <div
      style={{
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }} 
    >
      {stripeToken ? (<span>Processing. Please wait...</span>) :
       ( 
        <StripeCheckout 
        name="Shop Hop"
        image="https://cdn.pixabay.com/photo/2016/09/16/09/21/card-1673581_960_720.png"
        shippingAddress
        billingAddress
        description="Your Total Amount is $100"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
           <button
              style={{
                border:"none",
                width:120,
                borderRadius:"15px",
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:600,
                cursor: "pointer"
                
              }}
              >
               Pay Now
           </button>
        </StripeCheckout>
      )} 
    </div>
  )
}

export default Pay