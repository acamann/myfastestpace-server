const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const raceSchema = new Schema({
    date: { type: Date, required: true },
    distanceName: { type: String, required: true },
    raceName: { type: String, required: true },
    distanceMiles: { type: Number, required: true },
    time: { type: String, required: true },
    pace: { type: String, required: true },
    username: { type: String, required: true },
}, {
    timestamps: true,
});

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;