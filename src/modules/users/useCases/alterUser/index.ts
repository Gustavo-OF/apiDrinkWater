import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { AlterUserController } from "./AlterUserController";
import { AlterUserUseCase } from "./AlterUserUseCase";

const userRepository = UserRepository.getInstance();
const alterUseUserCase = new AlterUserUseCase(userRepository);
const alterUserController = new AlterUserController(alterUseUserCase);

export { alterUserController };
