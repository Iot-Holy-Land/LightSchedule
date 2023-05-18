import server from "../server";

export const Test = async () => {
  return (await server.get("/test.php")).data;
};
