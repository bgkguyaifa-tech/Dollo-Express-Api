import { Request, Response } from "express";
import supabase  from "../config/supabase";

// GET all tasks
export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
};

// GET one task
export const getTaskById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    res.status(404).json({
      message: "Task not found",
      error: error.message,
    });
    return;
  }

  res.status(200).json(data);
};

// CREATE task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400).json({
      message: "Title is required",
    });
    return;
  }

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
    res.status(500).json({
      error: error.message,
    });
    return;
  }

  res.status(201).json(data);
};

// UPDATE task
export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

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
    res.status(404).json({
      message: "Task not found",
      error: error.message,
    });
    return;
  }

  res.status(200).json(data);
};

// DELETE task
export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  if (error) {
    res.status(500).json({
      error: error.message,
    });
    return;
  }

  res.status(200).json({
    message: "Task deleted successfully",
  });
};