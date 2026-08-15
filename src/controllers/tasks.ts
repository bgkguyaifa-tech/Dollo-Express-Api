import { Request, Response } from "express";
import {
  getAllTasks as getAllTasksService,
  getTaskById as getTaskByIdService,
  createTask as createTaskService,
  updateTask as updateTaskService,
  deleteTask as deleteTaskService,
} from "../services/tasks";

// GET all tasks
export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await getAllTasksService();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch tasks",
    });
  }
};

// GET one task
export const getTaskById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    const task = await getTaskByIdService(id);

    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({
      message: "Task not found",
    });
  }
};

// CREATE task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body;

    if (!title) {
      res.status(400).json({
        message: "Title is required",
      });
      return;
    }

    const task = await createTaskService(title, description);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Failed to create task",
    });
  }
};

// UPDATE task
export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;
    const { title, description, completed } = req.body;

    const task = await updateTaskService(
      id,
      title,
      description,
      completed
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({
      message: "Task not found",
    });
  }
};

// DELETE task
export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    await deleteTaskService(id);

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Failed to delete task",
    });
  }
};