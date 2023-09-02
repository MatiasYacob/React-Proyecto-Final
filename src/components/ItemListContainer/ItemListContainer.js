import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/fireBase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = itemId
      ? query(collection(db, "productos"), where("categoria", "==", itemId))
      : collection(db, "productos");

    getDocs(collectionRef)
      .then((response) => {
        const productosAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        
        // Set the adapted productos in the state
        setProductos(productosAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]); // Make sure to add itemId as a dependency for re-fetching when it changes

  return (
    <div>
      {/* Render your components here */}
      <ItemList productos={productos} loading={loading} />
    </div>
  );
};

export default ItemListContainer;
