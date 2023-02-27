import React from 'react';
import {
    Title,
    Container,
    DisplayComponents,
    SeachContainer,
    SeachInput,
    ContainerSeach,
    ButtonSeach,
} from '../style/GlobalStyled'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMapAlt} from 'react-icons/bi'
import ReturnSeach from '../ReturnData/Return';
import { useState } from 'react';
import api from '../../Api/api'
import Swal from 'sweetalert2';


export default function Seach (){ 
    
    const[cep,Setcep]= useState()
    const[request,Setrequest] = useState({})
        
     function handleCepMask (args) {
            let mask = args.target.value
            let positionMask = mask.split('')
            let masklength = positionMask.length
        
            if(masklength === 5){ 
               args.target.value += '-'
            } 
            let CEP =  args.target.value.replace('-','')
            Setcep(CEP)
          
        }
        async function handleSearch (){ 
            let Input = document.getElementById('Input_cep')
            if( cep === ""){ 
                console.log('cep is  null')
                return
            }
            try { 
                const response = await api.get(`${cep}/json`)
                Setrequest(response.data)
                Input.value =''
            }catch{ 
                if(request === undefined){
    
                    Swal.fire({
                        icon: 'error',
                        title:'ERROR 400',
                        text: 'Houver um erro ao buscar o cep tente novamente',
                    })    
                }
                

                Swal.fire({
                    icon: 'error',
                    title: 'ERROR 400',
                    text: 'Houver um erro ao buscar o cep tente novamente',
                })
                
                Input.value =''
            }
        }

    return(
        <>
        <Container>

        <DisplayComponents>

            <SeachContainer>

                <Title> <BiMapAlt/></Title> 
                <ContainerSeach>
                
                 <SeachInput id='Input_cep' placeholder='Digite seu CEP' type="text" maxLength="9" onChange={handleCepMask} /> <ButtonSeach onClick={handleSearch}> <AiOutlineSearch/> </ButtonSeach>
       
                </ContainerSeach>
                

            </SeachContainer>
             {Object.keys(request).length > 0  && ( 
             <ReturnSeach cep={request.cep} bairro={request.bairro} logradouro={request.logradouro} uf={request.uf} localidade={request.localidade}/>)
             }
           
         </DisplayComponents>

          

        </Container>
           
        </>
    )
}