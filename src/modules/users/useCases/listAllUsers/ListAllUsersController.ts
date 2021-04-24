import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id  }  = request.headers ;
    try {
      if (!user_id)
        throw new Error("user id is required.");

      user_id = user_id as string; 
      const result = this.listAllUsersUseCase.execute({user_id});

      return response.json(result);

    } catch (error) {
      return response.status(400).json({ error: error.message });
    }        
  }
}

export { ListAllUsersController };
