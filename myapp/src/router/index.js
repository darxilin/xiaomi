import React from "react"
//import {Switch} from "react-router"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Home from "../components/Home"
import Search from "../components/Search"
import App from "../App"
const router = (
	<Router>
		<App>
			<Switch>

				<Route path="/home" component={Home}/>
				<Route path="/search/:data" component={Search}/>
                <Route path="*" to="/home"/>
			</Switch>
		</App>
	</Router>
)
export default router