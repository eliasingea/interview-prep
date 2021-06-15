/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * 
 * 
 * Suppose Andy and Doris want to choose a restaurant for dinner, 
 * and they both have a list of favorite restaurants represented by strings.
 * You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, 
 * output all of them with no order requirement. You could assume there always exists an answer.
 * 
 * Ex: Input: 
 * list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
 * list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only restaurant they both like is "Shogun".
 */
var findRestaurant = function(list1, list2) {
    let map = new Map()
    let output = []
    //set the map with the current value and its index
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    //we are trying to get the minimum sum index so create min value. 
    let min = Number.MAX_SAFE_INTEGER

    //iterate through list2
    for (let j = 0; j < list2.length; j++) {
        //if map has list2 value get the sum of list1 index from the map plus the current lists value index
        if (map.has(list2[j])) {
            let tempSum = map.get(list2[j]) + j
            //if the sum is equal to the minimum then we can push into the output array.
            if(tempSum === min) {
                output.push(list2[j])   
            } else if(tempSum < min) { // if it is less than the minimum then it means we have found a new minIndex and we have to reinstantiate the output
                //array with that current value and update our min value. 
                output = [list2[j]]
                min = tempSum
            }         
        }
    }
    return output;
};