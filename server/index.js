import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js';
import Auth from './routes/Auth.js'
import cors from 'cors';

dotenv.config();
const app = express();



connectDB();

const PORT = process.env.PORT || 5000


app.use(express.json());
app.use(cors());

app.use('/auth', Auth);

app.get('/', (req , res) => {
    res.send("Ready")
})

app.listen(PORT , () => {
    console.log(`App Running... ${process.env.PORT}`)
} )