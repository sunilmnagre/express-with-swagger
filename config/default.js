"use strict";

const SERVER_IP = "localhost",
  PROTOCOL = "http";

module.exports = {
  ssl: {
    keyPath: "/etc/ssl/private/mssp-selfsigned.key",
    crtPath: "/etc/ssl/certs/mssp-selfsigned.crt",
  },
  settings: {
    appURL: "https://contenxt.page.link/splash",
    webAppURL: "https://contenxt-browser.web.app",
    baseURL: `${PROTOCOL}://${SERVER_IP}:3333`,
    imageBasePath: "assets/Imgs/Languages",
  },
  vault: {
    key: process.env.ENCRYPTION_KEY,
    iv: process.env.IV,
    knife: process.env.KNIFE,
    failedAttempts: 9,
    tokenExpiry: 900, // 15 minutes
  },
  sanity: {
    projectId: "jot4grjy",
    dataset: "production",
    apiVersion: "2019-01-29", // use current UTC date - see "specifying API version"!
    token:
      "skV6p1rfBbqv9OvETrPBMNUcIrlXfyD77EBqIiAMefGRw0gOzY7dpzkzcJunaYixt4l4LbTTdRv7tmCR21GawDQINEndAmcrfjgHiF1ala2qNckUtCWjU9BvbcvpFpN28DcIEptaDcIBhx7TTrOnk0knIVh9Cuv3B3cepYlMVco4KdbVqbOz", // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  },
  credentials: {
    email: {
      username: "emailinspyretek@gmail.com",
      password: "!inspyretek*email",
      appPass: "zubxiotpewrvuevh", // This password is set into Google account
      adminEmail: "sunil@inspyretek.com",
    },
  },
  accountVerification: {
    validDays: 30,
  },
  assets: {
    url: "https://contnextimages.s3.ap-south-1.amazonaws.com",
  },
  tempFolder: "tmp",
};
