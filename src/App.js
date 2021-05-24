import React from 'react'

import * as ROUTES from './constants/routes'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from'./pages/home'
import SignIn from './pages/SingIn'
import SignUp from './pages/SignUp'
export default function App(){
   return <>
   <Router>
<Switch>
<Route exact path={ROUTES.HOME}>
  <Home/>
</Route>


  <Route exact path={ROUTES.SIGN_IN}>
  <SignIn/>
</Route>


  <Route exact path={ROUTES.SIGN_UP}>
<SignUp/>
</Route>



</Switch>
   </Router>
  
   </>
}