# Étape 1 : Utiliser une image Maven pour construire le projet Spring Boot
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

# Copier le fichier .war depuis l'étape précédente
COPY --from=build /app/target/BackEnd-0.0.1-SNAPSHOT.war app.war

# Exposer le port par défaut de l'application Spring Boot
EXPOSE 8080

# Lancer l'application Spring Boot
ENTRYPOINT ["java", "-jar", "/app/app.war"]
