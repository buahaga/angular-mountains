const connect = require('../dbs');

module.exports = class MongoDBCommentsDataAccessService {
  constructor(collectionName) {
    this.collection = collectionName;
  }

  get(query) {
    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).find(query).toArray((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }).catch((err) => reject(err));
    });
  }

  add(entity) {
    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).insertOne(entity, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }).catch((err) => reject(err));
    });
  }
}
