"use strict";

const feedback = {
  type: "object",
  properties: {
    userId: {
      type: "string",
    },
    email: {
      type: "string",
    },
    type: {
      type: "string",
    },
    messageBody: {
      type: "string",
    },
  },
};

module.exports = {
  "/feedbacks": {
    post: {
      tags: ["Feedback"],
      summary: "Insert record into the system",
      description: `This API insert record into the system`,
      requestBody: {
        description: "Insert record into the system",
        content: {
          "application/json": {
            schema: feedback,
          },
        },
        required: true,
      },
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: feedback,
              example: {
                status: "success",
                data: "success",
              },
            },
          },
        },
        401: {
          description: "Invalid username or password",
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
