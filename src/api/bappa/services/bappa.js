'use strict';

/**
 * bappa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bappa.bappa');
