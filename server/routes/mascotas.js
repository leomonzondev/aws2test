const { Router } = require('express');
// const { check } = require('express-validator');
const {
    allGetMascotas,
    getIdMascota,
    createMascota,
    updateMascota,
    updateOneMascota,
    deleteMascota, } = require('../controllers/mascotas');


const router = Router();

router.get('/allGetMascotas', allGetMascotas);

router.get('/getIdMascota/:id', getIdMascota)

router.post('/pets/new', createMascota)

router.put('/pets/:id/edit', updateMascota)

router.put('/pets/:id', updateOneMascota)


router.delete('/delete/:id', deleteMascota)



module.exports = router