export interface PublicMeta {
  github_url: string;
  twitter_enabled: boolean;
  mail_enabled: boolean;
}

export type DeliveryMode = 'source_emails' | 'combined_report' | 'both';

export interface RunRequest {
  sources: string[];
  save: boolean;
  receiver: string;
  description: string;
  scholar_urls: string;
  x_accounts_input: string;
  delivery_mode: DeliveryMode;
}

export interface WsStartMessage {
  type: 'start';
  message: string;
}

export interface WsLogMessage {
  type: 'log';
  message: string;
}

export interface WsCompleteMessage {
  type: 'complete';
  success: boolean;
  files: RunFile[];
  date: string;
  exit_code: number;
}

export interface WsErrorMessage {
  type: 'error';
  message: string;
}

export type WsMessage =
  | WsStartMessage
  | WsLogMessage
  | WsCompleteMessage
  | WsErrorMessage;

export interface RunFile {
  name: string;
  url: string;
  type: string;
  source: string;
  content?: string;
  items?: FileItem[];
}

export interface FileItem {
  title: string;
  summary: string;
  description: string;
  url: string;
  score: number | string;
  language: string;
  stars: string;
}
