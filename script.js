
// Map reduce assignment
db.tweets.mapReduce(
    // functions to be used to count the occourances of a specific hashtag
    function () {
        this.entities.hashtags.forEach(tag => emit(tag.text, 1));
    },
    // Reduce function
    function (key, values) {
        return values.length
    },
    {
        out: "top_10_tweets",
        // filter so we only get hashtags
        query: { "entities.hashtags": { $exists: true } }
    }
    // sort the tweets descending
).find().sort({value: -1}).limit(10);

