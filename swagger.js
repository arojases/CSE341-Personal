const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Personal API',
    description: 'API ticket sells'
  },
  host: 'cse341-personal-z0hp.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);