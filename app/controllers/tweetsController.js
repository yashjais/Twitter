const Twitter = require('../models/tweets')

module.exports.list = (req, res) => {
    // console.log(req.params.id)
    const name = req.params.id
    Twitter.findOne({username: name})
        .then(user => {
            if(user) {
                // console.log(user, 'herererererererere')
                res.send(user)
            } else {
                // console.log('in the else')
                const tw = new Twitter({ username: name})
                tw.tweetsSave(name)
                    .then(tw => {
                        // console.log('in the final', tw)
                        res.send(tw)
                    })
                    .catch(err => res.send(err))
            }
        })
        .catch(err => res.send(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    // console.log(body, 'ererere')
    const tweet = new Twitter(body)
    tweet.save()
        .then(tw => res.send(tw))
        .catch(err => res.send(err))
}