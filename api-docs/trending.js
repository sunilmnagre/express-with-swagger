"use strict";

module.exports = {
  "/trending": {
    get: {
      tags: ["Trending"],
      summary: "Returns a list of records",
      description: `This API returns a list of trending data. The following parameters are optional. If not provided the system will provides the result based on the latest date </br></br>
      <b>
        1) month </br>
        2) year </br>
        3) week </br>
      </b> </br></br>`,
      parameters: [
        {
          in: "query",
          name: "month",
          schema: {
            month: "integer",
            example: "8",
          },
        },
        {
          in: "query",
          name: "year",
          schema: {
            year: "integer",
            example: "2021",
          },
        },
        {
          in: "query",
          name: "week",
          schema: {
            week: "integer",
            example: "1",
          },
        },
        {
          in: "query",
          name: "language",
          schema: {
            language: "string",
            example: "Hindi",
          },
        },
        {
          in: "header",
          name: "userId",
          schema: {
            userId: "integer",
            example: "1irXUtPr3y1eSSQYkBfN6Y",
          },
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  count: 2,
                  records: [
                    {
                      time: "9:30PM-10:00PM",
                      data: [
                        {
                          _id: "6973f31d-35b8-4847-8dc4-891b06428cfe",
                          showTitle: "Aur Bhai Kya chal raha hai",
                          channel: {
                            _id: "996d8ed0-84d9-47ba-b863-0e32ef68ebd4",
                            channel: "&TV",
                            language: "Hindi",
                            logo: "https://cdn.sanity.io/images/jot4grjy/test/85395468bea48ec9d02f8664e57a69d7e3ed1c4a-250x133.svg",
                          },
                          sr: 0.16,
                          pr: 14,
                          subscribed: false,
                        },
                        {
                          _id: "1db9454c-d98b-4a7d-8bd2-1f9dcc6120a4",
                          showTitle: "Yeh Rishta Kya Kehlata Hai",
                          channel: {
                            _id: "59857868-6fb3-4fb8-9768-2fa33ea0e165",
                            channel: "StarPlus",
                            language: "Hindi",
                            logo: "https://cdn.sanity.io/images/jot4grjy/test/e44643f332c14c1013b841cc6f2eee5bee5ea755-167x250.svg",
                          },
                          sr: 2.24,
                          pr: 17,
                          subscribed: false,
                        },
                        {
                          _id: "6a7f8734-3dc9-4a7b-8315-db57acf9c09a",
                          showTitle: "Bawara Dil",
                          channel: {
                            _id: "13dbe710-08df-4600-b873-f309beee167f",
                            channel: "Colors",
                            language: "Hindi",
                            logo: "https://cdn.sanity.io/images/jot4grjy/test/bf7053655c521bde759e0bf7ac3e7f0097bac950-250x174.svg",
                          },
                          sr: 0.85,
                          pr: 16.5,
                          subscribed: false,
                        },
                        {
                          _id: "6d48fc04-0ea4-405e-8865-cfbc6856ddd6",
                          showTitle: "Ishq par zor nahi",
                          channel: {
                            _id: "2ae37954-c28a-4d98-9031-7c1de79ef84b",
                            channel: "SET",
                            language: "Hindi",
                            logo: "https://cdn.sanity.io/images/jot4grjy/test/0a2897272e7ce4e01d03f2481eafaea609cd931b-211x250.svg",
                          },
                          sr: 0.34,
                          pr: 14.5,
                          subscribed: false,
                        },
                      ],
                    },
                    {
                      time: "7:00PM-7:30PM",
                      data: [
                        {
                          _id: "dWFfJLCovGPkcwYl23bIQ9",
                          showTitle: "Imlie",
                          channel: {
                            _id: "800nO8Bf3aC80gW7yDAXN5",
                            channel: "Star Plus",
                            language: "Hindi",
                            logo: "http://87.200.95.206:3334/zeetv-images/channel/start-plus.png",
                          },
                          sr: 19,
                          pr: 18,
                          subscribed: true,
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
      security: [
        {
          csrf: [],
        },
      ],
    },
  },
};
