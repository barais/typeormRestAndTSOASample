import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo, User } from './common/model';

// src/server.ts
import { app } from './common/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const _connection = createConnection();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'secuweb',
    entities: [Photo, User],
    synchronize: true,
    logging: true,
  });
  console.log(`Example app listening at http://localhost:${port}`);
});
