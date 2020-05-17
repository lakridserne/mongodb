
// db.tweets.mapReduce(
//     //map function
//     function() 
//     {
        
//             //var hashtags = this.entities.hashtags;
//             this.entities.hashtags.forEach( tweet => emit(tweet.text, 1));
        
//     },  
//     //reduce function
//     function(key,values) 
//     {   
      
//         return Array.sum(values);
       
//     }, 
//     {  
//        out: "top_10_hashtags"
//     }
//  ).find().sort({'value': -1}).limit(10);

 db.tweets.mapReduce(
    // Map function
    function () {
        // Iterate all hashtags and emit text/ tag as key and add a 1 to the array for each occurance
        this.entities.hashtags.forEach(t => emit(t.text, 1));
    },
    // Reduce function
    function (key, values) {
        // Return length of array(1's / count of hashtag)
        return values.length
    },
    {
        out: "top_10_tweets",
        // only returns rows with hashtags
        query: { "entities.hashtags": { $exists: true } }
    }
    // returns student list and sorts desc and returns first 10;
).find().sort({ 'value': -1 }).limit(10)