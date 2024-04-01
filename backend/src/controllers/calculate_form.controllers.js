const model = require("../models/calculate_form.model");


const calculateForm = async (req, res) => {

	const getCalc = await model.calculateForm(req);

	return getCalc > 0 ? res.status(200).json(getCalc) : res.status(400).json({message: "Sem dados!"});
};

module.exports = {
    calculateForm
}