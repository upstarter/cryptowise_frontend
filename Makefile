# FRONTEND
# build & publish release in container-registry

deploy:
	$(MAKE) build_image && $(MAKE) push_image && $(MAKE) create_instance && $(MAKE) progress

ssh:
	gcloud compute ssh --project eternal-sunset-206422 --zone us-central1-f cw-web-instance

build_image:
	docker build -t cw-web-image .

push_image:
	docker tag cw-web-image gcr.io/eternal-sunset-206422/cw-web-image:latest \
	&& docker push gcr.io/eternal-sunset-206422/cw-web-image:latest

# gcloud compute instances create-with-container cw-web-instance
# 	--container-image gcr.io/cloud-marketplace/google/nginx1:1.12
create_instance:
	gcloud compute instances create-with-container cw-web-instance \
		--container-image gcr.io/eternal-sunset-206422/cw-web-image:latest \
	  --machine-type f1-micro \
		--scopes "userinfo-email,cloud-platform" \
		--metadata-from-file startup-script=instance-startup.sh \
		--zone us-central1-f \
		--tags http-server \
		--container-stdin \
    --container-tty

# check progress of instance creation
progress:
	gcloud compute instances get-serial-port-output cw-web-instance \
		--zone us-central1-f

# google has a default 8080
firewall:
	gcloud compute firewall-rules create http-server-allow-http-8080 \
		--allow tcp:8080 \
		--source-ranges 0.0.0.0/0 \
		--target-tags http-server \
		--description "Allow port 80 access to http-server"

list:
	gcloud compute instances list
	echo To see your application running, go to
	echo http://IP_ADDRESS:8080 where IP_ADDRESS is the external address you
	echo obtained above.
