const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/codesDB", { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());

const Code = mongoose.model("Code", {
    value: String,
    isRedeemed: Boolean
});

app.post("/redeem", async (req, res) => {
    const codeValue = req.body.code;

    const code = await Code.findOne({ value: codeValue });

    if (code && !code.isRedeemed) {
        code.isRedeemed = true;
        await code.save();
        res.status(200).json({ message: "Code redeemed successfully!" });
    } else {
        res.status(400).json({ message: "Invalid code or code has already been redeemed." });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
