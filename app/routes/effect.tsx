import type { Route } from "./+types/home";
import { Effect } from "../effect/effect";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Effect Page" },
    { name: "Effect", content: "Welcome to Effect Page!" },
  ];
}

export default function Home() {
  return <Effect />;
}
