// src/components/BenchScene.jsx
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BenchSceneSection = styled.section`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 24px 40px;
`;

const BenchInner = styled.div`
  position: relative;
  max-width: 1600px;
  width: 100%;
`;

const BenchSpots = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none; /* let spots control pointer events instead */
`;

const BenchSpot = styled.div`
  position: absolute;
  cursor: pointer;
  transform: translate(-50%, -50%);
  pointer-events: auto;
  /* clickable + accessible */
  &:focus-visible {
    outline: 2px solid #fde76c;
    outline-offset: 4px;
  }
`;

// const BenchAvatar = styled.img`
//   display: block;
//   width: ${({ $size }) => $size || '100px'};
//   height: auto;
//   transform-origin: center center;

//   /* responsive shrink */
//   @media (max-width: 1200px) {
//     transform: scale(0.8);
//   }
//   @media (max-width: 800px) {
//     transform: scale(0.6);
//   }
//   @media (max-width: 500px) {
//     transform: scale(0.5);
//   }
// `;

const BenchAvatar = styled.img`
  display: block;
  width: ${({ $size }) => $size || '100px'};
  height: auto;
  opacity: 0; /* hidden by default */
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;

  /* When hovering anywhere over the bench area, show them faintly */
  ${BenchInner}:hover & {
    opacity: 0.6;
  }

  /* When hovering directly over the icon, make it fully visible */
  ${BenchSpot}:hover & {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

const BenchImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export default function BenchScene() {
  const navigate = useNavigate();

  // add path for each
  const crew = [
    {
      id: 1,
      name: 'Coffee',
      svg: '/bench/Coffee.svg',
      top: '73%',
      left: '16%',
      size: '67px',
      path: '/aboutme', // About me
    },
    {
      id: 2,
      name: 'Equations',
      svg: '/bench/Equations5.svg',
      top: '77%',
      left: '41%',
      size: '200px',
      path: '/equations', // Equations page
    },
    {
      id: 3,
      name: 'Phone',
      svg: '/bench/Phone Without Text.svg',
      top: '79%',
      left: '84%',
      size: '155px',
      path: '/crew', // CrewPage
    },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <BenchSceneSection>
      <BenchInner>
        <BenchImage src='/bench/missioncontrol.png' alt='Bench' />

        <BenchSpots>
          {crew.map((member) => (
            <BenchSpot
              key={member.id}
              style={{ top: member.top, left: member.left }}
              aria-label={member.name}
              title={member.name}
              role='button'
              tabIndex={0}
              onClick={() => handleClick(member.path)}
              onKeyDown={(e) => handleKeyDown(e, member.path)}
            >
              <BenchAvatar
                src={member.svg}
                alt={member.name}
                $size={member.size}
              />
            </BenchSpot>
          ))}
        </BenchSpots>
      </BenchInner>
    </BenchSceneSection>
  );
}
