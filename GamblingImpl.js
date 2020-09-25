class GamblingImpl {
    
bet() {
   
    var bet =1;
    var Stake =100;
    while(Stake != 150 && Stake !=50)
    {
    var number = Math.random() *2;
    if(number <=1){
          Stake--;
          console.log("loss");
        }
          else{
            Stake++;
            console.log("Win");
        }
    }     
}
}
module.exports = new GamblingImpl();


