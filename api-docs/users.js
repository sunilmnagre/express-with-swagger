"use strict";

const schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    password: {
      type: "string",
    },
    contactNumber: {
      type: "integer",
    },
  },
};

const emailSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
    },
  },
};

const passwordSchema = {
  type: "object",
  properties: {
    userId: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    oldPassword: {
      type: "string",
      required: false,
    },
  },
  example: {
    password: "demo-pwd",
    oldPassword: "demo-old-pwd",
    userId: "c47d802f-74bf-4f89-96ee-4757f1cc332c",
  },
};

const personaSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
    },
    contactNumber: {
      type: "string",
    },
    preferredChannels: {
      type: "array",
    },
    preferredLanguages: {
      type: "array",
    },
    preferredTimeslots: {
      type: "array",
    },
    defaultAuth: {
      type: "array",
    },
    defaultLanguage: {
      type: "array",
    },
    userId: {
      type: "string",
    },
  },
  example: [
    {
      firstName: "abc",
      lastName: "xyz",
    },
    {
      email: "email@gmail.com",
    },
    {
      password: "1234qwer",
    },
    {
      contactNumber: "9923088679",
    },
    {
      preferredLanguages: [
        "162ec4b1-1eea-44ae-9fb5-6c213e4af989",
        "7cff06d8-51b0-4775-bfff-2a7f616412af",
      ],
    },
    {
      preferredChannels: ["202ec4b1-1eea-44ae-9fb5-6c213e4af129"],
    },
    {
      preferredTimeslots: [
        "163ec4b1-1eea-44ae-9fb5-6c213e4af987",
        "5cff06d8-51b0-4775-bfff-2a7f616412af",
      ],
    },
    {
      preferredLanguages: [
        "162ec4b1-1eea-44ae-9fb5-6c213e4af989",
        "7cff06d8-51b0-4775-bfff-2a7f616412af",
      ],
    },
    {
      defaultAuth: "2ee7c45e-da94-4df3-a669-54f5e0ad6a74",
    },
    {
      defaultLanguage: "2ee7c45e-da94-4df3-a669-54f5e0ad6a74",
    },
  ],
};

const login = {
  type: "object",
  properties: {
    email: {
      type: "string",
    },
    _Passvv0rd: {
      type: "string",
    },
  },
};

