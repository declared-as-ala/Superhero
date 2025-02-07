# Humble Superheroes

This repository contains a Humble Superheroes application with:

- **Backend** (Node.js, Express)
- **Frontend** (React)

It demonstrates a simple MVC architecture, validation for humility score, basic Jest tests, and a modern UI with a superhero-themed background.

## Features

### Backend
#### Endpoints:
- `POST /superheroes` to add a new hero (requires `name`, `superpower`, `humilityScore`).
- `GET /superheroes` to list heroes, sorted by descending humility score.

#### Validation:
- Humility score must be between **1 and 10**.

#### Tests:
- Basic Jest tests with **Supertest**.

### Frontend
- React form to add a new hero, automatically refreshing the list.
- Modern, card-based UI with a full-page background image.
- Responsive design and lightweight styling.

## Getting Started

### 1. Clone the Repository
Clone the repository and navigate into the project folder:

```sh
git clone https://github.com/declared-as-ala/Superhero.git
cd Superhero
```

### 2. Backend Setup
Navigate to the backend folder:

```sh
cd backend
```

Install dependencies:

```sh
npm install
```

Run tests (optional):

```sh
npm test
```

Start the server:

```sh
npm start
```

By default, it will run on **http://localhost:3001**.

### 3. Frontend Setup
Open a new terminal and navigate to the frontend folder:

```sh
cd ../frontend
```

Install dependencies:

```sh
npm install
```

Start the React app:

```sh
npm start
```

By default, it will run on **http://localhost:3000**.

## Usage
1. Open your browser at **http://localhost:3000**.
2. Add a new superhero by filling out the form (`name`, `superpower`, `humility score`).
3. The list will automatically refresh to show your newly added hero.

## Project Structure

```
Superhero/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── ...
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── ...
│   └── package.json
│
└── README.md
```

## Next Steps & Improvements
- **Database:** Switch from in-memory to a real DB (MongoDB/PostgreSQL).
- **Additional Tests:** Increase coverage with integration and unit tests.
- **Auth & Security:** Add JWT-based authentication or other security measures.
- **Deployment:** Containerize with Docker or deploy to a cloud platform.

Enjoy! If you have any issues, please feel free to open an issue or contact me. 🚀
