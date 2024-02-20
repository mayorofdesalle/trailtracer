const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrailSchema = new Schema({
    title: String,
    locations: [String],
    description: String,
    distance: Number,
    difficulty: {
        type: String,
        enum: ['Easy', 'Moderate', 'Challenging', 'Hard', 'Very Hard']
    }
});

module.exports = mongoose.model('Trail', TrailSchema);