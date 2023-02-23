
const uniqueValidator = require('mongoose-unique-validator');
const { Schema, model } = require('mongoose');
const MascotaSchema = Schema({
    name: {
        type: String,
        require: [true, 'El titulo es obligatorio'],
        minlength: [3, 'El minimo es de 3'],
        unique: true
    },
    type: {
        type: String,
        minlength: [3, 'El minimo es de 3'],
        require: [true, 'La tipo es obligatorio']
    },
    description: {
        type: String,
        minlength: [3, 'El minimo es de 3'],
        require: [true, 'La descripcion es obligatorio']
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    }


});

module.exports = model('Mascota', MascotaSchema)