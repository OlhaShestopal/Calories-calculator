import './style.scss'
import {request} from '../../api/request.js'
function Search (){

  const handlerequest = (e) => {
    const resalt = request({url: '/nutrition', method: 'GET', query: {query: e.target.value} })
    console.log(resalt)
  }

  return(
  <div className='container'>
    <input className='input input-search' 
      onInput={handlerequest}
      type='search'
      placeholder=" Введіть назву продукту...">
    </input>
    <form>
      
    </form>
    
  </div>
  
  )
}
export{
  Search
}