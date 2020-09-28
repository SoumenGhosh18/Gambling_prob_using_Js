
let Result;
let LuckyDay = 0;
let UnluckyDay = 0;
class GamblingMain {

    betting = () => {
        var Stack = 100;
        while (Stack != 50 && Stack != 150) {
            var random = (Math.floor(Math.random() * 2)) + 1;
            switch (random) {
                case 1:
                    Stack--;
                    break;
                case 2:
                    Stack++;
                    break;
            }
        }
        return Stack;
    }

    perDayAmountEarn = (days) => {
        do {
            let TotalAmount = 0;
            let Day = 1;
            var array = new Array(days);
            var TotalProfit = 0;
            var TotalLoss = 0;
            while (Day <= days) {
                Result = this.betting();
                  if (Result == 50) {
                    
                        console.log("In day " + Day + " he lost amount..." + 50);
                        TotalLoss = TotalLoss + 50;
                        TotalAmount = TotalAmount - 50;
                        array[Day - 1] = TotalAmount;
                
                  }
                    else{
                        console.log("In day  " + Day + " he won amount.." + 50);
                        TotalProfit = TotalProfit + 50;
                        TotalAmount = TotalAmount + 50;
                        array[Day - 1] = TotalAmount;
                    }
                
                Day++;
            }

            if (TotalProfit >= TotalLoss) {
                console.log("Total earning in a month ........." + (TotalProfit - TotalLoss));
                console.log();
            }
            else {
                console.log("Total loss in a month ..........." + (TotalLoss - TotalProfit))
                console.log();
            }
        } while (TotalProfit > TotalLoss)
        return array;
    }

    getLuckyUnluckyDay(days) {
        let array = this.perDayAmountEarn(days);
        let high = array[0];
        let low = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > high) {
                high = array[i];
                LuckyDay = i + 1;
            }
            if (low > array[i]) {
                low = array[i];
                UnluckyDay = i + 1;
            }
        }
        console.log("The most luckyest day is..." + LuckyDay + " In that day his earn " + high);
        console.log("The most unluckyest day is..." + UnluckyDay + " In that day his earn " + low);
    }
}
module.exports = new GamblingMain();