import './assets/main.scss';
import { useStoreon } from 'storeon/react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {Calculate} from './pages/calculatingPage'
import { Dashboard } from './pages/dashboardPage';
import { Search } from './pages/searchPage';


function App() {
  const {storage} = useStoreon('storage');
  return (
    <Router>
      <Switch>
        {storage.yourCalories ? <Redirect exact from="/" to="/dashboard" />: <Redirect exact from="/" to="/calculating" /> }
        <Route path="/calculating" component={Calculate}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/search" component={Search}/>
      </Switch>
  </Router>

)
}
export default App;
