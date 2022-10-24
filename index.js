const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrlApp = require('./routes/companyA');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database is connected"));

app.use(express.json());
app.use(cors())

app.use('/api', routesUrlApp)

app.listen(PORT,  () => console.log(`Server is running at ${PORT}`))
