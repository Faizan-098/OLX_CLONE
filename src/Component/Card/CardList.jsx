import React, { useContext } from 'react'
import Card from './Card'
import style from '../Card/Card.module.css'
import { PostContext } from '../../Context/PostProvider'
import { Link } from 'react-router'
const CardList = () => {
 const {postData} = useContext(PostContext);

  return (
   <>
   <h1 className={style.heading}>Fresh Recommendations</h1>
    <div className={style.cardList}>
       {postData.map( post => {
        return <Link to='/detailed' state={post} key={post.id}>
                <Card 
                price={post.price}
                title={post.title}
                location={post.location}
                time={post.postedAt}
                img={post.image}/>
             </Link>
        })}
    </div></>
  )
}

export default CardList