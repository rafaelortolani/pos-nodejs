const {checaIdade}= require('./utils');

async function main(){
    try{
        await checaIdade(5);
        console.log('Maior de 18');
    } catch(error){
        console.log('Menor de 18')
    }
    
}

main();