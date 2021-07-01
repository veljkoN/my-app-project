import React  from 'react' 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Posts from './posts/page/Posts'
import NavBar from './shared/Navigation/NavBar'
import Todos from './todos/page/Todos'
import Users from './users/page/Users'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css'

const App:React.FC = () => {
    return (
        <Router>
           <NavBar />
           <Switch>
                <Route path='/todos' exact component={Todos} />
                <Route path='/posts' exact component={Posts} />
                <Route path='/' component={Users} />
           </Switch>
        </Router> 
    )
}

export default App
