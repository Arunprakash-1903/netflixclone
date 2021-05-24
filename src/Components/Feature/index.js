import React from "react"
import {Container,Title,SubTitle} from "./styles/feature"
export default function Feature({children,...reprops}){
    return <Container {...reprops}>{children}</Container>
}
Feature.Title=function FeatureTitle({children,...resprops}){
    return <Title {...resprops}>{children}</Title>
}
Feature.SubTitle=function FeatureSubTitle({children,...resprops}){
    return <SubTitle {...resprops}>{children}</SubTitle>
}