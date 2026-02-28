import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(99,102,241,0.08);
  color: #222;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  color: #6366f1;
  margin-bottom: 24px;
`;
const Section = styled.div`
  margin-bottom: 32px;
`;
const Link = styled.a`
  color: #6366f1;
  text-decoration: underline;
  &:hover { color: #4338ca; }
`;

export const HelpPage = () => (
  <Container>
    <Title>Help & FAQ</Title>
    <Section>
      <h3>How to generate a report?</h3>
      <ul>
        <li>Go to the Builder page and fill in your company and client details.</li>
        <li>Add work items and hours.</li>
        <li>Click "Generate Invoice" to save your report.</li>
        <li>Preview, download, or sign the document.</li>
      </ul>
    </Section>
    <Section>
      <h3>Where are my reports stored?</h3>
      <p>All reports are stored locally in your browser. You can view, delete, or run AI checks on them in the <Link href="/reports">Reports</Link> page.</p>
    </Section>
    <Section>
      <h3>How to sign a document?</h3>
      <p>After generating a report, you can sign it electronically using the Polish government service: <Link href="https://www.gov.pl/web/gov/podpisz-dokument-elektronicznie-wykorzystaj-podpis-zaufany" target="_blank">Podpisz profilem zaufanym</Link>.</p>
    </Section>
    <Section>
      <h3>AI Check</h3>
      <p>Use the AI Check button in the Reports page to automatically review your report for common issues.</p>
    </Section>
    <Section>
      <h3>Privacy</h3>
      <p>Your data never leaves your device. All information is stored locally and is not sent to any server.</p>
    </Section>
    <Section>
      <h3>Contact & Feedback</h3>
      <p>If you have questions or suggestions, please contact us at <Link href="mailto:support@b2breport.app">support@b2breport.app</Link>.</p>
    </Section>
  </Container>
);
