pipeline{
    agent any
    stages{
        stage('clone'){
            steps{
                git 'https://github.com/anantPratapSingh01/jenkins-deploy.git'
            }
        }
        stage('docker build'){
            steps{
                sh 'docker-compose build'
            }
        }
         stage('deploy'){
            steps{
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        success {
            echo "Automation Success: Containers Running"
        }
        failure {
            echo " Automation Failed"
        }
    }
}