// DEPENDENCIES //

const express = require('express');
const articles = express.Router();
const Article = require('../models/articles.js');


articles.put('/:id', (req, res)=>{
	Article.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/articles');
	});
});

articles.get('/', (req, res)=>{
  Article.find({}, (err, foundArticles)=>{
	res.render('articles/index.ejs',
  {
    tabTitle: 'Articles',
    articles: foundArticles,
    currentUser: req.session.currentUser
  })
 })
});

articles.post('/', (req, res)=>{
	Article.create(req.body, (err, createdArticle)=>{
		res.redirect('/articles');
	});
});

articles.get('/new', (req, res)=>{
	res.render('articles/new.ejs',
  {
    tabTitle: 'New Articles',
    currentUser: req.session.currentUser
  })
});

articles.get('/:id/edit', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		res.render('articles/edit.ejs',
    {
      tabTitle: 'Edit Articles',
			article: foundArticle,
      currentUser: req.session.currentUser
		});
	});
});

articles.delete('/:id', (req, res)=>{
	Article.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/articles');
	});
});


articles.get('/:id', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		res.render('articles/show.ejs',
    {
      tabTitle: 'Show Articles',
			article: foundArticle,
      currentUser: req.session.currentUser
		});
	});
});

module.exports = articles;
