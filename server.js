require('./config/config')
const route = require('./routes/route')
const express = require('express');
const multer = require('multer');
const upload = multer({dest: "uploads/"})
const app = express();
app.use(express.json());

PORT = process.env.PORT || 3000;
//const fileUploader=require('express-fileupload');
//app.use(fileUploader({
//    useTempFiles:true
//}))
app.use(upload.single("profilePicture"))
app.use(route)

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on Port: ${PORT}`);
})