/* Você terá 5 variáveis. Sendo elas:
1- Preço do Etanol;
2- Preço da Gasolina;
3- O tipo de combustível que está no seu carro;
4- Gaste médio de combustível do carro por KM;
5- Distância em KM da viagem;
*/

const precoEtanol = 5.79;
const precoGasolina = 5.79;
const KmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivel === 'Etanol'){
 const valorGasto = litrosConsumidos * precoEtanol;
 console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = litrosConsumidos* precoGasolina;
 console.log(valorGasto.toFixed(2));
}
