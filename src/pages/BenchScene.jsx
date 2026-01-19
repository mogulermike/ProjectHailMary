// src/components/BenchScene.jsx
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const delayedWiggle = keyframes`
  0%,
  70% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(-2px) rotate(-1deg);
  }
  80% {
    transform: translateY(2px) rotate(1deg);
  }
  85% {
    transform: translateY(-2px) rotate(-1deg);
  }
  90% {
    transform: translateY(2px) rotate(1deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

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
  opacity: 0;
  pointer-events: none;
  transform-origin: center bottom;
  transition: opacity 0.2s ease;

  /* Hover bench → show faintly */
  ${BenchInner}:hover & {
    opacity: 0.6;
  }

  /* Hover specific icon → full opacity */
  ${BenchSpot}:hover & {
    opacity: 1;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.7));
  }
`;

const WigglyBenchAvatar = styled(BenchAvatar)`
  animation: ${delayedWiggle} 2.6s ease-in-out 2;
  animation-play-state: paused;

  ${BenchInner}:hover & {
    animation-play-state: running;
  }
`;

const BenchImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [breakpoint]);

  return isMobile;
}

export default function BenchScene() {
  const isMobile = useIsMobile(700);
  const navigate = useNavigate();

  if (isMobile) return null;

  // add path for each
  const crew = [
    {
      id: 1,
      name: 'About Me',
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
      name: 'Meet The Crew',
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
          {crew.map((member) => {
            const AvatarComponent =
              member.id === 3 ? WigglyBenchAvatar : BenchAvatar; // only phone wiggles

            return (
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
                <AvatarComponent
                  src={member.svg}
                  alt={member.name}
                  $size={member.size}
                />
              </BenchSpot>
            );
          })}
        </BenchSpots>
      </BenchInner>
    </BenchSceneSection>
  );
}
