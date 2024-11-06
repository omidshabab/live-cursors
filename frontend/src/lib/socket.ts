import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:8080";

export const socket = io(SOCKET_URL, {
  autoConnect: false, // Changed to false to control connection timing
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
});

// Add debugging events
socket.on("connect", () => {
  console.log("Socket connected with ID:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Socket disconnected");
});

socket.on("error", (error) => {
  console.error("Socket error:", error);
});

socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});
