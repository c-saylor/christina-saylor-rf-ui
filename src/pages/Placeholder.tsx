import EventHeader from '../components/EventHeader';

type PlaceholderProps = {
  title: string;
};

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <section className="placeholder section">
      <EventHeader />
      <h2>{title}</h2>
      <p>This section is coming soon.</p>
    </section>
  );
}
