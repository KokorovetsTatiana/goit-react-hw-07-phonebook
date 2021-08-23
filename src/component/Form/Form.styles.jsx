import styled from "@emotion/styled";


export const TitleSecond = styled.h2`
font-size: 17px;
font-weight: 500;
margin: 0;
justify-content:center;
padding-bottom: 10px;
`
export const Input = styled.input`
max-width:350px;
display: flex;
padding:5px;
margin-bottom: 20px;
cursor: pointer;
border:  solid 2px gray;
box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
border-radius:5px;
&:hover{
    border:  solid 2px black;
    box-shadow: 0 0 20px black(121, 224, 0, 0.5);
}`

export const Button = styled.button`
padding: 5px;
background-color: lightgray;
border: solid 2px black;
box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
border-radius: 10%;
color: black;
&:hover{
    color: white;
    background-color: blue;
    border: solid 2px black;
    box-shadow: 0 0 20px black(121, 224, 0, 0.5); 
}
`