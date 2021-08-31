import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}
    handle(request: Request, response: Response): Response {
        const { idUser } = request.params;
        try {
            this.deleteUserUseCase.execute(idUser);
        } catch (e) {
            return response.status(404).json({ error: e.message });
        }
        return response.status(200).send();
    }
}

export { DeleteUserController };
