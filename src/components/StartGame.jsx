import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
	<Container>
		<div >
        <img src="/images/dices 1.png" alt="dices" />
		</div>

		<div className='dice-txt'>
         <h1>DICE GAME</h1>
		 <br />
		 <Button onClick={toggle}>Play Now</Button>
		</div>
	</Container>
  )
}

export default StartGame;
const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.dice-txt h1{
	font-weight: 700;
	font-size: 96px;
	color: black;
	width: 528px;
	height: 144px;
	line-height: 144px;
}


`;

