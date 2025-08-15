import type { Route } from "./+types/detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "法テラス｜弁護士｜連絡詳細" },
  ];
}

export default function Detail({ params }: Route.LoaderArgs) {
  return (
    <main>
      <h1>Detail id : {params.id}</h1>
    </main>
  );
}
