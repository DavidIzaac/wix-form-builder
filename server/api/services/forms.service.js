const Forms = require("../models/Form.model")


module.exports = {

    list:() => {
        return Forms.find({});
    },

    listSubmissions:(formId) => {
        return Forms.findOne({_id:formId}); 
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