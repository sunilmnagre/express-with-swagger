"use strict";

const schema = {
  type: "object",
  properties: {
    username: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};

module.exports = {
  "/token": {
    post: {
      tags: ["Auth"],
      summary: "Login into the system",
      description: `Get Access token and CSRF from the system`,
      requestBody: {
        description: "Create a new token into the system",
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
                  token: "018+bZKfMH7y/3wTlgeRAjDYSyXeE/8q9N6hyi",
                  csrf: "IKQBu8g2X4dQODHp",
                  expiresIn: 900,
                },
              },
            },
          },
        },
        400: {
          description: "Missing field(s)",
          content: {},
        },
        401: {
          description: "Invalid username or password",
          content: {},
        },
      },
    },
    delete: {
      tags: ["Auth"],
      summary: "Delete a loggin session from the system",
      description: "Delete a loggin session from the system.",
      parameters: [],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: "Deleted",
              },
            },
          },
        },
        403: {
          description: "Authorization failed",
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
