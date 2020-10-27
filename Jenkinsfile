pipeline {
  environment {
    imagename = "default-route-openshift-image-registry.cpat-dev-sandbox-ocp44-cs-afb9c6047b062b44e3f1b3ecfeba4309-0000.us-east.containers.appdomain.cloud/client-demo/sampleapp"
    registryCredential = 'ocp-internal-registry'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/orhanIBM/jenkins', branch: 'master'])

      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( 'http://default-route-openshift-image-registry.cpat-dev-sandbox-ocp44-cs-afb9c6047b062b44e3f1b3ecfeba4309-0000.us-east.containers.appdomain.cloud/client-demo/sampleapp', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
            dockerImage.push('latest')
          }
        }
      }
    }
  }
}