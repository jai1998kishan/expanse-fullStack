import express from 'express';  //this is ES6 version syntax
import {join} from 'path';
import bodyParser from 'body-parser';
const app = express();

import  Sequelize  from './util/db.js';

const port = process.env.PORT || 3000;

import web from './routes/web.js';

//set template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

//to access all the file of public
app.use(express.static(join(process.cwd(), 'public')));    


app.use('/', web);






Sequelize.sync()
.then(result => {
    app.listen(port, () => {
        console.log(`Server listenting at http://localhost:${port}`);
    })
})
.catch(err => {
    console.log(err);
})