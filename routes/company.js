const router = require ('express').Router()
let Company= require('../models/companies.model')

router.route('/').get((req,res)=>{
    Company.find()
    .then(d=>res.json(d))
    .catch(err=>res.json(err))
})

router.route('/add').post((req,res)=>{
    const newCompany = new Company(req.body)

    newCompany.save()
    .then(()=>{
        res.json('Company added successfully!')

    })
    .catch(err=>res.json(err))
})

module.exports = router