pipeline {
    agent any

    environment {
        SERVER = 'ubuntu@100.24.50.153'  // Définir la variable ici
    }

    stages {
        stage('checkout SCM') {
            steps {
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/IsmaelSacko-py/As-Salam.git'
            }
        }

        // stage('sonarqube analysis') {
        //     steps {
        //         withSonarQubeEnv(credentialsId: 'SonarQube-Token', installationName: 'SonarQube') {
        //             bat "./mvnw initialize sonar:sonar"
        //         }
        //     }
        // }

        stage('build'){
            steps {
                sshagent(['ssh-agent']) {
                  sh '''

                        # Arrêter tous les conteneurs en cours d'exécution s'il y en a
                        ssh -o StrictHostKeyChecking=no $SERVER "docker ps -q | xargs -r docker stop"

                        # Supprimer tous les conteneurs arrêtés
                        ssh -o StrictHostKeyChecking=no $SERVER "docker ps -a -q | xargs -r docker rm"

                      # Créer le répertoire cible si inexistant
                        ssh -o StrictHostKeyChecking=no $SERVER "mkdir -p /home/ubuntu/As-Salam"

                        # Copier les fichiers vers la machine distante
                        scp -o StrictHostKeyChecking=no -r * $SERVER:/home/ubuntu/As-Salam

                        # Se déplacer dans le répertoire As-Salam sur la machine distante et lister les fichiers
                        ssh -o StrictHostKeyChecking=no $SERVER "cd /home/ubuntu/As-Salam && ls"

                        # Créer et démarrer les conteneurs dans le répertoire /home/ubuntu/As-Salam
                        ssh -o StrictHostKeyChecking=no $SERVER "cd /home/ubuntu/As-Salam && docker-compose up -d"

                  '''
                }
            }
        }
    }
}
