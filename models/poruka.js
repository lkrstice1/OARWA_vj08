const mongoose = require('mongoose')
require('dotenv').config()

const password = process.env.LOZINKA
const dbName = "porke-api"
const url = `mongodb+srv://lucijakrsticevic:${password}@cluster0.qpriudf.mongodb.net/${dbName}?retryWrites=true&w=majority`

const porukaSchema = new mongoose.Schema({
  sadrzaj: {
    type: String,
    minlength: 5,
    required: true
  },
  datum: {
    type: Date,
    required: true
  },
  vazno: {
    type: Boolean,
    default: false
  }
})

porukaSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = doc._id.toString()
    delete ret._id
    delete ret.__v
    return ret
  }
})

module.exports = mongoose.model('Poruka', porukaSchema, 'poruke')
