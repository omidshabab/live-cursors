export interface CursorPosition {
  x: number;
  y: number;
  clientId: string;
}

export interface Client {
  id: string;
  position: CursorPosition;
}
