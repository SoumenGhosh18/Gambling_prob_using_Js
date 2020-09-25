class GamblingImpl {
    
bet() {
   
    var bet =1;
    var Stake =100;
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
module.exports = new GamblingImpl();


