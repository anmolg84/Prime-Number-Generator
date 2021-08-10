
const mongoose = require('mongoose')
const validator = require('validator')


const primeSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        default:'user'
    },
    num1:{
        type:Number,
        required:true
    },
      num2:{
        type:Number,
        required:true
    },
    algorithmChosen:{
        type:Number,
        required:true
    },
    noOfPrimeReturned:{
        type:Number,
        required:true
    },
    Date:{
        type:Date,
        required:true,
        default:Date.now
    }
})




const Prime=mongoose.model('Prime',primeSchema)


module.exports=Prime