import React from 'react'

import * as ROUTES from './constants/routes'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from'./pages/home'
import SignIn from './pages/SingIn'
import SignUp from './pages/SignUp'
import Browse from "./pages/browse"
import {IsUserRedirect,ProtectedRoute } from './helpers/routes'
import { useAuth } from './hooks'

export default function App(){
  const {user}=useAuth()
  console.log(user);
   return <>
   <Router>
<Switch>
<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOME}>

<Home/>

</IsUserRedirect>

<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_IN}>

<SignIn/>

</IsUserRedirect>
  


<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_UP}>

<SignUp/>

</IsUserRedirect>
<ProtectedRoute user={user}>

<Browse/>
</ProtectedRoute>




</Switch>
   </Router>
  
   </>
}