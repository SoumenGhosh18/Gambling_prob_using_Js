class GamblingMain{
main(){
    console.log("Welcome to gambling simulation problem");
    const module= require('./GamblingImpl')
     module.getLuckyUnluckyDay(10);
   
}
}
const obj = new GamblingMain();
obj.main();
