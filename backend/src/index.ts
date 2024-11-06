import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { CursorPosition, Client } from "./types";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const clients = new Map<string, Client>();

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Initialize client
  clients.set(socket.id, {
    id: socket.id,
    position: { x: 0, y: 0, clientId: socket.id },
  });

  // Broadcast to all clients that a new user has joined
  io.emit("clients", Array.from(clients.values()));

  // Handle cursor movement
  socket.on("cursorMove", (position: CursorPosition) => {
    const client = clients.get(socket.id);
    if (client) {
      client.position = { ...position, clientId: socket.id };
      // Broadcast the updated position to all other clients
      socket.broadcast.emit("cursorUpdate", client.position);
    }
  });

  // Handle disconnection
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
