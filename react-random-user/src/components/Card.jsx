import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import email from "../components/email.svg"
import phone from "../components/phone.svg"
import location from "../components/location.svg"

export default function Card() {
    const [info, setInfo] = useState([])
    const [spin, setSpin] = useState(false)

   useEffect(()=> {
        axios.get("https://randomuser.me/api/")
        .then((res) => {
            console.log(res.data.results)
            setInfo(res.data.results[0])
        })
            .catch((err) => console.log(err))
   },[spin]
   )
   const handleClick = () => {
       setSpin(!spin)
   }
      

    return (
        <div className="card" >
         <div>
        <div className="title">
        <img src={info?.picture?.large}  className="image" />
        <p className="title-p">{info?.name?.title} {info?.name?.first} {info?.name?.last}</p>
        </div>
        <div className="body">
        <div className="e-mail"> 
        <img src={email} className="email-image" />
        <p className="email-p">{info?.email}</p>
        </div>
        <div className="phone"> 
        <img src={phone} className="phone-image" />
        <p className="phone-p">{info?.cell}</p>
        </div>
        <div className="location"> 
        <img src={location} className="location-image" />
        {<p className="location-p">{info?.location?.city} - {info?.location?.country}</p>}
        </div>
        {<p>Age : {info?.dob?.age}</p>}
        <p>Register Date : {info?.registered?.date.slice(0,10)}</p>
        </div>
        <button className="button" onClick={handleClick}>Random User</button>
        </div>
      
        
        </div>
    )
}
