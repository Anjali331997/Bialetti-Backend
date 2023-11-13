const express = require('express');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var cors = require('cors');
require('dotenv').config()

const { connectToDatabase } = require('./config/db');
const { UserModel } = require('./models/user.model.js')
const { authentication } = require('./Authentication/authentication');
const { ProductRouter } = require('./routes/productroute');
const {CartRouter} = require('./routes/CartRouter');


const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json());


app.get("/", (req, res) => {
    res.send({ messgae: "Base Route" })
})


//signup

app.post("/signup", async (req, res) => {
    const { fname, lname, email, password } = req.body
    bcrypt.hash(password, 3, async function (err, hash) {
        const new_user = new UserModel({
            fname,
            lname,
            email,
            password: hash
        })

        try {
            await new_user.save()
            res.status(200).send({ msg: "sign up successfull" })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ "message": "Something went wrong please signup again later"})
        }
    });
})


//login

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email })
    if (!user) {
        res.status(400).send({ message: "User not found! Sign up first" })
    }
    else {
        const hashed_password = user.password
        bcrypt.compare(password, hashed_password, function (err, result) {
            if (result) {
                let token = jwt.sign({ user_id: user._id }, process.env.SECRET_KEY);
                res.status(200).send({ msg: "login successfull", token: token })
            }
            else {
                res.status(400).send({ message: "Login failed, Invalid credentials" })
            }
        });
    }
})

app.use("/products", ProductRouter);

app.use("/cart" ,authentication,CartRouter)

app.listen(8080, async () => {
    console.log("Listening to port 8000")
    try {
        connectToDatabase()
       
    } catch (error) {
        console.log(error)
    }


})