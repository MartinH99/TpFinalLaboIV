export interface User {
  id: string;
  securityAnswer: string;
  username: string;
  email: string;
  password: string;
  name: string;
  isBlocked: boolean;
  playlist:[]
}

export interface Notification {
  id: number;
  title: string;
  message: string;
}