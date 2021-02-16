import './common/env';
import 'reflect-metadata';

// src/server.ts
import { app } from './common/server';

import { createConnection } from 'typeorm';
import { Photo } from './common/model';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'test',
  entities: [Photo],
  synchronize: true,
  logging: false,
})
  .then((connection) => {
    const _photoRepository = connection.getRepository(Photo);
    
    const port = process.env.PORT || 3000;

    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch((error) => console.log(error));
