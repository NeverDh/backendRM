const connection = require("./connection.model");

const loginSQL = async (username, password) => {
	let authorization = false;
	try{
		let sqlCode = `SELECT * FROM usuario WHERE codusuario='${username}' AND senha='${password}'`;
		sqlCode = await connection.execute(sqlCode);
		if (sqlCode[0].length === 1){
			authorization = sqlCode[0];
		}

	}catch (error){
		console.log(error);
	}

	return authorization;
	
};


module.exports = {
	loginSQL,
};