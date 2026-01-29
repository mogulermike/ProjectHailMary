import styled from 'styled-components';

const AboutPageWrapper = styled.main`
  min-height: 40vh;
  padding: 80px 24px 48px;

  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutCard = styled.section`
  max-width: 840px;
  width: 100%;
  color: white;
  text-align: left;

  // background: rgba(0, 0, 0, 0.35);
  // backdrop-filter: blur(10px);
  // box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);

  border-radius: 16px;
  padding: 24px 20px 28px;

  @media (max-width: 480px) {
    padding: 60px 18px 24px;
    margin-top: 40px;
  }
`;

const Greeting = styled.p`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 70px;

  span {
    display: block;
  }
`;

const AboutTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;

  font-size: clamp(2.5rem, 5vw, 3.25rem);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: white;

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 5vw, 3rem);
    margin: -20px 0 60px 0;
  }
`;

const Handle = styled.p`
  margin: 4px 0 16px;
  font-size: 1.2rem;
  opacity: 0.85;
`;

const Paragraph = styled.p`
  margin: 0 0 12px;
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.92;
`;

const QuoteBlock = styled.figure`
  margin: 10px auto 0;
  padding: 12px 16px;
  max-width: 400px;
  border-left: 3px solid rgba(253, 231, 108, 0.9);
  background: rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  text-align: left;

  /* Shift it 15px left relative to its centered position */
  transform: translateX(32px);
`;

const QuoteText = styled.blockquote`
  margin: 0 0 6px;
  font-size: 1.8rem;
  line-height: 1.5;
  font-style: italic;
`;

const QuoteAuthor = styled.figcaption`
  font-size: 1rem;
  opacity: 0.8;
  text-align: right;
`;

const TwoCol = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 999px;
  object-fit: cover;
  display: block;
  margin-bottom: 10px;

  /* subtle ring */
  border: 2px solid rgba(255, 255, 255, 0.18);
`;

const EmailLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLink = styled.a`
  margin-top: 6px;
  color: rgba(140, 200, 255, 0.95);
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomTwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 2fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const BottomRight = styled.div`
  display: flex;
  align-items: flex-start;
`;

export default function AboutPage() {
  return (
    <AboutPageWrapper>
      <AboutCard>
        <TwoCol>
          <LeftCol>
            <AboutTitle>About Me</AboutTitle>
            <Greeting>
              <span>Hey Everyone!</span>
              <span>Welcome to my page.</span>
            </Greeting>
          </LeftCol>

          <RightCol>
            <Avatar
              src='/images/Profile.PNG' // <- swap to your image path
              alt='Profile'
              loading='lazy'
            />
            <EmailLink href='mailto:mogulermike@gmail.com'>
              MogulerMike@gmail.com
            </EmailLink>

            <SocialLink
              href='https://www.linkedin.com/in/michael-manning-201206b6/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </SocialLink>
          </RightCol>
        </TwoCol>

        <Paragraph>
          My goal is to make occasional updates to this website, but life with 3
          kids and a full-time job is much busier than I could have expected.
          Shout out to all the parents out there… this is no joke.
        </Paragraph>

        <Paragraph>
          I love seeing other people create, so I wanted to have a place to
          share my creativity as well.
        </Paragraph>

        <Paragraph>
          I graduated with a Bachelor’s in Mechanical Engineering and a minor in
          Biomedical Engineering. I started my career in the Mechanical world
          before pivoting into Software Development, where I’ve been ever since.
        </Paragraph>

        <Paragraph>
          Combine a diverse background with a willingness to DIY anything, some
          creativity and wishful thinking, and you get me. A recipe for endless
          ideas, ambitious projects, and more half-finished builds than I’d like
          to admit.
        </Paragraph>

        <BottomTwoCol>
          <BottomLeft>
            <Paragraph>
              Stick around, and I hope I can inspire you to create something you
              are proud of.
            </Paragraph>

            <Handle>
              <strong>- Moguler Mike</strong>
            </Handle>
          </BottomLeft>

          <BottomRight>
            <QuoteBlock>
              <QuoteText>
                “The creative adult
                <br />
                is the child who survived.”
              </QuoteText>
              <QuoteAuthor>― Ursula K. Le Guin</QuoteAuthor>
            </QuoteBlock>
          </BottomRight>
        </BottomTwoCol>
      </AboutCard>
    </AboutPageWrapper>
  );
}
