const User = require('../models/User');

class UserRepository {
    async getAll() {
        return await User.getAll();
    }

    async getById(id) {
        return await User.getById(id);
    }

    async create(nombre, email) {
        return await User.create(nombre, email);
    }
}

module.exports = UserRepository;