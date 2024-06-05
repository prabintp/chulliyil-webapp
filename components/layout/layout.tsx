import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { HeaderFlyout } from "./header-flyout"
import { Footer } from "./footer";
import { Theme } from "./theme";
import layoutData from "../../content/global/index.json";
import { Global } from "../../tina/__generated__/types";


export const Layout = ({
  rawData = {},
  data = layoutData,
  children,
}: {
  rawData?: object;
  data?: Omit<Global, "id" | "_sys" | "_values">;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>Connect with Glad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {data.theme.font === "nunito" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "lato" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "space-grotesk" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
          </>
        )}


        {data.theme.font === "montserrat" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />  
          </>
        )}
        {  <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>
    </>
    }
                     </Head>
              <Theme data={data?.theme}>
                <div
                  className={`min-h-screen flex flex-col ${data.theme.font === "nunito" && "font-nunito"
                    } ${data.theme.font === "lato" && "font-lato"} ${data.theme.font === "space-grotesk" && "font-spaceGrotesk"
                    } ${data.theme.font === "sans" && "font-sans"} ${data.theme.font === "montserrat" && "font-montserrat"}`}
                >
                  <HeaderFlyout data={data?.header}/>
                    
                
                  <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
                    {children}
                  </div>
                  <Footer
                    rawData={rawData}
                    data={data?.footer}
                    icon={data?.header.icon}
                    logo={data?.header.logoImage}
                  />
                </div>
              </Theme>
            </>
            );
};
