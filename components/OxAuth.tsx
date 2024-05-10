"use client";

import { CLAIMS, Dashboard, OnBoarding, XAuthProvider } from "0xuath-sdk-react";
import React from "react";
import { createPortal } from "react-dom";

const OxAuth = () => {
  return (
    <div>
      <XAuthProvider
        primaryBgColor="#EAEDED"
        primaryColor="#121713"
        companyName="WisdomTree"
        logoUrl="https://www.wisdomtree.com/investments/-/media/logo.svg?iar=0&hash=D72308FE097419956FDC89213558FC39"
        clientId="663e44cc760f350c8d4bfe7c"
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
    </div>
  );
};

export default OxAuth;
