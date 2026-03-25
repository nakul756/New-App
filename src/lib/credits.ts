// Credit system logic
// TODO: Implement with Supabase queries

import { CREDIT_COSTS, type AIAction } from "./openai";

export async function checkCredits(_userId: string, action: AIAction): Promise<boolean> {
  const cost = CREDIT_COSTS[action];
  // TODO: Query user's credit balance from Supabase
  // return balance >= cost;
  return cost >= 0;
}

export async function deductCredits(
  _userId: string,
  action: AIAction,
  _description: string
): Promise<{ success: boolean; remaining: number }> {
  // TODO: Deduct CREDIT_COSTS[action] from user balance, log in credit_transactions
  void action;
  return { success: true, remaining: 0 };
}

export async function getBalance(_userId: string): Promise<number> {
  // TODO: Query users.credits_balance
  return 50;
}

export async function addCredits(
  _userId: string,
  _amount: number,
  _type: "grant" | "purchase" | "refund",
  _description: string
): Promise<void> {
  // TODO: Add credits and log transaction
}
