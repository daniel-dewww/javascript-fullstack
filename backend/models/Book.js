const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
	title: { type: String, required: true},
	author: { type: String, required: true},
	 isbn: { type: String, required: true},
	 create_at : { type:  Date , default:Date.now} //fecha de creacion
});

module.exports = model('Book', BookSchema);

