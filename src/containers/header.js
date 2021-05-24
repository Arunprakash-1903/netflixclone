import React from 'react'
import { Header } from "../Components"
import * as ROUTES from "../constants/routes"
import logo from "../../src/logo.svg"
export  function HeaderContainer({children}){
    return <Header>
   <Header.Frame>
       <Header.Logo to={ROUTES.HOME} src={logo}/>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>signin</Header.ButtonLink>
    </Header.Frame>
        
  {children}
</Header>


}