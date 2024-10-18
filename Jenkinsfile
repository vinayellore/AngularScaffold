pipeline {
    agent any

    stages {
        stage('Echo Completion') {
            steps {
                // Echo message to show that the pipeline has completed
                echo 'Pipeline completed successfully!'
            }
        }
    }

    post {
        always {
            // Run this regardless of success or failure
            echo 'Job completed.'
        }
    }
}
