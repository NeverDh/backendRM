const validateLogin = async (req, res, next) => {
	if (!req.get("Authorization")){
		return res.status(401).json({message: "Não Autorizado!"});
	}

	next();

};

module.exports = {
	validateLogin
}