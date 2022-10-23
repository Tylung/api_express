// @ts-check
import express from 'express';
import router from '../employees/main.js';
import pino from 'pino';

const app = express();

/**
 * This is the port of the server
 * @type { number | string }
 */
const port = process.env.PORT ?? 3000;

const logger = pino(
  pino.destination("./logs/output.log")
);

/**
 * function to add 2 numbers
 * @param {number} n1 - first number
 * @param {number} n2 - second number
 * @returns {number} - result of add
 */
const add = (n1, n2) => {
    return n1 + n2
} 


app.use('/employees', router);

app.get('/', (_req, res) => { 
    logger.info('enter in hola mundo endpoint')
    res.send("Hola Mundo");
});

app.get('/json', (_req, res ) => {

    /**
     * @typedef {Object} person
     * @property {string} name - name of the person
     * @property {number} age - age of the person
     */

    /**
     * @type {person}
     */
    const persona = {
        name: 'Pepe',
        age: 23
    }

    logger.info('enter in json endpoint')

    res.json({
      persona
    });
});


app.get('*', (_req, res) => {
    logger.warn('Not found')
    res.send('Not Found').status(404)
});


app.listen(port, function() {
    console.log(`http://localhost:${ this.address().port }`)
});

