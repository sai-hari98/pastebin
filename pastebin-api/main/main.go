package main

import (
	"github.com/gin-gonic/gin"
	"io"
	"net/http"
	"pastebin-api/data"
	"pastebin-api/object"
)

func main() {
	router := gin.Default()
	router.POST("/text", saveText)

	router.Run("localhost:8080")
}

/*
*
save text function inserts the text into database.
Returns the ID of the text to be shared on HTTP response.
*/
func saveText(c *gin.Context) {
	content, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	id := data.InsertText(object.Text{Content: string(content[:])})
	c.IndentedJSON(http.StatusOK, id)
}
