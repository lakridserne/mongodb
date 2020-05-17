# MongoDB
In this project we are doing some MongoDB project. We have loaded in some tweets to analyze using MongoDB.

## Exercise:	Sharding	in	MongoDB	
What is sharding in mongoDB?
1. “Sharding is the process of storing data records across multiple machines and it is MongoDB's approach to meeting the demands of data growth. As the size of the data increases, a single machine may not be sufficient to store the data nor provide an acceptable read and write throughput.”
Source: https://docs.mongodb.com/manual/sharding/

What are the different components required to implement sharding?

2. “A MongoDB sharded cluster consists of the following components”

a. ”shard: Each shard contains a subset of the sharded data. Each shard can be deployed as a replica set.”

b. ”mongos: The mongos acts as a query router, providing an interface between client applications and the sharded cluster.”

c. ”config servers: Config servers store metadata and configuration settings for the cluster. As of MongoDB 3.4, config servers must be deployed as a replica set (CSRS).”
        
       source: https://docs.mongodb.com/manual/sharding/
        
Explain architecture of sharding in mongoDB?
3. ![architecture of sharding in MongoDB](https://docs.mongodb.com/manual/_images/sharded-cluster-production-architecture.bakedsvg.svg "architecture of sharding in MongoDB")
source: https://docs.mongodb.com/manual/sharding/

a and b: see script.js in Github repo

c

```javascript
{ "_id" : "FCBLive", "value" : 27 }
{ "_id" : "AngularJS", "value" : 21 }
{ "_id" : "nodejs", "value" : 20 }
{ "_id" : "LFC", "value" : 19 }
{ "_id" : "EspanyolFCB", "value" : 18 }
{ "_id" : "IWCI", "value" : 16 }
{ "_id" : "webinar", "value" : 16 }
{ "_id" : "GlobalMoms", "value" : 14 }
{ "_id" : "javascript", "value" : 14 }
{ "_id" : "RedBizUK", "value" : 12 }
```
