const options = ["rock", "paper", "scissor"]
let player 
let cpu 
let score={}

const computerPlay=()=>{
  let index = Math.floor(Math.random()*options.length) 
  let computerSelection = {option: options[index], number: index}
  console.log(computerSelection)
  return(computerSelection)
}

const playerPlay=()=>{
  let index = Number(window.prompt("Select: 1. rock, 2.paper, 3.scissor", ""))
  if (index != 1 && index != 2 && index != 3){
      window.alert('Please only input number 1-3')
      let playerSelection = 'undefined'
      console.log(playerSelection)
      return(playerSelection)
    }else{
      let playerSelection = {option: options[index-1], number: index-1}    
      console.log(playerSelection)
      return(playerSelection)
    }
   
}

const winner = (p1, p2) =>{
  if (player=='undefined' || p1 == -1){
    console.log("Error in user input")
    return("Error")
  }
  if ((p1 + 1) % 3 == p2){
    score.cpu += 1
    console.log(`${cpu.option} beat ${player.option}, Computer Won`)
    return score
  }else if(p1 == p2){
    console.log(`${player.option} vs ${cpu.option}, it is a draw`)
    return score 
  }else{
    score.player += 1
    console.log(`${player.option} beat ${cpu.option}, You Won`)
    return score
  } 
  
}

const theWinnerIs = (score)=>{
  if (score.player > score.cpu) {
    console.log("Congratulations, You Won !!")
    }
  else if (score.player < score.cpu){
    console.log("You Lose !!!")
  }
  else if (score.player == score.cpu){
    console.log("It's a Tie !!, Refresh page to Play Again")
  }
}


//Main Loop
const game =()=>{
  const totalRound = Number(window.prompt("How many round will we play? (Max.10  round)", 5))
  console.log("Total Round: ", totalRound)
  if (totalRound>10 ||isNaN(totalRound)){
    console.log("error on total Round Input")  
  }
  else{  
    score={player: 0, cpu: 0}
    let round = 1
    let roundWinner
    while (round<=totalRound){ 
      console.log(`round ${round}`)
      player = playerPlay()
      cpu = computerPlay()
      roundWinner = winner (player.number, cpu.number)
      console.log(roundWinner)
      if (roundWinner != "Error"){
        round +=1 
      }
    }
    theWinnerIs(roundWinner)
  }
}



game()




    



       

        
