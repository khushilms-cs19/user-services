const express = require('express');

// Create a new express application instance
const app = express();


//Constants 
const PORT = 3000;

// middleware usage
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routers 
app.use('/users', require('./routes/userRoutes'));

// Routes
app.get('/', (req, res) => res.json({message:'Hello World!'}));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));