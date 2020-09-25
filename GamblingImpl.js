class GamblingImpl {
    
bet() {
    var bet =1;
    var Stake =100;
    while(Stake != 150 && Stake !=50)
    {

    var number = Math.random() *2;
    if(number <=1){
          Stake +=bet;
          console.log("loss");
        }
          else{
            Stake = Stake -bet;
            console.log("Win");
        }
       }
       if(Stake == 150)
       console.log("He wins 50% of this stake");
       else
       console.log("He lose 50% of his stake");    
  } 
}  
module.exports = new GamblingImpl();


