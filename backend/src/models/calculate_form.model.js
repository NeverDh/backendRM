const connection = require("./connection.model");



const calculateForm = async (req) => {
	try{
		const dependentResult = [];
		const {nomefantasia, idade, dependentes, seguro} = req.body
		console.log(nomefantasia, idade, dependentes, seguro)
		const holderResult = await connection.execute(`SELECT VALOR
														FROM zmdtabelapreco
														WHERE NOMEFANTASIA = '${nomefantasia}'
														AND '${idade}' BETWEEN IDADEINICIAL AND IDADEFINAL
														AND TIPO = 'T';`);
		
		if (dependentes.length > 0) {
			// Usando Promise.all para aguardar todas as consultas serem concluídas
			await Promise.all(dependentes.map(async (idadeDependente) => {
				const result = await connection.execute(`
					SELECT VALOR
					FROM zmdtabelapreco
					WHERE NOMEFANTASIA = '${nomefantasia}'
					AND '${idadeDependente}' BETWEEN IDADEINICIAL AND IDADEFINAL
					AND TIPO = 'D';
				`);
				dependentResult.push(result[0][0].VALOR);
			}));
		}

		const dependentSum = dependentResult.reduce((acumulador, elemento) => acumulador + elemento, 0);

		if(seguro > 0){
			console.log(holderResult[0][0].VALOR + dependentSum + seguro)
			return holderResult[0][0].VALOR + dependentSum + seguro
		} else{
			console.log(holderResult[0][0].VALOR + dependentSum)
			return holderResult[0][0].VALOR + dependentSum;
		} 
	

	}catch(err) {
		return err;
	}

};

module.exports = {
	calculateForm
}