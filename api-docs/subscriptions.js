"use strict";

const schema = {
  type: "object",
  properties: {
    userId: {
      type: "string",
    },
    showId: {
      type: "string",
    },
  },
};
module.exports = {
  "/subscriptions": {
    get: {
      tags: ["Subscriptions"],
      summary: "Returns a list of records",
      description: `This API returns a list of records based on applied filters. You can wisely use filters to get results: </br></br>
      <b>1) ?filter[fields]=_updatedAt,_id</b></br>
      <b>2) ?filter[orderBy]=-_updatedAt&filter[skip]=5&filter[limit]=10</b></br>
      <b>3) ?filter[include]=show&filter[include]=user</b></br>
      <b>3) ?filter[user]={userID}</b></br>
      <b>4) ?language=Hindi,Tamil&filter[include]=channel</b></br>
      <b>5) ?channel=13dbe710-08df-4600-b873-f309beee167f,19201ea9-e57e-4b90-9af8-9e978d20dc4d</b></br>
      <b>6) ?timeslot=1786cfdb-0895-41b5-88ad-12d982ad0a93,98abf900-90d9-4eec-9aa6-6e9363ec107b</b>`,
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
                example: "_updatedAt,_id",
              },
              orderBy: {
                type: "string",
                example: "_updatedAt",
              },
              skip: {
                type: "number",
                example: 0,
              },
              limit: {
                type: "number",
                example: 10,
              },
              show: {
                type: "string",
                example: "23fb2fb5-7405-405d-aa1f-b70a62721cc3",
              },
              user: {
                type: "string",
                example: "7f8d75ea-fe27-4fc0-a8f9-2879f89ebac5",
              },
            },
            include: {
              type: "string",
              example: "show,user",
            },
          },
          style: "deepObject",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: schema,
              example: {
                status: "success",
                data: {
                  count: 1,
                  records: [
                    {
                      _createdAt: "2021-07-29T13:37:24Z",
                      _id: "729d9a2f-08ad-4838-ab03-b76cfe742828",
                      _rev: "M9Tfe1lRmlO9vzGPPAwmYS",
                      _type: "subscription",
                      _updatedAt: "2021-08-09T16:58:20Z",
                      showID: {
                        _ref: "0187b2ea-884d-4dc4-bda5-5145e056893c",
                        _type: "reference",
                      },
                      userID: [
                        {
                          _key: "70b1c03de0bf",
                          _ref: "7ea184d0-f159-4bc7-83a2-518534be543a",
                          _type: "reference",
                        },
                        {
                          _ref: "13ae3a7b-e5f2-40ac-8750-d7c180cdbb2e",
                          _type: "reference",
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
    patch: {
      tags: ["Subscriptions"],
      summary: "Create a new record into the system",
      description: `This API creates a new entry into system collection`,
      requestBody: {
        description: "Create a new record into the system",
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
              schema: schema,
              example: {
                status: "success",
                data: {
                  _createdAt: "2021-07-30T06:45:52Z",
                  _id: "9ztWIrrcaTSIRNI7jsxBFi",
                  _rev: "FYv9sWC0RwJu3QG78rDcKy",
                  _type: "subscription",
                  _updatedAt: "2021-07-30T13:41:09Z",
                  showID: {
                    _ref: "23fb2fb5-7405-405d-aa1f-b70a62721cc3",
                    _type: "reference",
                  },
                  userID: [
                    {
                      _ref: "7f8d75ea-fe27-4fc0-a8f9-2879f89ebac5",
                      _type: "reference",
                    },
                    {
                      _ref: "7f8d75ea-fe27-4fc0-a8f9-2879f89ebac5",
                      _type: "reference",
                    },
                  ],
                },
              },
            },
          },
        },
        500: {
          description: "failed to create",
          content: {},
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
