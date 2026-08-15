export interface Task {
  id: string;
  created_at: string;
  title: string;
  description: string | null;
  completed: boolean;
}