import express from "express";

const app = express()
app.use(express.json())

app.get("/test", async(request, response) => {
    response.send("Cheguei no app novo com Node e Docker!")
})

app.listen(3333)