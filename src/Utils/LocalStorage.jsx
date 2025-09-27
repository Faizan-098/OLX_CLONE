import dummyPosts from "../Data/Data";

export const setLocalStorage = ()=> {
  const isDataExist = localStorage.getItem('PostAds')
  if(!isDataExist){
    localStorage.setItem('PostAds',JSON.stringify(dummyPosts));
    return
  }
  return 
}

export const getLocalStorage = ()=> {
    let data = localStorage.getItem('PostAds');
    if(data){
      return JSON.parse(data);
    }
}