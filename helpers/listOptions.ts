import { getWithFs, saveWithFs } from "./fsMethods";
import { newFundPrompt, newWithdrawPrompt } from "./movementsPrompts";

export const gettAllMovements = async () => {
  const currentMovements = await getWithFs("movements");
  console.log(currentMovements);
};

export const addFunds = async () => {
  const newFund = await newFundPrompt();
  const currentMovement = await getWithFs("movements");
  currentMovement.push(newFund);
  await saveWithFs("movements", currentMovement, false);
};
export const withdrawFunds = async () => {
  const newWithdraw = await newWithdrawPrompt();
  const currentMovement = await getWithFs("movements");
  currentMovement.push(newWithdraw);
  await saveWithFs("movements", currentMovement, true);
};
