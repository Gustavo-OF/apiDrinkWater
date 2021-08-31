import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { DrinkWaterController } from "./DrinkWaterController";
import { DrinkWaterUseCase } from "./DrinkWaterUseCase";

const userRepository = UserRepository.getInstance();
const drinkWaterUseCase = new DrinkWaterUseCase(userRepository);
const drinkWaterController = new DrinkWaterController(drinkWaterUseCase);

export { drinkWaterController };
