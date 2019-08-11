# FRONTEND
# build & publish release in container-registry
ssh:
	gcloud compute ssh --project eternal-sunset-206422 --zone us-central1-f cw-web-instance

build: docker build -t cw-web-image .
tag:
	docker tag cw-web-image gcr.io/eternal-sunset-206422/cw-web-image:latest
push:
	docker push gcr.io/eternal-sunset-206422/cw-web-image:latest

create:
	gcloud compute instances create-with-container cw-web-instance \
		--container-image gcr.io/eternal-sunset-206422/cw-web-image \
		--image-family debian-9 \
		--image-project debian-cloud \
		--machine-type f1-micro \
		--scopes "userinfo-email,cloud-platform" \
		--metadata-from-file startup-script=instance-startup.sh \
		--zone us-central1-f \
		--tags web-server

# check progress of instance creation
progress:
	gcloud compute instances get-serial-port-output cw-web-instance \
		--zone us-central1-f

firewall:
	gcloud compute firewall-rules create default-allow-http-8080 \
		--allow tcp:8080 \
		--source-ranges 0.0.0.0/0 \
		--target-tags web-server \
		--description "Allow port 8080 access to http-server"

list:
	gcloud compute instances list
	echo To see your application running, go to
	echo http://IP_ADDRESS:8080 where IP_ADDRESS is the external address you
	echo obtained above.
