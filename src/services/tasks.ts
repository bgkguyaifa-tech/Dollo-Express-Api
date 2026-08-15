import { supabase } from "../config/supabase";
import { Task } from "../types/task";

// Get all tasks
export const getAllTasks = async (): Promise<Task[]> => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as Task[];
};

// Get one task
export const getTaskById = async (id: string): Promise<Task> => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data as Task;
};

// Create task
export const createTask = async (
  title: string,
  description?: string
): Promise<Task> => {
  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        title,
        description: description || null,
        completed: false,
      },
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Task;
};

// Update task
export const updateTask = async (
  id: string,
  title: string,
  description: string,
  completed: boolean
): Promise<Task> => {
  const { data, error } = await supabase
    .from("tasks")
    .update({
      title,
      description,
      completed,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Task;
};

// Delete task
export const deleteTask = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
};