const validateForm = async (req, res, next) => {
	const { body, user } = req;
	
	if (!req.get("Authorization")){
		return res.status(401).json({message: "Não Autorizado!"});
	}

	if(body.nomefantasia === undefined) {
		return res.status(400).json({message: "O campo nomefantasia é obrigatório!"});
	}
	if(body.nomefantasia === "") {
		return res.status(400).json({message: "O campo nomefantasia não pode ser vazio!"});
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
	validateForm
}