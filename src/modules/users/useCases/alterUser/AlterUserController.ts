import { Request, Response } from "express";

import { AlterUserUseCase } from "./AlterUserUseCase";

class AlterUserController {
    constructor(private alterUserUseCase: AlterUserUseCase) {}
    handle(request: Request, response: Response): Response {
        const { name, email, password } = request.body;
        const { iduser } = request.params;
        try {
            this.alterUserUseCase.execute({ name, email, password }, iduser);
        } catch (e) {
            return response.status(404).json({ error: e.message });
        }
        return response.status(200).send();
    }
}

export { AlterUserController };
