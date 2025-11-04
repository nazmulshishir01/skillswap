export default function HowItWorks() {
  const steps = [
    {
      title: "Browse Skills",
      text: "Find skills near you",
      icon: (
        <img
          className="w-7 h-7"
          src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
          alt="Search"
        />
      ),
    },
    {
      title: "View Details",
      text: "Check ratings, price, and slots",
      icon: (
        <img
          className="w-7 h-7"
          src="https://img.icons8.com/dotty/80/view-file.png"
          alt="View details"
        />
      ),
    },
    {
      title: "Book Session",
      text: "Send request & show up!",
      icon: (
        <img
          className="w-7 h-7"
          src="https://img.icons8.com/pulsar-line/48/session-timeout.png"
          alt="Book session"
        />
      ),
    },
  ];

  return (
    <section className="mt-16" data-aos="fade-up">
      
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          How It Works
        </h2>
        <p className="mt-3 text-base md:text-lg opacity-80">
          Browse, compare, and book local services quickly and easily in just a
          few simple steps.
        </p>
      </div>

      
      <div className="mt-10">
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-base-200 shadow-sm text-center flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="opacity-70 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
