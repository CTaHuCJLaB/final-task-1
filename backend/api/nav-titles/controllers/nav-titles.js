'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./.tmp/data.db"
  }
});

module.exports = {
  find: async () => {
    const result = await knex
      .pluck('title').from('nav_titles')
      .options({ nestTables: true, rowMode: 'array' })
    return result;
  }
};
