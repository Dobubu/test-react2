import type { Route } from "./+types/home";
import { State } from "../state/state";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "State Page" },
    { name: "State", content: "Welcome to State Page!" },
  ];
}

export default function Home() {
  return <State />;
}
