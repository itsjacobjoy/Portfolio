export default function DisabledPortfolioPage() {
  return (
    <div style={{ padding: "5rem", textAlign: "center", color: "white" }}>
      <h1>Portfolio detail pages are disabled</h1>
      <p>These project detail pages are currently turned off.</p>
    </div>
  );
}

// Disable static generation
export async function getStaticPaths() {
  return { paths: [], fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}
