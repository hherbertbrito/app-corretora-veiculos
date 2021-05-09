# Aplicação desenvolvida como teste pratico de angular e Java 

## Descrição

Este é um projeto construído para testar os conhecimentos práticos das seguintes tecnologias, Angular e Java.

Para facilitar a implementação deste projeto foi adicionado o Docker, pois evitaria instabilidade de ambientes, e facilitar o levante da projeto.

Tambem para construção deste projeto foram utiliza a seguinte stack:

    * Angular versão 10
    * Java 1.8
    * MYSQL
  
## Pré-requisitos

Para executar este aplicativo, você precisa instalar duas ferramentas: 
**Docker** & **Docker Compose**.

Instruções de como instalar  **Docker** on [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [Windows](https://docs.docker.com/docker-for-windows/install/) , [Mac](https://docs.docker.com/docker-for-mac/install/).

Dosker Compose já está incluído nos pacotes de instalação para Windows e Mac , portanto, apenas usuários do Ubuntu precisam seguir [estas instruções](https://docs.docker.com/compose/install/) .

## Outros passos

Se não for do interesse a instalão do **Docker**, poderá seguir os passos a baixo.

### Back-end

Será preciso utilizar o [Maven](https://maven.apache.org/) para baixar dependencias, e compilar o projeto.

~~~shell
    $> mvn -f pom.xml clean package
~~~

### Front-end

Será preciso instalar o [node](https://nodejs.org/), e executar o comando a baixo.

~~~shell
    $> npm install
~~~

Após a instalção das dependecias, será preciso configurar o arquivo proxy.conf.js, infomando o host do Back-end, na propriedade target.

```json
    {
        context: ['/api'],
        target: 'http://host-backend:porta/',
        secure: false,
        logLevel: 'debug'
    }
```

### DataBase

Será preciso instalar uma instancia do [MYSQL](https://www.mysql.com/).

### Como executá-lo?

Aplicação como todo pode ser executado com um único comando em um terminal:

~~~shell
    $> docker-compose up -d
~~~

Se quiser pará-lo, use o seguinte comando:

~~~shell
    $ docker-compose down
~~~

## Back-end - app-spring-java

A aplicação no back-end foi baseado em Spring Boot (Java) que se conecta a um banco de dados, e expõe os endpoints REST que podem ser consumidos pelo front-end. Ele suporta vários métodos HTTP REST como GET, POST, PUT e DELETE..

Ao executar localmente este estara disponivel no seguite host http://localhost:8080/api.

## Front-end 

O front-end foi construido utilizando o framework [Angular](https://angular.io/).
