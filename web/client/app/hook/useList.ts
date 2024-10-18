import { useState, useCallback } from 'react';
import { List } from '../services/interface';
import { useListActions } from '../api/api';

export function useList() {
  const [tasks, setTasks] = useState<List[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Estado de loading
  const [error, setError] = useState<string | null>(null); // Estado de error
  const { createList, deleteList } = useListActions();

  const addTask = useCallback(async (data: Omit<List, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      const newList = await createList(data);
      if (newList) {
        setTasks((tasks) => [...tasks, newList]);
      }
    } catch (error) {
      setError('Erro ao criar a tarefa');
      console.error('Erro ao criar a tarefa:', error);
    } finally {
      setLoading(false);
    }
  }, [createList]);

  const removeTask = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const success = await deleteList(id);
      if (success) {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      setError('Erro ao remover a tarefa');
      console.error('Erro ao remover a tarefa:', error);
    } finally {
      setLoading(false);
    }
  }, [deleteList]);

  const toggleTaskDone = useCallback((taskId: number) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  }, []);

  return {
    tasks,
    addTask,
    removeTask,
    toggleTaskDone,
    loading, // Retorna o estado de loading
    error, // Retorna o estado de error
  };
}
