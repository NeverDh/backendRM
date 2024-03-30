const model = require("../models/user.model");

const authorization = async (req, res) => {
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

    const allResults = encodedCredentials;

    return authorization.length > 0 ? res.status(200).json(allResults) : res.status(400).json({ message: "Sem dados!" });
};

module.exports = {
    authorization
};