"use strict";

module.exports = {
  "/shows": {
    get: {
      tags: ["Shows"],
      summary: "Returns a list of records",
      description: `This API returns a list of records based on applied filters. You can wisely use filters to get results: </br></br>
    <b>1) ?filter[where][showTitle]=""</b></br>
    <b>2) ?filter[where][showTitle]=&filter[fields]=channelID,showTitle</b></br>
    <b>3) ?filter[orderBy]=-showTitle&filter[skip]=5&filter[limit]=10</b></br>
    <b>4) ?filter[include]=showAsset&filter[include]=episode&filter[include]=language&filter[include]=channel&filter[include]=episodeCount&filter[include]=timeslot</b></br>
    <b>5) ?filter[include]=genre&filter[include]=crew&filter[include]=cast</b></br>
    <b>6) ?language=Hindi,Tamil&filter[include]=channel</b></br>
    <b>7) ?channel=13dbe710-08df-4600-b873-f309beee167f,19201ea9-e57e-4b90-9af8-9e978d20dc4d</b></br>
    <b>8) ?timeslot=1786cfdb-0895-41b5-88ad-12d982ad0a93,98abf900-90d9-4eec-9aa6-6e9363ec107b</b></br>
    <b>9) ?search_query=Choti</b></br>
    <b>10) ?page=home</b>`,
      parameters: [
        {
          in: "query",
          name: "filter",
          schema: {
            type: "object",
            properties: {
              where: {
                type: "object",
                properties: {
                  showTitle: {
                    type: "string",
                    example: "",
                  },
                },
              },
              fields: {
                type: "string",
                example: "channelID,showTitle",
              },
              orderBy: {
                type: "string",
                example: "showTitle",
              },
              skip: {
                type: "number",
                example: 0,
              },
              limit: {
                type: "number",
                example: 10,
              },
            },
            include: {
              type: "string",
              example: "showAsset,episode,laguag,genre",
            },
          },
          style: "deepObject",
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
                      _createdAt: "2021-07-08T11:26:09Z",
                      _id: "3f0645a5-642c-4d96-b3c1-655177ebffae",
                      _rev: "th0FSKDOVSGBZYYM8beGh4",
                      _type: "show",
                      _updatedAt: "2021-07-16T06:51:46Z",
                      channelID: {
                        _id: "996d8ed0-84d9-47ba-b863-0e32ef68ebd4",
                        channel: "Sony SAB",
                      },
                      genreID: [
                        {
                          _id: "cc1133a3-7683-4bfa-bda4-e4eef39776aa",
                          genre: "Comedy",
                        },
                        {
                          _id: "3f4a5eed-c66c-47ae-a04e-e0b1c3b52211",
                          genre: "Family",
                        },
                      ],
                      languageID: [
                        {
                          _id: "6b84d542-eef5-4207-9344-ee1338183d50",
                          language: "Hindi",
                        },
                      ],
                      showDescription:
                        "The day-to-day happenings of Gokuldham Society and its members, who live, celebrate and often face problems together.",
                      showTitle: "Taarak Mehta Ka Ooltah Chashmah",
                      timeSlotID: {
                        _ref: "0d93bc03-bb7a-448f-b2af-5643dca5fef3",
                        _type: "reference",
                      },
                      timeslot: {
                        _id: "0d93bc03-bb7a-448f-b2af-5643dca5fef3",
                        time: "7:00PM-7:30PM",
                      },
                      episodeCount: 0,
                      subscribed: false,
                    },
                    {
                      _createdAt: "2021-07-08T10:44:40Z",
                      _id: "f130ef38-6cc5-44f3-a2df-6b28a5a73176",
                      _rev: "03xGdFrf8hjXOz7dQmuD5m",
                      _type: "show",
                      _updatedAt: "2021-07-16T06:52:30Z",
                      channelID: {
                        _id: "59857868-6fb3-4fb8-9768-2fa33ea0e165",
                        channel: "StarPlus",
                      },
                      genreID: [
                        {
                          _id: "3f4a5eed-c66c-47ae-a04e-e0b1c3b52211",
                          genre: "Family",
                        },
                      ],
                      languageID: [
                        {
                          _id: "6b84d542-eef5-4207-9344-ee1338183d50",
                          language: "Hindi",
                        },
                      ],
                      showDescription:
                        "The lives of two female cousins after their respective marriages within the household of the Modi family.",
                      showTitle: "Anupamaa",
                      timeSlotID: {
                        _ref: "0d93bc03-bb7a-448f-b2af-5643dca5fef3",
                        _type: "reference",
                      },
                      timeslot: {
                        _id: "0d93bc03-bb7a-448f-b2af-5643dca5fef3",
                        time: "7:00PM-7:30PM",
                      },
                      episodeCount: 5,
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

  "/shows/{id}": {
    get: {
      tags: ["Shows"],
      summary: "Returns record by specified id",
      description: `This API returns a records based on specified id applied filters. You can wisely use filters to get results: </br></br>
      <b>1) ?filter[where][showTitle]=""</b></br>
      <b>2) ?filter[where][showTitle]=&filter[fields]=channelID,showTitle</b></br>
      <b>3) ?filter[orderBy]=-showTitle&filter[skip]=5&filter[limit]=10</b></br>
      <b>4) ?filter[include]=episodeAssets&filter[include]=episode&filter[include]=episodeCount&filter[include]=language&filter[include]=channel&filter[include]=timeslot</b></br>
      <b>5) ?filter[include]=genre&filter[include]=crew&filter[include]=cast</b></br>
      <b>6) ?page=home</b>`,
      parameters: [
        {
          in: "query",
          name: "filter",
          schema: {
            type: "object",
            properties: {
              where: {
                type: "object",
                properties: {
                  showTitle: {
                    type: "string",
                    example: "",
                  },
                },
              },
              fields: {
                type: "string",
                example: "channelID,showTitle",
              },
              orderBy: {
                type: "string",
                example: "showTitle",
              },
              skip: {
                type: "number",
                example: 0,
              },
              limit: {
                type: "number",
                example: 10,
              },
            },
            include: {
              type: "string",
              example: "episodeAssets,episode,laguag,genre",
            },
          },
          style: "deepObject",
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
                      _createdAt: "2021-07-08T11:26:09Z",
                      _id: "3f0645a5-642c-4d96-b3c1-655177ebffae",
                      _rev: "th0FSKDOVSGBZYYM8beGh4",
                      _type: "show",
                      _updatedAt: "2021-07-16T06:51:46Z",
                      channelID: {
                        _id: "996d8ed0-84d9-47ba-b863-0e32ef68ebd4",
                        channel: "Sony SAB",
                      },
                      genreID: [
                        {
                          _id: "cc1133a3-7683-4bfa-bda4-e4eef39776aa",
                          genre: "Comedy",
                        },
                        {
                          _id: "3f4a5eed-c66c-47ae-a04e-e0b1c3b52211",
                          genre: "Family",
                        },
                      ],
                      languageID: [
                        {
                          _id: "6b84d542-eef5-4207-9344-ee1338183d50",
                          language: "Hindi",
                        },
                      ],
                      showDescription:
                        "The day-to-day happenings of Gokuldham Society and its members, who live, celebrate and often face problems together.",
                      showTitle: "Anupamaa",
                      timeSlotID: {
                        _ref: "0d93bc03-bb7a-448f-b2af-5643dca5fef3",
                        _type: "reference",
                      },
                      timeslot: {
                        _id: "0d93bc03-bb7a-448f-b2af-5643dca5fef3",
                        time: "7:00PM-7:30PM",
                      },
                      episodeCount: 5,
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
