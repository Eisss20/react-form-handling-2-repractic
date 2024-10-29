import { useState } from "react";


function ProductForm() {
const [nameDetail , setName] = useState("")
const [imageDetail  , setImage] = useState("")
const [priceDetail  , setPrice] = useState(0)
const [despDetail  , setDesp] = useState("")


const sendDataForm = (event) => {
event.preventDefault(event);
  const data = {
    Name : nameDetail,
    Image : imageDetail ,
    Price : priceDetail ,
    Description : despDetail ,
  }
 alert(JSON.stringify(data))
 }


  return (
    <form className="post-form"onSubmit={sendDataForm}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={nameDetail }
            onChange={(event) => {
              // console.log(event.target.value) 
            setName(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={imageDetail}
            onChange={(event) => {
              // console.log(event.target.value)
              setImage(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={priceDetail}
            onChange={(event) => {
              // console.log(event.target.value)
              setPrice(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={despDetail}
            onChange={(event) => {
              // console.log(event.target.value)
              setDesp(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
