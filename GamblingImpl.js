class GamblingImpl {
    
bet() {
  var stake = 100;
  var day = 1;
  var winAmount;
  var lostAmount;
  while(day<=20){
      var winStake = 100;
      var lostStake = 100;
  while(winStake<150 || lostStake>50){
  var number = Math.random() *2;
  if(number <=1){
      lostStake = lostStake-1;
     }
  else{
      winStake = winStake+1;
     }
 }
 winAmount=winStake-stake;
 lostAmount=stake-lostStake;
 console.log("Win amount of day....."+winAmount+" and Lost amount of day...."+lostAmount+" in day no :"+day);
 day=day+1;
}
}
}
module.exports = new GamblingImpl();


