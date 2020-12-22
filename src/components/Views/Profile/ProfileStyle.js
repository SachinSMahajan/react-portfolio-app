import styled from 'styled-components';

export const HeaderContainer = styled.div`
display:flex;
justify-content:space-between;

@media (max-width: 640px){
    flex-direction:column;
}
`
export const Header = styled.div`
display:flex;

@media (max-width: 640px){
    flex-direction:column;
}
`
export const Image = styled.img`
width:200px;
margin-left:1rem;
border-radius:2px;
@media (max-width: 640px){
    width:100px;
    margin-left:0.3rem;
}
`
export const BasicInfoContainer = styled.div`
padding-left:15px;
@media (max-width: 640px){
    padding-left:5px;
}
`
export const ProfileName = styled.h2`
@media (max-width: 640px){
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: 0;
}
`

export const ResumeLink = styled.a`
border-radius:2rem;
display:flex;
text-decoration:none;
padding: 0.75rem 1.5rem;
font-weight:bold;
align-items:center;
margin-top:1rem;
border:2px solid #2ecc40;
background-color: rgba(46,204,64,0.3);
transition: background-color 250ms ease;

&:hover{
    background-color: #2ecc40;
}

svg{
    fill:white;
    margin-left : 8px;
}
@media (max-width: 640px){
    flex-direction:column;
}
`
export const ResumeContainer = styled.div`
@media (max-width: 640px){
    display:flex;
    flex-direction:column;
    align-content:center;
    justify-content:center;
}
`
export const ProfileLink = styled.a`
text-decoration:none;

`
export const Email = styled.div`
display:inline-flex;
margin: .2rem 0;
font-size :1rem;
`