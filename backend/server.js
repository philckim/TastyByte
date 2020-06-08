const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//connect database
connectDB();

//INIT middleware
app.use(express.json({ extended: false }));

app.use(cors());
app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/account', require('./routes/api/account'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/home', require('./routes/api/home'));
app.use('/api/recipe', require('./routes/api/recipe'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
