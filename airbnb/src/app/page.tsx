import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>홈페이지</h1>
      <Link href="/hostpage">숙소 등록 페이지로 가기</Link>
    </main>
  );
}
