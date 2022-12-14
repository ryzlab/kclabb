# Keycloak
## Ladda hem och starta
Laddas hem [Här](https://github.com/keycloak/keycloak/releases/download/19.0.3/keycloak-19.0.3.zip) och startas med
````
$ ./bin/kc.sh start-dev --http-port 8180
````

## Sätt upp realm, client och user

Om inte annat sägs, lämna all defaultkonfiguration orörd

* Skapa realm "kclabbrealm"

* Skapa reactclient och konfigurera:
  * Lägg till 'Valid redirect URIs': `http://localhost:3000/*`
  * Lägg till 'Web origins': `http://localhost:3000`
  * Lägg till 'Valid post logout redirect URIs': `http://localhost:3000/*`

* Skapa roll 'testrole'
* Skapa user 'kalle' och sätt password med 'Temporary' satt till 'False'
* Lägg till rollen 'testrole' till 'kalle'


# Klona repo och skapa labbkatalog
````
$ git clone https://github.com/ryzlab/kclabb
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
Det finns en css med lite finare styling som man kan kopiera:

````
$ cp ../../solution/react-app/src/App.css src/App.css
````

## Starta
````
$ npm start
````

# Spring-Boot App
## Skapa applikationen
Projektet skapas med hjälp av [Spring Initializr](https://start.spring.io)

* Inställningar
  - Group: se.ryz
  - Artifact: kclabb
  - Name: kclabb
* Lägg till Spring Security och Web, välj Java 8 och Gradle
* Packa upp i katalogen "labb" och öppna i IntelliJ

## Extra beroenden i Spring-Boot-Appen
Lägg till följande beroenden till 'build.gradle':
````
implementation 'com.fasterxml.jackson.core:jackson-databind:2.13.4'
implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'
implementation 'org.springframework.security:spring-security-oauth2-jose'
implementation 'org.keycloak:keycloak-spring-boot-starter:19.0.1'
implementation 'org.keycloak:keycloak-spring-security-adapter:18.0.2'
````
