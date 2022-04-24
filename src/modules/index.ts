import auth from "./auth";
import blogs from "./blog";

const apiPrefix = "/api/v1";

const routes = (app: any) => {
  app.use(apiPrefix, auth);
  app.use(apiPrefix, blogs);
  return app;
};
export default routes;
