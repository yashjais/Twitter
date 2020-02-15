const mongoose = require('mongoose')
const Twitterr = require('twitter');

const Schema = mongoose.Schema

const twitterSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tweets: []
})

// twitterSchema.statics.findByName = function(username) {

//     console.log('in the mongoose middleware', username)

//     const Twitter = this

//     return Twitter.find({ username })
//             .then(function(user) {
//                 if(user.length == 0) {
//                     // return Promise.resolve('length is 0')

//                     // const params = {screen_name: 'nodejs'};

//                     const client = new Twitterr({
//                         consumer_key: '881flbXb16SbwdP3R2sRKvdji',
//                         consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
//                         access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
//                         access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
//                     });

//                     return client.get(`https://api.twitter.com/1.1/users/search.json?q=${username}&count=10`, {})
//                             .then(tweets => {
//                                 console.log(tweets, 'in the find of middleware')
//                                 return Promise.resolve(tweets)
//                             })
//                             .catch(err => res.send(err))

//                 } else {
//                     return Promise.resolve(user)
//                 }
//             })
//             .catch(function(err) {
//                 Promise.reject(err)
//             })
// }

// conscise

// twitterSchema.methods.tweetsSave = function(username) {
//     console.log('in the tweetsSave')
//     const tweetssss = this
//     const client = new Twitterr({
//         consumer_key: '881flbXb16SbwdP3R2sRKvdji',
//         consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
//         access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
//         access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
//     });

//     return client.get(`https://api.twitter.com/1.1/users/search.json?q=${username}&count=10`, {})
//         .then(tweetss => {
//             console.log(tweets, 'in the find of middleware')
//             tweetssss.tweets.push(tweetss)
//             console.log('in the save()',tweetssss)
//             return tweetssss.save()
//         })
//         .catch(err => res.send(err))
// }


twitterSchema.methods.tweetsSave = function(username) {
    // console.log('in the tweetsSave', username)
    const tweetssss = this
    const client = new Twitterr({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    });

    return client.get(`https://api.twitter.com/1.1/users/search.json?q=${username}&count=10`, {})
        .then(tweetss => {
            // console.log(tweetss, 'in the find of middleware')
            tweetssss.tweets.push(tweetss)
            return tweetssss.save()
                    .then(function(tweets) {
                        // console.log(tweets, 'one')
                        return Promise.resolve(tweets)
                    })
                    .catch(function(err) {
                        Promise.reject(err)
                    })
        })
        .catch(err => res.send(err))
}


const Twitter = mongoose.model('Twitter', twitterSchema)

module.exports = Twitter



 

  
