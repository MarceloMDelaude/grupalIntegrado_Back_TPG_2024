const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
''

router.get('/', userController.ObtenerTodosLosUsuarios);
router.get('/:Id', userController.ObtenerUsuarioPorId);
router.post('/', userController.crearUsuario);
router.put('/:Id', userController.ActualizarUsuario);
router.delete('/:Id', userController.BorrarUsuario);


module.exports = router;