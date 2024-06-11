// import neccesary modules 
const express = require('express'); // for http 
const pasth = require('path'); 
const bc = require('bcrypt'); // for password encryption 
const Users = require("./config");  // import model from config 

// create app from express 
const app = express(); 
 
// set ejs as the view engine 
app.set('view engine', 'ejs'); 

// link the css file 
  //app.use(express.static(pasth.join(__dirname, 'public'))); --> did not work 
app.use(express.static("public")); 

// render ejs files 
app.get('/', (req, res) => {
  res.render('login');
  
})
   
app.get('/signup', (req, res) => {
  res.render('signup');
 
})  
          
// listen/run on this specific port
const port = 4000;
app.listen(port, () => {
  // log server and database connection test 
  console.log("Server is running on port:" + port); 
}); 

// TODO: REST OF CODE VIA PSEUDO/COMMENTS
// for future completion 
//////////////////////////////////////////

// TEST: query the data in the database and log it to test if connection works  
/*
app.get("/getUsers", async (req, res) => {

    const userName = await Users.find();
    res.json(userName);   
}); 
*/


// TODO: register a user and check database
/*
app.post("/signup", (req, res) => {
  const user = {
    username: req.body.username, 
    password: req.body.password
}

  //if user is in the database 
  const prevUser = await Users.findOne(username: user.username);  
  
  // Check to see if user is already in database
  if(prevUser) {
    res.send("Error. User already exists"); 
  }
  else{
    
    // use bcrypt to encrypt password for new user 
    const salt = await bcrypt.genSalt(10);
    
    const hashPassword = await   bcrypt.hash(user.password, salt);
    
    user.password = hashPassword;
  }
  
  // insert user into the database 
  const userData = await Users.insertMany(user); 

  // check data
  console.log(userData); 
  
}); 

*/ 

// TODO: Allow user to login

/*
app.post("/login", async(req, res) => {

  const checkUser = await Users.findOne({username: req.body.username});

  if(!checkUser){ // if no user is found
    res.send("Erorr! User has not been found!"); 
  }

  const isPasswordSame = await bcrpyt.compare(req.body.password, check.password); 

  if(isPasswordSame)
  {
    // if it is the same --> successful login 
    // show home page
  }
  else{
  res.send("Wrong password! Please try again~"); 
  }
})

*/
