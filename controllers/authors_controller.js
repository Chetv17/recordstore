// DEPENDENCIES //

const express = require('express');
const authors = express.Router();
const Author = require('../models/authors.js');


authors.put('/:id', (req, res)=>{
	Author.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/authors');
	});
});

authors.get('/', (req, res)=>{
  Author.find({}, (err, foundAuthors)=>{
	res.render('authors/index.ejs',
    {
      tabTitle: 'Blog',
      authors: foundAuthors,
      currentUser: req.session.currentUser
    })
  })
});

authors.post('/', (req, res)=>{
	Author.create(req.body, (err, createdAuthor)=>{
		res.redirect('/authors');
	});
});

authors.get('/new', (req, res)=>{
	res.render('authors/new.ejs',
  {
    tabTitle: 'Blog Create',
    currentUser: req.session.currentUser
  })
});

authors.get('/:id/edit', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/edit.ejs', {
			author: foundAuthor
		});
	});
});

authors.delete('/:id', (req, res)=>{
	Author.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/authors');
	});
});

authors.get('/:id', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/show.ejs',
    {
      tabTitle: 'Blog Posts',
			author: foundAuthor,
      currentUser: req.session.currentUser
		});
	});
});






module.exports = authors
