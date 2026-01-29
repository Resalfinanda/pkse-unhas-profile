export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface Contact extends ContactPayload {
  id: string;
  created_at: string;
}
