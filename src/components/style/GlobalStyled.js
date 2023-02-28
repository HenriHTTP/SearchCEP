import styled from "styled-components";



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
    
`
export const DisplayComponents = styled.div `
    width:100vw; 
    background-color:white;
    display:flex; 
    justify-content:space-around;   
    flex-direction:column;  
    height: 100vh;
    margin:auto;
    @media (min-width:730px ) and (max-width: 900px){
    height: 100vh;
    }
`
export const SeachContainer = styled.div `
    width:100%; 
    margin: auto; 
    height: 50vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:white;
    @media (min-width:730px) and (max-width: 900px){
    width:100%; 
    }
`
export const ReturnContainer = styled.div `
    width:100%; 
    background-color:whitesmoke;
    margin: auto;
    display:flex;
    justify-content:center;
    flex-direction: column;
    height: 50vh;
    @media (min-width:730px ) and (max-width: 900px){
    width:100%; 
    }
    @media (min-width:901px ) and (max-width: 1700px) {
    width:100%; 
    height: 50vh;
    } 
   
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
    @media (min-width:730px ) and (max-width: 900px){
    width:400px;
    }
    @media (min-width:299px) and (max-width: 729px) {
    width: 280px;
    }
   

`
export const ContainerSeach = styled.div `
    width: 570px;
    background-color:#fefefe;  
    margin:auto;
    border:solid 2px #cdcdcd;
    display:flex;
    justify-content:space-around;   
    @media (min-width:730px) and (max-width: 900px){
    width:450px;
    }
    @media (min-width:299px) and (max-width: 729px) {
    width: 300px;
    }

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
    @media (min-width:730px ) and (max-width: 900px){
    font-size:1.5em;
    }
    @media (min-width:299px) and (max-width: 729px) {
    font-size: 1.2em;
    }
    @media (min-width:299px) and (max-width: 729px) {
    font-size: 1.2em;
    }
`
export const ReturnInfo = styled.p `
    color:gray;
    font-size:1.2em;
    text-align:left;
    width:600px;
    padding:10px;
    @media (min-width:730px) and (max-width: 900px) {
    padding: 10px;
    font-size: 1em;
    }  
    @media (min-width:901px ) and (max-width: 1700px) {
    font-size: 1em;
    padding:10px;   
    } 
    @media (min-width:299px) and (max-width: 729px) {
    font-size: 1em;
    padding:5px; 
    width:200px;
    }
`
export const Information = styled.h1 ` 
    color:gray;
    font-size:2em;
    text-align:left;
    padding:10px; 
    @media (min-width:730px ) and (max-width: 900px) {
    padding: 10px;
    font-size: 1.5em;
    }  
    @media (min-width:901px ) and (max-width: 1700px) {
    font-size: 1.5em;
    } 
    @media (min-width:299px) and (max-width: 729px) {
    font-size: 1.2em;
    }

`
export const ReturnContainerText = styled.div `
    width:700px; 
    margin: auto; 
    margin:auto;
    background:whitesmoke;
    @media (min-width:730px) and (max-width: 900px) {
    width:70%;
    margin:auto;
    }
    @media (min-width:901px ) and (max-width: 1700px) {
    width:50%;
    margin:auto;
    }
    @media (min-width:299px) and (max-width: 729px) {
    width:300px;
    margin:auto;
    }
`