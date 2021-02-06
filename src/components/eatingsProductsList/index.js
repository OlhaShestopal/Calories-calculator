import './style.scss'
import { useStoreon} from "storeon/react"
import{useEffect} from 'react'
function EatingsProductsList ({location}) {
const{storage, dispatch}=useStoreon('storage')

// useEffect(() => {
//   dispatch("storage/fetchActiveProductList", location);
// }, [dispatch]);

  return(
    <>
    <h1 className= "title">{location} </h1>
    <ul>
    {storage.active && storage.active.map(item=>{
      <li>{item.name}</li>
    })}
    </ul>
    
    
    </>
  )
}
export {
  EatingsProductsList
}