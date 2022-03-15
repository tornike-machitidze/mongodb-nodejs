1. for password encrypt we use bcrypt npm package
2. it takes two arguments (password, 10) first is password second is number of how to hash it
3. bcrypt.hash(password, 10) 10 describes how any times algorithm execute
4. hashed algorithms are not reversable we cant get back string password
5. we use bcrypt.compare("password", hashedPassword) it returns boolean
