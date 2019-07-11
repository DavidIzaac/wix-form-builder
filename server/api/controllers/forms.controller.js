const formsService = require("../services/forms.service");

module.exports = {
    list : (req,res)=> {
        return formsService.list(req)
        .then((result) => {
            return res.json(result);
        })
        .catch(error => {
            res.status(500).send(error)
        })
    },

    listSubmissions : (req,res)=> {
        return formsService.listSubmissions(req.params.id)
        .then((result) => {
            return res.json(result);
        })
        .catch(error => {
            res.status(500).send(error)
        })
    },

    create : (req,res)=> {
        return formsService.create(req.body)
        .then((result) => {
            return res.json(result);
        })
        .catch(error => {
            res.status(500).send(error)
        })
    },

    submit : (req,res)=> {
        return formsService.submit(req.body.formId,req.body.submissions)
        .then((result) => {
            return res.json(result);
        })
        .catch(error => {
            res.status(500).send(error)
        })
    }
}