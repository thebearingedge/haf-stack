# short-stack

A front end React project backed by a simple JSON server.

## Environment Variables

```bash
# .env.example
PORT=3000
NODE_ENV=development
```

## NPM Scripts

### `start`

Start `json-server` on `process.env.PORT`, backed by `db.json`.

### `build`

Use `webpack` to build `src/index.js` into `public/main.js` and copy all `src/*.{html,css}` into `public/`.

### `dev`

Use `webpack-dev-server` to open a browser and live-reload the frontend.

### `watch`

Use `npm-run-all` to `start` and `dev` in parallel.
