import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/categoriaService';

const CategoriaList = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await getCategorias();
        console.log('Dados recebidos:', data); // Adiciona este log para verificar os dados recebidos
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias', error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <div>
      <h1>Lista de Categorias</h1>
      {categorias.length > 0 ? ( // Verifica se há categorias
        <ul>
          {categorias.map((categoria) => (
            <li key={categoria._id}>
              {categoria.titulo} - Cor: {categoria.cor}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma categoria encontrada.</p> // Mostra esta mensagem se não houver dados
      )}
    </div>
  );
};

export default CategoriaList;
