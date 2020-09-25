class GamblingMain{
main(){
    console.log("Welcome to")
    const a= require('./GamblingImpl')
    a.bet();
}
}
const obj = new GamblingMain();

obj.main();
