import { Server } from "http";
import { WebSocketServer } from "ws";

export function initSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("Player connected");

    ws.on("message", (msg) => {
      console.log("Action:", msg.toString());
    });
  });
}
