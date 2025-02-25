CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    contenido TEXT NOT NULL,
    usuario_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


-- datos falsos:

-- Usuario
INSERT INTO usuarios (nombre, email) VALUES
('John Doe', 'john.doe@example.com'),
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Smith', 'bob.smith@example.com'),
('Charlie Brown', 'charlie.brown@example.com'),
('Diana Prince', 'diana.prince@example.com'),
('Eve Lee', 'eve.lee@example.com');

-- Post
INSERT INTO posts (titulo, contenido, usuario_id) VALUES
('First Post', 'This is the content of the first post.', 1),
('Hello World', 'Just saying hello to the world!', 2),
('Tech News', 'Latest updates in the tech industry.', 3),
('Travel Diary', 'Exploring new places and cultures.', 4),
('Food Recipe', 'How to cook the perfect pasta.', 5),
('Movie Review', 'A review of the latest blockbuster movie.', 6),

