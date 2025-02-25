const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = 3000;


app.use(cors());

app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
