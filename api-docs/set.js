"use strict";

module.exports = {
  "/set": {
    get: {
      tags: ["Set"],
      summary: "Returns a list of records",
      description: `This API returns a list of records. You can wisely use filters to get results: </br></br>
    <b>1) ?filter[include]=show</b></br>
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
                      _createdAt: "2021-07-23T07:57:49Z",
                      _id: "3a455dd4-cb07-4cba-9da0-daa8485cc6e1",
                      _rev: "iVwPDImeJY1rAyYwvJ8EDf",
                      _type: "set",
                      _updatedAt: "2021-08-04T12:55:38Z",
                      roomImgUrl: [
                        "https://www.imdb.com/title/tt0278212/mediaviewer/rm2276967169/",
                        "https://www.imdb.com/title/tt0278212/mediaviewer/rm1538769665/",
                      ],
                      roomName: "kavya Shah's Room",
                      showID: {
                        _id: "db3a32ca-993a-41a7-a9b8-159e83323778",
                        featureImageUrl:
                          "https://drive.google.com/file/d/1RsIdmQGoacgQCZsk_IpU-KoMNXiR0uSQ/view",
                        showTitle: "Anupamaa",
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
