import styled from 'styled-components';

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

const LogEntryTitle = styled.h1`
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

export default function LogentryPage() {
  return (
    <LogentryPageWrapper>
      <LogEntryCard>
        <LogEntryTitle>Countdown Log:</LogEntryTitle>
        <LogEntryTitle>T−61 Days</LogEntryTitle>
        <Greeting>AS COLD AS FROGS IN A FROZEN POND</Greeting>

        <Paragraph>
          A few weeks ago over Christmas / New Years we visited the Space and
          Rocket Museum in Hunstville Alabama. I was blown away by the sheer
          size and engineering of many things but most notably the Saturn V
          rocket (big surprise there).
        </Paragraph>

        <Paragraph>
          I left with more questions than answers. Was that the recovered rocket
          from a mission? Could they recover all stages from the ocean? How many
          of these massive rockets did they launch? How many casualties were
          there throughout the program? I found the answer to some of those
          questions, and maybe I will detail them below. There are some amazing
          resources online (I was especially impressed with this resource:{' '}
          <a
            href='https://apollojournals.org/afj/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://apollojournals.org/afj/index.html
          </a>
          ) – but nothing can quite beat having a physical book when looking at
          hand written notes, diagrams of rockets, pictures of missions.
        </Paragraph>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
          }}
        >
          {/* LEFT COLUMN — multiple paragraphs */}
          <div style={{ flex: 1 }}>
            <Paragraph>
              On our weekly trip to the library my 3 year old went to pretend to
              search for books at the computer, and I typed in Apollo into the
              search bar that led me to a shelf full of interesting books so I
              grabbed a few..
            </Paragraph>

            <Paragraph>
              One book I randomly grabbed, and had no idea how in depth it would
              be was Totally True Adventures: Apollo 13. I skimmed through it,
              and it seemed like it could be a good one to help the kids wind
              down before bed so I gave it a shot.
            </Paragraph>
          </div>

          {/* RIGHT COLUMN — image + caption */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <img
              src='/logimages/Apollo13.PNG'
              alt='Apollo 13 book'
              style={{ height: '260px', width: 'auto' }}
            />

            <div
              style={{ marginTop: '8px', fontSize: '0.85rem', opacity: 0.7 }}
            >
              Totally True Adventures: Apollo 13
            </div>
          </div>
        </div>

        <Paragraph>
          I really have no clue if my 3 year old understood anything (when I
          looked over tonight while finishing the last few chapters, he was
          sound asleep) but my 5 year old was hooked. He hung onto every word,
          randomly asked dozens of fun questions, and looked over the top of his
          bunk bed at each page in case there was a picture on it to ask about.
          He was so nervous to find out if the astronauts made it back or not
          (but he told me he wouldn’t have been nervous if they were “bad guys”.
          :D )
        </Paragraph>

        <Paragraph>
          We finished the book tonight. If you don’t know how the Apollo 13
          mission ended, I won’t spoil it for you. I personally have very little
          knowledge of any of the Apollo missions, so this was such a fun
          learning experience for me.
        </Paragraph>

        <Paragraph>
          I’m just glad my kid got to enjoy it with me. Onto the next Apollo
          Mission
        </Paragraph>

        <Handle>
          <strong>- Moguler Mike</strong>
        </Handle>

        <QuoteBlock>
          <QuoteText>“Houston, we've had a problem.</QuoteText>
          <QuoteAuthor>― Jack Swigert</QuoteAuthor>
        </QuoteBlock>
      </LogEntryCard>
    </LogentryPageWrapper>
  );
}
