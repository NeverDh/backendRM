const connection = require("./connection.model");
const calcForm = require('./calculate_form.model')


const saveForm = async (req) => {
	try{
		const {nome, cidade, plano, idade, seguro, dependentes, sexo, temPlano, filtro} = req.body

        const valor = await calcForm.calculateForm(req)
		const result = await connection.execute(`INSERT INTO formularios_salvos (nome, cidade, tPlano, idade, seguro, quantidade_dependentes, criadoEm, valor, filtro, sexo, plano) 
        VALUES ('${nome}', '${cidade}', '${temPlano}', ${idade}, '${seguro}', '${dependentes.length}', NOW(), '${valor}', '${filtro}', '${sexo}', '${plano}');`);
		console.log(result[0])
		return result[0].insertId
	

	}catch(err) {
        console.log(err)
		return err;
	}

};

const getSaveForm = async (req) => {
	try{
		const {filtro} = req.body
		const result = await connection.execute(`SELECT * FROM formularios_salvos where filtro = '${filtro}'`);
		console.log(result[0])
		return result[0]
	

	}catch(err) {
        console.log(err)
		return err;
	}

};

module.exports = {
	saveForm,
    getSaveForm

}