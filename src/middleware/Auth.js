const adminAuth = (req,res, next) => {
    const token = "xyz"
    const isAdminAuth = token === "xyz";
    if(!isAdminAuth){
        res.status(401).send("unauthrized token")
    } else {
        console.log("authriztion process")
        next();
    }
}

module.exports = {
    adminAuth
}