# Basic Introduction
```
This app is a simple ecommerce platform developed in Nodejs with JWT, user's registration and login
```
# Creating a RESTful API with Node.js
RESTful API with Node.js: [https://github.com/kofesto/commerce.git](https://github.com/kofesto/ecommerce.git)

## Usage
Check out the branch you're interested in ```git clone``` it and thereafter run ```npm install```.

Make sure to also add your Mongo DB URI to the .env file (which you have to create).

```
   "MONGO_DB": "YOUR_MONGO_DB_URI"
```
## Routes

```
  User's route 
```
Signup : http://localhost:5000/user/signup
Login  : http://localhost:5000/user/login

```
Products Routes
```
Get all products : http://localhost:5000/products
Create product : http://localhost:5000/products
Get single product : http://localhost:5000/products/{ProductId}
Update/Edit product : http://localhost:5000/products/{ProductId}
Delete/Remove product : http://localhost:5000/products/{ProductId}

N.B : when Creating,Updating and Deleting product, Authorization token is required, you get authorization token when you login to the app as a user 

Developed by : Koffi K. Seglo email: kofesto@hotmail.com
