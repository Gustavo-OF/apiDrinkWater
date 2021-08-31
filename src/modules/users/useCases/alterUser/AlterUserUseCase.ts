import {
    IUsersRepository,
    IUsersRepositoryDTO,
} from "../../repositories/IUsersRepository";

class AlterUserUseCase {
    constructor(private userRepository: IUsersRepository) {}
    execute(
        { name, email, password }: IUsersRepositoryDTO,
        idUser: string
    ): void {
        const check = this.userRepository.checkIfUserExists(idUser);
        if (!check) {
            throw new Error("User not found!");
        }
        const user = this.userRepository.findById(idUser);
        if (typeof name === "string") {
            this.userRepository.alterName(name, user);
        }
        if (typeof email === "string") {
            this.userRepository.alterEmail(email, user);
        }
        if (typeof password === "string") {
            this.userRepository.alterPassword(password, user);
        }
    }
}

export { AlterUserUseCase };
