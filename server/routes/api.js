
const express = require('express');
const router = express.Router()




router.get('/hello/:name',  function (req, res) {
  res.send(`hello ther mosa ${req.params.name}`)

})


module.exports = router