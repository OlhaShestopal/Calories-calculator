import React from 'react';
import { useStoreon } from 'storeon/react';
import './style.scss'
import { Header } from '../../components/header/index.js'
import { DashboardDiagram } from '../../components/dashboardDiagram/index.js'
import { EatingList } from '../../components/eatingList/index.js';


function Dashboard (props){
  const {storage} = useStoreon('storage');
  const {eatings} = useStoreon('eatings');

  const handleUpdateData = () => {
    props.history.push('/calculating')
  }
  const handleSearchPage = (type) => {
    props.history.push({
      pathname: '/search',
      search: `?location=${type}`,
      state: {type}
    })
  }
  return(
    <div className="dashboard">
      <div className="container">
        <Header handleRoute={handleUpdateData}  />
        <DashboardDiagram 
          calories={storage.yourCalories} 
          freeCal={eatings.freeCalories} 
          sumEatCal={eatings.totalEatCalories}/>
        <EatingList handleRoute={handleSearchPage} />
      </div>
    </div>
  ) 
}
export{
  Dashboard
}