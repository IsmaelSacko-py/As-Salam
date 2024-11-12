# Étape 1 : Construire le projet Angular
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Nettoyer le cache avant d'installer les packages
RUN npm cache clean --force

# Installer les dépendances du projet y compris angular CLI
RUN npm install && npm install -g @angular/cli@17

# Copier tout le contenu du dossier FrontEnd
COPY . .

# Construire l'application Angular pour la production
RUN npm run build --configuration=production

# Étape 2 : Utiliser une image Nginx pour servir les fichiers Angular
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers construits depuis l'étape précédente
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Exposer le port par défaut de Nginx
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
