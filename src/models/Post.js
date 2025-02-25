const pool = require('../db');

class Post {
    static async getAll() {
        const res = await pool.query('SELECT * FROM posts');
        return res.rows;
    }

    static async create(titulo, contenido, usuario_id) {
        const res = await pool.query(
            'INSERT INTO posts (titulo, contenido, usuario_id) VALUES ($1, $2, $3) RETURNING *',
            [titulo, contenido, usuario_id]
        );
        return res.rows[0];
    }
}

module.exports = Post;