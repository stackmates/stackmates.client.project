FROM debian:wheezy
MAINTAINER Matt Mischewski <matt@dreamineering.com>
ENV REFRESHED_AT 2014-10-30
RUN apt-get update && \
    apt-get install -y curl build-essential


# RUN apt-get install -y lsb-release && \
#     curl -sL https://deb.nodesource.com/setup | bash
# RUN apt-get install -y nodejs npm
RUN apt-get install -y -q nginx


RUN mkdir -p /var/www

# Prepare nginx
RUN rm /etc/nginx/sites-available/default

#ADD nginx/nginx.conf /etc/nginx/nginx.conf
#ADD nginx/global.conf /etc/nginx/conf.d/
# production
#ADD nginx/stackmat.es /etc/nginx/sites-available/stackmat.es
#RUN ln -s /etc/nginx/sites-available/stackmat.es /etc/nginx/sites-enabled/stackmat.es

# development
ADD nginx/localdev /etc/nginx/sites-available/localdev
RUN ln -sf /etc/nginx/sites-available/localdev /etc/nginx/sites-enabled/localdev


RUN echo "daemon off;" >>/etc/nginx/nginx.conf

EXPOSE 80

CMD ["service", "nginx", "start"]




# workdir /blog
# run bundle install -j8

# add . /blog

# run rm /etc/nginx/sites-available/default

# add nginx/nathanleclaire.com /etc/nginx/sites-available/nathanleclaire.com
# add nginx/boot2docker /etc/nginx/sites-available/boot2docker
# run ln -s /etc/nginx/sites-available/nathanleclaire.com /etc/nginx/sites-enabled/nathanleclaire.com
# run ln -s /etc/nginx/sites-available/boot2docker /etc/nginx/sites-enabled/boot2docker


# run echo "daemon off;" >>/etc/nginx/nginx.conf

# expose 80

# cmd ["service", "nginx", "start"]
