pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('BUILD IMAGE'){
            steps{
                sh '''
                if test ! -z "$(docker ps -af name=front | grep -w front$)"; then
                    docker stop front && docker rm front
                fi
                docker build -t front-app .
                docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
                '''
            }
        }
        stage('RUN CONTAINER'){
            steps{
                sh'''
                docker run -itd --name front -p 8080:8080 front-app:latest
                '''
            }
        }
        stage('RUN UNITTEST'){
            steps{
                sh '''
                docker exec -t front npm run test:unit
                docker exec -t front npm run coverage
                '''
            }
        }
    }
}