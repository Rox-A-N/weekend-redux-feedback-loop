const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// adds feedback values to db
router.post('/', (req, res) => {
    console.log('In the router.post', req.body);

    const feedback = req.body;
    const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText, [
        feedback.feeling, 
        feedback.understanding, 
        feedback.support, 
        feedback.comments
    ])
    .then((result) => {
        console.log('result', result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error in POST:', error);
        res.sendStatus(500); 
    })
});


module.exports = router;