import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { CursorPosition, Client } from "./types";
import { app_url } from "./config/values";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: app_url,
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const clients = new Map<string, Client>();

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  clients.set(socket.id, {
    id: socket.id,
    position: { x: 0, y: 0, clientId: socket.id },
  });

  io.emit("clients", Array.from(clients.values()));

  socket.on("cursorMove", (position: CursorPosition) => {
    const client = clients.get(socket.id);
    if (client) {
      client.position = { ...position, clientId: socket.id };
      socket.broadcast.emit("cursorUpdate", client.position);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    clients.delete(socket.id);
    io.emit("clientDisconnected", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
