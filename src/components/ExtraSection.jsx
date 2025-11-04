export default function ExtraSection() {
  const items = [
    {
      title: "Swap Stories",
      text: "Read real-life experiences from community members who share their journeys, challenges, and successes. Get inspired by their stories and learn from them.",
    },
    {
      title: "Safety Tips",
      text: "Your safety is a priority. Always meet in public places, confirm details in advance, and communicate openly with service providers for a secure experience.",
    },
    {
      title: "Earning Guide",
      text: "Turn your passions into income by creating micro-classes. Share your skills with others and start earning by teaching what you love, right from your home.",
    },
  ];
  return (
    <section className="mt-12" data-aos="fade-up">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Community Corner
        </h2>
        <p className="mt-2 text-base md:text-lg opacity-80">
          Join a community of learners and experts, sharing knowledge and
          growth.
        </p>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div key={i} className="p-5 rounded-2xl border">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="opacity-70 text-sm">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
