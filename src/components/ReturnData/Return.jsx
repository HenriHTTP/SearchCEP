import React from 'react';
import {
    ReturnContainer,
    ReturnInfo,
    Information,
} from '../style/GlobalStyled'
import {AiFillHome,AiFillFlag,AiTwotoneBell,AiTwotoneCar,AiTwotoneShop,AiFillEnvironment} from 'react-icons/ai'

export default function ReturnSeach ( {cep,logradouro,bairro,localidade,uf,}){ 
    return (
        <> 
            <ReturnContainer>
                <Information> 
                   <AiFillEnvironment/>Informações
                </Information>

                <ReturnInfo><AiFillHome/>CEP: {cep}</ReturnInfo>
                <ReturnInfo><AiTwotoneCar/>Logradouro: {logradouro}</ReturnInfo>
                <ReturnInfo><AiTwotoneShop/>Bairro: {bairro}</ReturnInfo>
                <ReturnInfo><AiTwotoneBell/>localidade: {localidade}</ReturnInfo>
                <ReturnInfo><AiFillFlag/>UF: {uf}</ReturnInfo>
                   
            </ReturnContainer>
        </>
    )
}