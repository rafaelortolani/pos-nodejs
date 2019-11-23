module.exports = "idade.js";

function validaIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve(true);
        }
        else {
            reject(false);
        }
    })
}

async function checaIdade() {
    let resultado = false;

    try {
        resultado = await validaIdade(25);
    } catch (e) {
        throw new Error(e);
    }

    if (resultado) {
        console.log('Maior que 18 anos');
    }
    else {
        console.log('Menor que 18 anos');
    }
}

checaIdade();