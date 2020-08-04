# Setting Up the Project
- Download `Deno` if not exist
- Get Mongodb running in the background on port 27017 Or any port
- Clone this repo
- `cd <Deno-Friends>`
# Running the App
## Run the Following Command on the Terminal
```MONGO_HOST=<mongo-host OR empty> MONGO_PORT=<port OR empty> deno run --allow-net --allow-read --allow-write --unstable --allow-plugin --allow-env lib/server.ts```
If ENV vars are not supplied, following defaults are picked up
- MONGO_HOST=`mongodb://localhost`
- MONGO_PORT=`27017`