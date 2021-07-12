const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



const express=require("express");
const cors=require("cors");
const stripe=require("stripe")
('sk_test_51J6y0kSIxS0vNtPlHoWX9PjUMBj51wje0zE5EPMj79sK42yPUjaZzvRLXcw2q4aYWUO5vvZmU7bKL4sGyfQaXoBq00ZEZItv2U' )



//API



//App Config
const app=express();


//Middlewares
app.use(cors({origin:true}));

app.use(express.json());



//API routes

app.get("/",(request,response)=>response.status(200).send("hello world"))
app.get("/arshad",(request,response)=>response.status(200).send("hello Arshadd"))


app.post('/payments/create',async (request,response)=>{
    const total=request.query.total;


    console.log("Payment Request Received BOOm!!! for this amount >>> ",total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });

    response.status(201).send({
            clientSecret:paymentIntent.client_secret,
    })

})

//Listen Command
exports.api=functions.https.onRequest(app)


//Example end point
//http://localhost:5001/clone-50716/us-central1/api