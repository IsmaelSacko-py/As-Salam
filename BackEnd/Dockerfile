# Étape 1 : Utiliser une image Maven pour construire le projet Spring Boot (créer l'artefact)
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

# Copier tout le contenu du dossier BackEnd
COPY . .

# Construire le projet Maven sans les tests
# RUN mvn clean install package
RUN mvn clean package -DskipTests

# Étape 2 : Utiliser une image OpenJDK pour exécuter l'application Spring Boot
FROM openjdk:17

WORKDIR /app

# récupérer le fichier war dans le dossier target
COPY --from=build /app/target/*.war app.war
# ARG WAR_FILE=target/*.war

# Copier le fichier .war depuis dans le dossier app en le nommant "AsSalam.war"
# COPY ${WAR_FILE} /app/AsSalam.war

# Exposer le port par défaut de l'application Spring Boot
EXPOSE 8080

# Lancer l'application Spring Boot
ENTRYPOINT ["java", "-jar", "/app/AsSalam.war"]
