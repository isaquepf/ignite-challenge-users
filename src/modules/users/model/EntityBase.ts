import { v4 as uuidV4 } from "uuid";

class EntityBase {
  id: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id)
    {
      this.id = uuidV4();
      this.created_at = new Date();   
      this.updated_at = new Date();      
    }
  }
}

export { EntityBase };