import axios from 'axios';

const API_URL = 'https://api-filmes-new.vercel.app//categorias';

export const getCategorias = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar categorias', error);
    throw error;
  }
};

export const getCategoriaById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar categoria por ID', error);
    throw error;
  }
};

export const createCategoria = async (categoriaData) => {
  try {
    const response = await axios.post(API_URL, categoriaData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar categoria', error);
    throw error;
  }
};

export const updateCategoria = async (id, categoriaData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, categoriaData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar categoria', error);
    throw error;
  }
};

export const deleteCategoria = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar categoria', error);
    throw error;
  }
};
