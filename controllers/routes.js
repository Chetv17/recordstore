const express = require('express');
const router = express.Router();
const Record = require('../models/schema.js');

//// seed DATA

const seedRecords = require('../models/seed.js');

//              SEED DATABASE

router.get('/seed', (req, res) => {
    Record.create(seedRecords, (err, data)=>{
        res.redirect('/');
    })
});


//                  ROUTES


//                    NEW

router.get('/new', (req, res) => {
  Record.find({}, (err, newRecords) => {
    res.render(
      'new.ejs',
      {
        tabTitle: 'New Record',
        records: newRecords
      })
    })
  });

//                   POST

router.post('/', (req, res) =>{
  Record.create(req.body, (error, createdRecord) => {
        res.redirect('/');
    })
});

//                   DELETE

// DELETE
router.delete('/:id', (req, res) => {
    Record.findByIdAndRemove(req.params.id, (err, data)=> {
      res.redirect('/');
    })
});

//                   INDEX

router.get('/', (req, res) => {
  Record.find({}, (err, allRecords) => {
    res.render(
      'index.ejs',
      {
        tabTitle: 'Homepage',
        records: allRecords
      })
    })
  });



    //                  ROCK

    router.get('/rock', (req, res) => {
      Record.find({}, (err, rockRecords) => {
        res.render(
        'rock.ejs',
        {
          tabTitle: 'Rock',
          records: rockRecords
        })
      })
    });

    //                  COUNTRY

    router.get('/country', (req, res) => {
      Record.find({}, (err, countryRecords) => {
        res.render(
          'country.ejs',
          {
            tabTitle: 'Country',
            records: countryRecords
          })
        })
      });

      //                  JAZZ

      router.get('/jazz', (req, res) => {
        Record.find({}, (err, jazzRecords) => {
          res.render(
            'jazz.ejs',
            {
              tabTitle: 'Jazz',
              records: jazzRecords
            })
          })
        });

        //                  SEARCH
        // This youtube video helped me: https://www.youtube.com/watch?v=OEdPH4fV7vY
        // Although, his code looks much different, and he had a section in his schema which I discovered does nothing for me... yet somehow this still works?


        router.post('/search', (req, res) =>{
          Record.find( { $text: { $search: req.body.searchTerm, $diacriticSensitive: true }}, (err, findRecords) => {
            res.render(
              'search.ejs',
              {
                tabTitle: 'Search',
                records: findRecords
              })
            })
          });

        // router.get('/:id', (req, res) => {
        //     res.render(
        //       'search.ejs',
        //       {
        //         tabTitle: 'Search',
        //       })
        //   });



  //                 EDIT

  router.put('/:id', (req, res) => {
    Record.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecords) => {
        res.redirect('/')
    })
});

router.get('/:id/edit', (req, res) => {
    Record.findById(req.params.id, (err, editRecords) => {
        res.render(
            'edit.ejs',
            {
                tabTitle: 'Edit Info',
                records: editRecords
            }
        )
    })
});


  //                   SHOW

  router.get('/:id', (req, res) => {
    Record.findById(req.params.id, (err, showRecords) => {
      res.render(
        'show.ejs',
        {
          tabTitle: 'Record Info',
          records: showRecords
        })
      })
    });















module.exports = router;




// // LOGIN / REGISTER
//
// router.post.post('/register', (req, res) =>{
//   Record.create(req.body, (error, createdRecord) => {
//         res.redirect('/');
//     })
// });
//
// router.get('/login', (req, res) => {
//     res.render(
//       'login.ejs',
//       {
//         tabTitle: 'login',
//       })
//   });
//
// router.get('/register', (req, res) => {
//     res.render(
//       'register.ejs',
//       {
//         tabTitle: 'register',
//       })
//   });
