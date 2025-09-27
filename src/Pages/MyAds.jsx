import { useContext } from "react"
import { PostContext } from '../Context/PostProvider'
import UserPosts from "../Component/UsrPost/UserPosts"
const MyAds = () => {
// PostContext 
const {userPost} = useContext(PostContext);

  return (
    <div style={{minHeight:"400px", display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column",   gap:"20px"}}>
      {userPost.length > 0 ? <UserPosts userPost={userPost}/> : <h1>Your Post is Empty</h1>}
    </div>
  )
}

export default MyAds
