# Classificador de Nível de Herói

Este projeto é um simples classificador de nível de herói baseado na quantidade de experiência (XP) acumulada. O sistema classifica o herói em diferentes níveis de acordo com a faixa de XP.

## Funcionamento

O sistema utiliza uma série de condições `if-else` para determinar a classificação do herói com base no valor da variável `xp`. A classificação é então exibida no console.

### Classificações

As classificações são determinadas pelas seguintes faixas de XP:

- **Ferro**: XP menor que 1000
- **Bronze**: XP entre 1000 e 2000
- **Prata**: XP entre 2001 e 6000
- **Ouro**: XP entre 6001 e 7000
- **Platina**: XP entre 7001 e 8000
- **Ascendente**: XP entre 8001 e 9000
- **Imortal**: XP entre 9001 e 10000
- **Radiante**: XP maior que 10000

`
# Classificador de Nível de Herói

Este projeto é um simples classificador de nível de herói baseado na quantidade de experiência (XP) acumulada. O sistema classifica o herói em diferentes níveis de acordo com a faixa de XP.

## Funcionamento

O sistema utiliza uma série de condições `if-else` para determinar a classificação do herói com base no valor da variável `xp`. A classificação é então exibida no console.

### Classificações

As classificações são determinadas pelas seguintes faixas de XP:

- **Ferro**: XP menor que 1000
- **Bronze**: XP entre 1000 e 2000
- **Prata**: XP entre 2001 e 6000
- **Ouro**: XP entre 6001 e 7000
- **Platina**: XP entre 7001 e 8000
- **Ascendente**: XP entre 8001 e 9000
- **Imortal**: XP entre 9001 e 10000
- **Radiante**: XP maior que 10000

### Exemplo de Uso

```javascript
let nomeHeroi = "Skye"; 
let xp = 4000;
let classificacao;

if (xp < 1000) {
    classificacao = "Ferro";
} else if (xp >= 1000 && xp <= 2000) {
    classificacao = "Bronze";
} else if (xp > 2000 && xp <= 6000) {
    classificacao = "Prata";
} else if (xp > 6000 && xp <= 7000) {
    classificacao = "Ouro";    
} else if (xp > 7000 && xp <= 8000) {
    classificacao = "Platina";   
} else if (xp > 8000 && xp <= 9000) {
    classificacao = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}

console.log(`O Heroi de nome ${nomeHeroi} está no nível de ${classificacao}`);
```



###  Saída Esperada
Para o exemplo acima, a saída esperada será:

`O Heroi de nome Skye está no nível de Prata`

#### Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Salve o código em um arquivo chamado classificador_nivel_heroi.js.
3. Execute o arquivo usando o comando:

`node classificador_nivel_heroi.js`


### Contribuição
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso, faça um fork deste repositório, crie uma branch para sua funcionalidade, faça as alterações e envie um pull request.

### Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.