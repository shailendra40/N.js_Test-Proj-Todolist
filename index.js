const express = require('express');
const router = require('./router');
const app = express();
const PORT = 3000;

app.use("/user", router)
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
