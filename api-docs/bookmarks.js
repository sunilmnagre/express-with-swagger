"use strict";

const schema = {
  type: "object",
  properties: {
    showId: {
      type: "string",
    },
    userId: {
      type: "string",
    },
    bookmarkType: {
      type: "string",
    },
    bookmarkId: {
      type: "string",
    },
  },
};

module.exports = {
  "/bookmarks": {
    get: {
      tags: ["Bookmarks"],
      summary: "Returns a list of records",
      description: `This API returns a list of records. You can wisely use filters to get results: </br></br>
    <b>1) ?filter[include]=show&filter[include]=user</b></br>
    <b>2) ?filter[include]=episodeAsset&filter[include]=showAsset&filter[include]=episode</b></br>
    <b>3) ?filter[user]={userId}</b></br>
    <b>4) ?filter[orderBy]=-_updatedAt&filter[skip]=5&filter[limit]=10</b></br>`,
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  records: {
                    Anupamaa: {
                      _createdAt: "2021-08-12T13:18:51Z",
                      _id: "px5o4ZWwWFzwofzF7QqNF5",
                      _rev: "mVxPZHoC2WBsbCM25MHHEP",
                      _type: "bookmark",
                      _updatedAt: "2021-08-12T14:03:24Z",
                      episode: [
                        {
                          _createdAt: "2021-08-11T13:39:41Z",
                          _id: "7be7e6f8-e7e3-4a84-a1f7-9fee67ef9bbf",
                          _rev: "mVxPZHoC2WBsbCM25M4XVp",
                          _type: "episode",
                          _updatedAt: "2021-08-12T13:23:27Z",
                          episodeAirDate: "2020-07-16T18:00:00.000Z",
                          episodeNumber: 4,
                          ratingRange: "H",
                          showID: {
                            _ref: "db3a32ca-993a-41a7-a9b8-159e83323778",
                            _type: "reference",
                          },
                          trp: 4.393256,
                        },
                      ],
                      episodeAssetsID: [
                        {
                          _createdAt: "2021-07-16T07:17:05Z",
                          _id: "97abe259-336a-44ae-a326-4962a4aca7e1",
                          _rev: "p4i2jB5XJRLp0mv2b5TpUD",
                          _type: "episodeAssets",
                          _updatedAt: "2021-08-11T07:23:31Z",
                          data: [
                            {
                              _key: "33cf99c28c1a",
                              _type: "episodeImageDetails",
                              caption:
                                "Anupama suryoday ke samay uthkar bhagwan ke samne diya jalati hain. Fir woh apne saare parivaar walon ke liye chai aur nashte ki tayari karti hain.\n",
                              contentLanguageID: {
                                _ref: "6b84d542-eef5-4207-9344-ee1338183d50",
                                _type: "reference",
                              },
                              language: "Hindi",
                            },
                            {
                              _key: "bb8080a5edbb",
                              _type: "episodeImageDetails",
                              caption:
                                "Anupama wakes up at surise and lights a lamp in front of god. She prepares breakfast for her family members.\n",
                              contentLanguageID: {
                                _ref: "e3c68b42-226f-44c8-a329-0ade9161e1a9",
                                _type: "reference",
                              },
                              language: "English",
                            },
                          ],
                          episodeAirDate: "2021-07-13T18:00:00.000Z",
                          episodeNumber: 1,
                          imageURL:
                            "https://drive.google.com/file/d/1RsIdmQGoacgQCZsk_IpU-KoMNXiR0uSQ/view",
                          orderSeqNo: 1,
                          showID: {
                            _ref: "db3a32ca-993a-41a7-a9b8-159e83323778",
                            _type: "reference",
                          },
                          trp: 12,
                          tsv: 0,
                        },
                      ],
                      showAssetsID: [
                        {
                          _createdAt: "2021-08-11T13:06:24Z",
                          _id: "21948b4d-5fc2-498e-9ca8-3a678546430c",
                          _rev: "p4i2jB5XJRLp0mv2b7zwBx",
                          _type: "showAssets",
                          _updatedAt: "2021-08-12T11:43:17Z",
                          data: [
                            {
                              _key: "0be237308c92",
                              _type: "showImageDetails",
                              caption:
                                "While Anupama tries her best to match up to the standards of her son Paritosh's love interest Kinjal and her parents, Rakhi and Pramod Dave. The Shah family chides her and ridicules her about her educational qualifications. After facing several roadblocks, Paritosh and Kinjal get married. ",
                              contentLanguageID: {
                                _ref: "e3c68b42-226f-44c8-a329-0ade9161e1a9",
                                _type: "reference",
                              },
                              language: "English",
                            },
                            {
                              _key: "46266c6cac63",
                              _type: "showImageDetails",
                              caption:
                                "Anupama prayaas karti hai Paritosh aur uske  pyaar Kinjal aur uske maata-pita, Rakhi and Pramod Dave ke saamne sahi pesh aane ka. Shah parivaar ke sadasya  Anupama ke taleem ka bhi mazaak udaate hain. Bohot musibaton ka saamna karne ke baad, Paritosh aur Kinjal shaadi karte hai. ",
                              contentLanguageID: {
                                _ref: "6b84d542-eef5-4207-9344-ee1338183d50",
                                _type: "reference",
                              },
                              language: "Hindi",
                            },
                          ],
                          imageURL:
                            "http://87.200.95.206:3334/zeetv-images/show-synopsis/Anupama_Kahani%20Ab%20Tak_4.png",
                          orderSeqNo: 4,
                          showID: {
                            _ref: "db3a32ca-993a-41a7-a9b8-159e83323778",
                            _type: "reference",
                          },
                        },
                      ],
                      showID: {
                        _createdAt: "2021-08-02T11:10:17Z",
                        _id: "db3a32ca-993a-41a7-a9b8-159e83323778",
                        _rev: "84T17gQdsW8KOmta1DqPng",
                        _type: "show",
                        _updatedAt: "2021-08-10T12:26:42Z",
                        channelID: {
                          _id: "59857868-6fb3-4fb8-9768-2fa33ea0e165",
                          channel: "StarPlus",
                          logo: "https://cdn.sanity.io/images/jot4grjy/production/e44643f332c14c1013b841cc6f2eee5bee5ea755-167x250.svg",
                        },
                        featureImageUrl:
                          "https://drive.google.com/file/d/1RsIdmQGoacgQCZsk_IpU-KoMNXiR0uSQ/view",
                        genreID: [
                          {
                            _id: "ed2c7e1d-a9fc-4883-87f9-2acd0dc8bb8c",
                            genre: "Drama",
                          },
                        ],
                        rankUnderLanguage: 1,
                        rankUnderTimeSlot: 1,
                        showTitle: "Anupamaa",
                        timeSlotID: {
                          _ref: "fb308e7c-064c-42ad-b809-deed20c428e6",
                          _type: "reference",
                        },
                        trp: 4.03,
                        tsv: 21.04,
                      },
                      userID: {
                        _ref: "34752913-8e94-452a-878e-bace5fa22088",
                        _type: "reference",
                      },
                    },
                  },
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
    patch: {
      tags: ["Bookmarks"],
      summary: "Update or insert a record into the system",
      description: `Update or insert a record into the system. 'bookmarkType' can be any one of the below </br></br>
        <b>
          1) showAssetsID</br>
          2) episodeAssetsID</br>
          3) episode</br>
        </b></br></br>`,
      requestBody: {
        description: "Update or create a bookmark",
        content: {
          "application/json": {
            schema: schema,
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  _createdAt: "2021-08-05T14:32:59Z",
                  _id: "UT4FH2hMtN3f1yiQRhz8B6",
                  _rev: "UT4FH2hMtN3f1yiQRi3tO3",
                  _type: "bookmark",
                  _updatedAt: "2021-08-05T15:18:02Z",
                  episodeAssetsID: [
                    {
                      _key: "JWntENwoJ0o0qiGZsGPX3",
                      _ref: "7dfacb1a-d5a9-4d7e-83a2-d97a209ff2c7",
                      _type: "reference",
                    },
                  ],
                  episode: [],
                  showAssetsID: [
                    {
                      _key: "3qxaSGPlFS0ZC5tsNqda3",
                      _ref: "1d6154c8-3b43-4e14-a523-84214a9abe22",
                      _type: "reference",
                    },
                  ],
                  showID: {
                    _ref: "73d73415-e3a6-4051-a116-c9e74c098967",
                    _type: "reference",
                  },
                  userID: {
                    _ref: "79d06414-9429-4a50-a8a9-7e4a3c20f517",
                    _type: "reference",
                  },
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
