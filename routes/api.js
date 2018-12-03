// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

const Profile = require('../models/profile')
const Team = require('../models/team')

router.get('/profile', (req, res) => {

	let filters = req.query
	if (req.query.age != null) {
		filters = {
			age: { $gt: req.query.age }
		}
	}
	Profile.find(filters)
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

router.get('/profile/:id', (req, res) => {
	const id = req.params.id

	Profile.findById(id)
		.then(profile => {
			res.json({
				confirmation: 'succes',
				data: profile
			})
		}).catch(err => {
			res.json({
				confirmation: 'fail',
				message: `Profile ${id} not found. ${err.message}`
			})
		})
})

router.post('/profile', (req, res) => {

	Profile.create(req.body)
		.then(profile => {
			res.json({
				confirmation: 'success',
				data: profile
			})
		}).catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

module.exports = router