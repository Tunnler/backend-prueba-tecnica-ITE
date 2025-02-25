const UserService = require('../services/UserService');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async getAll(req, res) {
        const users = await this.userService.getAll();
        res.json(users);
    }

    async getById(req, res) {
        const user = await this.userService.getById(req.params.id);
        res.json(user);
    }

    async create(req, res) {
        const { nombre, email } = req.body;
        const user = await this.userService.create(nombre, email);
        res.json(user);
    }
}

module.exports = UserController;
