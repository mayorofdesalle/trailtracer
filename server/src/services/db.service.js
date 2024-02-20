const mongoose = require('mongoose');
const dbconfig = require('../configs/db.config');

// Connection
mongoose.connection.on('open', () => {
    console.log('Database connected');
});

mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
});

const open = async () => {
    await mongoose.connect(`mongodb://${dbconfig.host}:${dbconfig.port}/${dbconfig.db}`);
};

const close = async () => {
    mongoose.connection && await mongoose.connection.close();
};

// Queries
const Trail = require('../models/trail');

const whereTrail = async (queryParams) => {
    await open();
    const result = await Trail.where(queryParams);
    close();
    return result;
};

const trailById = async (id) => {
    await open();
    const result = await Trail.findById(id);
    close();
    return result;
};

module.exports = { whereTrail, trailById };
