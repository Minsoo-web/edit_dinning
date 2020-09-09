def buildNumber = Jenkins.instance.getItem('minsoo-test').lastSuccessfulBuild.number

pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('TEST') {
            steps {
                sh"""
                ls
                pwd
                echo ${buildNumber}
                """    
            }            
        }        
    }
}