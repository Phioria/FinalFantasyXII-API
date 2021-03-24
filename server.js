const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');
const app = express();
const getRouter = require('./routes/get-routes');

const corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Import Routes Here
// require('./routes/get-routes')(app);
app.use('/api', getRouter);

app.use(middleware.notFound);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
