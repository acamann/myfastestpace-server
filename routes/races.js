const router = require('express').Router();
let Race = require('../models/race.model');

router.route('/').get((req, res) => {
    Race.find()
        .then(races => res.json(races))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const date = Date.parse(req.body.date);
    const distanceName = req.body.distanceName;
    const raceName = req.body.raceName;
    const distanceMiles = Number(req.body.distanceMiles);
    const time = req.body.time;
    const pace = req.body.pace;
    const username = req.body.username;

    const newRace = new Race({
        date, 
        distanceName, 
        raceName, 
        distanceMiles, 
        time, 
        pace, 
        username});

    newRace.save()
        .then(() => res.json('Race Result added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Race.findById(req.params.id)
        .then(race => res.json(race))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Race.findByIdAndDelete(req.params.id)
        .then(() => res.json('Race Result deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Race.findById(req.params.id)
        .then(race => {
            race.date = Date.parse(req.body.date);
            race.distanceName = req.body.distanceName;
            race.raceName = req.body.raceName;
            race.distanceMiles = Number(req.body.distanceMiles);
            race.time = req.body.time;
            race.pace = req.body.pace;
            race.username = req.body.username;

            race.save()
                .then(() => res.json('Race Result updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;