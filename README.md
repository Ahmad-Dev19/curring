"# curring" 
Currying is a functional programming concept where a function that takes multiple arguments is transformed into a 
series of functions, each taking a single argument. Instead of passing all arguments at once, you pass them 
one by one.
Currying is  a Function with More Arguments.
Currying doesn't stop at two arguments. You can curry functions with multiple arguments, transforming them into a
series of single-argument functions.

 1:Stateless Behavior:

No server-side session the token holds user data.
No sessions stored on the server OLX uses a stateless architecture where the server does not remember user sessions. Each request from the client contains all necessary information like a token for the server to verify the user.

 2:Authentication:

Login Users log in with passwords Emails or social logins (Google, Facebook).
After login the server generates a JWT token. This token is sent to the client and stored 
Every time the user interacts with the app  posting  viewing ads the client sends the token in the request and the server verifies it.JWT tokens are used for login and subsequent requests.

 3:Authorization:

 Role-based access  sellers vs regular users.
OLX checks the user's role  regular user, seller, admin from the token to decide what actions they can perform.
Different roles can access different features only sellers can post ads, admins can manage ads.



REQUST AND RESPONCE :OLX 
 Methods GET, POST, PUT, PATCH, DELETE used for request  and responce OLX or other platfoms
 GET:
 if you go to OLX and search Mobile phone  you send a GET  request 
 if you have anything to find in OLX like phones, chairs, laptops,vehicles etc you can send 
 GET request and then OLX server responce /database responce 

POST:
if the user post anything in olx the user make a ads  and the thing is post he fullfil the
form like user post about phone he make ad like vivo s1 model name and then phone colour ,etc
like add properties and then user send a POST request 

PUT:
modify or update existing product user details etc  user send PUT request
 
DELETE:
when a user need to delete our ads user send DELETE request

PATCH:
if a user post the ad and then he realize our ad have one or more then one mistake he will change send PATCH request
user make a partial update of product/ad


GET:	Retrieve data	Get a list of products
POST:	Create new data	Add a new product
PUT:	Update entire record	Replace product information
PATCH:	Update part of a record	Change the price of a product
DELETE:	Remove data	Delete a product

 