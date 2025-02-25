const UserRepository = require('../repositories/UserRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAll() {
        return await this.userRepository.getAll();
    }

    async getById(id) {
        return await this.userRepository.getById(id);
    }

    async create(nombre, email) {
        return await this.userRepository.create(nombre, email);
    }
}

module.exports = UserService;