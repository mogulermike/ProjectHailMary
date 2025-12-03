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
  margin: 0 0 4px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 70px;
`;

const AboutTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
`;

const Handle = styled.p`
  margin: 4px 0 16px;
  font-size: 1rem;
  opacity: 0.85;
`;

const Paragraph = styled.p`
  margin: 0 0 12px;
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.92;
`;

const QuoteBlock = styled.figure`
  margin: 24px auto 0;
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

export default function AboutPage() {
  return (
    <AboutPageWrapper>
      <AboutCard>
        <AboutTitle>About Me</AboutTitle>
        <Greeting>Hey everyone! Welcome to my page.</Greeting>

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

        <Paragraph>
          Stick around, and I hope I can inspire you to create something you are
          proud of.
        </Paragraph>

        <Handle>
          <strong>- Moguler Mike</strong>
        </Handle>

        <QuoteBlock>
          <QuoteText>
            “The creative adult
            <br />
            is the child who survived.”
          </QuoteText>
          <QuoteAuthor>― Ursula K. Le Guin</QuoteAuthor>
        </QuoteBlock>
      </AboutCard>
    </AboutPageWrapper>
  );
}
