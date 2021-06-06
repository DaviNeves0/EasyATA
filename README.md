### Projeto da parceria IACIT com a FATEC de São José dos Campos. 

# EasyAta
<p align="center">
 <img src='https://i.imgur.com/Zn4ICGa.png' width="300" > </p>

# Team 📚  
**Scrum Master/Developer:** Mateus Prestes Teodoro Aaves   
**Product Owner/Developer:** Guilherme Oliveira Pontes Alvarenga  
**Developer:** Guilherme Madeira da Silveira  
**Developer:** Henrique Kenji Nawa  
**Developer:** João Pedro Rabello Brasil de Mecenas</br>
**Developer:** João Vitor de Oliveira Soeiro</br>
**Developer:** Pedro Cruz Oliveira Araújo</br>
**Developer:** Rodrigo Félix da Silva  

<hr>

# Entrega Sprint 4 ⚡
## Entre as funcionalidades dessa entrega estão:

### Revisão de ata
Usuário poderá pedir a revisão de uma ata existente, devendo informar o assunto da revisão, Responsável da Revisão e Prazo da Revisão. Revisões pode ser incluídas, alteradas e excluídas quantas vezes forem necessárias.

Somente atas novas e atas reprovadas podem ser solicitadas para revisão e consequentemente aprovadas ou não pelo Gerente.

### Assinatura unica
Somente o administradir pode assinar uma ata, e dar o veredito final sobre os pontos levantados e discutidos naquela reunião.

### 
### Atualizações

* Documentação:
  - Atualização de itens compativeis com a entrega;


* Estado das atas:
  - Atas classificadas em 5 estados:
    1. Nova: Ata enviada ao banco de dados e sem avaliação/revisão;
    2. Pendente: Ata solicitada para revisão, aguardando a Avaliação do Gerente ou Administrador;
    3. Aprovado: Ata aprovada pelo Gerente ou Administrador;
    4. Reprovado: Ata reprovada pelo Gerente ou Administrador;
    5. Assinada: Estado final da ata, após ser aprovada ela pode ser assinada, encerrando assim o "ciclo de vida" da ata de reunião.

  - Ciclo de vida de uma Ata de Reunião criada pelo EasyAta:
  
     ![diagrama (2)](https://user-images.githubusercontent.com/56441534/120910907-1ca69400-c659-11eb-92b6-22799b94d875.png)
     
* Níveis de acesso:
  - Usuário Comum:
    - Solicita Revisão para atas novas e atas ja reprovadas.
    
  - Administrador:
    - Excluisão de usuários diretamente do banco de dados.
  
Obs: Reforçando que, todas as funcionalidades do usuário comum e Gerente estão disponíveis para usuários com nível Administrador.

### Melhorias
 - Atas pendentes são exibidas para o Gerente avaliar;
 - Atas aprovadas são exibidas para o Administrador assinar.



# Vizualização das funcionalidades entregues nesta sprint: 

# `Resumo das novas telas`:

## Administrador
### Painel
![PainelAdministrador](https://user-images.githubusercontent.com/56441534/120910345-78225300-c654-11eb-9d73-bf19bab6bf2a.png)

## Gerente
![GerenteAprovarATA](https://user-images.githubusercontent.com/56441534/120910354-8b352300-c654-11eb-8244-11c36a49a5e4.png)

## Usuário comum
### Revisão de atas
![PedirRevisao](https://user-images.githubusercontent.com/56441534/120910327-5c1eb180-c654-11eb-8eef-0b0a250f9d9c.png)


## `Videos demonstrativos:`
***
### Solicitando Revisão
Vídeo demonstrativo onde o usuário cria uma ata e solicita uma revisão devendo informar o assunto da revisão, Responsável e o Prazo da Revisão, podendo antes de solicitar a revisão editar as informações da ata presentes no banco de dados.

https://user-images.githubusercontent.com/56441534/120910392-f54dc800-c654-11eb-9670-0543209e8325.mp4


### Análisando ata pendente
Após ser solicita a revisão, as atas passam de novas para pendentes e são exibidas para o Gerente ou Administrador avalia-las.
Atas aprovadas passam para a fase de assinaturas.
Atas reprovadas voltam para o estado de uma nova ata, podendo assim ser solicitada para uma nova revisão.

https://user-images.githubusercontent.com/56441534/120910463-8cb31b00-c655-11eb-9338-3a17efb0f7c8.mp4


### Assinando atas aprovadas
Atas aprovadas podem agora, ser assinadas por alguém de cargo relevante na empresa ou algum usuário de nível Administrador.
Ao ser assinada, encerra-se o ciclo de vida de uma ata que deve ser criada, revisada, analisada e assinada.

https://user-images.githubusercontent.com/56441534/120910608-a3a63d00-c656-11eb-8ea6-5e5469cd2492.mp4

OBS: A Assinatura é composta pelos itens:
 - Endereço local da máquina de onde o Administrador assina;
 - Login do Administrador logado no momento em que é acionado o botão de assinar;
 - Data e hora atual do momento de assinatura.

# Tecnologias 💻 

## FrontEnd

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white%22/%3E"> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

## BackEnd

<img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white">

## Banco de Dados 

<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
<hr>
