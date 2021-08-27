import UserServices from "./UserServices";
import SessionServices from "./Session";
import Quotes from "./Quotes";
const services = {
    UserService: new UserServices(),
    Session: new SessionServices(),
    Quotes: new Quotes(),
  };
  
  export default services;
  