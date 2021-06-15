
var TweetCounts = function() {
    this.tweet = new Map()
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if (this.tweet.has(tweetName)) {
        this.tweet.get(tweetName).push(time)
    } else {
        this.tweet.set(tweetName, [time])
    } 
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
    //can be improved with binary search tree.
    //this will help with iterating over the tweets in o(log(n))
    
    let time = 0
    if(freq === "minute") time = 60
    else if (freq === "hour") time = 3600
    else if (freq === "day") time = 86400
    
    if(time === 0) return null
    const res = new Array(Math.ceil((endTime - startTime + 1) / time)).fill(0);
    if(!this.tweet.has(tweetName)) return null
    for (let i of this.tweet.get(tweetName)) {
        const resIdx = Math.floor((i - startTime + 1) / time);
        if (startTime <= i && i <= endTime) {
            res[resIdx]++;
        }
    }
    return res;
};

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */