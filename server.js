const http = require("http")

const {getJokes, getJoke, getRandom} = require("./controllers/jokeControllers")

const PORT = 8080
const API_CONTENT_TYPE = {"Content-Type" : "application/json"}

const server = http.createServer(
    async function (req, res) {
        console.log("Request");
        if (req.url === "/api/jokes" && req.method === "GET") {
            let jokes = await getJokes()

            if (jokes) {
                res.writeHead(200, API_CONTENT_TYPE)
            } else {
                res.writeHead(404, API_CONTENT_TYPE)
                jokes = {message: "Jokes not found"}
            }
            res.end(JSON.stringify(jokes))
        }
    }
);

server.listen(PORT)
