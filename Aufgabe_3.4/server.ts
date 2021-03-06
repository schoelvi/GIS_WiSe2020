import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Aufgabe_3_4 {

    let dataAntwort: Mongo.Collection;


    let mongoLink: string = "mongodb+srv://vivien_1:vivien5@gissose2021.rg9pn.mongodb.net/Daten?retryWrites=true&w=majority";

    console.log("Starting server"); 
    let port: number = Number(process.env.PORT); 
    if (!port)
        port = 8100; 

    startServer(port);
    connectToMongo(mongoLink);

    function startServer(thisport: number | string): void {
        let server: Http.Server = Http.createServer();  
        server.addListener("request", handleRequest); 
        server.addListener("listening", handleListen); 
        server.listen(thisport); 
    }

    async function connectToMongo(mongoLink: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoLink, options);
        await mongoClient.connect();
        dataAntwort = mongoClient.db("Daten").collection("Collection");
        console.log("Verbindung hergestellt.", dataAntwort != undefined);
    }

    function handleListen(): void { 
        console.log("Listening"); 
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!"); 
        console.log(_request.url);

        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pfad: string = <string>url.pathname;
            

            if (pfad == "/datenSenden") {
                
                _response.setHeader("content-type", "text/html; charset=utf-8"); 
                await dataAntwort.insertOne(url.query);
                _response.write("Daten gespeichert");
            } 
            
            if (pfad == "/datenReceive") {

                _response.setHeader("content-type", "text/html; charset=utf-8"); 
                let allData: string[] = await dataAntwort.find().toArray();
                let allDataString: string = JSON.stringify(allData);
                _response.write(allDataString);

                
            } 
            
            if (pfad == "/datenLoeschen") {

              
               _response.setHeader("content-type", "text/html; charset=utf-8"); 
               await dataAntwort.drop();
               _response.write("Daten gelöscht");
            }
        }
        _response.end(); 
       
    }
}