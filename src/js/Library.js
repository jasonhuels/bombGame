let defusers = [
  {
    createPass: function() {
        let password = "";
        for (let i = 0; i < 4; i++) {
          password += Math.floor(Math.random() * 9);
        }
        console.log(password);
        return password
    },
    checkPass: function(input, passwordCode) {
      if (input.toString() === passwordCode.toString()) {
        console.log("You did it!");
      } else {
        console.log("You didn't do it, password was " + passwordCode + " input was " + input)
      }
    },
  },
  {
    type: "wire"
  }
  
];

export default defusers;