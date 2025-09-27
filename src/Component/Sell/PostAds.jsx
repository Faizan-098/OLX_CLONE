import  { useContext, useRef, useState } from "react";
import style from "./postAds.module.css";
import {  useNavigate } from "react-router";
import { PostContext } from "../../Context/PostProvider";
import { FiKey, FiUpload } from "react-icons/fi";
const PostAds = () => {
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("Rs");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [description, setDes] = useState("");
  const [year, setYear] = useState("");
  const [condition, setCondition] = useState("");

 const navigate = useNavigate();

  // PostDataContext
  const { addPost } = useContext(PostContext);
  // SubmitFormHandler
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      poster,
      category,
      brand,
      title,
      location,
      number,
      image:image,
      price,
      description,
      year,
      condition,
    };
    addPost(data);
    
  // ✅ Redirect to home
  navigate("/");

  };

  // handleClickImage
  const inpRef = useRef(null)
const handleClickImage = ()=>{
  inpRef.current.click();

}

// getImage
const getImage = (e)=>{
const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // ✅ Base64 string saved instead of File
    };
    reader.readAsDataURL(file);
  }
 
}


  return (
    <div className={style.postContainer}>
      <form className={style.postData} onSubmit={submitHandler}>
        <h2>Post Your Ads</h2>

        {/* row 1: Name + Category */}
        <div className={style.inputRow}>
          <div className={style.inputField}>
            <label htmlFor="name">Your Name:</label>
            <input
              value={poster}
              onChange={(e) => {
                setPoster(e.target.value);
              }}
              type="text"
              placeholder="enter your full name"
              id="name"
              name="name"
              required
            />
          </div>
          <div className={style.inputField}>
            <label htmlFor="category">Category:</label>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="enter your item category"
              id="category"
              name="category"
              required
            />
          </div>
        </div>

        {/* row 2: Brand + Title */}
        <div className={style.inputRow}>
          <div className={style.inputField}>
            <label htmlFor="brand">Your Brand Name:</label>
            <input
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              type="text"
              placeholder="enter your brand name"
              id="brand"
              name="brand"
              required
            />
          </div>
          <div className={style.inputField}>
            <label htmlFor="title">Your Ad Title:</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="enter your Ad title"
              id="title"
              name="title"
              required
            />
          </div>
        </div>

        {/* row 3: Location + Price */}
        <div className={style.inputRow}>
          <div className={style.inputField}>
            <label htmlFor="location">Your Location:</label>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              type="text"
              placeholder="enter your current location"
              id="location"
              name="location"
              required
            />
          </div>
          <div className={style.inputField}>
            <label htmlFor="price">Price:</label>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              placeholder="enter your price"
              id="price"
              name="price"
              required
            />
          </div>
        </div>

        {/* row 4: Number + Year */}
        <div className={style.inputRow}>
          <div className={style.inputField}>
            <label htmlFor="number">Mobile Phone Number:</label>
            <input
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              type="tel"
              placeholder="enter your current phone number"
              id="number"
              name="number"
              required
            />
          </div>
          <div className={style.inputField}>
            <label htmlFor="year">Year:</label>
            <input
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              type="number"
              placeholder="enter year"
              id="year"
              name="year"
              required
            />
          </div>
          <div className={style.inputField}>
            <label htmlFor="condition">Condition:</label>
            <input
              value={condition}
              onChange={(e) => {
                setCondition(e.target.value);
              }}
              type="condition"
              placeholder="enter condition"
              id="condition"
              name="condition"
              required
            />
          </div>
        </div>

        <div className={style.inputImage} onClick={handleClickImage} >
          <input
            ref={inpRef} 
            type="file"
            id="image"
            name="image"
            required
            style={{display:"none"}}
            onChange={getImage}

          />
          {image ? (<img src={image} alt="img" style={{ objectFit:"contain" , width:"100%",height:"100%"}} />):(<FiUpload size={40}/>) }
        </div>

        <div className={style.inputField}>
          <label htmlFor="des">Item Description</label>
          <textarea
            value={description}
            onChange={(e) => {
              setDes(e.target.value);
            }}
            name="des"
            id="des"
            placeholder="Describe the item you are selling"
            required
          ></textarea>
        </div>

        <button>Post now</button>
      </form>
    </div>
  );
};

export default PostAds;
