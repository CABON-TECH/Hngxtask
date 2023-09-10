const router = require('express').Router()
const moment = require('moment')


router.get('/api', (req,res) => {
    const {slack_name, track} = req.query 
    if(!slack_name || !track) {
        return res.status(422).json({message:"Missing query/queries"})
    }

    const current_day = moment().day()
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const utc_time = moment.utc().format()

    const github_file_url = "https://github.com/CABON-TECH/Hngxtask/blob/main/server.js"
    const github_repo_url = "https://github.com/CABON-TECH/Hngxtask.git"
    
    const responseObject = {
        slack_name,
        current_day:weekDays[current_day],
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code:200
    }

    res.status(200).json(responseObject)
})

module.exports = router 