#!/bin/sh
set -ex
export HOME=/app
mkdir -p ${HOME}
cd ${HOME}
# RELEASE_URL=$(curl \
#     -s "http://metadata.google.internal/computeMetadata/v1/instance/attributes/release-url" \
#     -H "Metadata-Flavor: Google")
# gsutil cp ${RELEASE_URL} cw-release
# chmod 755 cw-release
# wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 \
#     -O cloud_sql_proxy
# chmod +x cloud_sql_proxy
# mkdir /tmp/cloudsql
# PROJECT_ID=$(curl \
#     -s "http://metadata.google.internal/computeMetadata/v1/project/project-id" \
#     -H "Metadata-Flavor: Google")
# ./cloud_sql_proxy -projects=${PROJECT_ID} -dir=/tmp/cloudsql &
NODE_ENV=production
npm install -g serve
npm start

# Whenever you want to do a new build, you only need to repeat the steps to
# perform a production build as described in this subsection. You do not need to
# modify the Dockerfile.

# docker build -t cw-image .
# container_id=$(docker create cw-image) docker cp
# ${container_id}:/app/start_release start_release docker rm ${container_id}
# gsutil cp start_release gs://${BUCKET_NAME}/platform-umbrella-release

# gcloud compute instances create-with-container cw-instance \
#     --image-family debian-9 \
#     --image-project debian-cloud \
#     --machine-type f1-micro \
#     --scopes "userinfo-email,cloud-platform" \
#     --metadata-from-file startup-script=instance-startup.sh \
#     # --metadata release-url=gs://${BUCKET_NAME}/release-1 \
#     --zone us-central1-f \
#     --tags http-server

# check progress of instance creation
# gcloud compute instances get-serial-port-output cw-instance \
    # --zone us-central1-f

# gcloud compute firewall-rules create default-allow-http-8080 \
#     --allow tcp:8080 \
#     --source-ranges 0.0.0.0/0 \
#     --target-tags http-server \
#     --description "Allow port 8080 access to http-server"

# gcloud compute instances list

# To see your application running, go to
# http://${IP_ADDRESS}:8080 where ${IP_ADDRESS} is the external address you
# obtained above.

# docker tag fe-image gcr.io/eternal-sunset-206422/fe-image:latest
# docker push gcr.io/eternal-sunset-206422/fe-image:latest

# For example, the following command creates a new VM instance named nginx-vm
# which will launch and run Docker image gcr.io/cloud-marketplace/google/nginx1:latest.
# gcloud compute instances create-with-container cw-vm \ --container-image
# gcr.io/cloud-marketplace/google/nginx1:latest
