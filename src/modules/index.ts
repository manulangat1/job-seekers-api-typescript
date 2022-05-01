import auth from "./auth";
import blogs from "./blog";
import subscription from "./subscription";
import jobs from "./jobs";
const apiPrefix = "/api/v1";

const routes = (app: any) => {
  app.use(apiPrefix, auth);
  app.use(apiPrefix, blogs);
  app.use(apiPrefix, subscription);
  app.use(apiPrefix, jobs);
  return app;
};
export default routes;
