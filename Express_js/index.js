const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

// app.get('/',(req,res)=>{
//     res.send(
//         {
//             name: 'Gediya Dev',
//             age: 19,
//         }
//     )
// })

// app.get('/',(req,res)=>{
//     res.json(
//         {
//             name: 'Gediya Dev',
//             age: 19,
//         }
//     )
// })

// app.get('/',(req,res)=>{
//     res.send([
//         "Gediya Dev","Romil"
//     ])
// })

// app.get('/',(req,res)=>{
//     const user = [
//         {
//             id: 1,
//             name: 'Gediya Dev',
//         },
//         {
//             id: 2,
//             name: 'Romil',
//         }
//     ]
//     res.jsonp(user)
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>Welcome to About Page.</h1>')
// })

// app.get('/gallery',(req,res)=>{
//     res.send('<h1>Welcome to Gallery Page.</h1>')
// })

// app.get('/user/:id/book/:bookid',(req,res)=>{
//     res.send(req.params)
// })

// app.get('/search',(req,res)=>{
//     const name = req.query.name
//     const age = req.query.age
//     res.send(`Search Results - Name: ${name}, Age: ${age}`)
// })

app.get('/gallery',(req,res)=>{
    res.send('<h1>Welcome to Gallery Page.</h1>')
})

app.get('/abc',(req,res)=>{
    res.redirect('/gallery')
})