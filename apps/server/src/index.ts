import { createServer } from "http";
import { initSocket } from "./websocket/socket";
import { initWorld } from "./game/world";

const server = createServer();

initWorld();
initSocket(server);

server.listen(8080, () => {
  console.log("🌊 Rivorea server running on port 8080");
});
