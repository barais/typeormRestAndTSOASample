import './common/env';
// src/server.ts
import { app } from './common/server';

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
