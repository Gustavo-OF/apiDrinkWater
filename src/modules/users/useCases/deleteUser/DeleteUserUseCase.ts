import { IUsersRepository } from "../../repositories/IUsersRepository";

class DeleteUserUseCase {
    constructor(private userRepository: IUsersRepository) {}

    execute(idUser: string): void {
        const check = this.userRepository.checkIfUserExists(idUser);
        if (!check) {
            throw new Error("User not found");
        }
        this.userRepository.delete(idUser);
    }
}

export { DeleteUserUseCase };
