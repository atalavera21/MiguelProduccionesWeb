
const EventModal = ({ isOpen, onClose, event }) => {
  
  if (!isOpen) return null;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackgroundClick} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '90%',
        maxHeight: '110vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>{event.title}</h2>
        <div style={{ position: 'relative', width: '100%', height: '56vh', marginBottom: '10px', backgroundColor: 'white' }}>
          <img
            src={event.images[currentIndex]}
            alt={`Event photo ${currentIndex + 1}`}
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'contain',
              objectPosition: 'center',
              
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder-image.jpg'; // Asegúrate de tener una imagen de placeholder
            }}
          />
          <button 
            onClick={prevImage} 
            style={{ 
              position: 'absolute', 
              left: '10px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            {'<'}
          </button>
          <button 
            onClick={nextImage} 
            style={{ 
              position: 'absolute', 
              right: '10px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            {'>'}
          </button>
        </div>       
      
        <button 
          onClick={onClose} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#e95e02', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Cerrar
        </button>      
        <div style={{ fontSize: '14px', color: '#888', marginBottom: '20px', marginTop: '10px' }}>
          Imagen {currentIndex + 1} de {event.images.length}
        </div>

      </div>
    </div>
  );
  
};

const ModalManager = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  window.openModal = (eventId) => {
    const event = eventData[eventId];
    if (event) {
      setSelectedEvent(event);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <EventModal
      isOpen={modalOpen}
      onClose={closeModal}
      event={selectedEvent}
    />
  );
};

const eventData = {
  boda1: {
    title: "Nathaly & Marcelo",
    images: [
      "img/Portafolio/boda/01.jpg",
      "img/Portafolio/boda/02.jpg",
      "img/Portafolio/boda/03.jpg",
      "img/Portafolio/boda/04.jpg",
      "img/Portafolio/boda/05.jpg",
      "img/Portafolio/boda/06.jpg",
      "img/Portafolio/boda/07.jpg"
    ]
  },
  boda2: {
    title: "Miguel & Estephany",
    images: [
      "img/Portafolio/boda/08.jpg",
      "img/Portafolio/boda/09.jpg",
      "img/Portafolio/boda/10.jpg",
      "img/Portafolio/boda/11.jpg",
      "img/Portafolio/boda/12.jpg"

    ]
  },
  boda3: {
    title: "Fernando & Aracely",
    images: [
      "img/Portafolio/boda/13.jpg",
      "img/Portafolio/boda/14.jpg",
      "img/Portafolio/boda/15.jpg",
      "img/Portafolio/boda/16.jpg",
      "img/Portafolio/boda/17.jpg"

    ]
  },
  quince1: {
    title: "Quince Años Angelina",
    images: [
      "img/Portafolio/15años/00.jpg",
      "img/Portafolio/15años/01.jpg",
      "img/Portafolio/15años/02.jpg",
      "img/Portafolio/15años/03.jpg",
      "img/Portafolio/15años/04.jpg",
      "img/Portafolio/15años/05.jpg"
    ]
  },
  quince2: {
    title: "Quince Años Aracely",
    images: [
      "img/Portafolio/15años/06.jpg",
      "img/Portafolio/15años/07.jpg",
      "img/Portafolio/15años/08.jpg",
      "img/Portafolio/15años/09.jpg",
      "img/Portafolio/15años/10.jpg"      
    ]
  },
  quince3: {
    title: "Quince Años Samantha",
    images: [
      "img/Portafolio/15años/11.jpg",
      "img/Portafolio/15años/12.jpg",
      "img/Portafolio/15años/13.jpg",
      "img/Portafolio/15años/14.jpg",
      "img/Portafolio/15años/15.jpg"      
    ]
  },
  baby1: {
    title: "¡Bienvenido Cristhian!",
    images: [
      "img/Portafolio/babyShower/00.jpg",
      "img/Portafolio/babyShower/01.jpg",
      "img/Portafolio/babyShower/02.jpg",
      "img/Portafolio/babyShower/03.jpg",
      "img/Portafolio/babyShower/04.jpg",
      "img/Portafolio/babyShower/05.jpg",         
    ]
  },  
  baby2: {
    title: "¡Bienvenido Liam!",
    images: [
      "img/Portafolio/babyShower/06.jpg",
      "img/Portafolio/babyShower/07.jpg",
      "img/Portafolio/babyShower/08.jpg",
      "img/Portafolio/babyShower/09.jpg",
      "img/Portafolio/babyShower/10.jpg"      
    ]
  },  
  baby3: {
    title: "¡Bienvenido Franchesco!",
    images: [
      "img/Portafolio/babyShower/11.jpg",
      "img/Portafolio/babyShower/12.jpg",
      "img/Portafolio/babyShower/13.jpg",
      "img/Portafolio/babyShower/14.jpg",
      "img/Portafolio/babyShower/15.jpg",      
      "img/Portafolio/babyShower/16.jpg",
    ]
  },  
  // Agrega más eventos aquí
};

ReactDOM.render(<ModalManager />, document.getElementById('modal-root'));