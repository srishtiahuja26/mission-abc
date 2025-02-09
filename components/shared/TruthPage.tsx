
import { Star, Eye, Mic2 } from 'lucide-react';
import Image from 'next/image';

const truthCards = [
  {
    icon: Star,
    content: 'I turn away students who lack the hunger for IIM A, B, or C.'
  },
  {
    icon: Eye,
    content: "I won't take your money if you're not serious."
  },
  {
    icon: Mic2,
    content: 'I believe in brutal honesty—not sugar-coated dreams.'
  }
];

const lies = [
  {
    id: '01',
    text: "If you're not a math genius, don't even try."
  },
  {
    id: '02',
    text: 'Only IIT/NIT engineers crack IIM A, B, or C'
  },
  {
    id: '03',
    text: 'You need years to prepare.'
  },
  {
    id: '04',
    text: 'You must watch endless video lessons.'
  }
];

const TruthPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div style={{ marginTop: '60px'}}>
        <h1 style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold', fontFamily: 'Qanelas Soft' }}>
          The lies of the CAT Mafia
        </h1>
        <p style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'Qanelas Soft' }}>
          The coaching industry profits off your fear. They'll tell you
        </p>
      </div>    

      <section style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '569px',
        marginTop: '80px',
        marginBottom: '100px',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', width: '928px', height: '569px' }}>
          <Image 
            src="/girl.png" 
            alt="Reference image" 
            fill
            style={{ 
              objectFit: 'cover',
              borderRadius: '12px' 
            }} 
          />
          {lies.map((lie, index) => (
            <div
              key={lie.id}
              style={{
                position: 'absolute',
                background: 'rgba(40, 40, 40, 0.55)',
                border: '1px solid rgba(62, 62, 62, 1)',
                backdropFilter: 'blur(52.4px)',
                WebkitBackdropFilter: 'blur(52.4px)',
                padding: '16px 24px',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'Qanelas Soft',
                ...getPositionStyle(index)
              }}
            >
              <div style={{ 
                color: '#FFB85C', 
                fontSize: '14px', 
                marginBottom: '4px' 
              }}>
                Lies {lie.id}
              </div>
              <div style={{ 
                fontSize: '16px',
                maxWidth: '220px'
              }}>
                {lie.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Truth Section */}
      <div style={{
        maxWidth: '1920px',
        height: '243px',
        margin: '0 auto',
        padding: '0 120px'
      }}>
        <h2 className='text-center' style={{
          fontFamily: 'Qanelas Soft',
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '28.97px',
          letterSpacing: '0%',
          color: 'rgba(241, 188, 64, 1)',
          marginBottom: '32px',
          whiteSpace: 'nowrap'
        }}>
          HERE'S THE TRUTH
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          marginTop: '32px'
        }}>
          {truthCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                style={{
                  width: '370.67px',
                  height: '166px',
                  borderRadius: '8px',
                  padding: '24px 16px',
                  background: 'rgba(241, 188, 64, 0.13)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}
              >
                <IconComponent size={24} color="#F1BC40" />
                <p style={{
                  fontFamily: 'Qanelas Soft',
                  fontSize: '18px',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  {card.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );      
};

// Helper function to position the cards around the image
const getPositionStyle = (index: number) => {
  const positions = [
    { top: '70%', right: '-10%' },  
    { top: '12%', right: '-10%' },  
    { top: '10%', left: '-10%' },   
    { top: '70%', left: '-10%' }    
  ];
  
  return positions[index];
};

export default TruthPage;