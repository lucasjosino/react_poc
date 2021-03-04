import React, {useState, useEffect}  from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import PromotionList from 'components/Promotion/List/List';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css';

const PromotionSearch = () => {
    
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    axios.get('http://localhost:5000/promotions?_embed=comments', { params })
      .then((Response) => {
        setPromotions(Response.data); 
      });
  }, [search])

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1>Promo_Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <input className="promotion-search__input" type="search" placeholder="Buscar" value={search} onChange={(ev) => setSearch(ev.target.value)} />
      <PromotionList promotions={promotions} loading={!promotions.length} />
    </div>
  )
};

export default PromotionSearch;