'use strict';

/**
 * football-team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::football-team.football-team');
