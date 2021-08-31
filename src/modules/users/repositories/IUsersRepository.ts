import { User } from "../model/User";

interface IUsersRepositoryDTO {
    name: string;
    email: string;
    password: string;
}

interface IUsersRepository {
    create({ name, email, password }: IUsersRepositoryDTO): User;
    delete(idUser: string): void;
    checkIfUserExists(idUser: string): boolean;
    findById(idUser: string): User | undefined;
    listAll(): User[];
    alterEmail(email: string, receivedUser: User): void;
    alterPassword(password: string, receivedUser: User): void;
    alterName(name: string, receivedUser: User): void;
    // alter(
    //     { email, name, password }: IUsersRepositoryDTOOpcional,
    //     receivedUser: User
    // ): void;
    drinkWater(drinkMl: number, idUser: string): User | undefined;
}

export { IUsersRepository, IUsersRepositoryDTO };
