const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    index: {
        type: Number
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;