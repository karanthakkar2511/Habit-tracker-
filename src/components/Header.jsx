import React from 'react';

const Header = () => {
  return (
    <header 
      className="text-white py-3" 
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(90deg, #3b5998, #8b9dc3)",  
        padding: "20px 0"
      }}
    >
      <div className="container d-flex align-items-center justify-content-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYDgXHsF3irjGbUiyMyaJPKaPu-zzwtQ6pg&s"
          alt="Logo"
          className="me-2"
          style={{ height: '70px', width: "100px", marginRight: "15px" }}
        />
        <h1 
          style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            fontWeight: 'bold', 
            margin: '0', 
            color: '#fffbe6',
          }}
        >
          Habit Tracker
        </h1>
      </div>
    </header>
  );
};

export default Header;
