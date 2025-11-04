import { Link } from "react-router-dom";

export default function SkillCard({ s }) {
  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
    >
      <figure className="relative">
        <img
          src={s.image}
          alt={s.skillName}
          className="w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-base-content">
              {s.skillName}
            </h3>
            <p className="text-sm text-base-content/60">By {s.providerName}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-2xl md:text-3xl font-extrabold text-base-content">
              ${s.price}
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.954L10 0l2.946 5.956 6.564.954-4.755 4.635 1.123 6.545z" />
            </svg>
            <span className="text-sm font-medium">{s.rating}</span>
          </div>

          <Link
            to={`/skills/${s.skillId}`}
            className="btn btn-primary text-white normal-case px-5"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
