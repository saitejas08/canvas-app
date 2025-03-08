import express = require("express");
import jwt from "jsonwebtoken";
const { JWT_SECRET } = require("@repo/backend-common");

import { middleware } from "./middleware";
const app = express();

app.post("/signup", (req,res) => {
    // db call
    res.json({
        userId: "123"
    })
})

app.post("/signin", (req,res) => {
    

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token
    })

})

app.post("/room", middleware, (req,res) => {
    // db call

    res.json({
        roomId: 123
    })
})

app.listen(3001);