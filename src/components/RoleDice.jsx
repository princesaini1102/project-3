import React from 'react'
import styled from 'styled-components'


const RoleDice = ({currentDice,roleDice}) => {
    
	
   

  return (
	<DiceContainer>
		<div className='dice-content' onClick={roleDice}>
			<img src={`/images/face-${currentDice}.png`} alt="dice" />
		<p>Click on Dice to roll</p>
		</div>
		
	</DiceContainer>
  )
}

export default RoleDice;


const DiceContainer = styled.div`

.dice-content{
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	gap: 10px;
	
	p{
		font-size: 24px;
		font-weight: 500;
	    

	}
}
.dice-content img{
	width: 220px;
    height: 220px;
	margin-top: 48px;
    cursor: pointer;
}

`;