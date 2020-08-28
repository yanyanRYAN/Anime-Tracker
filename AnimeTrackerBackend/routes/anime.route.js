const router = require('express').Router();
let Anime = require('../models/anime.model');


//get all anime
router.route('/').get((req,res) => {
    Anime.find().then( animes => res.json(animes))
    .catch((err)=> res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const title = req.body.title;
    const synopsis = req.body.synopsis;
    const audience_rating = req.body.audience_rating;
    const image_url = req.body.image_url;

    const newAnime = new Anime ({
        title,
        synopsis,
        audience_rating,
        image_url
    });

    newAnime.save().then(() => res.json('Anime added!'))
    .catch( err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req,res)=> {
    Anime.findById(req.params.id)
    .then(anime => res.json(anime))
    .catch(err => res.status(400).json('Error: ' + err));
})

//update anime by id
router.route('/update/:id').post((req,res) => {
    Anime.findById(req.params.id)
    .then(anime => {
        anime.title = req.body.title;
        anime.synopsis = req.body.synopsis;
        anime.audience_rating = req.body.audience_rating;
        anime.image_url = req.body.image_url;

        anime.save().then(()=> res.json('Anime Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}).patch((req,res) => {
    Anime.update({_id: req.params.id},
        {$set: req.body}, function(err){
            if(!err){
                res.json('Anime successfully updated')
            } else {
                console.log(err);
            }
        })
})

//update anime by title
// router.route('/update/:title').patch((req,res) => {
//     Anime.findOne
// })

module.exports = router;
