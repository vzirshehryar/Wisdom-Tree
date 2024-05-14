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
import { CLAIMS, Dashboard, XAuthProvider } from "@0xauth/sdk-react";
import { useState } from "react";

export default function Home() {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <XAuthProvider
      primaryBgColor="#EAEDED"
      primaryColor="#121713"
      companyName="WisdomTree"
      logoUrl="https://www.wisdomtree.com/investments/-/media/logo.svg?iar=0&hash=D72308FE097419956FDC89213558FC39"
      clientId="663e44cc760f350c8d4bfe7c"
      claimsRequired={[CLAIMS.Identity, CLAIMS.AccreditedInvestor]}
      onLogin={(user: any) => {
        console.log("user", user);
        setLoggedin(true);
      }}
      onLogout={(user: any) => {
        console.log("user", user);
        setLoggedin(false);
      }}
    >
      {!loggedin ? (
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
      ) : (
        <>
          <h1>{`You're logged in`}</h1>
          <Dashboard />
        </>
      )}
    </XAuthProvider>
  );
}
