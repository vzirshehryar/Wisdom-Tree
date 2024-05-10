"use client";

import { CLAIMS, Dashboard, OnBoarding, XAuthProvider } from "0xuath-sdk-react";
import React from "react";
import { createPortal } from "react-dom";

const OxAuth = () => {
  return (
    <div>
      Sign In
      {/* {createPortal( */}
      <XAuthProvider
        primaryBgColor="#EAEDED"
        primaryColor="#121713"
        companyName="WisdomTree"
        logoUrl="https://www.wisdomtree.com/investments/-/media/logo.svg?iar=0&hash=D72308FE097419956FDC89213558FC39"
        clientId="663a12cfc3725258e208c9fb"
        claimsRequired={[CLAIMS.Identity, CLAIMS.AccreditedInvestor]}
        onLogin={(user: any) => {
          console.log("helo ducky", user);
        }}
        onLogout={(user: any) => {
          console.log("helo ducky logout", user);
        }}
      >
        <OnBoarding
          buttonLabel="CONNECT WITH 0XAUTH"
          buttonStyle={{ textTransform: "uppercase" }}
        />
        <Dashboard />
      </XAuthProvider>
      {/* document.body
      )} */}
    </div>
  );
};

export default OxAuth;
