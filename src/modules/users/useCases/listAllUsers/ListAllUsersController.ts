import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUserController {
    constructor(private listAllUserUseCase: ListAllUsersUseCase) {}
    handle(request: Request, response: Response): Response {
        //  const { token } = request.headers;
        try {
            const users = this.listAllUserUseCase.execute();
            return response.status(200).json(users);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListAllUserController };
