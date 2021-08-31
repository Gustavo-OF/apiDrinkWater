import { Request, Response } from "express";

import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
    constructor(private listUserUseCase: ListUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { iduser } = request.params;
        try {
            const user = this.listUserUseCase.execute(iduser);
            return response.status(200).json(user);
        } catch (e) {
            return response.status(404).json({ error: e.message });
        }
    }
}

export { ListUserController };
