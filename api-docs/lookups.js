"use strict";

module.exports = {
  "/lookups": {
    get: {
      tags: ["Lookups"],
      summary: "Returns a list of records",
      description: `This API returns a list of records based on any one of the below types: </br></br>
        <b>
          1) language</br>
          2) genre</br>
          3) frequency</br>
          4) termsAndConditions</br>
          5) faqs</br>
          6) feedback</br>
          7) authentication</br>
          8) emailTemplates</br>
          9) timeSlot</br>
          10) channel</br>
        </b></br></br>
        You can wisely use filters to get results: </br></br>
        <b>1) ?filter[include]=language&filter[include]=logo</b></br>
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
                      _createdAt: "2021-07-08T10:11:07Z",
                      _id: "5b2d1c01-2a02-4c35-9818-fb560a85f0d7",
                      _rev: "lYnn35gZ7y9FMgm4Erqs7s",
                      _type: "language",
                      _updatedAt: "2021-07-08T10:11:07Z",
                      language: "Telugu",
                    },
                    {
                      _createdAt: "2021-07-08T10:11:47Z",
                      _id: "5f0de578-8d18-4925-b881-fc9190ebaf87",
                      _rev: "hd6n5m3KDkx7OAdHwyNDi3",
                      _type: "language",
                      _updatedAt: "2021-07-08T10:11:47Z",
                      language: "Marathi",
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
