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