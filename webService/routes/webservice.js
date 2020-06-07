const express = require('express');
const router = express.Router();


router.get('/webService1',function(req,res){
    res.sendFile(path.resolve('views/webservice.html'));
});
router.get('/webService2',function(req,res){
    res.sendFile(path.resolve('views/webservice.html'));
});
router.get('/webService3',function(req,res){
    res.sendFile(path.resolve('views/webservice.html'));
});
router.get('/webService4',function(req,res){
    res.sendFile(path.resolve('views/webservice.html'));
});
router.get('/webService5',function(req,res){
    res.sendFile(path.resolve('views/webservice.html'));
});


module.exports = router;