module.exports = {
  "/users": {
    post: {
      tags: ["Users"],
      summary: "Insert a record into the system",
      description: `Insert a record into the system. </br></br>`,
      requestBody: {
        description: "Insert an user",
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
                  _createdAt: "2021-09-07T14:11:47Z",
                  _id: "1irXUtPr3y1eSSQYkBfN6Y",
                  _rev: "1irXUtPr3y1eSSQYkBfN4u",
                  _type: "user",
                  _updatedAt: "2021-09-07T14:11:47Z",
                  contactNumber: "9876543210",
                  email: "user@inspyretek.com",
                  firstName: "User",
                  lastName: "Name",
                  password: "1234qwer",
                  statusID: {
                    _ref: "3094705f-6d13-4ebd-822f-4951ee6b3744",
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
  "/users/exists": {
    post: {
      tags: ["Users"],
      summary: "Verify record exists in the system",
      description: `Verify record exists in the system. </br></br>`,
      requestBody: {
        description: "Verify user's email",
        content: {
          "application/json": {
            schema: emailSchema,
          },
        },
      },
    },
  },
  "/users/login": {
    post: {
      tags: ["Users"],
      summary: "Login in the system",
      description: `This API logs in into the system`,
      requestBody: {
        description: "Login in the system",
        content: {
          "application/json": {
            schema: login,
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
                  _id: "41d61493-6cea-4a76-ba53-2b7547c2851e",
                  contactNumber: "1234567891",
                  email: "sai@gmail.com",
                  firstName: "s",
                  lastName: "s",
                  defaultAuth: {
                    _id: "5181e839-8c67-431a-b00a-4937c5b9b985",
                    authentication: "Mobile",
                  },
                  defaultContentLanguage: {
                    _id: "c1a5e1cb-8149-43fb-95a8-9606256a432c",
                    language: "Tamil",
                  },
                },
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
  "/users/logout": {
    put: {
      tags: ["Users"],
      summary: "Logout in the system",
      description: `This API logs out into the system`,
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {},
              },
            },
          },
        },
        403: {
          description: "Failed operation",
          content: {
            "application/json": {
              example: {
                status: "fail",
                data: "Forbidden",
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
  "/users/persona": {
    post: {
      tags: ["Users"],
      summary: "Insert / update a record into the system",
      description: `Insert / update a record into the system. </br></br>`,
      requestBody: {
        description: "Insert / update an user's interest",
        content: {
          "application/json": {
            schema: personaSchema,
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
                  _createdAt: "2021-11-18T07:14:09Z",
                  _id: "QPhGwHFNrPtk8rszhyLuoK",
                  _rev: "DDPnKqeHWo54ELMCQN8Ahl",
                  _type: "persona",
                  _updatedAt: "2021-11-18T07:15:31Z",
                  languageListID: [
                    {
                      _key: "moa__Kz5H8xNQNloYV7NI",
                      _ref: "162ec4b1-1eea-44ae-9fb5-6c213e4af989",
                      _type: "reference",
                    },
                    {
                      _key: "agBrUA-9ZTAovprwDYozh",
                      _ref: "7cff06d8-51b0-4775-bfff-2a7f616412af",
                      _type: "reference",
                    },
                  ],
                  userID: {
                    _ref: "slhu75a3VNa7eUnvQnw16B",
                    _type: "reference",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Missing field(s)",
          content: {
            "application/json": {
              example: {
                status: "fail",
                data: [
                  {
                    value: "",
                    msg: "userId - Required field",
                    param: "userId",
                    location: "body",
                  },
                ],
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
    get: {
      tags: ["Users"],
      summary: "Returns a list of records",
      description: `This API returns user's interests based on the userId</br></br>`,
      parameters: [
        {
          in: "query",
          name: "userId",
          schema: {
            userId: "string",
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
                  _id: "slhu75a3VNa7eUnvQnw16B",
                  firstName: "Nagre",
                  lastName: "Sunil",
                  email: "sunilmnagre@gmail.com",
                  contactNumber: "9923088679",
                  preferredChannels: [
                    {
                      _id: "F4I2ZtUM8TMtZeYeFi5Sew",
                      name: "Sun TV",
                      logo: "https://contnextimages.s3.ap-south-1.amazonaws.com/SunTV_Dark.svg?X-Amz-Expires=14400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIAYFTJ4AUHZAPBZA/20211118/ap-south-1/s3/aws4_request&X-Amz-Date=20211118T071810Z&X-Amz-SignedHeaders=host&X-Amz-Signature=9a066cb5849b25f5fb857f1c3e6ef10c5cfc0ac6b962db1d3ff86b44589a6f38",
                      logoDark:
                        "https://contnextimages.s3.ap-south-1.amazonaws.com/SunTV_Light.svg?X-Amz-Expires=14400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIAYFTJ4AUHZAPBZA/20211118/ap-south-1/s3/aws4_request&X-Amz-Date=20211118T071811Z&X-Amz-SignedHeaders=host&X-Amz-Signature=31bdb2f96f20826556d3a97db5bcdab9c785ba713f978bb9bd06a4e728f92259",
                    },
                  ],
                  preferredLanguages: [
                    {
                      _id: "162ec4b1-1eea-44ae-9fb5-6c213e4af989",
                      name: "Tamil",
                    },
                    {
                      _id: "7cff06d8-51b0-4775-bfff-2a7f616412af",
                      name: "English",
                    },
                  ],
                  preferredTimeslots: [
                    {
                      _id: "5daabe00-1023-42de-8acd-86c8ed7fcbe1",
                      name: "09:00PM-09:30PM",
                    },
                  ],
                  defaultAuth: {
                    _id: "2ee7c45e-da94-4df3-a669-54f5e0ad6a74",
                    name: "Email",
                  },
                  defaultLanguage: {
                    _id: "2ee7c45e-da94-4df3-a669-54f5e0ad6a74",
                    name: "Tamil",
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
  "/users/send-email-otp": {
    post: {
      tags: ["Users"],
      summary: "Send OTP to user's email",
      description: `Send OTP to user's email. </br></br>`,
      requestBody: {
        description: "Send OTP to user's email",
        content: {
          "application/json": {
            schema: emailSchema,
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
                  token: "7317",
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
  "/users/set-password": {
    post: {
      tags: ["Users"],
      summary: "Update user's password",
      description: `Update user's password</br></br>`,
      requestBody: {
        description: "Update user's password",
        content: {
          "application/json": {
            schema: passwordSchema,
          },
        },
      },
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: "Record updated successfully",
              },
            },
          },
        },
        422: {
          description: "Unable to find record",
          content: {
            "application/json": {
              example: {
                status: "fail",
                data: "Error updating record",
              },
            },
          },
        },
        400: {
          description: "Missing field(s)",
          content: {
            "application/json": {
              example: {
                status: "fail",
                data: [
                  {
                    msg: "userId - Missing field",
                    param: "userId",
                    location: "body",
                  },
                  {
                    msg: "userId - Must be string",
                    param: "userId",
                    location: "body",
                  },
                  {
                    value: "",
                    msg: "userId - Required field",
                    param: "userId",
                    location: "body",
                  },
                  {
                    msg: "password - Missing field",
                    param: "password",
                    location: "body",
                  },
                  {
                    msg: "password - Must be string",
                    param: "password",
                    location: "body",
                  },
                  {
                    value: "",
                    msg: "password - Required field",
                    param: "password",
                    location: "body",
                  },
                ],
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
  "/users/verify-account": {
    get: {
      tags: ["Users"],
      summary: "Returns user's info",
      description: `This API returns user's info</br></br>`,
      parameters: [
        {
          in: "query",
          name: "userId",
          schema: {
            userId: "string",
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
                  _id: "RWJ3eyvxAEQ2PboMtxp8sZ",
                  email: "fariz@inspyretek.com",
                  firstName: "fariz",
                  lastName: "fariz",
                  contactNumber: "9876543210",
                },
              },
            },
          },
        },
        422: {
          description: "Unable to find record",
          content: {
            "application/json": {
              example: {
                status: "fail",
                data: "Error getting record",
              },
            },
          },
        },
        400: {
          description: "Missing field(s)",
          content: {
            "application/json": {
              example: {
                status: "fail",
                data: [
                  {
                    value: "",
                    msg: "userId - Required field",
                    param: "userId",
                    location: "query",
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
  "/users/verify-password-set": {
    get: {
      tags: ["Users"],
      summary: "Returns Bool isPasswordSet",
      description: `This API returns user's password set or not</br></br>`,
      parameters: [
        {
          in: "query",
          name: "userId",
          schema: {
            userId: "string",
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
                  _id: "RWJ3eyvxAEQ2PboMtxp8sZ",
                  isPasswordSet: true,
                },
              },
            },
          },
        },
        426: {
          description: "Upgrade Required",
          content: {
            "application/json": {
              example: {
                status: "fail",
                data: {
                  _id: "RWJ3eyvxAEQ2PboMtxp8sZ",
                  isPasswordSet: false,
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
};
