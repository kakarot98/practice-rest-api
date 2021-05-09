const express = require('express')

const router = express.Router()

router.get('/', (req,res)=> {
    console.log('This is from exported router')
    res.send('well')
})

module.exports = router