import express from 'express'
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {

    var user = [
        {name: "Gediya Dev", age: 19, city: "Rajkot"},
        {name: "Dobariya Romil", age: 20, city: "Amreli"},
        {name: "Prajapati Vijay", age: 19, city: "Jalore"},
        {name: "Thalesh Dax", age: 20, city: "Amreli"},
        {name: "Pansara Purvin", age: 20, city: "Rajkot"},
    ];

    res.render("about",{title:"About Page", message:"Welcome to the about page!" , item: user})
})

app.get('/form' , (req, res) => {
    res.render('form' , {message:null})
})

app.get('/submit', (req, res) => {
    const name = req.query.myname

    const message = `Hello, ${name}! Your form has been submitted successfully.`
    res.render('form', { message :message});
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})