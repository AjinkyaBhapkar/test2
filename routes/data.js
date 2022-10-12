const router = require('express').Router()
let Data = require('../models/data.models')


router.route('/search=:a').get(async (req, res) => {
    const queryRegex = new RegExp(req.params.a, "i")
   Data.aggregate([

        {
            "$lookup": {
                from: "companies",
                localField: "companyId",
                foreignField: "_id",
                as: "company"
            }
        }, {
            "$unwind": "$company"
        },
        {
            "$project": {
                _id:1,
                companyId:1,
                "company.name":1,
                "company.url":1,
                primaryText:1,
                headline:1,
                description:1,
                image:1,
                CTA:1,
                
            },
        },

        {
            $match: {
                $or:
                    [
                        { "companyId.name": queryRegex },
                        { "primaryText": queryRegex },
                        { "headline": queryRegex },
                        { "description": queryRegex }
                    ]
            }
        }

    ])
    .then(rslt=>{

        res.json(rslt)
    })
    
})



module.exports = router