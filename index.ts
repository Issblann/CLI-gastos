import inquirer from "inquirer";
import {
  addFunds,
  gettAllMovements,
  withdrawFunds,
} from "./helpers/listOptions";

const main = async () => {
  let run = true;

  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosenItem",
        message: "Seleccione el movimiento que desea realizar",
        choices: [
          {
            value: 1,
            name: "Ingrese su dinero",
          },
          {
            value: 2,
            name: "Retire su dinero",
          },
          {
            value: 3,
            name: "Consultar movimientos",
          },
          {
            value: 99,
            name: "SALIR",
          },
        ],
      },
    ]);
    switch (action.chosenItem) {
      case 1:
        await addFunds();
        break;
      case 2:
        await withdrawFunds();
        break;
      case 3:
        await gettAllMovements();
        break;
      case 99:
        run = false;

      default:
        run = false;

        break;
    }
  }
};

main();
