import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUserUseCase {
    constructor(private userRepository: IUsersRepository) {}

    execute(idUser: string): User {
        const check = this.userRepository.checkIfUserExists(idUser);
        if (!check) {
            throw new Error("User not found");
        }
        const user = this.userRepository.findById(idUser);
        return user;
    }
}

export { ListUserUseCase };
