"use strict";

module.exports = {
  "/synopsis": {
    get: {
      tags: ["Synopsis"],
      summary: "Returns a list of records",
      description: `This API returns a list of records based on any one of the below types: </br></br>
        <b>
          1) show</br>
          2) episode</br>
        </b></br></br>
        You can wisely use filters to get results: </br></br>
        <b>1) ?filter[include]=show</b></br>
        <b>2) ?filter[skip]=5&filter[limit]=10</b></br>
        `,
      parameters: [
        {
          in: "query",
          name: "type",
          schema: {
            type: "string",
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
                  count: 1,
                  records: [
                    {
                      _createdAt: "2021-08-11T17:40:18Z",
                      _id: "be13fc31-a059-4c7e-83cc-085d6dba237a",
                      _rev: "mVxPZHoC2WBsbCM25H8QmX",
                      _type: "episodeAssets",
                      _updatedAt: "2021-08-11T17:40:18Z",
                      data: [
                        {
                          _key: "b56bc05ab17c",
                          _type: "episodeImageDetails",
                          caption:
                            "Jhilmil learns it is Anupama's birthday and she hugs her excitedly. They start making preparations for the party in the evening.\n",
                          contentLanguageID: {
                            _ref: "e3c68b42-226f-44c8-a329-0ade9161e1a9",
                            _type: "reference",
                          },
                          language: "English",
                        },
                        {
                          _key: "3edf119e0dad",
                          _type: "episodeImageDetails",
                          caption:
                            "Jhilmil ko pata chalta hai ki Anupama ka janamdin hai. Woh Anupama ko badhaiyaan dekar shaamke party ki tayari mein lag jaati hain.\n",
                          contentLanguageID: {
                            _ref: "6b84d542-eef5-4207-9344-ee1338183d50",
                            _type: "reference",
                          },
                          language: "Hindi",
                        },
                      ],
                      episodeAirDate: "2021-07-15T18:00:00.000Z",
                      episodeNumber: 3,
                      imageURL:
                        "https://static.toiimg.com/photo/msid-83376214/83376214.jpg?89509",
                      orderSeqNo: 1,
                      show: {
                        _id: "db3a32ca-993a-41a7-a9b8-159e83323778",
                        featureImageUrl:
                          "https://drive.google.com/file/d/1RsIdmQGoacgQCZsk_IpU-KoMNXiR0uSQ/view",
                        showTitle: "Anupamaa",
                      },
                      showID: {
                        _ref: "db3a32ca-993a-41a7-a9b8-159e83323778",
                        _type: "reference",
                      },
                      trp: 2.1,
                      tsv: 6.7,
                      bookmarked: true,
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
