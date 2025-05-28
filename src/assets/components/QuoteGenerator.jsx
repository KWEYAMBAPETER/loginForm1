import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const data = await response.json();
        setQuotes(data.quotes);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <div>Loading your quotes.....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (quotes.length === 0) {
    return <div>No quotes available.!!</div>;
  }

  const currentQuote = quotes[currentIndex];

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(205, 32, 32, 0.1)'
    }}>
      <h2>My Qoutes here</h2>
      <div style={{
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        minHeight: '100px'
      }}>
        <blockquote style={{ fontStyle: 'italic' }}>
          "{currentQuote.quote}"
        </blockquote>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          — {currentQuote.author}
        </p>
      </div>
      <div>
        <button 
          onClick={handlePrevious}
          style={{
            padding: '8px 16px',
            margin: '0 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Last
        </button>
        <button 
          onClick={handleNext}
          style={{
            padding: '8px 16px',
            margin: '0 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Next
        </button>
      </div>
      <p style={{ marginTop: '10px', color: '#666' }}>
        Quote {currentIndex + 1} of {quotes.length}
      </p>
    </div>
  );
};

export default QuoteGenerator;