
# Reqres.in Aja (Mini Project II)

Mini Project II at dibimbing.id


## Table of Contents

- [Installation](#installation)
- [Introduction](#introduction)
- [Libraries](#libraries)
- [API Reference](#api)
- [Contributing](#contributing)
- [License](#license)
## Introduction

This web is built using a modern technology stack to deliver a dynamic, interactive, and efficient user experience. Below is a list of the key libraries used in this project, along with their specific purposes.
## Installation

Follow these steps to get started:

1. Clone the repository:
   ```bash
   git clone https://github.com/denaldo-r/MiniProject-Reqres.in-Aja
   ```
2. Navigate to the project directory:
   ```bash
   cd mini-project-2d
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
## Libraries

### 1. React JS

- **Description:** A JavaScript library for building user interfaces.
- **Documentation:** [React Docs](https://react.dev/)
- **Usage:**
  ```javascript
  import React from 'react';
  const App = () => <h1>Hello, world!</h1>;
  export default App;
  ```

### 2. React DOM

- **Description:** Provides DOM-specific methods for rendering and managing React components in web applications.
- **Documentation:** [React DOM Docs](https://react.dev/)
- **Usage:**
  ```javascript
  import ReactDOM from 'react-dom';
  ReactDOM.render(<App />, document.getElementById('root'));
  ```

### 3. React Router DOM

- **Description:** Enables declarative routing for React applications, making navigation seamless.
- **Documentation:** [React Router Docs](https://reactrouter.com/)
- **Usage:**
  ```javascript
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  ```

### 4. Axios

- **Description:** A promise-based HTTP client for making API requests.
- **Documentation:** [Axios Docs](https://axios-http.com/)
- **Usage:**
  ```javascript
  import axios from 'axios';
  axios.get('/api/data').then(response => console.log(response.data));
  ```

### 5. Tailwind CSS

- **Description:** A utility-first CSS framework for rapidly building custom designs.
- **Documentation:** [Tailwind CSS Docs](https://tailwindcss.com/)
- **Usage:**
  ```javascript
  <div className="bg-blue-500 text-white p-4 rounded">Hello, Tailwind!</div>
  ```

### 6. Vite

- **Description:** A fast build tool and development server for modern web applications.
- **Documentation:** [Vite Docs](https://vitejs.dev/)
- **Usage:**
  ```bash
  npm create vite@latest my-app
  cd my-app
  npm install
  npm run dev
  ```
## API Reference

#### Get all items

```http
  https://reqres.in/
  https://dummyjson.com/
```

#### Get item

```http
  GET https://reqres.in/api/users?page=2
  GET https://reqres.in/api/users/2
  POST https://reqres.in/api/register
  POST https://reqres.in/api/login
```



## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.
## License

[MIT](https://choosealicense.com/licenses/mit/)

