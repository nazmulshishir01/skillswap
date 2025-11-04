export default function TopProviders() {
  const providers = [
    {
      name: "Alex Martin",
      skills: "Guitar, Music Theory",
      rating: 4.9,
      img: "https://i.pravatar.cc/160?img=12",
    },
    {
      name: "Tanvir Ahmed",
      skills: "JavaScript, React",
      rating: 4.8,
      img: "https://i.pravatar.cc/160?img=13",
    },
    {
      name: "Maya Rahman",
      skills: "Yoga, Wellness",
      rating: 4.7,
      img: "https://i.pravatar.cc/160?img=14",
    },
  ];

  return (
    <section className="mt-16" data-aos="fade-up">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Top Rated Providers
        </h2>
        <p className="mt-2 text-base md:text-lg opacity-80">
          Find top-rated experts in various fields with the highest ratings and
          trusted reviews.
        </p>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {providers.map((p, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-5 rounded-2xl border shadow-sm hover:shadow-md transition bg-blue-100" // Add light blue background
          >
            <div>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="opacity-70 text-sm">{p.skills}</p>
              <div className="flex items-center gap-1 mt-2 text-yellow-500 font-medium">
                <span>⭐</span>
                <span className="text-gray-800">{p.rating}</span>
              </div>
            </div>

            <div className="flex-shrink-0 ml-4">
              <img
                src={p.img}
                alt={p.name}
                className="w-16 h-16 rounded-full object-cover border"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
