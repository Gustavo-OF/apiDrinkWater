import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { ListAllUserController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const userRepository = UserRepository.getInstance();
const listAllUserUseCase = new ListAllUsersUseCase(userRepository);
const listAllUserController = new ListAllUserController(listAllUserUseCase);

export { listAllUserController };
