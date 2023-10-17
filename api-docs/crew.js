"use strict";

module.exports = {
  "/crew": {
    get: {
      tags: ["Crew"],
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
                      _createdAt: "2021-07-09T08:08:08Z",
                      _id: "1297c5e0-9104-4e24-9064-bd701d0e627d",
                      _rev: "X0nMOJB2vstypuSyNPAT1y",
                      _type: "crew",
                      _updatedAt: "2021-08-06T13:12:49Z",
                      personID: {
                        _createdAt: "2021-07-09T08:07:37Z",
                        _id: "5a48f9ed-a023-4ddd-bdb9-aa78bf0c90f9",
                        _rev: "QekC60oYVIc5PJYp2LR4Cr",
                        _type: "person",
                        _updatedAt: "2021-07-09T08:07:37Z",
                        biography:
                          "He is based out of Mumbai and is an author few famous sitcoms and had several cameo appearances",
                        name: "Malav Suresh Rajda",
                      },
                      roleID: {
                        _createdAt: "2021-08-03T08:08:37Z",
                        _id: "d3ee3648-360e-413d-89d4-e42fc2e00032",
                        _rev: "UT4FH2hMtN3f1yiQRd2fho",
                        _type: "role",
                        _updatedAt: "2021-08-03T08:10:49Z",
                        role: "Writer",
                      },
                      showID: {
                        _createdAt: "2021-07-08T10:22:57Z",
                        _id: "0187b2ea-884d-4dc4-bda5-5145e056893c",
                        _rev: "X0nMOJB2vstypuSyNPFjuI",
                        _type: "show",
                        _updatedAt: "2021-08-06T14:01:09Z",
                        channelID: {
                          _ref: "59857868-6fb3-4fb8-9768-2fa33ea0e165",
                          _type: "reference",
                        },
                        featureImageUrl:
                          "https://drive.google.com/file/d/18cMnbiNRChNT8mo7MtsYZFMHcqVJ_7mg/view",
                        genreID: [
                          {
                            _key: "6f86b53164be",
                            _ref: "cc1133a3-7683-4bfa-bda4-e4eef39776aa",
                            _type: "reference",
                          },
                          {
                            _key: "5df475dcf2f2",
                            _ref: "ed2c7e1d-a9fc-4883-87f9-2acd0dc8bb8c",
                            _type: "reference",
                          },
                        ],
                        rankUnderLanguage: 1,
                        rankUnderTimeSlot: 3,
                        showTitle: "Kyunki Saas Bhi Kabhi Bahu Thi",
                        timeSlot: {
                          _type: "timeSlot",
                          time: "7:00PM-7:30PM",
                        },
                        trp: 5.3,
                        tsv: 4,
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
