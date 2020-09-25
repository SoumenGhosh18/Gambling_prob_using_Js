class GamblingMain{
main(){
    console.log("Welcome to gambling simulation problem");
    const a= require('./GamblingImpl')
   a.forHowManyDayYouWantToPlay(30);
}
}
const obj = new GamblingMain();
obj.main();
