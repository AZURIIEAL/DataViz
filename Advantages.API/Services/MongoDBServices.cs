using Advantages.api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

namespace Advantages.api.services;

public class MongoDBService{

    private readonly IMongoCollection<VD> vdCollection;
    public MongoDBService(IOptions<MongoDBSettings>MongoDBSettings){


        MongoClient client = new MongoClient(MongoDBSettings.Value.ConnectionURI);
        IMongoDatabase database = client.GetDatabase(MongoDBSettings.Value.DatabaseName);
        vdCollection = database.GetCollection<VD>(MongoDBSettings.Value.CollectionName);

    }
    public async Task<List<VD>> GetAsync(){
        return await vdCollection.Find(new BsonDocument()).ToListAsync();
    }

    }
