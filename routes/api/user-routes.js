const router = require('express').Router()
const { Chords } = require('../../models')

router.get('/', (req, res) => {
    Chords.findAll({

    })
    .then(response => res.json(response))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    Chords.create({
        key: req.body.key,
        progression: req.body.progression
    })
    .then(dbChordData => res.json(dbChordData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router