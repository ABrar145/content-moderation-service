import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Content Moderation API",
      version: "1.0.0",
      description: "API documentation for content moderation service",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Local development server",
      },
    ],
  },
  apis: ["./src/api/v1/routes/*.ts"], // Points to route files for auto-documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log("Swagger API Docs available at /api-docs");
};
