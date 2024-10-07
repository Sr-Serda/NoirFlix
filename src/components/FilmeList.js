import React, { useEffect, useState } from 'react';
import { getFilmes } from '../services/filmeService';
import './FilmeList.css';

const FilmeList = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const data = await getFilmes();
        setFilmes(data);
      } catch (error) {
        console.error('Erro ao buscar filmes', error);
      }
    };

    fetchFilmes();
  }, []);

  const renderVideo = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      if (url.includes('youtube.com')) {
        videoId = new URL(url).searchParams.get('v');
      } else if (url.includes('youtu.be')) {
        videoId = url.split('/').pop();
      }
      return (
        <iframe
          className="filme-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
    return <p><strong>URL do vídeo:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>;
  };

  return (
    <div>
      <h1>NoirFlix</h1>
      {filmes.length > 0 ? (
        <ul>
          {filmes.map((filme) => (
            <li key={filme._id} style={{ border: `2px solid ${filme.categoria?.cor || 'gray'}` }}>
              <div className="filme-info">
                <h2>{filme.titulo}</h2>
                <p>{filme.descricao}</p>
              </div>
              {renderVideo(filme.url)}
              <span className="categoria-cor" style={{ backgroundColor: filme.categoria?.cor || 'gray' }}>
                {filme.categoria?.titulo || 'Sem categoria'}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </div>
  );
};

export default FilmeList;
