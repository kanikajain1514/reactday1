import { useParams } from "react-router"


function Detailpage() {
    const {id}=useParams()    
      // this lines get the id from the url

  return (
    <div className="detail">
        <h1>Detail page for the image</h1>
        <img src={`https://picsum.photos/id/${id}/500`} alt="Image Detail" />

         {/* https://picsum.photos/id/IMAGE_ID/SIZE */}

         <p>Image ID: this is the information of image.{id}</p>
        
    </div>
  )
}

export default Detailpage
