import fs from "fs";
import { IMovements } from "../interfaces/interfaces";
export const getWithFs = (file: string): Promise<[IMovements]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(file + ".json", "utf-8", (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(content));
    });
  });
};

export const saveWithFs = (
  file: string,
  content: IMovements[],
  iswithdraw: boolean
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // let iswithdraw: boolean = true;
    fs.writeFile(file + ".json", JSON.stringify(content), (err) => {
      if (err) {
        reject(err);
      }
      if (iswithdraw) {
        resolve(console.log("Se ha retirado su dinero"));
      } else {
        resolve(console.log("Transacción añadida con exito"));
      }
    });
  });
};
