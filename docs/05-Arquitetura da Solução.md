# Arquitetura da Solução

Nesta seção, apresentaremos os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do seu ambiente de hospedagem. 


## Diagrama de Componentes

Os componentes que fazem parte da solução são apresentados na Figura a seguir: 
![image](/docs/img/Desenho%20de%20arquitetura.jpg)

>Fonte: adaptado pelos autores. 

A solução implementada conta com os seguintes módulos: 

ºNavegador - Interface básica do sistema  

ºPáginas Web - Conjunto de arquivos HTML, CSS, JavaScript, e imagens que implementam as funcionalidades do sistema. 

ºHospedagem  -  Local  na  Internet  onde  as  páginas  são  mantidas  e  acessadas  pelo navegador.  

 


## Tecnologias Utilizadas

React Native e React 

## Hospedagem

O processo para a hospedagem do serviço, foi realizado da seguinte maneira: Foi criado uma conta no provedor Heroku, criando uma conta básica. O repositório do projeto foi enviado através de um push ao seguinte repositório: 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e4-proj-infra-t2-good_luck_app  

Após o processo de subida dos arquivos ao repositório, voltamos novamente ao Heroku, a realizamos o deploy da aplicação do back-end. A parte do front-end, o projeto foi mantido na nuvem, pelo site: https://snack.expo.dev/@mateusvg/goodluck. Com o back-end ja feito o deploy, nos chamamos as rotas criadas através da interface Expo. 

## Qualidade de Software

A principal norma técnica que podemos citar para a construção do nosso aplicativo, é a PORTABILIDADE. Essa característica refere-se ao software em ser transferido de um ambiente para o outro. Como se trata de um aplicativo para dispositivos moveis, essa seria a principal característica. Uma segunda característica que nosso aplicativo visa atender é a USABILIDADE, onde é a capacidade ou esforço de usar o software. Podemos elencar como sub-características a atratividade, onde foi fundamental a escolha da paleta de cores e a simplicidade para o manuseio das telas representado pela operatividade. A funcionalidade, refere-se a existência de um conjunto de funções que satisfaz a necessidade estabelecidas e suas propriedades especificas. Com isso em mente, a funcionalidade seguirá uma linha com base na licitação dos requisitos, e caso haja a necessidade de mudança de algum requisito tanto funcional, quanto não-funcional, também será tomado como base esse novo requisito, para uma acurácia e adequação da funcionalidade do aplicativo. 
