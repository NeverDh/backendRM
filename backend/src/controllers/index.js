const model = require("../models/administratorModel");


const get = async (req, res) => {
	
	const allResults = await model.get(req);

	return allResults.length > 0 ? res.status(200).json(allResults) : res.status(400).json({message: "Sem dados!"});
};

const getByID = async (req, res) => {

	const result = await model.getByID(req);

	return result.length > 0 ? res.status(200).json(result) : res.status(400).json({message: "Sem dados!"});
};

const create = async (req, res) => {

	const createdResult = await model.create(req);
	return res.status(200).json(createdResult);
};

const update = async (req, res) => {

	const updatedResult = await model.update(req);
	return res.status(200).json(updatedResult);
};

const exclude = async (req, res) => {

	const deletedResult = await model.delete(req);
	return res.status(200).json(deletedResult);
};

module.exports = {
	get,
	getByID,
	create,
	update,
	exclude
};