const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const makeAnImpact = require('./router/makeImpact/makeImpact');
const accountSummary = require('./router/accountSummary/accountSummary')


app.use(morgan('combined'))
app.use(cors());
app.use(express.json());


app.use('/grant', makeAnImpact)
app.use('/', accountSummary)

 

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

