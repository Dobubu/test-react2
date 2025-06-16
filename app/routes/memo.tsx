import type { Route } from "./+types/home";
import { Memo } from "../memo/memo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Memo Page" },
    { name: "Memo", content: "Welcome to Memo Page!" },
  ];
}

export default function Home() {
  return <Memo />;
}
