import React from 'react'

import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
	<ScoreContainer>
			<div>
			<h1>{score}</h1>
			<p>Total Score</p>
			</div>
	</ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`





h1{
	font-size: 100px;
	font-weight: 500;
	width: 62px;
	height: 112px;
	margin-left: 90px;
}
p{
	font-size: 24px;
	width: 135px;
	height: 36px;
	font-weight: 500;
	margin-left: 60px;
}

`;