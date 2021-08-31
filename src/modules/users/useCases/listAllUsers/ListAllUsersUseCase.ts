import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
    constructor(private userRepository: IUsersRepository) {}

    execute(): User[] {
        const users = this.userRepository.listAll();
        return users;
    }
}

export { ListAllUsersUseCase };
