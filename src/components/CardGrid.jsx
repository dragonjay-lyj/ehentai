import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function CardGrid() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../../src/content/data.json')
      .then(response => response.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="skeleton h-64"></div>
        <div className="skeleton h-64"></div>
        <div className="skeleton h-64"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map(card => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
          author={card.author}
        />
      ))}
    </div>
  );
}
