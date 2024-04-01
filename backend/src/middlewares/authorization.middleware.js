const model = require("../models/user.model");

const authorization = async (req, res, next) => {
    if (!req.get("Authorization")) {
        return res.status(401).json({ message: "Não Autorizado!" });
    }
    const encodedCredentials = req.get("Authorization").split(" ")[1];
    const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString();
    const [username, password] = decodedCredentials.split(":");

    const authorization = await model.loginSQL(username, password);
    if (authorization === false) {
        return res.status(400).json({ message: "Não Autorizado!" });
    }

    authorization.length > 0 ? next() : res.status(400).json({ message: "Sem dados!" });
};

module.exports = {
	authorization
}