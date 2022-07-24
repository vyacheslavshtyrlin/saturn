const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'Должно быть минимум 2 символа'],
    maxlength: [30, 'Должно быть максимум 30 символов'],
    required: true,
  },
  tel: {
    type: String,
    minlength: [11, 'Должно быть минимум 2 символа'],
    maxlength: [12, 'Должно быть максимум 30 символов'],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('form', dataSchema);
