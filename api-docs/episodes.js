"use strict";

module.exports = {
  "/episodes": {
    get: {
      tags: ["Episodes"],
      summary: "Returns a list of records",
      description: `This API returns a list of records. You can wisely use filters to get results: </br></br>
    <b>1) ?filter[include]=show&filter[include]=episodeAsset</b></br>
    <b>2) ?filter[show]={showID}</b></br>
    <b>3) ?filter[date]=origin</b></br>
    <b>4) ?filter[date]=date</b></br>
    <b>5) ?filter[date]=latest</b></br>
    <b>6) ?filter[date]=week</b></br>
    <b>7) ?filter[date]=month</b></br>
    <b>8) ?filter[date]=episode</b></br>
    <b>9) ?filter[where][episodeNumber]={episodeNumber}</b></br>
    <b>10) ?filter[where][episodeAirDate]={episodeAirDate}</b></br>
    <b>11) ?sorting=desc</b>`,
      parameters: [
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
                  count: 1,
                  records: [
                    {
                      _createdAt: "2021-08-10T14:26:39Z",
                      _id: "96d25ba1-b6b2-4762-b8d6-cbf8d915b8e5",
                      _rev: "mVxPZHoC2WBsbCM25Fr27N",
                      _type: "episode",
                      _updatedAt: "2021-08-11T13:38:35Z",
                      episodeAirDate: "2021-07-19T18:00:00.000Z",
                      episodeAsset: [
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
                          bookmarked: true,
                        },
                        {
                          _createdAt: "2021-08-10T14:25:37Z",
                          _id: "b343ea87-a915-4d90-a114-88c039d752a3",
                          _rev: "PopIqpVH5VInHEcz6Walg6",
                          _type: "episodeAssets",
                          _updatedAt: "2021-08-10T14:25:37Z",
                          data: [
                            {
                              _key: "184a5dbcd45c",
                              _type: "episodeImageDetails",
                              caption:
                                "Anupama Toshu aur Samar ke kamre me jaakar, Toshu ko coffee deti hain. Jab wo Toshu se puchti hain ki woh raat bhar kya padh raha tha, Toshu Anupama ko apmanit karte hue kehta hain ki woh nahi samajh payegi.\n",
                              contentLanguageID: {
                                _ref: "6b84d542-eef5-4207-9344-ee1338183d50",
                                _type: "reference",
                              },
                              language: "Hindi",
                            },
                            {
                              _key: "b173390d375f",
                              _type: "episodeImageDetails",
                              caption:
                                "Anupama goes to Toshu and Samar's room and serves Toshu coffee. She asks him what he had been studying all night. He replies that his mother won't understand it, in turn, insulting her.\n",
                              contentLanguageID: {
                                _ref: "e3c68b42-226f-44c8-a329-0ade9161e1a9",
                                _type: "reference",
                              },
                              language: "English",
                            },
                          ],
                          episodeAirDate: "2021-07-13T18:05:00.000Z",
                          episodeNumber: 1,
                          imageURL:
                            "https://drive.google.com/file/d/1qlt6VB9wYd9bfCUFVrQk96F_b3ahK5lp/view",
                          orderSeqNo: 2,
                          showID: {
                            _ref: "db3a32ca-993a-41a7-a9b8-159e83323778",
                            _type: "reference",
                          },
                          trp: 3.2,
                          tsv: 4.3,
                          bookmarked: false,
                        },
                      ],
                      episodeNumber: 1,
                      ratingRange: "L",
                      showID: {
                        _ref: "db3a32ca-993a-41a7-a9b8-159e83323778",
                        _type: "reference",
                      },
                      trp: 3.864134,
                      subscribed: true,
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
