const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiver:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date: {
        type: String,
        default: formatDate
        
    },
    category:{
        type:String,
        default:"Other"
    }
});


function formatDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); //month is based on zero
    const year = String(currentDate.getFullYear()).slice(-2); //last two digits of year
    return `${day}/${month}/${year}`;
}
const Transaction = mongoose.model("Transaction",transactionSchema);
module.exports = Transaction;
