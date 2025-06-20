import type { Route } from "./+types/home";
import { Callback } from "../callback/callback";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Callback Page" },
    { name: "Callback", content: "Welcome to Callback Page!" },
  ];
}

export default function Home() {
  return <Callback />;
}
