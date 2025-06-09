import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("state", "routes/state.tsx"),
  route("effect", "routes/effect.tsx"),
  route("context", "routes/context.tsx"),
  route("ref", "routes/ref.tsx"),
] satisfies RouteConfig;
