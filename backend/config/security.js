import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';

export const applySecurity = (app) => {
  app.use(helmet());
  app.use(xss());
  app.use(mongoSanitize());
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
};
