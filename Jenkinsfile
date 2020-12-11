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
                    docker stop front && docker rm front >> temp.txt
                fi
                docker build -t front-app . >> temp.txt
                docker rmi $(docker images --filter "dangling=true" -q --no-trunc) >> temp.txt
                '''
            }
        }
        stage('RUN CONTAINER'){
            steps{
                sh'''
                docker run -itd --name front -p 8080:8080 front-app:latest >> temp.txt
                '''
            }
        }
        stage('RUN UNITTEST'){
            steps{
                sh '''
                docker exec -t front npm run test:unit >> temp.txt
                docker exec -t front npm run coverage >> temp.txt
                '''
            }
        }
    }
}