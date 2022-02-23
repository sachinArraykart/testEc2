const express = require('express')

const app = express()

app.use((req,res,next)=>{
    res.status(200).json({
        msg:"yo"
    })
})

// app.use(express.json())

// app.listen(3000,()=>{
//     console.log("hiiiii")
// })

module.exports = app