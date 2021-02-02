import './assets/main.scss';
import { useStoreon } from 'storeon/react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {Calculate} from './pages/calculatingPage'
import { Dashboard } from './pages/dashboardPage';
import { Search } from './pages/searchPage';


function App() {
  const {totalCalories} = useStoreon('totalCalories');
  return (
    <Router>
      {totalCalories ? <Redirect from="/" to="/dashboard" />: <Redirect from="/" to="/calculating" /> }
      <Route path="/calculating" component={Calculate}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/search" component={Search}/>
  </Router>

)
}
export default App;
