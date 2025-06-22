import type { Route } from "./+types/home";
import { Counter } from "../counter/counter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Counter to React Router!" },
  ];
}

export default function Home() {
  return <Counter />;
}
