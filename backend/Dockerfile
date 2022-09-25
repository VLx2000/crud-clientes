FROM php:7.2-apache

RUN docker-php-ext-install pdo_mysql mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get upgrade -y