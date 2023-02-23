const { response, request } = require('express')
const Mascota = require('../models/Mascota');

const allGetMascotas = async (req, res = response) => {
    try {
        const mascota = await Mascota.find({});
        res.json({
            ok: true,
            mascota
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al obtener chistes de la base de datos.'
        });
    }
}


const getIdMascota = async (req, res) => {
    try {
        const { id } = req.params;
        console.log()
        const mascota = await Mascota.findById({ _id: id });
        if (!mascota) {
            return res.status(404).json({
                ok: false,
                message: 'Mascota not found'
            });
        }
        res.json({
            ok: true,
            mascota
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al obtener la mascota de la Base de Datos'
        });
    }
}


const createMascota = async (req, res) => {
    try {
        const { name, type, description, skill1, skill2, skill3 } = req.body;

        const mascota = new Mascota({ name, type, description, skill1, skill2, skill3 });

        try {
            await mascota.save();
            res.json({
                ok: true,
                mascota
            });
        } catch (error) {
            if (error.code === 11000) {
                res.status(400).json({
                    ok: false,
                    message: 'Name already exists'
                });
            } else {
                throw error;
            }
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al crear una mascota en la base de datos.'
        });
    }
}


const updateMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, type, description, skill1, skill2, skill3 } = req.body;
        const mascota = await Mascota.findByIdAndUpdate(id, { name, type, description, skill1, skill2, skill3 }, { new: true });
        if (!mascota) {
            return res.status(404).json({
                ok: false,
                message: 'mascota not found'
            });
        }
        res.json({
            ok: true,
            mascota
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error en actualizar la mascota en la Base de Datos'
        });
    }
}

const updateOneMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const { likes } = req.body;
        const mascota = await Mascota.findByIdAndUpdate(id, { likes }, { new: true });
        if (!mascota) {
            return res.status(404).json({
                ok: false,
                message: 'mascota not found'
            });
        }
        res.json({
            ok: true,
            mascota
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error en actualizar la mascota en la Base de Datos'
        });
    }
}

const deleteMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const mascota = await Mascota.findByIdAndDelete(id);
        if (!mascota) {
            return res.status(404).json({
                ok: false,
                message: 'mascota not found'
            });
        }
        res.json({
            ok: true,
            mascota
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al eliminar la broma de la Base de datos.'
        })
    }
}

module.exports = {
    allGetMascotas,
    getIdMascota,
    createMascota,
    updateMascota,
    updateOneMascota,
    deleteMascota
}






// // crear contrase;a segura


// const mascotasGet = (req = request, res = response) => {

//     const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

//     res.json({
//         msg: 'get API - controlador',
//         q,
//         nombre,
//         apikey,
//         page,
//         limit
//     });
// }

// const mascotasPost = async (req, res) => {

//     const { name, type, description, skill1, skill2, skill3 } = req.body;

//     const mascota = new Mascotas({ name, type, description, skill1, skill2, skill3 })
//     console.log(name, type, description, skill1, skill2, skill3 )
//     await mascota.save()
//     res.json({
//         msg: 'post API - usuariosPost',
//         mascota
//     });
// }

// const mascotasPut = (req, res = response) => {

//     const { id } = req.params;

//     res.json({
//         msg: 'put API - usuariosPut',
//         id
//     });
// }

// const mascotasPatch = (req, res = response) => {
//     res.json({
//         msg: 'patch API - usuariosPatch'
//     });
// }

// const mascotasDelete = (req, res = response) => {
//     res.json({
//         msg: 'delete API - usuariosDelete'
//     });
// }




