import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";
import { useNavigate } from "react-router";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
const navigate = useNavigate();
  // Post Dummy Data State
  const [postData, setPostData] = useState([]);

  // User Post Ads List
  const [userPost, setUserPost] = useState([]);

  // Set & Get Loaclstorage
  useEffect(() => {
    setLocalStorage()
   const data =  getLocalStorage();
    setPostData(data)
    const getUserPost = localStorage.getItem('UserPost') ? JSON.parse(localStorage.getItem('UserPost')):[];
     setUserPost(getUserPost);
  }, [])

  // Add Post Data
  const addPost = (obj) => {
  let data = getLocalStorage();
  data.push(obj);
  localStorage.setItem('PostAds', JSON.stringify(data));
  setPostData(data);

  setUserPost(prev => {
    const updated = [obj, ...prev];
    localStorage.setItem('UserPost', JSON.stringify(updated));
    return updated;
  });
  
};

 // Delete Post
const deletePost = (id)=> {

  let data = getLocalStorage();
   data = data.filter((post)=> post.id != id);
   localStorage.setItem('PostAds', JSON.stringify(data));
   setPostData(data);
   setUserPost(prev =>{
    console.log('before userpost',prev);
    const data =  prev.filter((post) => post.id != id );
    localStorage.setItem('UserPost', JSON.stringify(data));
    return data
   });
   

}

  // Search
   const searchFunc = (e)=>{
   const searchText = e.target.value;   // get text from input
   setPostData(getLocalStorage)
   navigate('/');
   if(searchText == ''){
    setPostData(getLocalStorage)
   }else{
     setPostData(prev => prev.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()) ||post.category.toLowerCase().includes(e))
   );
   }
   
}


  return (
    <PostContext.Provider value={{ postData , addPost, userPost ,deletePost ,searchFunc}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
