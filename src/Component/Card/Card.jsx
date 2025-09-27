import React, { useContext } from "react";
import style from "../Card/Card.module.css";
import { FaRegHeart } from "react-icons/fa6";
import { PostContext } from "../../Context/PostProvider";
import { RxCross2 } from "react-icons/rx";

const Card = ({price,title,img,location,time,crossStyle,id}) => {
  
  
 const {deletePost} = useContext(PostContext)
  return (
    <div className={style.card }>
      <img
        src={img}
        alt="item"
      />
      <div className={style.description}>
        <div className={style.priceContainer}>
        <p>{price}</p> <FaRegHeart size={20}  />
      </div>
      <p>{title}</p>
      <p>{location}</p>
      <small><b>{time}</b></small>
      </div>
        {crossStyle && <span className={crossStyle}><RxCross2 onClick={()=>deletePost(id)} /></span>}
    </div>
  );
};

export default Card;
