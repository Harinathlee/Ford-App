# Steps to build the docker image
1. Build your project for a specific environment e.g. npm run build or stagebuild etc
2. Then run => npm run dockerize [This will dockerize the dist folder along with server]
3. In the terminal run --> docker images  [to see you image that was built]
4. To run the image in the docker 
    docker run -p 8080:80 ford-poc-react-stg   // use -stg for staging and -prd for prod
    You should see your your application running at localhost:8080
5. To stop the image from running
    a. First identify the containers that are running
        docker ps
    b. Identify the container id and then
        docker stop ca29679fca28

# Creating builds/images based on the env [TODO]

# Steps to push the image in the GCR {Google cloud registry} TODO
1. Tag the image that will be pushed.
    docker tag your-image-name gcr.io/gcp-project-id/your-image-name
2. Authenticate the docker
    gcloud auth configure-docker
3. Push the image to the GCR
    docker push gcr.io/gcp-project-id/your-image-name
4. Deploy to the cloudrun
    gcloud run deploy your-service-name \
  --image gcr.io/gcp-project-id/your-image-name \
  --platform managed \
  --region your-region \
  --allow-unauthenticated

  Once deployed, you will receive a URL to access your static application running on Cloud Run.


