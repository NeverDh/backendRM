const validateGetAdministrators = async (req, res, next) => {
	const { user } = req;

	if(user.tipouser != 5) {
		return res.status(400).json({message: "Não autorizado para essa solicitação!"});
	}

	next();

};

const validateGetAdministratorByID = async (req, res, next) => {
	const { user, body } = req;

	if(user.tipouser != 5) {
		return res.status(400).json({message: "Não autorizado para essa solicitação!"});
	}

	if(body.id === undefined) {
		return res.status(400).json({message: "O campo id é obrigatório!"});
	}
	if(body.id === "") {
		return res.status(400).json({message: "O campo id não pode ser vazio!"});
	}
	
	next();

};

const validateCreateAdministrator = (req, res, next) => {
	const { body, user } = req;
	if(user.tipouser != 5) {
		return res.status(400).json({message: "Não autorizado para essa solicitação!"});
	}

	if(body.nomeAdministrador === undefined) {
		return res.status(400).json({message: "O campo nomeAdministrador é obrigatório!"});
	}
	if(body.nomeAdministrador === "") {
		return res.status(400).json({message: "O campo nomeAdministrador não pode ser vazio!"});
	}

	if(body.login === undefined) {
		return res.status(400).json({message: "O campo login é obrigatório!"});
	}
	if(body.login === "") {
		return res.status(400).json({message: "O campo login não pode ser vazio!"});
	}

	if(body.senha === undefined) {
		return res.status(400).json({message: "O campo senha é obrigatório!"});
	}
	if(body.senha === "") {
		return res.status(400).json({message: "O campo senha não pode ser vazio!"});
	}

	next();

};

const validateUpdateAdministrator = (req, res, next) => {
	const { body, user } = req;
	if(user.tipouser != 5) {
		return res.status(400).json({message: "Não autorizado para essa solicitação!"});
	}

	if(body.idAdministrador === undefined) {
		return res.status(400).json({message: "O campo idAdministrador é obrigatório!"});
	}
	if(body.idAdministrador === "") {
		return res.status(400).json({message: "O campo idAdministrador não pode ser vazio!"});
	}

	if(body.nomeAdministrador === undefined) {
		return res.status(400).json({message: "O campo nomeAdministrador é obrigatório!"});
	}
	if(body.nomeAdministrador === "") {
		return res.status(400).json({message: "O campo nomeAdministrador não pode ser vazio!"});
	}

	if(body.senha === undefined) {
		return res.status(400).json({message: "O campo senha é obrigatório!"});
	}
	if(body.senha === "") {
		return res.status(400).json({message: "O campo senha não pode ser vazio!"});
	}

	next();

};

const validateDeleteAdministrator = (req, res, next) => {
	const { body, user } = req;
	if(user.tipouser != 5) {
		return res.status(400).json({message: "Não autorizado para essa solicitação!"});
	}

	if(body.idAdministrador === undefined) {
		return res.status(400).json({message: "O campo idAdministrador é obrigatório!"});
	}
	if(body.idAdministrador === "") {
		return res.status(400).json({message: "O campo idAdministrador não pode ser vazio!"});
	}

	next();

};

module.exports = {
	validateGetAdministrators,
	validateGetAdministratorByID,
	validateCreateAdministrator,
	validateUpdateAdministrator,
	validateDeleteAdministrator
};