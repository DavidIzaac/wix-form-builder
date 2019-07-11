const Forms = require("../models/Form.model")


module.exports = {

    list:() => {
        return Forms.find({});
    },

    listSubmissions:(formId) => {
        return Forms.find({_id:formId}).select("submissions"); 
    },

    create:(body) => {
        return Forms.create(body)
    },

    submit:(formId,submissions) => {
        return Forms.update({_id:formId},
            {
                $push : {
                    submissions:submissions
                }
            },
    )}

}