import './Feedback.css';

function Feedback() {
  return (
    <div className="feedback-page">
      <header className="feedback-header">
        <h1 className="feedback-title">Sistema de Feedback</h1>
        <p className="feedback-subtitle">Distribuição das avaliações</p>
      </header>

      {/* Distribuição das avaliações */}
      <div className="rating-distribution">
        <div className="rating-card">
          <span>1 ⭐</span>
          <p className="rating-number">0</p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: '0%' }}></div>
          </div>
          <small>0%</small>
        </div>

        <div className="rating-card">
          <span>2 ⭐</span>
          <p className="rating-number">0</p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: '0%' }}></div>
          </div>
          <small>0%</small>
        </div>

        <div className="rating-card">
          <span>3 ⭐</span>
          <p className="rating-number">1</p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: '20%' }}></div>
          </div>
          <small>20%</small>
        </div>

        <div className="rating-card">
          <span>4 ⭐</span>
          <p className="rating-number">2</p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: '40%' }}></div>
          </div>
          <small>40%</small>
        </div>

        <div className="rating-card">
          <span>5 ⭐</span>
          <p className="rating-number">2</p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: '40%' }}></div>
          </div>
          <small>40%</small>
        </div>
      </div>

      {/* Média geral */}
      <div className="rating-summary">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <h2>4.2</h2>
        <p>5 feedbacks • 2.3h tempo médio</p>
        <span className="positive-text">80% avaliações positivas</span>
      </div>

      {/* Campo de busca e filtro */}
      <div className="feedback-controls">
        <button className="feedback-tab active">Feedbacks</button>
        <div className="feedback-search">
          <input type="text" placeholder="Buscar por cliente, projeto ou comentário..." />
          <select>
            <option>Todas Categorias</option>
          </select>
        </div>
      </div>

      {/* Lista de feedbacks */}
      <div className="feedback-list">
        <div className="feedback-item">
          <div className="feedback-avatar">CO</div>
          <div className="feedback-info">
            <div className="feedback-header-info">
              <h3>Construtora Cyrela <span className="country-badge">Brasil</span></h3>
              <p className="project-name">Torre Empresarial Faria Lima</p>
            </div>
            <div className="feedback-stars">⭐⭐⭐⭐⭐ <span className="feedback-date">19/01/2024</span></div>
            <p className="feedback-text">
              Excelente trabalho da equipe OTIS. Instalação realizada dentro do prazo e com altíssima qualidade.
              Recomendamos fortemente.
            </p>
            <p className="feedback-supervisor">Supervisor: <b>Carlos Silva</b></p>
            <div className="feedback-tags">
              <span className="tag">qualidade</span>
              <span className="tag public">Público</span>
            </div>
            <div className="feedback-actions">
              <span className="like">👍 12</span>
              <button className="reply-btn">Responder</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
