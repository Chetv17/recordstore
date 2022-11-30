// DEPENDENCIES //

const express = require('express');
const articles = express.Router();
const Article = require('../models/articles.js');
const Author = require('../models/authors.js');



articles.put('/:id', (req, res)=>{
    Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedArticle)=>{
        Author.findOne({ 'articles._id' : req.params.id }, (err, foundAuthor)=>{
		        if(foundAuthor._id.toString() !== req.body.authorId){
			           foundAuthor.articles.id(req.params.id).remove();
			           foundAuthor.save((err, savedFoundAuthor)=>{
				               Author.findById(req.body.authorId, (err, newAuthor)=>{
					                    newAuthor.articles.push(updatedArticle);
					                    newAuthor.save((err, savedNewAuthor)=>{
			        	                    res.redirect('/articles/'+req.params.id);
					                             });
				                           });
			                         });
		             } else {
			                foundAuthor.articles.id(req.params.id).remove();
			                foundAuthor.articles.push(updatedArticle);
			                foundAuthor.save((err, data)=>{
		                      res.redirect('/articles/'+req.params.id);
			                     });
		                  }
                })
          })
    });


articles.get('/', (req, res)=>{
  Article.find({}, (err, foundArticles)=>{
	res.render('articles/index.ejs',
  {
    tabTitle: 'Articles Home',
    articles: foundArticles,
    currentUser: req.session.currentUser
  })
 })
});

articles.post('/', (req, res)=>{
    Author.findById(req.body.authorId, (err, foundAuthor)=>{
        Article.create(req.body, (err, createdArticle)=>{
            foundAuthor.articles.push(createdArticle);
            foundAuthor.save((err, data)=>{
                res.redirect('/articles');
            });
        });
    });
});

articles.get('/new', (req, res)=>{
  Author.find({}, (err, allAuthors)=>{
	res.render('articles/new.ejs',
  {
    tabTitle: 'New Articles',
    authors: allAuthors,
    currentUser: req.session.currentUser
  })
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
    Article.findByIdAndRemove(req.params.id, (err, foundArticle)=>{
        Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
            foundAuthor.articles.id(req.params.id).remove();
            foundAuthor.save((err, data)=>{
                res.redirect('/articles');
            });
        });
    });
});



articles.get('/:id', (req, res)=>{
    Article.findById(req.params.id, (err, foundArticle)=>{
        Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
            res.render('articles/show.ejs',
                  {
                    tabTitle: 'Show Articles',
                    author:foundAuthor,
                    article: foundArticle,
                    currentUser: req.session.currentUser
		               })
	                })
                 })
               });


module.exports = articles;
