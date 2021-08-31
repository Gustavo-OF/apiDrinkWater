import { Router } from "express";

import { alterUserController } from "../modules/users/useCases/alterUser";
import { createUserController } from "../modules/users/useCases/createUser";
import { deleteUserController } from "../modules/users/useCases/deleteUser";
import { drinkWaterController } from "../modules/users/useCases/drinkWater";
import { listAllUserController } from "../modules/users/useCases/listAllUsers";
import { listUserController } from "../modules/users/useCases/listUser";

const userRoutes = Router();

userRoutes.get("/", (request, response) => {
    listAllUserController.handle(request, response);
});

userRoutes.get("/:iduser", (request, response) => {
    listUserController.handle(request, response);
});

userRoutes.post("/", (request, response) => {
    createUserController.handle(request, response);
});

userRoutes.post("/:iduser/drink", (request, response) => {
    drinkWaterController.handle(request, response);
});

// userRoutes.post("/login", (request, response) => {
//     createUserController.handle(request, response);
// });

userRoutes.put("/:iduser", (request, response) => {
    alterUserController.handle(request, response);
});

userRoutes.delete("/:iduser", (request, response) => {
    deleteUserController.handle(request, response);
});

export { userRoutes };
