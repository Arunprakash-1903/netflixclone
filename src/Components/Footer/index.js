import  React from "react"

import { Break, Column, Container, Row, Text, Title,Link } from "./styles/footer"
export default function  Footer({children,...resprops}){
    return <Container {...resprops}>{children}</Container>

}
Footer.Row=function FooterRow({children,...resprops}){
    return <Row {...resprops}>{children}</Row>
}
Footer.Column=function FooterColumn({children,...resprops}){
    return <Column {...resprops}>{children}</Column>
}
Footer.Link=function FooterLink({children,...resprops}){
    return <Link {...resprops}>{children}</Link>
}
Footer.Title=function FooterTitle({children,...resprops}){
    return <Title {...resprops}>{children}</Title>
}
Footer.Text=function FooterText({children,...resprops}){
    return <Text {...resprops}>{children}</Text>
}
Footer.Break=function FooterText({children,...resprops}){
    return <Break {...resprops}>{children}</Break>
}