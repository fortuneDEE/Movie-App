// const express = require('express');
// const axios = require('axios');

// const app = express();
// // const PORT = process.env.PORT || 3000;
// // app.listen(3000);

// // mongoose.connect("mongodb://localhost/movieApp", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// const movieSchema = new mongoose.Schema({
//     title: String,
//     release_date: String,
// })

// const Movie = mongoose.model('Movie', movieSchema)

// app.use(express.json())

// app.get('/api/movies', async(req, res) => {
//     try{
//         const response = await axios.get(
//           "https://api.themoviedb.org/3/discover/movie",
//           {
//             params: {
//               api_key: "c3505eebf0ca93e8a8009d3b920ab28c",
//             },
//           }
//         );
//         const movies = response.data.results
//         res.json(movies)
//     } catch (error){
//         console.error(error);
//         res.status(500).json({error: 'Internal Service Error'})
//     }
// })

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "favorites.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
