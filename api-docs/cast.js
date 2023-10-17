"use strict";

module.exports = {
  "/cast": {
    get: {
      tags: ["Cast"],
      summary: "Returns a list of records",
      description: `This API returns a list of records. You can wisely use filters to get results: </br></br>
    <b>1) ?filter[include]=show&filter[include]=person</b></br>
    <b>2) ?filter[show]={showID}</b></br>`,
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  count: 1,
                  records: [
                    {
                      _createdAt: "2021-08-06T13:28:24Z",
                      _id: "cb591578-cd06-4707-b61d-2923f5fa5fa2",
                      _rev: "UT4FH2hMtN3f1yiQRjlJr8",
                      _type: "cast",
                      _updatedAt: "2021-08-06T13:33:07Z",
                      characterImgURL: [""],
                      characterName: "Anupama Joshi aka Anu ",
                      personID: {
                        _createdAt: "2021-08-06T13:26:10Z",
                        _id: "119fb307-c6c8-4efe-af18-cad1e5c4e4d4",
                        _rev: "X0nMOJB2vstypuSyNPBmBw",
                        _type: "person",
                        _updatedAt: "2021-08-06T13:26:10Z",
                        name: "Rupali Ganguly",
                      },
                      showID: {
                        _createdAt: "2021-08-02T11:10:17Z",
                        _id: "db3a32ca-993a-41a7-a9b8-159e83323778",
                        _rev: "UT4FH2hMtN3f1yiQRjb7AI",
                        _type: "show",
                        _updatedAt: "2021-08-06T11:37:18Z",
                        channelID: {
                          _ref: "59857868-6fb3-4fb8-9768-2fa33ea0e165",
                          _type: "reference",
                        },
                        featureImageUrl:
                          "https://drive.google.com/file/d/1RsIdmQGoacgQCZsk_IpU-KoMNXiR0uSQ/view",
                        genreID: [
                          {
                            _key: "8abcc888151f",
                            _ref: "ed2c7e1d-a9fc-4883-87f9-2acd0dc8bb8c",
                            _type: "reference",
                          },
                        ],
                        rankUnderLanguage: 2,
                        rankUnderTimeSlot: 5,
                        showTitle: "Anupamaa",
                        timeSlot: {
                          _type: "timeSlot",
                          time: "10:00PM-10:30PM",
                        },
                        trp: 4.232,
                        tsv: 12,
                      },
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
