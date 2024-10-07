import axios from 'axios';

const API_URL = 'https://api-filmes-jcfsbqmw2-sr-serdas-projects.vercel.app/filmes';

export const getFilmes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes', error);
    throw error;
  }
};

export const getFilmeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filme por ID', error);
    throw error;
  }
};

export const createFilme = async (filmeData) => {
  try {
    const response = await axios.post(API_URL, filmeData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar filme', error);
    throw error;
  }
};

export const updateFilme = async (id, filmeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, filmeData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar filme', error);
    throw error;
  }
};

export const deleteFilme = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar filme', error);
    throw error;
  }
};
