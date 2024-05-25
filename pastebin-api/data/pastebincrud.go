package data

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	Object "pastebin-api/object"
)

func getCollection() *mongo.Collection {
	client := getMongoClient()
	collection := client.Database("pastebin").Collection("text")
	return collection
}

/*
*
InsertText function inserts a content to be shared on mongo DB
Returns the unique object ID returned by the mongo DB server as response
*/
func InsertText(text Object.Text) string {
	result, err := getCollection().InsertOne(context.TODO(), text)
	if err != nil {
		fmt.Printf("Error while inserting text to the database: %s\n", err.Error())
	}
	return result.InsertedID.(primitive.ObjectID).Hex()
}
