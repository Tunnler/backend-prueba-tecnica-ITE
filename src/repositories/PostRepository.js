const Post = require('../models/Post');

class PostRepository {
    async getAll() {
        return await Post.getAll();
    }

    async create(titulo, contenido, usuario_id) {
        return await Post.create(titulo, contenido, usuario_id);
    }
}

module.exports = PostRepository;