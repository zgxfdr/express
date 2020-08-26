const mongoose = require('mongoose');
// await mongoose.connect('mongodb://localhost/my_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
const data_url = "mongodb://localhost/my_database";
mongoose.connect(data_url,(err)=>{
    if(err){
        console.log("连接失败");
    }else{
        console.log("连接成功");
    }
})
 
module.exports = mongoose;