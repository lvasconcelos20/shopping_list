import { useState } from "react";
import axios from 'axios';
import { List } from "../services/interface";

export const useListActions = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Função para criar uma nova lista
  const createList = async (data: Omit<List, "id">): Promise<List | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3003/list', data);
      return response.data; // Retorna a lista criada (incluindo o `id` gerado)
    } catch (error) {
      setError('Erro ao criar a lista. Tente novamente.');
      console.error("Erro ao criar a lista:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Função para deletar uma lista
  const deleteList = async (id: number): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:3003/list/${id}`);
      return true; // Indica que a exclusão foi bem-sucedida
    } catch (error) {
      setError('Erro ao deletar a lista.');
      console.error("Erro ao deletar a lista:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    createList,
    deleteList,
    loading,
    error,
  };
};
