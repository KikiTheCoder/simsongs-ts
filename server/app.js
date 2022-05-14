const express = require("express")
const path = require("path")
const app = express();

const PORT = process.env.PORT | 4000

app.use("/", express.static(path.join(__dirname, "../dist")))

app.get("/api/",(req, res) => {
    res.json({message: "no api yet"})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"))
})


app.listen(PORT, () => {
    console.log(`Frontend listening on http://localhost:${PORT}`);
})