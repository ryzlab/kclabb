# Keycloak
Laddas hem [Här](https://github.com/keycloak/keycloak/releases/download/19.0.3/keycloak-19.0.3.zip) och startas med
````
$ ./bin/kc.sh start-dev --http-port 8180
````

# Klona repo och skapa labbkatalog
````
$ git clone git@github.com:ryzlab/kclabb.git
$ cd kclabb
$ mkdir labb
$ cd labb
````

# React app
## Skapa
````
$ npx create-react-app react-app
$ cd react-app
$ npm install keycloak-js @react-keycloak/web
````

## Styling
Det finns en css för lite finare styling som man kan kopiera:

`$ cp ../../solution/react-app/src/App.css src/App.css`

## Starta
````
$ npm start
````

# Spring-Boot
Projektet skapas med hjälp av [Spring Initializr](https://start.spring.io)

* Inställningar
  - Group: se.ryz
  - Artifact: kclabb
  - Name: kclabb
* Lägg till Spring Security och Web, välj Java 8 och Gradle
* Packa upp i katalogen "labb" och öppna i IntelliJ

## Extra imports till Spring-Boot-Appen
````
implementation 'com.fasterxml.jackson.core:jackson-databind:2.13.4'
implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'
implementation 'org.springframework.security:spring-security-oauth2-jose'
implementation 'org.keycloak:keycloak-spring-boot-starter:19.0.1'
implementation 'org.keycloak:keycloak-spring-security-adapter:18.0.2'
````
