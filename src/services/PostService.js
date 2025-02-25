const PostRepository = require('../repositories/PostRepository');

class PostService {
    constructor() {
        this.postRepository = new PostRepository();
    }

    async getAll() {
        return await this.postRepository.getAll();
    }

    async create(titulo, contenido, usuario_id) {
        return await this.postRepository.create(titulo, contenido, usuario_id);
    }
}

module.exports = PostService;