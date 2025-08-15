import type { Route } from "./+types/top";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "法テラス｜弁護士" },
  ];
}

export default function Top() {
  return (
    <main>
      <h1>TOP</h1>
    </main>
  );
}
