"use client";
import Script from "next/script";
import React from "react";

const Google = () => {
  return (
    <>
      <Script
        id="googleScript"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-122649717-1"
      />
      <Script
        id="google"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-3LT1BJZJSW');`,
        }}
      />
    </>
  );
};

export default Google;
