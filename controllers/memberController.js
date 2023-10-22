
let memberController = module.exports;  // bu holatda turli xil metodlarni yuklay olamiz.

memberController.home = (req, res) => {  // router bn bog'laymiz.
    console.log("GET cont.home");              //homega req keldi degani
    res.send("home sahifadasiz");
};
memberController.signup = (req, res) => {  // router bn bog'laymiz.
    console.log("POST cont.signup");             // signupga req keldi.
    res.send("signup sahifadasiz");
};
memberController.login = (req, res) => {  // router bn bog'laymiz.
    console.log("POST cont.login");              // login ga req keldi
    res.send("login sahifadasiz");
};
memberController.logout = (req, res) => {  // router bn bog'laymiz.
    console.log("GET cont.logout");              // logout ga req keldi.
    res.send("logout sahifadasiz");
};