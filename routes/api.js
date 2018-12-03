// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Profile = require('../models/profile')
const Team = require('../models/team')

// get handler fetches all profiles in db
router.get('/profile', (req, res) => {

	Profile.find()
	.then(profiles => {
		res.json({
			confirmation: 'success',
			data: profiles
		})
	})
	.catch(err => {
		res.json({
			confimation: 'fail',
			message: err.message
		})
	})
})

router.get('/team', (req, res) => {

	Team.find()
	.then(teams => {
		res.json({
			confirmation: 'success',
			data: teams
		})
	})
	.catch(err => {
		res.json({
			confimation: 'fail',
			message: err.message
		})
	})
})


module.exports = router