import React from 'react'
import styled from 'styled-components'
const NumberSelector = ({setError,error,selectedNumber, setSelectedNumber}) => {
   const arrNumber = [1,2,3,4,5,6];

   const numberSelectorHandler = (value) =>{
    setSelectedNumber(value);
	setError("");
   }
   
  return (
	  <NumberSelectorContainer>
		<p className='err'>{error}</p>
       <div className='flex'>
        {arrNumber.map((value,i)=>(
			<Box isSlected={value === selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
		)) }
       </div>
	   <p className='number-txt'>Select Number</p>
	  </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
.flex{
	display: flex;
	gap: 24px;
}
.number-txt{
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
	width: 182px;
	height: 36px;
    margin-top: 15px;
	margin-left: 250px;

}
.err{
	width: 420px;
	font-size: 24px;
	height: 36px;
    margin-left: 30px;
	/* margin-top: 28px; */
	display: flex;
    gap: 5px;
	color: red;

}

`;


const Box = styled.div`
height: 52px;
width: 52px;
border: 1px solid black;
display: grid;
place-items: center;
font-weight: 700;
font-size: 24px;
background-color: ${(props) => (props.isSlected ? "#000": "white")};
color: ${(props) => (props.isSlected ? "#fff": "#000")};
margin-top: 20px;
`;