const express = require('express');
const article = express.Router();
const articleModel = require('../model');



// here get the data from the mongodb
article.get("/:name", async (req, res) => {
    const articleName = req.params.name;
    const articleInfo = await articleModel.find({ articleName });
    try {
        res.send(articleInfo);
    } catch (error) {
        res.status(500).send(error);
    }
});


// here save the comment into the mongodb
article.post('/:name/add-comment', async (req, res) => {
    const userFeedback = new articleModel(req.body);
    try {
        await userFeedback.save();
        res.send(userFeedback);
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = article;