import './style.scss'
import { useStoreon} from "storeon/react"
import {useEffect} from 'react'


function EatingsProductsList({location}) {
    const {storage, dispatch} = useStoreon('storage');
    // console.log(storage. activeMeal)
    return (
        <>
            <h1 className="title-producs">{location} </h1>
            <ul className='products__list'>
            {/* {newStore.listProducts && newStore.listProducts.map(item => <li className="products__item"><span className="products__item-name" > {item.name}</span> <span className="products__item-calories">{item.calories} kcal</span></li>
                )} */}
            </ul>
        </>
    )
}
export {
    EatingsProductsList
}