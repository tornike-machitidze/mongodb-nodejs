1. Start up Mongodb ----------------> /Users/....mongod.exe --dbpath=/Users....data
2. Connect Mongodb, Databse and express Server --> Mongodb <-----> Express Server (Node app) mongoose.connect("mongodb:// .../databseName ")
3. Start up express server ----> app = express() app.listen(PORT)
4. Create first collection in Connected database --> User = mongoose.model("Users", userSchema)
5. Create instance of this model --> me = new User({name: "Toke"})
6. Save created instane --> me.save()
7. CRUD operations with mongoose is easy
8. Create routes use Router( ) ---> const regionRoutes = Router() app.use(regionRoutes)
