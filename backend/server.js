const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const fundraisersRouter = require('./routes/fundraisers')
const userRouter = require('./routes/router')
const jobRouter = require('./routes/routerjob')
const postRouter = require('./routes/posts')
const eventRouter=require('./routes/events')
app.use('/fundraisers',fundraisersRouter)
app.use('/users',userRouter)
app.use('/jobs',jobRouter)
app.use('/posts',postRouter)
app.use('/events',eventRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});