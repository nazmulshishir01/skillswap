import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";
import TopProviders from "../components/TopProviders";
import HowItWorks from "../components/HowItWorks";
import ExtraSection from "../components/ExtraSection";

export default function Home() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((r) => r.json())
      .then(setSkills);
  }, []);

  return (
    <div>
      <Hero />

      <section className="mt-16" data-aos="fade-up">
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Popular Skills
            </h2>
            <p className="mt-3 text-base md:text-lg opacity-80">
              Discover, compare, and book local services in just a few simple
              steps.
            </p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => (
            <SkillCard key={s.skillId} s={s} />
          ))}
        </div>
      </section>

      <TopProviders />
      <HowItWorks />
      <ExtraSection />
    </div>
  );
}
