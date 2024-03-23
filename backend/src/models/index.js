const connection = require("./connectionModel");



const get = async (req) => {
	try{
		const allResults = await connection.execute("select * from *");
		return allResults[0];
	}catch(err) {
		return err;
	}

};

const getById = async (req) => {
	try{
		const result = await connection.execute("select * from * where any = any");
		return result[0];
	}catch(err) {
		return err;
	}

};

const create = async (req) => {
	try{
		const {variables} = req.body;
		const createdResult = await connection.execute(`INSERT INTO usuarioadm (nomeusuario,tipouser,login,senha) VALUES ('${nomeAdministrador}', '5', '${login}', '${senha}');`);
		return {insertId: createdResult[0].insertId};
	}catch(err) {
		return err;
	}
	

};

const update = async (req) => {
	try{
		const {variables} = req.body;
		const updatedResult = await connection.execute(`UPDATE usuarioadm SET nomeusuario='${nomeAdministrador}', senha='${senha}' WHERE id='${idAdministrador}'`);
		return {affectedRows: updatedResult[0].affectedRows, changedRows: updatedResult[0].changedRows};
	}catch(err) {
		return err;
	}
};

const exclude = async (req) => {
	try{
		const {variables} = req.body;
		const deletedResult = await connection.execute(`DELETE FROM usuarioadm WHERE id='${idAdministrador}'`);
		return {affectedRows: deletedResult[0].affectedRows};
	}catch(err) {
		return err;
	}
};

module.exports = {
	get,
	getById,
	create,
	update,
	exclude,
};