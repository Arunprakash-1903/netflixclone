import React from "react"
import { Break, Button, Container, Input, Text } from "./styles/opt-form"
export default function OptForm({children,...resprops}){
    return <Container {...resprops}>{children}</Container>
}
OptForm.Text=function OptFormText({children, ...resprops}){
    return <Text {...resprops}>{children}</Text>

}
OptForm.Button=function OptFormButton({children, ...resprops}) {
    return <Button {...resprops}>{children}
    <img src="/images/icons/chevron-right.png" alt="Try Now"/>
    </Button>
}
OptForm.Input=function OptFormInput({...resprops}){
    return <Input {...resprops}/>
}
OptForm.Break=function OptFormBreak({...resprops}){
    return <Break {...resprops}/>
}