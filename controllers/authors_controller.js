// DEPENDENCIES //

const express = require('express');
const authors = express.Router();
const Author = require('../models/authors.js');
const Article = require('../models/articles.js');

authors.put('/:id', (req, res)=>{
	Author.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/authors');
	});
});

authors.get('/', (req, res)=>{
  Author.find({}, (err, foundAuthors)=>{
	res.render('authors/index.ejs',
    {
      tabTitle: 'Authors',
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
    tabTitle: 'New Author',
    currentUser: req.session.currentUser
  })
});

authors.get('/:id/edit', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		Author.find({}, (err, allAuthors)=>{
			Author.findOne({'articles._id':req.params.id}, (err, foundArticleAuthor)=>{
				res.render('articles/edit.ejs',
				{
					tabTitle: 'Edit',
			    currentUser: req.session.currentUser,
					article: foundArticle,
					authors: allAuthors,
					articleAuthor: foundArticleAuthor
				})
		 	 })
		  })
		})
	});


authors.delete('/:id', (req, res)=>{
	Author.findByIdAndRemove(req.params.id, (err, foundAuthor)=>{
		const articleIds = [];
		for (let i = 0; i < foundAuthor.articles.length; i++) {
			articleIds.push(foundAuthor.articles[i]._id);
		}
		Article.remove(
			{
				_id : {
					$in: articleIds
				}
			},
			(err, data)=>{
				res.redirect('/authors');
			}
		);
	});
});

authors.get('/:id', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/show.ejs',
    {
      tabTitle: 'Author Info',
			author: foundAuthor,
      currentUser: req.session.currentUser
		});
	});
});


module.exports = authors
