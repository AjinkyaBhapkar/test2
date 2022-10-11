const router = require('express').Router()
let Data = require('../models/data.models')
let Company = require('../models/companies.model')



router.route('/search=:a').get((req, res) => {
    Data.aggregate([
        {
            $lookup: {
                from: "companies",
                localField: "companyId",
                foreignField: "companyId",
                as: "company"
            }
        }, {
            "$unwind": "$company"
        }, {
            "$project": {
                "company._id": 0,
                "company.companyId": 0,
            }
        }
    ])
        .then(d => {
            res.json(d.filter((a) =>
                String(a.company.name).toLowerCase().includes(req.params.a) ||
                String(a.primaryText).toLowerCase().includes(req.params.a) ||
                String(a.headline).toLowerCase().includes(req.params.a) ||
                String(a.description).toLowerCase().includes(req.params.a)
            ))

        })
})


router.route('/all').get((req, res) => {
    Data.find()
        .then(ad => res.json(ad))
        .catch(err => console.log(err))
})

router.route('/add').post((req, res) => {
    const newData = new Data(req.body)

    newData.save()
        .then(() => {
            res.json('Data added successfully!')

        })
        .catch(err => res.json(err))
})

module.exports = router