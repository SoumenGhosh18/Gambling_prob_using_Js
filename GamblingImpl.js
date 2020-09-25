class GamblingImpl {
    
 bettingDay() {
        var Stack = 100;
        var placedBet = 1;
        while (Stack !=50 && Stack != 150) {
            var random = Math.random() * 2;
            if (random <= 1) {
                Stack--;
            }
            else {
                Stack++;
            }
        }
        return Stack;
    }
    forHowManyDayYouWantToPlay(days) {
            var array = new Array(days);
            var TotalAmount = 0;
            var day = 1;
            var Profit = 0;
            var Loss = 0;
            while (day <= days) {
                var result = this.bettingDay();

                if (result == 50) {
                    console.log("day " + day + " "+"he lost......50");
                    Loss = Loss + 50;
                    TotalAmount = TotalAmount - 50;
                    array[day - 1] = TotalAmount;
                }
                else {
                    console.log("day" + day +" "+ "he win......50");
                    Profit = Profit + 50;
                    TotalAmount = TotalAmount + 50;
                    array[day - 1] = TotalAmount;
                }
                day++;
            }
            if (Profit >=Loss) {
                console.log();
                console.log("amount win in day" + days + " " + (Profit - Loss));
            }
            else {
                console.log();
                console.log("amount lose in day " + days + " = " + (Loss - Profit))
            }
            var high = array[0];
            var low = array[0];
            var luckyDay = 0;
            var unluckyDay = 0;
    for (var i = 1; i < array.length; i++)
    {
            if( high < array[i] )
             {
                    high = array[i];
                    luckyDay = i+1;
            }
            if( low > array[i] )
            {
                    low = array[i];
                    unluckyDay = i+1;
            }

        }
        console.log("Luckiest day is day : "+luckyDay);
        console.log("Unluckiest day is day : "+unluckyDay);
        }
    }

module.exports = new GamblingImpl();


