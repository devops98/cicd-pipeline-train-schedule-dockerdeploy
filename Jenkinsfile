pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Running build automation'
                sh './gradlew build --no-daemon'
                archiveArtifacts artifacts: 'dist/trainSchedule.zip'
            }
        }
        stage('Build Docker Images') {
            when { 
                branch 'master'
            }
            steps {
                script {
                    app = docker.build("devops98/trainschedule12")
                                       app.inside {
                                           sh 'echo $(curl localhost:8080)'
                                       }
                }
            }
        }
    }
  }
}
