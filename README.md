# Movie-App

This is a simple web application that allows users to view a list of movies, add them to favorites, and remove them from favorites. The movie data is fetched from The Movie Database (TMDB) API.

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/fortuneDEE/movie-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd movie-app
    ```

3. Install the required npm packages:

    ```bash
    npm install
    ```

### Configuration

1. Get your API key from [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api) and replace `'YOUR_TMDB_API_KEY'` in `public/index.js` with your actual API key.

### Running the Application

1. Start the Express server:

    ```bash
    node server.js
    ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

### Usage

- The home page displays a list of movies fetched from TMDB.
- Click on the "Add to Favorites" button to add a movie to your favorites.
- Click on the "Remove" button in the favorites section to remove a movie from your favorites.

### Troubleshooting

- If you encounter any issues, make sure you have followed the setup instructions correctly and that your API key is valid.

