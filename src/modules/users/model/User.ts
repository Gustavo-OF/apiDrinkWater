import { v4 as uuidv4 } from "uuid";

class User {
    idUser: string;
    email: string;
    name: string;
    password: string;
    drink_counter: number;
    constructor() {
        this.idUser = uuidv4();
        this.drink_counter = 0;
        this.email = "";
        this.name = "";
        this.password = "";
    }
}

export { User };
