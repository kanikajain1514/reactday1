import React,{useState,useEffect, use} from 'react'
import axios from "axios"
import { Link } from "react-router-dom";

function Imageapi() {

    const [images,setimages]=useState([])

    const getimages=async ()=>{     
      // arrow function to fetch images from the API


        const response =await axios.get("https://picsum.photos/v2/list")
        console.log(response.data);
        setimages(response.data)
        // data is stored in the state variable "images" using the setimages function
    }
    useEffect(()=>{
    // useeffect run when the component loads for the first time 
        getimages()
    },[])

  return (

    <div>
      {images.slice(0, 3).map((image) => (            // images are sliced to display only the first 3 images and then mapped to create a list of image elements
    <Link key={image.id} to={`/image/${image.id}`}> 

        <img key={image.id} src={image.download_url} alt={image.title} />
    </Link>
      ))}
    </div>
  )
}
             

export default Imageapi
