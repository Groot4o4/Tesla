import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section( {title,
description,
backgroundImg,
lBtn,
rBtn}) {
    return (
        <Wrap bgImage={backgroundImg}>
           <Fade bottom>
            <IteamText>
           
                <h1>
                   {title}
                </h1>
                

                <p>{description}</p>
            </IteamText>

            </Fade>

           

             <Buttons>
             <Fade bottom>
            <ButtonGroup>

                <LeftButton>{lBtn}</LeftButton>

                { rBtn &&  <RightButton>{rBtn}</RightButton> }
                
            </ButtonGroup>

            </Fade>

            <DownArrow src="images/down-arrow.svg" />


            </Buttons>
            
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`

 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 /* background-image: url("/images/model-s.jpg"); */
 display:flex;
 flex-direction:column;
 justify-content: space-between;
 align-items: center;
 background-image:${props=>`url("images/${props.bgImage}")`}


`

const IteamText = styled.div`
padding-top: 15vh;
text-align: center;

`

const ButtonGroup = styled.div`
 
  display:flex;
  margin-bottom:20px;

  @media(max-width:786px){
    flex-direction: column;

  }
  


`

const LeftButton = styled.div`
background-color:rgba(23,26,30,0.8) ;
  height: 40px;
  width: 256px;
  color:white;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity:0.85;
  font-size:12px;
  cursor:pointer;
  margin: 8px;
  

`

const RightButton = styled(LeftButton)`
background-color: white ;
opacity:0.65;
color:black;


`

const DownArrow = styled.img`

height:40px;
animation: animateDown infinite 1.5s;


`

const Buttons = styled.div``