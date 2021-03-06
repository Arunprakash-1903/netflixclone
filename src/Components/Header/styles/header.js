
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
export const Container=styled.div`
height:64px;
padding 18px 0;
display:flex;
margin:0 56px;
justify-content:space-between;
align-items:center;
a{
  display:flex;
}
@media (max-width:1000px){
  margin:0 50px;
}

`
export const Background=styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
  no-repeat;
@media (max-width: 1100px) {
  ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
}
`;

export const Logo=styled.img`
height: 36px;
width: 134px;
margin-right: 40px;
@media (min-width: 1449px) {
  height: 45px;
  width: 167px;
}
`;


export const ButtonLink=styled(Link)`
display:block;
background-color:#e50914;
width:84px;
height:fit-content;
padding:8px 17px;
color:white;
cursor:pointer;
border:0;
box-sizing:border-box;
font-size:15px;
border-radius:3px;
text-decoration:none;
`;



