const mongoose = require('mongoose');

// burda biraz kafama göre takıldım isteğe bağlı eklerim ilerde

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
