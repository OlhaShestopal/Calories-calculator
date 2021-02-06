import './style.scss'

function DashboardDiagram (props) {
  return (
    <div className='dashboard__diagram'>
      <div>
        <p> Total: </p>
        <span>{props.calories} kcals</span>
      </div>
      <div>
        <p>Used:</p>
        <span>{props.sumEatCal}  kcals</span>
      </div> 
      <div>
        <p>Stay:</p>
        <span>{props.freeCal} kcals</span>
      </div>
  </div>
  )
}

export{
  DashboardDiagram
}