export default function UnderConstruction() {
  return (
    <main style={styles.wrapper}>
      <img src='/images/astronaut.PNG' alt='mowing' style={styles.image} />
      <h1 style={styles.title}>Under Construction</h1>
    </main>
  );
}

const styles = {
  wrapper: {
    color: '#ffffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    width: 'auto',
    maxWidth: '100%',
    height: '400px',
    marginBottom: '80px',
  },
  title: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '3rem',
    fontWeight: 400,
    letterSpacing: '0.14em',
    margin: 0,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '0.95rem',
    opacity: 0.7,
    margin: 0,
  },
};
