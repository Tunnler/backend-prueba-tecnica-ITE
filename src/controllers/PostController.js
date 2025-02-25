const PostService = require('../services/PostService');

class PostController {
    constructor() {
        this.postService = new PostService(); 
    }

    async getAll(req, res) {
        const posts = await this.postService.getAll();
        res.json(posts);
    }

    async create(req, res) {
        const { titulo, contenido, usuario_id } = req.body;
        const post = await this.postService.create(titulo, contenido, usuario_id);
        res.json(post);
    }
}

module.exports = PostController;
