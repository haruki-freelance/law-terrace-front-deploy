import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/top.tsx"),
    route("contacts/:id", "routes/contacts/detail.tsx"),
] satisfies RouteConfig;
