const { use } = require("../routes");

module.exports =  function userHandle(req, res, next){
    console.log(req.body)
    res.send({success:true,data: req.params});
}