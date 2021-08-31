import { User } from "../../model/User";
import {
    IUsersRepository,
    IUsersRepositoryDTO,
} from "../../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(private userRepository: IUsersRepository) {}
    execute({ name, email, password }: IUsersRepositoryDTO): User {
        const check = this.userRepository.checkIfUserExists(email);
        if (check) {
            throw new Error("User already exists!");
        }
        const user = this.userRepository.create({ name, email, password });
        return user;
    }
}

export { CreateUserUseCase };
