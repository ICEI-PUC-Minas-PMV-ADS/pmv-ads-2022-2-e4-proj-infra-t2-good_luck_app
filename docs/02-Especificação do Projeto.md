# Especificações do Projeto

Para que o projeto em desenvolvimento seja efetivo e resolutivo quanto às demandas do usuário, foi levantado, por meio de entrevistas realizadas por uma integrante do grupo com possíveis usuários da aplicação, os desejos e frustrações desses. Esses dados coletados foram explicitados na forma de personas para auxiliar-nos com um melhor escopo do projeto.  

## Personas

A partir das entrevistas, foram definidas as personas representadas a seguir:  

![image](https://user-images.githubusercontent.com/83511889/188509412-7e18a416-0c6b-430d-a904-8404e6b0ad82.png)

>Rodolfo Moraes Idade: 26 
>Descrição: Empresario 
>Plataformas e apps utilizados: 
Instagram 
Netflix 
Amazon Prime 
Uber 
Ifood 
Spotify 
>Motivações Promover um sorteio para maior interação dos funcionários. Aumentar a produtividade com sorteios. 
>Frustrações Dificuldade em encontrar uma plataforma simples para promover esses sorteios sem grandes cadastros. 
>Hobbies Leitura, Youtube.  


![image](https://user-images.githubusercontent.com/83511889/188509616-c9723860-649a-4f62-86c4-2fac3dadedf6.png)
>Idade: 30 
>Descrição: Gestora Comercial  de uma Faculdade 
>Plataformas e apps utilizados: Instagram Whatsapp  
>Motivações: Utilizar o aplicativo para sortear Matriculas pagas para os seus funcionários. 
>Frustrações: Dificuldade de encontrar um site intuitivo para realizar sorteios.
>Hobbies: Filmes, séries e Redes sociais 


![image](https://user-images.githubusercontent.com/83511889/188509778-1b6349f0-7665-47ef-88fb-b7c848394a70.png)

>Idade: 21 
>Ocupação: Influencer Digital 
>Plataformas e apps utilizados:  Whatsapp  Instagram Facebook
>Motivações: Utilizar o aplicativo para fazer sorteios entre os seus seguidores e aumentar o engajamento 
>Frustrações: Não consegue fazer o cadastro em aplicativos. 
>Hobbies: Salão, Filmes, Redes sociais e séries


![image](https://user-images.githubusercontent.com/83511889/188509891-403e9317-e4e1-454f-b2ab-48bd95af378c.png)

>Idade: 17 
>Ocupação: Jogadora de Volei 
>Plataformas e apps utilizados:  Whatsapp  Instagram Facebook
>Motivações: Quer utilizar o aplicativo para sortear quem vai começar a partida na ponta. 
>Frustrações: Dificuldade de um aplicativo super rápido para sortear. 
>Hobbies: Redes sociais, Ifood, Instagram 




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:
![image](https://user-images.githubusercontent.com/83511889/188510019-b909da19-62bb-4df3-a6ae-c4b6c327c445.png)



## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

A seguir, apresentamos uma tabela que reúne e identifica os requisitos funcionais do projeto, bem como indica a prioridade em que esses devem ser executados. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Existirá uma tela para cadastro  | ALTA | 
|RF-002| Existirá uma tela de login   | ALTA  |
|RF-003| Existirá uma tela para cadastrar os dados para o sorteio, seja numérico ou nominal.    | ALTA  |
|RF-004| Existirá uma tela para sortear os ganhadores.    | ALTA |
|RF-005| Os usuários a administradores do sorteio podem verificar o histórico de sorteios realizados e participados   | MÉDIA |
|RF-006| Os usuários podem compartilhar o resultado em suas redes sociais   | BAIXA |
|RF-007| Os usuários podem utilizar sem cadastro   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| A plataforma deverá ser publicada em um ambiente acessível publicamente na Internet (Replit, GitHub Pages, Netlify).  |  ALTA | 
|RNF-004| O aplicativo deverá ser thinclient.  |  ALTA | 
|RNF-005| O aplicativo deverá ter uma fonte padrão para todas as escritas, com alterações apenas no tamanho.  |  ALTA | 
|RNF-006| O aplicativo deve ser compatível com os principais dispositivos móveis do mercado.  |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |


## Diagrama de Casos de Uso

Segue abaixo o diagrama de caso de uso do nosso projeto. Ele é usado para descrever graficamente um subconjunto do modelo para simplificar a comunicação.  

![image](https://user-images.githubusercontent.com/83511889/188511269-f09eaf5b-7fa4-4039-8c0f-b821882c5886.png)




# Matriz de Rastreabilidade

Abaixo segue a nossa matriz de rastreabilidade de requisitos. Essa matriz é fundamental para execução do nosso projeto, uma vez que caso seja feita uma alteração, sabe-se quais requisitos serão afetados com tal mudança. 

 

Segue tabela detalhada da Matriz de Rastreabilidade 

![image](https://user-images.githubusercontent.com/83511889/188511311-8bb0e1b6-5740-4097-b8a3-c65bd5fec6df.png)
![image](https://user-images.githubusercontent.com/83511889/188511323-796315f5-14bb-46ee-8348-cd1945a43880.png)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento
O gerenciamento de custos do projeto, é exemplificado na tabela a seguir e inclui os processos envolvidos em estimativas, orçamento e controle dos custos, de modo que o projeto consiga ser finalizando dentro do orçamento aprovado. 

![image](https://user-images.githubusercontent.com/83511889/188511423-ca7cb454-ff39-4b61-9ec1-2b7537968764.png)



Uma outra ferramenta para gerenciamento de projeto é o gráfico de Gantt, que proporciona uma melhor visualização e gerenciamento das tarefas ao longo do tempo, onde é mostrado na imagem abaixo: 

 
 ![image](https://user-images.githubusercontent.com/83511889/188511466-e19ea719-c514-4169-9096-59dd68dfa2cc.png)

