/**
You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
this seams kind of like the best sums problem. 

**/

const coinChange = (coins, amount, memo={}) =>  {
    if (amount in memo) return memo[amount]
    
    //when we reach the bottom bubble up an empty array that we will fill with the option
    if (amount === 0) return 0
    //want to return -1 if we get a negative amount. Since we wont be able to make a sum of that
    if (amount < 0) return -1

    //this will store our best option. Set to -1 so that if we have no options we can just return it as -1
    let shortestChange = Number.MAX_SAFE_INTEGER

    //loop through all the nums
    for (let co of coins) {
        const remainder = amount - co
        let change = coinChange(coins, remainder, memo)
        if (change !== -1) {
            if (shortestChange === Number.MAX_SAFE_INTEGER || shortestChange > change) {
                shortestChange = change + 1
            }
        }
    }
    shortestChange = shortestChange !== Number.MAX_SAFE_INTEGER ? shortestChange : -1
    memo[amount] = shortestChange
    return shortestChange 

};


console.log(coinChange([1, 2, 5], 11)) //Output = 3 || 11 = 5 + 5 + 1
console.log(coinChange([1, 2, 5], 100))


//Lets Visualize this in a tree

/**
 * Basically for every option in coinChange 
 * I can subtract from my target amount until I get to 0
 * Keep track of the minumum amout of options and return at the end. 
 */
                                
                            
