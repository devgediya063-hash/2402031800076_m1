const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Contact = require("./models/contacts.models")

mongoose.connect('mongodb://localhost:27017/contacts-crud')
.then(() => console.log("Connected to MongoDB"))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const contacts = await Contact.find()
    // res.json(contacts)
    res.render("home", { contacts });
});
app.get('/show-contact/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    // res.json(contact)
    res.render('show-contact', { contact });
});

app.get('/add-contact', (req, res) => {
    res.render('add-contact');
});

app.post('/add-contact', async (req, res) => {
    await Contact.create(req.body);
    res.redirect('/');
    
});

app.get('/update-contact/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render('update-contact', { contact });
});

app.post('/update-contact/:id', async (req, res) => {
   await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

app.get('/delete-contact/:id', (req, res) => {
    res.send('Contact Deleted');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});