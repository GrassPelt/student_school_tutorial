// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Profile = require('../models/Profile')
const Team = require('../models/Team')
const School = require('../models/School')
const Student = require('../models/Student')

////////////////////////////////////////////////////////////////////////////////////////
//first 4 routes are for complete lists of data//
	
router.get('/profile', (req, res) => {
	const query = req.query
	let filters = req.query
	if (req.query.age != null){
		filters = {
			age:{
				$gt: req.query.age
			}
		}
	}
	Profile.find(query)
	.then(profiles => {
		res.json({
			confirmation: 'success',
			data: profiles 
			})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})
	
router.get('/team', (req, res) => {
	const query = req.query
	Team.find(query)
	.then(teams => {
		res.json({
			confirmation: 'success',
			data: teams
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

/////////////////////////////////////////////////////////////////////////////
	//Video Tutorial Code above
	//Requested Code below
/////////////////////////////////////////////////////////////////////////////

router.get('/school', (req, res) => {
	const query = req.query
	let filters = req.query
	if (req.query.usdCode != null){
		filters = {
			usdCode:{
				$gt: req.query.usdCode
			}
		}
	}
	School.find(query)
	.then(schools => {
		res.json({
			confirmation: 'success',
			data: schools 
			})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/student', (req, res) => {
	const query = req.query
	Student.find(query)
	.then(students => {
		res.json({
			confirmation: 'success',
			data: students
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
//Update Routes//
	
router.get('/profile/update', (req, res) => {
	const query = req.query
	const profileId = query.id
	delete query['id']
		
	Profile.findByIdAndUpdate(profileId, query, {new:true})
		.then(profile => {
			res.json({
				confirmation: 'success',
				data: profile
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
		})
	})
})


/////////////////////////////////////////////////////////////////////////////
	//Video Tutorial Code above
	//Requested Code below
/////////////////////////////////////////////////////////////////////////////

router.get('/school/update', (req, res) => {
	const query = req.query
	const schoolId = query.id
	delete query['id']
		
	School.findByIdAndUpdate(schoolId, query, {new:true})
		.then(school => {
			res.json({
				confirmation: 'success',
				data: school
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
		})
	})
})

router.get('/student/update', (req, res) => {
	const query = req.query
	const studentId = query.id
	delete query['id']
		
	Student.findByIdAndUpdate(studentId, query, {new:true})
		.then(student => {
			res.json({
				confirmation: 'success',
				data: student
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
		})
	})
})

///////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////
//Remove Routes//


router.get('/profile/remove', (req, res) => {
	const query = req.query
	const profileId = query.id
	delete query['id']
		
	Profile.findByIdAndRemove(query.id)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: 'Profile ' + query.id + ' successfully removed.'
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
		})
	})
})

/////////////////////////////////////////////////////////////////////////////
	//Video Tutorial Code above
	//Requested Code below
/////////////////////////////////////////////////////////////////////////////

router.get('/school/remove', (req, res) => {
	const query = req.query
	
	Student.find({'school':query.id})
	.then(students => {
		if (students.length>0)
		{
			res.json({
				confirmation: 'success',
				message: 'School has students. Can not be deleted.',
				data: students
			})
		}
		else
		{
			const schoolId = query.id
			delete query['id']
				
			School.findByIdAndRemove(query.id)
				.then(data => {
					res.json({
						confirmation: 'success',
						data: 'School ' + query.id + ' successfully removed.'
					})
				})
				.catch(err => {
					res.json({
						confirmation: 'fail',
						message: err.message
				})
			})
		}
	})
})

router.get('/student/remove', (req, res) => {
	const query = req.query
	const studentId = query.id
	delete query['id']
		
	Student.findByIdAndRemove(query.id)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: 'Student ' + query.id + ' successfully removed.'
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
		})
	})
})

////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////
//Find by ID Routes//

router.get('/profile/:id', (req, res) => {
	const id = req.params.id
	Profile.findById(id)
	.then(profile => {
		res.json({
			confirmation: 'success',
			data: teams
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'Profile "' + id + '" not found.'
		})
	})
})

/////////////////////////////////////////////////////////////////////////////
	//Video Tutorial Code above
	//Requested Code below
/////////////////////////////////////////////////////////////////////////////
router.get('/school/:id', (req, res) => {
	const id = req.params.id
	School.findById(id)
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'School "' + id + '" not found.'
		})
	})
})

router.get('/student/:id', (req, res) => {
	const id = req.params.id
	Student.findById(id)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'Student "' + id + '" not found.'
		})
	})
})


/////////////////////////////////////////////////////////////////////////////
//Create Routes//

router.post('/profile', (req, res) => {
	Profile.create(req.body)
	.then(profile => {
		res.json({
			confirmation: 'success',
			data: profile
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

/////////////////////////////////////////////////////////////////////////////
	//Video Tutorial Code above
	//Requested Code below
/////////////////////////////////////////////////////////////////////////////

router.post('/school', (req, res) => {
	School.create(req.body)
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.post('/student', (req, res) => {
	Student.create(req.body)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

/////////////////////////////////////////////////////////////////////////////
module.exports = router