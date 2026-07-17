import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BirthdayHub API',
      version: '1.0.0',
      description: 'The world\'s best birthday calendar API',
      contact: {
        name: 'BirthdayHub Support',
        email: 'support@birthdayhub.app',
      },
    },
    servers: [
      {
        url: process.env.APP_URL + '/api' || 'http://localhost:3001/api',
        description: 'API Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
