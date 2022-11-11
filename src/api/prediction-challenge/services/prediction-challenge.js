'use strict';

/**
 * prediction-challenge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prediction-challenge.prediction-challenge');
