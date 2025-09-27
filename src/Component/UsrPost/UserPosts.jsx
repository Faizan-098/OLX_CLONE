import style from './UserPost.module.css'
import { FaUserGraduate } from "react-icons/fa6";
import Card from '../Card/Card'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router';

const UserPosts = ({userPost}) => {
  const {user}  = useContext(AuthContext)
  
  return (
    <>
    <h1>My Ads</h1>
    <div className={style.postContainer}>
      <div className={style.profile}>
         <div className={style.icon}>
            <FaUserGraduate/>
         </div>
        <h2>{user.username}</h2>
        <h3>{user.userEmail}</h3>
      </div>
      <div className={style.userPosts}>
        {
          userPost.map((post,index) => {
            return  <Card 
                key={index}
                price={post.price}
                title={post.title}
                location={post.location}
                time={post.postedAt}
                img={post.image}
                id={post.id}
                crossStyle={style.cross}
              />
             
          })
        }
      </div>
    </div>
    </>
  )
}

export default UserPosts
