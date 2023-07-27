import inquirer from "inquirer";
import { IMovements } from "../interfaces/interfaces";

export const newFundPrompt = async (): Promise<IMovements> => {
  return await inquirer.prompt([
    {
      type: "number",
      name: "monto",
      message: "Ingrese el monto a ingresar",
    },
    {
      type: "input",
      name: "descripcion",
      message: "Ingrese la descripción del monto",
    },
  ]);
};
export const newWithdrawPrompt = async (): Promise<IMovements> => {
  return await inquirer.prompt([
    {
      type: "number",
      name: "monto",
      message: "Ingrese el monto a retirar",
    },
    {
      type: "input",
      name: "descripcion",
      message: "Ingrese la descripción del monto",
    },
  ]);
};
