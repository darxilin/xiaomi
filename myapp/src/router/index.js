import React from "react"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Home from "../components/Home"
import Search from "../components/Search"
import App from "../App"
const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/" component={Home}/>
				<Route path="/search/:data" component={Search}/>
				<Route path="*" to="/"/>
			</Switch>
		</App>
	</Router>
)
export default router