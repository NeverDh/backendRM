const model = require("../models/userModel");

const authorization = async (req, res, next) => {
	if (!req.get("Authorization")){
		return res.status(401).json({message: "Não Autorizado!"});
	}
	const credentials = Buffer.from(req.get("Authorization").split(" ")[1], "base64").toString().split(":");

	const username = credentials[0];
	const password = credentials[1];
	const authorization = await model.loopLoginSQL(username, password);
	if (authorization === false){
		return res.status(400).json({message: "Não Autorizado!"});
	}
	req.user =  authorization[0];

	next();
};

const verifyUsername = async (req, res, next) => {
	const isUsed = await model.loopVerifyUsername(req.body.login);
	if (isUsed === true){
		return res.status(400).json({message: "Login já utilizado!"});
	}

	next();
};

module.exports = {
	authorization,
	verifyUsername
};