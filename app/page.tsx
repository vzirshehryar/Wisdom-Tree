"use client";
import dynamic from "next/dynamic";
import "../style/default.css";
import "../style/grunt-less-escape.css";
import "../style/important-notices.css";
import "../style/print.css";
import "../style/style.css";
const HomeComponent = dynamic(() => import("../components/Home"), {
  ssr: false,
});
export default function Home() {
  return <HomeComponent />;
}
