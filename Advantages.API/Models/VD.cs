using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;


namespace Advantages.api.Models;
public class VD
{
  [BsonId]
  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }
  public string sector { get; set; } = null!;
  public int Intensity { get; set; }

  [BsonElement("region")]
  [JsonPropertyName("region")]
  public List<string> region { get; set; } = null!;

}