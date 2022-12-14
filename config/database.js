// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'worldcup'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', '12345'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });



// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     },
//     debug: false,
//   },
// });


const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
