class GamblingMain{
main(){
    console.log("Welcome to gambling simulation problem");
    const a= require('./GamblingImpl')
    a.bet();
}
}
const obj = new GamblingMain();

obj.main();
