import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import {db} from '../../services/fireBase/firebaseConfig';






const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    
    
    const {itemId} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
        .then((response) =>{
            setProduct(
                {...response.data(), id: response.id}
            );
            
            
        })
   
      }, [itemId]
      
      
      ); 
      
    return(
      
        <div className="ItemDetailContainer">
            
            <ItemDetail {...product} />

            
        </div>
    )


    
    
}

export default ItemDetailContainer;