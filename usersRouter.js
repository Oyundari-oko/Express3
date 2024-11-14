const Router = require("express");
const login = require("./function/login");
const useRouter = Router();

useRouter.post("/login", login);

module.exports = useRouter;
