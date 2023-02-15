const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 69,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 10,
    date: new Date().toISOString(),
  },
];

import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}