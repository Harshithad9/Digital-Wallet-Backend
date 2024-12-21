const mongoose = require("mongoose")
const Db = " mongodb://localhost:27017/"
const cnmg = () => mongoose.connect(Db, {
    

}).then(() => {
    console.log("success");
}).catch((err) => {
    console.log(err);
})


module.exports = cnmg;