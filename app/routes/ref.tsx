import type { Route } from "./+types/home";
import { Ref } from "../ref/ref";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ref Page" },
    { name: "Ref", content: "Welcome to Ref Page!" },
  ];
}

export default function Home() {
  return <Ref />;
}
