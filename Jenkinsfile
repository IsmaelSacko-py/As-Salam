pipeline {
    agent any

    environment {
        SERVER = 'ubuntu@54.89.127.21'  // Définir la variable ici
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
                sshagent(['ssh-key']) {
                  sh '''
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
