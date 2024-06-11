const mongoose = require('mongoose');

// TODO: create env for later 
const uri = "mongodb+srv://ts2504:GZRZkJCIbjdKQcUm@cluster0.tqwsycs.mongodb.net/LoginDB?retryWrites=true&w=majority&appName=Cluster0";

// TODO: connect to the database 
const LoginSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
        }, 

  password: {
    type: String, 
    required: true
  }
}); 

// connect model to the scehma 
const User = mongoose.model('Users', LoginSchema);

// database connection 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Query MongoDB and retrieve data 
    User.find({})
      .then(data => {
        console.log('Retrieved data:', data);

        // Close the connection 
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error retrieving data:', err);
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// export the modeule/schema
module.exports = User;