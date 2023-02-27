import styled, { keyframes } from "styled-components";

const puch = keyframes`
    to { right: 100px; }
    from { right:0px; }
`


export const Title = styled.h1 `
    color:#a91515;
    text-align: center;
    font-size:10em;
    padding:10px;
    margin:auto;
`
export const Container = styled.div `
    display: flex;
    justify-content:center;
    height:100vh;
    background: whitesmoke;
`
export const DisplayComponents = styled.div `
    width:900px; 
    display:flex; 
    justify-content:space-around;   
    flex-direction:column;  
    height:900px;
    margin:auto;
`
export const SeachContainer = styled.div `
    width:700px; 
    margin: auto;
    padding:20px; 
    height:350px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:10px;
    background-color:white;
`
export const ReturnContainer = styled.div `
    width:700px; 
    background-color:white;
    margin: auto;
    padding:20px; 
    border-radius:10px;
    animation-name:${puch}; 
    animation-duration:0.5s;
    position: relative;
`
export const SeachInput = styled.input `
    width: 500px;
    padding:10px;
    font-size:1em;
    text-align: left;
    color:#cdcdcd;
    margin:auto;
    border:none;
    background-color:transparent;
    outline: 0;

`
export const ContainerSeach = styled.div `
    width: 570px;
    background-color:#fefefe;  
    margin:auto;
    border:solid 2px #cdcdcd;
    display:flex;
    justify-content:space-around;   

`
export const ButtonSeach  = styled.button `
    background-color:transparent;  
    margin:auto;
    border:none;
    font-size : 2em;
    text-align:center;
    display:flex; 
    justify-content:center; 
    padding:10px;
    color:#cdcdcd;
`
export const ReturnInfo = styled.p `
    color:gray;
    font-size:1.2em;
    text-align:left;
    width:600px;
    margin:auto;
    padding:20px;
`
export const Information = styled.h1 ` 
    color:gray;
    font-size:2em;
    text-align:center;
    padding:20px;   

`
