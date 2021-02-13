import './style.scss';
import { useStoreon} from "storeon/react";
import deleteItem from '../../assets/img/delete.svg';


function EatingsProductsList({location}) {
    const {storage} = useStoreon('storage');
    let locationSearch
    if (location){
        locationSearch = location;
    } else{
        locationSearch = (window.location.search).slice(window.location.search.indexOf('=') + 1)
    }
    console.log(storage[locationSearch].totalCalories)
    return (
        <>
            <h1 className="title-producs">{locationSearch} </h1>
            <ul className='products__list'>
            {storage[locationSearch].listProducts && storage[locationSearch].listProducts.map(item => 
                <li className="products__item">
                    <div className="products__item-content">
                    <span className="products__item-name" > {item.name}</span> 
                    <span className="products__item-calories">{item.calories} kcal</span>
                    </div>
                    <img  className='icon-delete' src = {deleteItem} alt = 'delete'/>
                </li>
                )}
            </ul>
            <p className='products__footer'>Total: {storage[locationSearch].totalCalories} kcal</p>
        </>
    )
}
export {
    EatingsProductsList
}