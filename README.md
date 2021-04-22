# React-Blog (Work In Progress...)

- This repository is for educational purposes to further my knowledge of React.

- A simple Blog in which a user may read, create, or delete blog articles.

- There will not be a backend API, so there will not be user-authentication or the use of a database.

- Instead I will be using a simple JSON server to store the blog data.

- Initially based off of `Net Ninja's Full Modern React Tutorial` Series on YouTube located here:

  - https://bit.ly/3naBhcD

## To Run Locally:

- Clone this repo and cd into the project folder.

- Run `npm install` to install all dependencies.

- You can then run `npm start` to start the local server.

# To run the JSON server locally without installation:

- On a separate command prompt run:

  - `npx json-server --watch data/db.json --port 8000`

  ## Endpoints:

  - `/blogs` - GET - Fetch all blogs.

  - `/blogs/:id` - GET - Fetch a single blog.

  - `/blogs` - POST - Add a new blog.

  - `/blogs/:id` - DELETE - Delete a blog.

## Dependencies

- React
- React-Router-Dom
- Node-Sass

## Screenshots

![All Blogs](https://github.com/davemgj84/react-blog/blob/master/docs/allblogs.png?raw=true)
![Blog](https://github.com/davemgj84/react-blog/blob/master/docs/blog.png?raw=true)
![Create Blog](https://github.com/davemgj84/react-blog/blob/master/docs/create.png?raw=true)
