
# TaniBox Backend restful API
RESTfull API Tani Box is a application specially for backend only. Built with NodeJs using the ExpressJs Framework.
## Requirements
1. [Node.js](https://nodejs.org/en/)
2. [Express.js](https://expressjs.com/)
3. MySql
4. [Redis](https://redis.io/)
5. [Postman](https://www.getpostman.com/)
6. Shipment API by [Raja Ongkir](https://rajaongkir.com/)
## Installing
To install TaniBox-Backend, follow these steps:
1. clone from Github:
```
$ git clone https://github.com/bayuyuhartono/TaniBox-Backend.git
```
2. Move folder
```
$ cd TaniBox-Backend
```
3. install package
```
$ yarn or npm install
```
4. create .env file and fill these with required things
```
DB_HOST =
DB_USER = 
DB_PASSWORD =
DB_NAME = 

PORT = 
JWT_KEY = 
SHIPMENT_KEY = 
REDIS_URL = 
```
5. install [redis](https://redis.io/topics/quickstart)
6. Create a database with the name hiring_cannel, and Import file [tani_box.sql](https://github.com/bayuyuhartono/TaniBox-Backend/blob/master/tani_box.sql) to phpmyadmin
7. get shipment API serial number in [RajaOngkir](https://rajaongkir.com/) and write these serial in .env
8. run the server
```
$ npm start
```
9. See all the end point in routes folder
10. Request the end point API with [Postman](https://www.getpostman.com/) application and enjoy.. 
