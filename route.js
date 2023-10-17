const express = require('express');
const router = express.Router();


router.get('/api/data',(req,res) =>{
    const jsonData = { message:'this is JSON response'};
    res.json(jsonData);
});

module.exports = router;