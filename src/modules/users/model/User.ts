import { EntityBase } from "./EntityBase";

class User extends EntityBase {  
  constructor() {
    super();    
    this.admin = false;
  }

  name: string;
  admin: boolean;
  email: string; 
}

export { User };
