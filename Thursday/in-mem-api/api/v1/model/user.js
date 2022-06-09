const UserNotFoundError = require('../error/user-not-found-error');

function User(username, email, age) {
    this.username = username;
    this.email = email;
    this.age = age;
}

    const user = new User("fred", "fred@mail.com", 32);

// static properties

User.idCounter = 1; // to help ensure we don’t have duplicate ids
User.database = []; // temporary in-memory database as an array

// for saving users to the in memory database and updating existing ones
User.save = function(user) {
    if (user.id) {
        // user has an id, check if they exist
        const existingUser = User.find(user.id);
        // user exists, update them
    if (user.email) existingUser.email = user.email;
    if (user.age) existingUser.age = user.age;
        return existingUser;
    } else {
        // user doesn't exist, save new user
        user.id = User.idCounter++;
        User.database.push(user);
        return user;
    }

}

User.findAll = function() {
    return User.database;

}

User.find = function(id) {
    const user = User.database.find(user => user.id == id);
    if (!user) throw new UserNotFoundError(id);
    return user;

}

User.delete = function(id) {
    const userIndex = User.database.findIndex(user => user.id == id);
    console.log(userIndex)
    if (userIndex === -1) throw new UserNotFoundError(id);
        // user must exist to have reached here
        User.database.splice(userIndex, 1); // delete the user
}

module.exports = User;