//app.js is used to create the server
const express = require('express')

const app = express()
app.use(express.json())
//express.json is the middleware

const notes = []
// titles, description from frontend
app.post('/notes', (req, res) =>{
    notes.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})

app.get('/notes' , (req, res) => {
    res.status(200).json({
        message:"notes displayed successfully",
        notes: notes
    })
})
//post hai toh server pe data send hoga

// if /notes/32
app.delete('/notes/:index', (req, res) => {   //what : is it makes the value dynamic i.e anything it could be
    const index = req.params.index; //index = 32
    // to access the value we use re.params

    delete notes[index] // deleting a particular object from an array uski jagah null ajayega

    res.status(200).json({
        message:"Note deleted successfully",
        notes:notes //printing the new list
    })
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index  // we are sending a index through url
    const description = req.body.description //we are sending a particular description in json format

    notes[index].description = description

    res.status(200).json({
        message: "note updated successfully",
        notes : notes
    })
})

//exporting app 
module.exports = app;