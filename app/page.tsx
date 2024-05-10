export const dynamic = "force-dynamic";

import "../style/default.css";
import "../style/print.css";
import "../style/style.css";
import "../style/grunt-less-escape.css";
import "../style/important-notices.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Second from "../components/Second";
import MeetMac from "../components/MeetMac";
import Investors from "../components/Investors";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div style={{ margin: "auto", padding: "0 50px" }}>
        <Hero />
        <Second />
        <MeetMac />
        <Investors />
      </div>
      <Footer />
    </div>
  );
}
