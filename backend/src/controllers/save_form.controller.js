const model = require("../models/save_form.model");


const savedForm = async (req, res) => {

	const getSaved = await model.saveForm(req);

	return getSaved > 0 ? res.status(200).json(getSaved) : res.status(400).json({message: "Sem dados!"});
};

const getSaveForm = async (req, res) => {

	const getSave = await model.getSaveForm(req);

	return getSave.length > 0 ? res.status(200).json(getSave) : res.status(400).json({message: "Sem dados!"});
};

module.exports = {
    savedForm,
	getSaveForm
}