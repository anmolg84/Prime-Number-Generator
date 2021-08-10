const express = require('express')
const mongoose=require('mongoose')
const Prime=require('./models/prime')



const app = express()
const port = process.env.PORT || 3000

mongoose.connect('mongodb://127.0.0.1:27017/anmol-api',{
    useNewUrlParser:true
}) 

const db=mongoose.connection

db.on('error',(error)=>console.log(error))
db.on('open',(error)=>console.log("Connected to Database Succesfully"))

app.use(express.json())






app.get('/prime-number/m1', async(req, res) => {
    const num1 = await req.query.num1
    const num2 = await req.query.num2
    let primeCount=0
    let arr1 = [];
    for(let i=num1;i<=num2;i++){
        // Skip when number = 1 or 0
        if(i===1 || i===0){
            continue;
        }
        let isPrime=1;
        for(let j=2;j<=(i/2);j++){
            if(i%j===0){
                isPrime=0;
                break;
            }
        }
        if(Boolean(isPrime)){
            arr1.push(i);
            primeCount++;
        }
    }



    const prime=new Prime({
        "num1":num1,
        "num2":num2,
        "algorithmChosen":1,
        noOfPrimeReturned:primeCount,
    })

prime.save()
    let str = "Using Method 1:";


    res.status(200).send({
        str,arr1
    })
})
app.get('/prime-number/m2', async(req, res) => {
    let num1 =await req.query.num1
    let num2 =await req.query.num2
    let primeCount=0
    let arr2 = [];
    // Check if number is less than 2
    if(num1<=2){
        num1=2;
        if(num2>=2){
            arr2.push(2);
            num1++;
        }
    }
    // Skip  is num1 is even
    if(num1%2==0){
        num1++;
    }
    for(let i=num1;i<=num2;i++){
        let isPrime=1;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime=0;
                break;
            }
        }
        if(Boolean(isPrime)){
            arr2.push(i);
            primeCount++;
        }
    }

    const prime=new Prime({
        "num1":num1,
        "num2":num2,
        "algorithmChosen":1,
        noOfPrimeReturned:primeCount,
    })

prime.save()


    let str = "Using Method 2:";
    res.status(200).send({
        str,arr2
    })
})
app.get('/prime-number/m3', (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    let primeCount=0
    let prime2=Array.apply(null, Array(1000)).map(Number.prototype.valueOf,0);
    let arr3 = [];
    for(let i =2;i<=num2;i++){
        // If number not marked
        if(prime2[i]===0){
            // Mark all its factor in prime array
            for(let j=i*i;j<=num2;j+=i){
                prime2[j]=1;
            }
        }

    }
    for(let i=num1;i<=num2;i++){
        if(prime2[i]===0){
            arr3.push(i);
            primeCount++;
        }
    }

    const prime=new Prime({
        "num1":num1,
        "num2":num2,
        "algorithmChosen":1,
        noOfPrimeReturned:primeCount,
    })
prime.save()

    let str = "Using Method 3:";
    res.status(200).send({
        str,arr3
    })
})




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})