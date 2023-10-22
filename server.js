
const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mongodb = require("mongodb");
const connectionString = process.env.MONGO_URL;   //MONGO_URL bizga kuchirib beradi.
    // "mongodb+srv://pirmatovsobir23:KnSHlq9VR0dnUTzc@cluster0.kscois6.mongodb.net/house";  // .env papkasiga utkazib quydik hamma kurolmasligi uchun.
mongodb.connect(                              // mongodbning connect methodidan foy
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
             module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = process.env. PORT || 3000;  //PORTni tekshirsin va PORTda malumot bulsa,
            // usha malumotni saqlasin,bulmsasa 3000ni quysin.
            server.listen(PORT, function () {       //serverni tanlangan PORTda ishga tushirib beradi.
                console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }

    });