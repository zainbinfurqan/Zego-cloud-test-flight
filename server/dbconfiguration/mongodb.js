const mongooseLib = require('mongoose')


module.exports = {
    MongoDBConnection: async () => {
        try {
            await mongooseLib.connect('mongodb+srv://zain:admin123@cluster0.c8nbwsh.mongodb.net/zego-cloud-db?retryWrites=true&w=majority');
            console.log("database connect")
        } catch (error) {
            console.log(error)
        }
    }
}