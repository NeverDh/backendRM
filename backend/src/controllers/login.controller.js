const model = require("../models/user.model");

const authorization = async (req, res) => {
	if (!req.get("Authorization")){
		return res.status(401).json({message: "Não Autorizado!"});
	}
	const credentials = Buffer.from(req.get("Authorization").split(" ")[1], "base64").toString().split(":");

	const username = credentials[0];
	const password = credentials[1];
	const authorization = await model.loginSQL(username, password);
	if (authorization === false){
		return res.status(400).json({message: "Não Autorizado!"});
	}
	
	const allResults = authorization;

	return allResults.length > 0 ? res.status(200).json(allResults) : res.status(400).json({message: "Sem dados!"});
};

module.exports = {
	authorization
};