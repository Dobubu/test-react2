import { devtools } from "zustand/middleware";

export const myMiddlewares = (f, name = "bearStore") => devtools(f, { name });
