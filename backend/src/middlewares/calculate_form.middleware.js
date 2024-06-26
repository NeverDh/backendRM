const validateCalcForm = async (req, res, next) => {
	const { body, user } = req;
	
	if (!req.get("Authorization")){
		return res.status(401).json({message: "Não Autorizado!"});
	}

	if(body.plano === undefined) {
		return res.status(400).json({message: "O campo plano é obrigatório!"});
	}
	if(body.plano === "") {
		return res.status(400).json({message: "O campo plano não pode ser vazio!"});
	}

	if(body.idade === undefined) {
		return res.status(400).json({message: "O campo idade é obrigatório!"});
	}
	if(body.idade === "") {
		return res.status(400).json({message: "O campo idade não pode ser vazio!"});
	}

	if(body.dependentes === undefined) {
		return res.status(400).json({message: "O campo dependentes é obrigatório!"});
	}
	if(body.dependentes === "") {
		return res.status(400).json({message: "O campo dependentes não pode ser vazio!"});
	}

	if(body.seguro === undefined) {
		return res.status(400).json({message: "O campo seguro é obrigatório!"});
	}
	if(body.seguro === "") {
		return res.status(400).json({message: "O campo seguro não pode ser vazio!"});
	}
	

	next();

};

module.exports = {
	validateCalcForm
}