const validateSaveForm = async (req, res, next) => {
	const { body, user } = req;
	
	if (!req.get("Authorization")){
		return res.status(401).json({message: "Não Autorizado!"});
	}
    
	if(body.nome === undefined) {
		return res.status(400).json({message: "O campo nome é obrigatório!"});
	}
	if(body.nome === "") {
		return res.status(400).json({message: "O campo nome não pode ser vazio!"});
	}

	
	if(body.origem === undefined) {
		return res.status(400).json({message: "O campo origem é obrigatório!"});
	}
	if(body.origem === "") {
		return res.status(400).json({message: "O campo origem não pode ser vazio!"});
	}

	if(body.sexo === undefined) {
		return res.status(400).json({message: "O campo sexo é obrigatório!"});
	}
	if(body.sexo === "") {
		return res.status(400).json({message: "O campo sexo não pode ser vazio!"});
	}

	if(body.celular === undefined) {
		return res.status(400).json({message: "O campo celular é obrigatório!"});
	}
	if(body.celular === "") {
		return res.status(400).json({message: "O campo celular não pode ser vazio!"});
	}

    if(body.cidade === undefined) {
		return res.status(400).json({message: "O campo cidade é obrigatório!"});
	}
	if(body.cidade === "") {
		return res.status(400).json({message: "O campo cidade não pode ser vazio!"});
	}
    

	if(body.plano === undefined) {
		return res.status(400).json({message: "O campo nomefantasia é obrigatório!"});
	}
	if(body.plano === "") {
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
	validateSaveForm
}