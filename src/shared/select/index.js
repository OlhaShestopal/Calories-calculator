
import './style.scss'
function Select ({list, ...props}){
  return(
      <select {...props}>
        {list.map(item => <option key={item.id} className="select__item" value={item.value}>{item.title}</option>)}
      </select>
  )
}

export{
  Select
}