/*Imports*/
import express from 'express';
import cors from "cors"
import cookieSession from 'cookie-session';
import connectDB from './db/connectDB.js';
import UserRouter from "./Route/UserRoute.js"

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';


/*initionuzation*/

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey There');
});

app.use(UserRouter);

connectDB(DATABASE_URL);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: 'M424-Session',
    // keys: ['key1', 'key2'],
    secret: 'COOKIE_SECRET', // should use as secret environment variable
    httpOnly: true,
  })
);




// set port, listen for requests
const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
