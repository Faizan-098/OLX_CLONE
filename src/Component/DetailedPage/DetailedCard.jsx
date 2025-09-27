import React, { useState } from 'react'
import style from './DetailedCard.module.css'
import { FaUserGraduate } from 'react-icons/fa6';
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
const DetailedCard = ({data}) => {
    const [phoneNumber, setPhoneNumber] = useState('Show me Number')
   const showNumber =()=>{
    setPhoneNumber(data.state.number)
   }
  return (
   <>
   {/* DetaildCard */}
    <div className={style.detailedCard}>
       <div className={style.cardImg}>
         <img src={data.state.image} alt="img" />
         <div className={style.itemTitlePric}>
            <h2>{data.state.price}</h2>
            <h2>{data.state.title}</h2>
         </div>
       </div>
       <div className={style.cardInfo}>
           <div className={style.user}>
                <div className={style.cardUserIcon}>
                <FaUserGraduate/>
                </div>
                <div className={style.cardPost}>
                    <p>Posted by</p>
                    <p className={style.username}>{data.state.poster}</p>
                </div>
           </div>
           <hr />
           <div className={style.sinceActive}>
               <div className={style.since}>
                  <p>Member Since</p>
                  <p><strong>{data.state.year}</strong></p>
               </div>
                <div className={style.active}>
                  <p>Active Ads</p>
                  <p><strong>2</strong></p>
               </div>
           </div>
            <div className={style.contactContainer}>
                <div className={style.Btn} onClick={showNumber}>
                <FiPhoneCall size={30} /> <strong>{phoneNumber}</strong>
            </div>
            <div className={style.Btn} onClick={showNumber} >
                <a href="https://web.whatsapp.com/" className={style.anchar} target="_blank"><BsChat size={30}  /><strong>Chat</strong></a>
            </div>
            </div>
            <div className={style.locatId}>
                <div className={style.id}>{data.state.id}</div>
                <div className={style.address}><IoLocationSharp size={28}/> <strong>{data.state.location}</strong></div>
            </div>
        </div>
    </div>

    {/* table */}
   <div className={style.tableContainer}>
     <table className={style.table} >
        <caption><h2>Details</h2></caption>
         <thead>
            <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Brand</th>
                <th>Condition</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
         </thead>
         <tbody>
             <tr>
                <td>{data.state.id}</td>
                <td>{data.state.title}</td>
                <td>{data.state.brand}</td>
                <td>{data.state.condition}</td>
                <td>{data.state.price}</td>
                <td>{data.state.description}</td>
            </tr>
         </tbody>
    </table>
   </div>
    </>
  )
}

export default DetailedCard
