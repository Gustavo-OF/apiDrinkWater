import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    handle(request: Request, response: Response): Response {
        const { name, email, password } = request.body;
        try {
            const newUser = this.createUserUseCase.execute({
                name,
                email,
                password,
            });
            return response.status(200).json(newUser);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateUserController };
