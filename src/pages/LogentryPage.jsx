import { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

const LogentryPageWrapper = styled.main`
  min-height: 40vh;
  padding: 80px 24px 48px;

  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

/* Cards stack + 30px separation */
const PostsStack = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LogEntryCard = styled.section`
  width: 100%;
  color: white;
  text-align: left;

  border-radius: 16px;
  padding: 24px 20px 28px;

  /* mostly clear background + thin border */
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);

  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.22);
    background: rgba(0, 0, 0, 0.33);
  }

  @media (max-width: 480px) {
    padding: 18px 18px 20px;
  }
`;

/* Clickable header area */
const CardHeaderButton = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  color: inherit;
  padding: 0;
  cursor: pointer;
  text-align: inherit;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid rgba(253, 231, 108, 0.95);
    outline-offset: 8px;
    border-radius: 12px;
  }
`;

const CollapseHint = styled.p`
  ${css`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
  `}
  margin: 0 0 18px 0;
  font-size: 0.85rem;
  opacity: 0.55;
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
  margin: 0 0 10px 0;
  color: white;

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
    font-size: 1.2rem;
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
  margin: 24px auto 24px;
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
    transform: none;
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
  min-width: 840px;

  @media (max-width: 700px) {
    min-width: 720px;
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

const EmailBlock = styled.div`
  margin: 18px auto 22px;
  padding: 14px 16px;
  max-width: 720px;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;

  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;

  font-size: 0.95rem;
  line-height: 1.45;
  opacity: 0.92;

  @media (max-width: 700px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

const EmailRow = styled.div`
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 10px;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    grid-template-columns: 70px 1fr;
  }
`;

const EmailLabel = styled.div`
  opacity: 0.7;
`;

const EmailValue = styled.div`
  word-break: break-word;
`;

const EmailBody = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 0.9;
`;

/* Collapsible body container */
const CardBody = styled.div`
  overflow: hidden;
`;

/* Only clamp when collapsed; expanded is unchanged */
const BodyClamp = styled.div`
  ${({ $collapsed }) =>
    $collapsed
      ? css`
          max-height: 200px;
          overflow: hidden;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 70px;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.9)
            );
            pointer-events: none;
          }
        `
      : css`
          max-height: none;
        `}
`;

function LogPostCard({ post, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <LogEntryCard>
      <CardHeaderButton
        type='button'
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <LogEntryCountdown>{post.countdown}</LogEntryCountdown>
        <LogEntryDate>{post.date}</LogEntryDate>
        <LogEntryTitle>{post.title}</LogEntryTitle>
        <CollapseHint>
          {open ? 'Tap to collapse' : 'Tap to expand'}
        </CollapseHint>
      </CardHeaderButton>

      <CardBody>
        <BodyClamp $collapsed={!open}>{post.body}</BodyClamp>
      </CardBody>
    </LogEntryCard>
  );
}

export default function LogentryPage() {
  const posts = useMemo(
    () => [
      {
        id: 'frog-pond',
        countdown: 'T−61 Days',
        date: 'January 17, 2026',
        title: 'AS COLD AS FROGS IN A FROZEN POND',
        // ✅ FULL FIRST POST: unchanged content
        body: (
          <>
            <Paragraph>
              A few weeks ago over Christmas / New Years we visited the Space
              and Rocket Museum in Hunstville Alabama. I was blown away by the
              sheer size and engineering of many things but most notably the
              Saturn V rocket (big surprise there).
            </Paragraph>

            <TwoCol>
              <LeftCol>
                <Paragraph>
                  I left with more questions than answers... Was that the
                  recovered rocket from a mission? Could they recover all stages
                  from the ocean? etc etc.. See the end of this log for some
                  details.
                </Paragraph>

                <Paragraph>
                  On our bi-weekly trip to the library my 3 year old went to
                  pretend to search for books at the computer, while I typed
                  Apollo into the search bar that led me to dozens of books
                  about the Apollo missions.
                </Paragraph>

                <Paragraph>
                  One book I randomly grabbed, and had no idea how in depth it
                  would be was &quot;Totally True Adventures: Apollo 13.&quot; I
                  skimmed through it, and it seemed like it could be a good one
                  to help the kids wind down before bed so I gave it a shot.
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
              sound asleep) but my 5 year old was hooked. He hung onto every
              word, randomly asked dozens of fun questions, and looked over the
              top of his bunk bed at each page in case there was a picture on it
              to ask about. He was so nervous to find out if the astronauts made
              it back or not (but he told me he wouldn’t have been as nervous if
              they were “bad guys”. :D )
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
              <QuoteText>“Houston, we've had a problem."</QuoteText>
              <QuoteAuthor>― Jack Swigert</QuoteAuthor>
            </QuoteBlock>

            <Paragraph>Credits:</Paragraph>

            <Credit>
              The title of this post, &quot;As Cold as Frogs in a Frozen
              Pond&quot;, was our favorite chapter title from the book we read.
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
              I made this chart to help me understand the different Apollo
              Saturn V missions.
            </Credit>

            <BreakoutChart>
              <ChartWrap>
                <ChartImage
                  src='/logimages/ApolloMissionChart.PNG'
                  alt='Apollo Saturn V chart'
                />
              </ChartWrap>
            </BreakoutChart>
          </>
        ),
      },

      // ✅ SECOND POST (Jan 3)
      {
        id: 'thin-red-line',
        countdown: 'T−67 Days',
        date: 'January 11, 2026',
        title: 'THE THIN RED LINE',
        body: (
          <>
            <Paragraph>
              I was at my favorite dinner spot, waiting for my order when my
              phone dinged.
            </Paragraph>

            <Paragraph>
              I pulled out my phone and checked my email. I frowned at the
              screen. I thought I’d unsubscribed from that list.
            </Paragraph>

            <EmailBlock>
              <EmailRow>
                <EmailLabel>TO:</EmailLabel>
                <EmailValue>
                  Astronomy Curiosities astrocurious@scilists.org
                </EmailValue>
              </EmailRow>

              <EmailRow>
                <EmailLabel>FROM:</EmailLabel>
                <EmailValue>(Irina Petrova, PhD) ipetrova@gaoran.ru</EmailValue>
              </EmailRow>

              <EmailRow>
                <EmailLabel>SUBJECT:</EmailLabel>
                <EmailValue>The Thin Red Line</EmailValue>
              </EmailRow>

              <EmailBody>
                <div>
                  Hello, professionals. My name is Doctor Irina Petrova and I
                  work at the Pulkovo Observatory in St. Petersburg, Russia.
                </div>

                <div style={{ marginTop: '10px' }}>
                  I am writing to you to ask for help.
                </div>

                <div style={{ marginTop: '10px' }}>
                  For the past two years, I have been working on a theory
                  related to infrared emissions from nebulae. As a result, I
                  have made detailed observations in a few specific IR bands of
                  light. And I have found something odd — not in any nebula, but
                  here in our own solar system.
                </div>

                <div style={{ marginTop: '10px' }}>
                  There is a very faint, but detectable line in the solar system
                  that emits infrared light at the 25.984 micron wavelength. It
                  seems to be solely that wavelength with no variance.
                </div>

                <div style={{ marginTop: '10px' }}>
                  Attached are Excel spreadsheets with my data. I have also
                  provided a few renders of the data as a 3-D model.
                </div>

                <div style={{ marginTop: '10px' }}>
                  You will see on the model that the line is a lopsided arc that
                  rises straight up from the sun’s North Pole for 37 million
                  kilometers.
                </div>

                <div style={{ marginTop: '10px' }}>
                  From there, it angles sharply down and away from the sun,
                  toward Venus. After the arc’s apex, the cloud widens like a
                  funnel. At Venus, the arc’s cross-section is as wide as the
                  planet itself.
                </div>

                <div style={{ marginTop: '10px' }}>
                  The infrared glow is very faint. I was only able to detect it
                  at all because I was using extremely sensitive detection
                  equipment while searching for IR emissions from nebulae.
                </div>

                <div style={{ marginTop: '10px' }}>
                  But to be certain, I called in a favor from the Atacama
                  observatory in Chile — in my opinion the best IR observatory
                  in the world. They confirmed my findings.
                </div>

                <div style={{ marginTop: '10px' }}>
                  There are many reasons one might see IR light in
                  interplanetary space. It could be space dust or other
                  particles reflecting sunlight. Or some molecular compound
                  could be absorbing energy and re-emitting it in the infrared
                  band. That would even explain why it’s all the same
                  wavelength.
                </div>

                <div style={{ marginTop: '10px' }}>
                  The shape of the arc is of particular interest. My first guess
                  was that it is a collection of particles moving along magnetic
                  field lines. But Venus has no magnetic field to speak of. No
                  magnetosphere, no ionosphere, nothing.
                </div>

                <div style={{ marginTop: '10px' }}>
                  What forces would make particles arc toward it? And why would
                  they glow?
                </div>

                <div style={{ marginTop: '10px' }}>
                  Any suggestions or theories would be welcome.
                </div>
              </EmailBody>
            </EmailBlock>

            <Paragraph>What does this mean??</Paragraph>

            <Handle>
              <strong>- Moguler Mike</strong>
            </Handle>
          </>
        ),
      },
    ],
    []
  );

  return (
    <LogentryPageWrapper>
      <PostsStack>
        <PageTitle>Countdown Log</PageTitle>

        {posts.map((post) => (
          <LogPostCard key={post.id} post={post} defaultOpen={true} />
        ))}
      </PostsStack>
    </LogentryPageWrapper>
  );
}
