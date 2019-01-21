# Rutas de Juarez
In Juarez, Mexico (and many other cities) public transportation is not as good as it could be. One of the major issues with public transportation in Juarez is that the citizens don't have a way to find out about bus routes, how to get from point A to point B, and so on. 

While in other cities you can use Google Maps (or your preferred app) to travel from one point in the city to another, that is not the case in Juarez; the purpose of this project is to create a platform to give the citizens and the corresponding agencies the necessary tools to accomplish this.

There are three main views which are:
- Home (Find route)
- Bus Routes
- Editor

## Home
![alt text](https://i.imgur.com/LlOrk0G.png)
In this section, users are able to type in addresses for origin and destination or to place markers to indicate starting and ending points.

## Bus Routes
![alt text](https://i.imgur.com/OcDNydd.png)
The bus routes view provides users with the capability to query any route in the database. Users can also see more than one route at a time.

## Editor
![alt text](https://i.imgur.com/LlOrk0G.png)
The editor section would provide the corresponding goverment agency with the tools to create the bus routes.

## Getting Started
Rutas de Juarez is being built with bootstrap and javascript for the front end, and lumen for the backend. All required libraries are included in this repo but there are other requirements listed below that are needed to be able to run it.

### Requirements
- Composer
- PHP >= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Bing Maps Key

### Database credentials and migrations
Before you can start using this web app you will need to create a .env file in the backend folder with database credentials. There is a sample file named .evn.example; you may edit that one and rename it as .env; Make sure to add a database name, username, and password.
```
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=you_database_password
```
Once you've created the .env file you may run the migrations to create the needed tables
```
php artisan migrate
```

## Use
Once you've everything up and running you may start using the web app but before you can query routes you must create them. Go to the editor view and add one just so you can test it out.
