/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function PromotionCard({promotion}) {

    return (
        <div className="promotion-card">
            <img className="promotion-card__image" src={promotion.imageUrl} />
            <div className="promotion-card__info">
                <h1 className="promotion-card__title">{promotion.title}</h1>
                <span className="promotion-card__price"> R$ {promotion.price}</span>
                <footer className="promotion-card__footer">
                    {promotion.comments.length > 0 && (
                        <div className="promotion-card__comment">
                            "{promotion.comments[0].comment}"
                        </div>
                    )}
                    <div className="promotion-card__comments-count">
                        {promotion.comments.length}
                        {promotion.comments.length > 1 ? ' Comentários ' : ' Comentário '}
                    </div>
                    <a href={promotion.url} className="promotion-card__link" target="_blank">IR PARA O SITE</a>
                    <Link to={`/edit/${promotion.id}`}>Editar</Link>
                </footer>
            </div>
        </div>
    )
}

export default PromotionCard;