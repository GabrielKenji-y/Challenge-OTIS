import React, { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('feedbacks');

  const feedbackData = [
    {
      id: 1,
      company: 'Construtora Cyrela',
      country: 'Brasil',
      project: 'Torre Empresarial Faria Lima',
      rating: 5,
      date: '19/01/2024',
      text: 'Excelente trabalho da equipe OTIS. Instalação realizada dentro do prazo e com altíssima qualidade. Recomendamos fortemente.',
      supervisor: 'Carlos Silva',
      tags: ['qualidade', 'Público'],
      likes: 12,
      avatar: 'CO'
    },
    {
      id: 2,
      company: 'Engenharia Moderna',
      country: 'Brasil',
      project: 'Shopping Center Norte',
      rating: 4,
      date: '18/01/2024',
      text: 'Bom atendimento e equipe profissional. Algumas melhorias no prazo de entrega seriam bem-vindas.',
      supervisor: 'Ana Santos',
      tags: ['prazo', 'Público'],
      likes: 8,
      avatar: 'EM'
    }
  ];

  const ratingStats = [
    { stars: 1, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 3, count: 1, percentage: 20 },
    { stars: 4, count: 2, percentage: 40 },
    { stars: 5, count: 2, percentage: 40 }
  ];

  const filteredFeedbacks = feedbackData.filter(feedback => {
    const matchesSearch = feedback.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="feedback-page">
      <header className="feedback-header">
        <h1 className="feedback-title">Sistema de Feedback</h1>
        <p className="feedback-subtitle">Distribuição das avaliações</p>
      </header>

      {/* Distribuição das avaliações */}
      <div className="rating-distribution">
        {ratingStats.map((stat) => (
          <div key={stat.stars} className="rating-card">
            <span className="rating-stars">{stat.stars} ⭐</span>
            <p className="rating-number">{stat.count}</p>
            <div className="rating-bar">
              <div className="rating-fill" style={{ width: `${stat.percentage}%` }}></div>
            </div>
            <small className="rating-percentage">{stat.percentage}%</small>
          </div>
        ))}
      </div>

      {/* Média geral */}
      <div className="rating-summary">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <h2 className="average-rating">4.2</h2>
        <p className="summary-text">5 feedbacks • 2.3h tempo médio</p>
        <span className="positive-text">80% avaliações positivas</span>
      </div>

      {/* Campo de busca e filtro */}
      <div className="feedback-controls">
        <button 
          className={`feedback-tab ${activeTab === 'feedbacks' ? 'active' : ''}`}
          onClick={() => setActiveTab('feedbacks')}
        >
          Feedbacks
        </button>
        <div className="feedback-search">
          <input 
            type="text" 
            placeholder="Buscar por cliente, projeto ou comentário..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="search-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Todas Categorias</option>
            <option value="quality">Qualidade</option>
            <option value="deadline">Prazo</option>
          </select>
        </div>
      </div>

      {/* Lista de feedbacks */}
      <div className="feedback-list">
        {filteredFeedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-item">
            <div className="feedback-avatar">{feedback.avatar}</div>
            <div className="feedback-info">
              <div className="feedback-header-info">
                <h3 className="company-name">
                  {feedback.company} 
                  <span className="country-badge">{feedback.country}</span>
                </h3>
                <p className="project-name">{feedback.project}</p>
              </div>
              <div className="feedback-stars">
                {'⭐'.repeat(feedback.rating)} 
                <span className="feedback-date">{feedback.date}</span>
              </div>
              <p className="feedback-text">{feedback.text}</p>
              <p className="feedback-supervisor">
                Supervisor: <b>{feedback.supervisor}</b>
              </p>
              <div className="feedback-tags">
                {feedback.tags.map((tag, idx) => (
                  <span key={idx} className={`tag ${tag === 'Público' ? 'public' : ''}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="feedback-actions">
                <span className="like">👍 {feedback.likes}</span>
                <button className="reply-btn">Responder</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;