import './style.scss'

function DashboardDiagram (props) {
  return (
    <div className='dashboard__diagram'>
      <div>
        <p>Всього </p>
        <span>{props.calories}  калорій</span>
      </div>
      <div>
        <p>Використано</p>
        <span>{props.sumEatCal}  калорій</span>
      </div> 
      <div>
        <p> Залишилось</p>
        <span>{props.freeCal} калорій</span>
      </div>
  </div>
  )
}

export{
  DashboardDiagram
}