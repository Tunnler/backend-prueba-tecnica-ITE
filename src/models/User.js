const pool = require('../db');

class User {
    static async getAll() {
        const res = await pool.query('SELECT * FROM usuarios');
        return res.rows;
    }

    static async getById(id) {
        const res = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return res.rows[0];
    }

    static async create(nombre, email) {
        const res = await pool.query(
            'INSERT INTO usuarios (nombre, email) VALUES ($1, $2) RETURNING *',
            [nombre, email]
        );
        return res.rows[0];
    }
}

module.exports = User;