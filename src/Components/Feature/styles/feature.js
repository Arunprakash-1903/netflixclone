import styled from "styled-components/macro"
export const Container=styled.div`
display:flex;
flex-direction:column;
text-align:center;
border-bottom:8px solid #222;
padding: 165px 45px;
`
export const Title=styled.h1`

color:white;
max-width:800px;
font-size:50px;
margin:auto;
line-height:1.1;
font-weight:bold;

@media(max-width:600){
    font-size:35px;
}

`
export const SubTitle=styled.h2`
color:white;
font-weight:normal;
font-size:26px;
margin:16px auto;

@media(max-width:600px){
font-size:18px;

}
`


