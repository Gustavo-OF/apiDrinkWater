import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class DrinkWaterUseCase {
    constructor(private userRepository: IUsersRepository) {}

    execute(drinkMl: number, idUser: string): User {
        const check = this.userRepository.checkIfUserExists(idUser);
        if (!check) {
            throw new Error("User not found!");
        }
        if (drinkMl < 0 || typeof drinkMl !== "number") {
            throw new Error("Quantity not informed!");
        }
        const user = this.userRepository.drinkWater(drinkMl, idUser);
        return user;
    }
}

export { DrinkWaterUseCase };
