import styled, { css } from 'styled-components';

const LogentryPageWrapper = styled.main`
  min-height: 40vh;
  padding: 80px 24px 48px;

  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogEntryCard = styled.section`
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
    margin-top: -40px;
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

const CenteredHeading = css`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const PageTitle = styled.h1`
  ${CenteredHeading};

  font-size: clamp(2.5rem, 5vw, 3.25rem);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 32px;
  margin: 0 0 60px 0;

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 5vw, 3rem);
    margin-top: 10px;
  }
`;

const LogEntryCountdown = styled.h3`
  ${CenteredHeading};

  margin: 0 0 4px 0;

  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.75;

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 3vw, 1.2rem);
    margin-top: 10px;
  }
`;

const LogEntryDate = styled.p`
  ${CenteredHeading};

  margin: 2px 0 10px 0;

  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  opacity: 0.6;

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;

const LogEntryTitle = styled.h2`
  ${CenteredHeading};

  margin: 0 0 30px 0;

  font-size: clamp(1.75rem, 4vw, 2.2rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  @media (max-width: 480px) {
    font-size: clamp(1rem, 5vw, 2rem);
    margin-top: 10px;
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
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const QuoteText = styled.blockquote`
  margin: 0 0 6px;
  font-size: 2rem;
  line-height: 1.5;
  font-style: italic;
`;

const QuoteAuthor = styled.figcaption`
  font-size: 1.6rem;
  opacity: 0.8;
  text-align: right;
`;

const TwoCol = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  min-width: 0; /* prevents weird overflow in flex layouts */
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

const BookImage = styled.img`
  height: 300px;
  width: auto;
  display: block;

  @media (max-width: 700px) {
    width: min(150px, 100%);
    height: auto;
  }
`;

const Caption = styled.div`
  margin-top: 8px;
  font-size: 0.85rem;
  opacity: 0.7;
  text-align: center;
`;

const QuoteBlock = styled.figure`
  margin: 24px auto 24px; /* <-- adds space BELOW quote block */
  padding: 12px 16px;
  max-width: 500px;
  border-left: 3px solid rgba(253, 231, 108, 0.9);
  background: rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  text-align: left;
  transform: translateX(32px);
  margin-top: 60px;
  margin-bottom: 100px;

  @media (max-width: 700px) {
    transform: none; /* don’t shove it sideways on mobile */
    max-width: 100%;
  }
`;

const StyledLink = styled.a`
  color: rgba(253, 231, 108, 0.95);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  margin-left: 6px;
  word-break: break-word;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid rgba(253, 231, 108, 0.95);
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

const ChartWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px;

  border-radius: 16px;
  background: rgba(0, 0, 0, 0.25);
  overflow-x: auto;

  -webkit-overflow-scrolling: touch;
`;

const ChartImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  min-width: 840px; /* forces scroll on small screens if the chart is truly wide */

  @media (max-width: 700px) {
    min-width: 720px; /* tweak this if your chart is wider/narrower */
  }
`;

const BreakoutChart = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 16px 0;

  display: flex;
  justify-content: center;
`;

const Credit = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.7;
  margin-top: 0.75rem;
`;

export default function LogentryPage() {
  return (
    <LogentryPageWrapper>
      <LogEntryCard>
        <PageTitle>Countdown Log</PageTitle>

        <LogEntryCountdown>T−61 Days</LogEntryCountdown>
        <LogEntryDate>January 17, 2026</LogEntryDate>
        <LogEntryTitle>AS COLD AS FROGS IN A FROZEN POND</LogEntryTitle>

        <Paragraph>
          A few weeks ago over Christmas / New Years we visited the Space and
          Rocket Museum in Hunstville Alabama. I was blown away by the sheer
          size and engineering of many things but most notably the Saturn V
          rocket (big surprise there).
        </Paragraph>

        <TwoCol>
          <LeftCol>
            <Paragraph>
              I left with more questions than answers... Was that the recovered
              rocket from a mission? Could they recover all stages from the
              ocean? etc etc.. See the end of this log for some details.
            </Paragraph>

            <Paragraph>
              On our bi-weekly trip to the library my 3 year old went to pretend
              to search for books at the computer, while I typed Apollo into the
              search bar that led me to dozens of books about the Apollo
              missions.
            </Paragraph>

            <Paragraph>
              One book I randomly grabbed, and had no idea how in depth it would
              be was "Totally True Adventures: Apollo 13." I skimmed through it,
              and it seemed like it could be a good one to help the kids wind
              down before bed so I gave it a shot.
            </Paragraph>
          </LeftCol>

          <RightCol>
            <BookImage src='/logimages/Apollo13.PNG' alt='Apollo 13 book' />
            <Caption>Totally True Adventures: Apollo 13</Caption>
          </RightCol>
        </TwoCol>

        <Paragraph>
          I really have no clue if my 3 year old understood anything (when I
          looked over tonight while finishing the last few chapters, he was
          sound asleep) but my 5 year old was hooked. He hung onto every word,
          randomly asked dozens of fun questions, and looked over the top of his
          bunk bed at each page in case there was a picture on it to ask about.
          He was so nervous to find out if the astronauts made it back or not
          (but he told me he wouldn’t have been as nervous if they were “bad
          guys”. :D )
        </Paragraph>

        <Paragraph>
          We finished the book tonight. If you don’t know how the Apollo 13
          mission ended, I won’t spoil it for you.
        </Paragraph>

        <Paragraph>I’m just glad my kid got to enjoy it with me.</Paragraph>

        <Handle>
          <strong>- Moguler Mike</strong>
        </Handle>

        <QuoteBlock>
          <QuoteText>“Houston, we've had a problem.</QuoteText>
          <QuoteAuthor>― Jack Swigert</QuoteAuthor>
        </QuoteBlock>

        <Paragraph>Credits:</Paragraph>

        <Credit>
          The title of this post, "As Cold as Frogs in a Frozen Pond", was our
          favorite chapter title from the book we read.
        </Credit>

        <Credit>
          This journal of Apollo missions was incredible:{' '}
          <StyledLink
            href='https://apollojournals.org/afj/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            apollojournals.org/afj
          </StyledLink>
        </Credit>

        <Credit>
          I made this chart to help me understand the different Apollo Saturn V
          missions.
        </Credit>

        <BreakoutChart>
          <ChartWrap>
            <ChartImage
              src='/logimages/ApolloMissionChart.PNG'
              alt='Apollo Saturn V chart'
            />
          </ChartWrap>
        </BreakoutChart>
      </LogEntryCard>
    </LogentryPageWrapper>
  );
}
