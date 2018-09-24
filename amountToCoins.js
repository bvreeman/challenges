
amountTocoins = (amount, coins) => {    
    const coinsArray = [];
    
    coins.forEach((item, i) => {
        while (amount >= coins[i]) {
            coinsArray.push(coins[i]);
            amount = amount - coins[i];
            }
    })
    console.log('coin Array', coinsArray)
}

amountTocoins(52, [25, 10, 5, 1])