FROM debian:wheezy
MAINTAINER Matt Mischewski <matt@dreamineering.com>
ENV REFRESHED_AT 2014-10-30
RUN apt-get update && \
    apt-get install -y curl build-essential


# RUN apt-get install -y lsb-release && \
#     curl -sL https://deb.nodesource.com/setup | bash
# RUN apt-get install -y nodejs npm
RUN apt-get install -y -q nginx

RUN mkdir -p /var/www/stackmates

RUN chown -R www-data:www-data /var/www/stackmates
RUN chmod 755 /var/www

# Prepare nginx
RUN rm /etc/nginx/sites-available/default
# production
ADD nginx/stackmat.es /etc/nginx/sites-available/stackmat.es
RUN ln -s /etc/nginx/sites-available/stackmat.es /etc/nginx/sites-enabled/stackmat.es

# development
ADD nginx/localdev /etc/nginx/sites-available/localdev
RUN ln -sf /etc/nginx/sites-available/localdev /etc/nginx/sites-enabled/localdev


RUN echo "daemon off;" >>/etc/nginx/nginx.conf

EXPOSE 80

CMD ["service", "nginx", "start"]

