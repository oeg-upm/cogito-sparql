const { executeQuery, execute } = require('./Services/execute_query_Service');
const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');

const app = express();

// Banner

const banner = `
 _____  _____  _____  _____  _____  __       _____         _                 _           _    _____            _           
|   __||  _  ||  _  || __  ||     ||  |     |   __| ___  _| | ___  ___  ___ | |_  ___  _| |  |   __| ___  ___ |_| ___  ___ 
|__   ||   __||     ||    -||  |  ||  |__   |   __|| -_|| . || -_||  _|| .'||  _|| -_|| . |  |   __||   || . || ||   || -_|
|_____||__|   |__|__||__|__||__  _||_____|  |__|   |___||___||___||_|  |__,||_|  |___||___|  |_____||_|_||_  ||_||_|_||___|
                               |__|                                                                      |___|   v0.0.1          
      © Ontology Engineering Group at Universidad Politéctnica de Madrid
      	Authors: Salvador González Gerpe
`;


// Settings
app.set('appName', banner);
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use('/favicon.ico', express.static(__dirname + '../../resources/favicon.ico'));
app.use(express.static(__dirname + '/public'));

// Routes

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/sparql?:query', (req, res) => {
    const query = req.query.query;
    console.log(query);
    /*const query = `
    select *
    from <http://localhost:8890/uuid:file:0b191257-5397-42b7-ba8d-0835f5bf3f51>
        {
        service <https://data.cogito.iot.linkeddata.es/sparql> {
        ?s a ?o.
        }
    } limit 10`;*/

    executeQuery(query).then( result => {
        let response = "";
        result.on('data', (d) => {
            response+=d;
         }).on('end',()=>{
            res.send(response);
         })
    });
        
});





// Execute Express API
app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log(`Server is running on port`, app.get('port'));
});