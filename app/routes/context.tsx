import type { Route } from "./+types/home";
import { Context } from "../context/context";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Context Page" },
    { name: "Context", content: "Welcome to Context Page!" },
  ];
}

export default function Home() {
  return <Context />;
}
