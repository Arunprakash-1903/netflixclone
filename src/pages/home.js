import React from 'react'
import { FaqsContainer } from '../containers/faqs' 
import { JumbotronContainer } from '../containers/jumbotron' 
import { FooterContainer } from '../containers/footer' 
import { HeaderContainer } from '../containers/header'

import OptForm from '../Components/opt-form'
import { Feature } from '../Components'

function Home() {
    return <>
    <HeaderContainer>
  <Feature>
    <Feature.Title>Unlimitted fims, Tv  </Feature.Title>
    <Feature.Title> shows and more.</Feature.Title>  
  <Feature.SubTitle>watch anywhere,Cancle anytime.</Feature.SubTitle>
  <OptForm>
<OptForm.Input placeholder="Email Address"/>
<OptForm.Button><b>Get Started</b></OptForm.Button>
<OptForm.Break/>
<OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>



</OptForm>
  </Feature>
 
    </HeaderContainer>
    <JumbotronContainer/>   
<FaqsContainer/>
  <FooterContainer/>
</>
    
}

export default Home
