import { Request, Response } from "express";

import { DrinkWaterUseCase } from "./DrinkWaterUseCase";

class DrinkWaterController {
    constructor(private drinkWaterUseCase: DrinkWaterUseCase) {}

    handle(request: Request, response: Response): Response {
        const { drink_counter } = request.body;
        const { iduser } = request.params;
        try {
            const user = this.drinkWaterUseCase.execute(drink_counter, iduser);
            return response.status(200).json(user);
        } catch (e) {
            return response.status(404).json({ error: e.message });
        }
    }
}

export { DrinkWaterController };
