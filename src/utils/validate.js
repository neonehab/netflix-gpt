export const validateLoginData = (name, email, password) => {
  var emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  var nameRegex = /^(?=.{1,29}$)[A-Za-z]*(?:\h+[A-Z][A-Za-z]*)*.{4,}$/gm

  if(name !== null) {
    if (!nameRegex.test(name)) return "Name is not valid";
  }
  
  if (!emailRegex.test(email)) return "Email is not valid";
  if (!passwordRegex.test(password)) return "Password is not valid";
  return null;
};
