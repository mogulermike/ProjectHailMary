import styled from 'styled-components';

const crewMembers = [
  {
    id: 4,
    name: 'Ryland Grace',
    role: 'Payload Specialist',
    image: '/CastImages/Ryland.PNG',
    blurb:
      'Loves Breakfast. \nFrom San Francisco (possible ties to Liberia). \nThinks in Imperial Units.',
  },
  {
    id: 3,
    name: 'Eva Stratt',
    role: 'Mission Director',
    image: '/CastImages/EvaStratt.PNG',
    blurb: 'Oversees experiments and mission payload operations.',
  },

  {
    id: 1,
    name: 'Olesya Ilyukhina',
    role: 'Flight Engineer',
    image: '/CastImages/1.PNG',
    blurb:
      'Responsible for overall mission success and crew safety.\nFun Fact: Milana Vayntrub voices Squirrel Girl in Marvel Rivals.',
  },
  {
    id: 2,
    name: 'Yáo Li-Jie',
    role: 'Mission Commander',
    image: '/CastImages/2.PNG',
    blurb: 'Monitors spacecraft systems and keeps everything running smoothly.',
  },
  // add more crew here as you add images
];

const CrewPageWrapper = styled.main`
  min-height: 40vh;
  padding: 80px 24px 32px; /* enough top padding to clear the fixed header */

  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  cccc @media (max-width: 480px) {
    padding: 300px 24px 32px;
    min-height: 100svh;
    padding: 96px 16px 32px;
    justify-content: center;
  }
`;

const CrewTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 100px;
  color: white;

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-top: 100px;
    margin-bottom: 60px;
  }
`;

const CrewList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CrewItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  text-align: center;
  color: white;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }

  //   /* separator under each item except last */
  //   &::after {
  //     content: '';
  //     display: block;
  //     margin: 18px auto 0;
  //     width: 80%;
  //     height: 2px; /* thicker line */

  //     background: linear-gradient(
  //       to right,
  //       transparent,
  //       rgba(253, 231, 108, 0.95),
  //       /* soft yellow */ transparent
  //     );

  //     box-shadow: 0 0 10px rgba(253, 231, 108, 0.7);
  //   }

  //   &:last-child::after {
  //     display: none;
  //   }
`;

const CrewPhoto = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 8px;
`;

const CrewInfo = styled.div`
  max-width: 280px;
`;

const CrewName = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

const CrewRole = styled.p`
  margin: 2px 0 6px;
  font-size: 0.85rem;
  opacity: 0.8;
`;

const CrewBlurb = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  white-space: pre-line;
`;

export default function CrewPage() {
  return (
    <CrewPageWrapper>
      <CrewTitle>Mission Crew</CrewTitle>

      <CrewList>
        {crewMembers.map((member) => (
          <CrewItem key={member.id}>
            <CrewPhoto src={member.image} alt={member.name} />
            <CrewInfo>
              <CrewName>{member.name}</CrewName>
              {member.role && <CrewRole>{member.role}</CrewRole>}
              <CrewBlurb>{member.blurb}</CrewBlurb>
            </CrewInfo>
          </CrewItem>
        ))}
      </CrewList>
    </CrewPageWrapper>
  );
}
