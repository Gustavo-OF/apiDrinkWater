import { User } from "../../model/User";
import { IUsersRepository, IUsersRepositoryDTO } from "../IUsersRepository";

class UserRepository implements IUsersRepository {
    private users: User[];
    private static INSTANCE: UserRepository;
    private constructor() {
        this.users = [];
    }
    public static getInstance(): UserRepository {
        if (!UserRepository.INSTANCE) {
            UserRepository.INSTANCE = new UserRepository();
        }
        return UserRepository.INSTANCE;
    }

    create({ name, email, password }: IUsersRepositoryDTO): User {
        const users = new User();

        const user = Object.assign(users, {
            name,
            email,
            password,
        });
        this.users.push(users);

        return user;
    }
    login({ email, password }: IUsersRepositoryDTO): boolean {
        const user = this.users.find((user) => user.email === email);
        if (user) {
            const check = user.password === password;
            return check;
        }
        return false;
    }
    checkIfUserExists(idUser: string): boolean {
        const check = this.users.some((user) => user.idUser === idUser);
        return check;
    }
    findById(idUser: string): User | undefined {
        const user = this.users.find((user) => user.idUser === idUser);
        return user;
    }
    listAll(): User[] {
        return this.users;
    }
    drinkWater(drinkMl: number, idUser: string): User | undefined {
        const user = this.users.find((user) => user.idUser === idUser);
        if (user) {
            user.drink_counter += drinkMl;
        }
        return user;
    }
    alterEmail(email: string, receivedUser: User): void {
        const user = this.users.find(
            (user) => user.idUser === receivedUser.idUser
        );
        user.email = email;
    }
    alterPassword(password: string, receivedUser: User): void {
        const user = this.users.find(
            (user) => user.idUser === receivedUser.idUser
        );
        user.password = password;
    }
    alterName(name: string, receivedUser: User): void {
        const user = this.users.find(
            (user) => user.idUser === receivedUser.idUser
        );
        user.name = name;
    }
    delete(idUser: string): void {
        const userIndex = this.users.findIndex(
            (user) => user.idUser === idUser
        );
        this.users.splice(userIndex, 1);
    }
}

export { UserRepository };
