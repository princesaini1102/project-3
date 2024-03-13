import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';



const GamePlay = () => {
	const [score, setScore]=useState(0);
	const [selectedNumber,setSelectedNumber] = useState();
	const [currentDice,setCurrentDice]=useState(1);
	const [error,setError] = useState(""); 
	const [showRules,setShowRules]= useState(false);
	


	const generateRandomNumber = (min,max) =>{
		
		return Math.floor(Math.random() * (max - min) + min);
	};

	const roleDice = ()=>{
        if(!selectedNumber){
			setError( "Please select a number to roll" )
			
			return;
		} 
		
		const randomNumber = generateRandomNumber(1,7)  //dice with 6 sides only
        setCurrentDice((prev)=> randomNumber);
        

		if(selectedNumber===randomNumber){
			setScore((prev)=> prev +randomNumber);
		}else{
			setScore((prev)=> prev -1);
		}
        setSelectedNumber(undefined);

	};
       const eraseScore =()=>{
	     setScore(0);
        }



  return (
	<MainFrame>
		<div className='frame'>
		<TotalScore score={score} />
		<NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
		</div>
		<RoleDice currentDice={currentDice} roleDice={roleDice}/>
		
		   <div className="btns">
		<OutlineButton onClick={eraseScore}>Reset Score</OutlineButton>
		<Button onClick={()=> setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show" } Rules</Button>
		   </div>
		  {showRules && <Rules/>}
	</MainFrame>
  )
}

export default GamePlay;

const  MainFrame = styled.div`
.frame{
	display: flex;
	justify-content: space-between;
	width: 1180px;
	height: 151px;
   
}
.btns{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-top: 40px;
	margin-right: 290px;

}



`;