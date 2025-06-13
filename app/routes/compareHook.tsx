import type { Route } from "./+types/home";
import { CompareHook } from "../compareHook/compareHook";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CompareHook Page" },
    { name: "CompareHook", content: "Welcome to CompareHook Page!" },
  ];
}

export default function Home() {
  return <CompareHook />;
}
