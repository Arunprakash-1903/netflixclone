import React ,{useContext,createContext,useState} from "react";
import  {Title,Frame,Header,Body,Item,Container,Inner} from "./styles/accordion"
const ToggleContext=createContext();
export default function Accordion({children,...resprops}){
    return <Container {...resprops}>
        <Inner>{children}</Inner>
    </Container>
}

Accordion.Title=function AccordionTitle({children,...resprops}){
    return <Title {...resprops}>{children}</Title>
}
Accordion.Frame=function AccordionFrame({children,...resprops}){
    return <Frame {...resprops}>{children}</Frame>
}
Accordion.Item=function AccordionItem({children,...resprops}){
    const [toggle, settoggle] = useState(false);

    return (

    <ToggleContext.Provider value={{toggle,settoggle}}>
    <Item {...resprops}>{children}</Item>
    </ToggleContext.Provider>
    ) 
}
Accordion.Header=function AccordionHeader({children,...resprops}){
    const {toggle,settoggle}=useContext(ToggleContext);
    return <Header {...resprops} onClick={()=>settoggle(prev=>!prev)}>{children}
    
    {toggle?<img src="/images/icons/close-slim.png" alt="close"></img>:
    <img src="/images/icons/add.png" alt="open"></img>
    }
    </Header>
}
Accordion.Body=function AccordionBody({children,...resprops}){
    const {toggle}=useContext(ToggleContext);
    return toggle ?<Body>{children}</Body>:null
}