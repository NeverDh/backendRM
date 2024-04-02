const connection = require("./connection.model");



const calculateForm = async (req) => {
	try{
		const dependentResult = [];
		const {plano, idade, dependentes, seguro} = req.body
		const holderResult = await connection.execute(`SELECT VALOR
														FROM zmdtabelapreco
														WHERE NOMEFANTASIA = '${plano}'
														AND '${idade}' BETWEEN IDADEINICIAL AND IDADEFINAL
														AND TIPO = 'T';`);
		
		if (dependentes.length > 0) {
			// Usando Promise.all para aguardar todas as consultas serem concluídas
			await Promise.all(dependentes.map(async (dependente) => {
				const result = await connection.execute(`
					SELECT VALOR
					FROM zmdtabelapreco
					WHERE NOMEFANTASIA = '${plano}'
					AND '${dependente.idade}' BETWEEN IDADEINICIAL AND IDADEFINAL
					AND TIPO = 'D';
				`);
				console.log(dependente.idade < 80 ? dependente.seguro : 0)
				//console.log((dependente.idade < 80 ? dependente.seguro : 0))
				dependentResult.push(result[0][0].VALOR + (dependente.idade < 80 ? dependente.seguro : 0));
			}));
		}

		const dependentSum = dependentResult.reduce((acumulador, elemento) => acumulador + elemento, 0);

		if(seguro > 0){
			const somarSeguro = idade < 80 ? seguro : 0
			//console.log(holderResult[0][0].VALOR + dependentSum + somarSeguro)
			return holderResult[0][0].VALOR + dependentSum + somarSeguro
		} else{
			//console.log(holderResult[0][0].VALOR + dependentSum)
			return holderResult[0][0].VALOR + dependentSum;
		} 
	

	}catch(err) {
		return err;
	}

};

module.exports = {
	calculateForm
}