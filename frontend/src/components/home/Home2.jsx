import React from 'react';

const awarenessTopics = [
  {
    title: "Meditation",
    img: "https://cdn-icons-png.flaticon.com/512/4329/4329442.png",
    benefit: "Calms the mind, reduces stress, and improves focus.",
    link: "https://www.mindful.org/meditation/mindfulness-getting-started/"
  },
  {
    title: "Journaling",
    img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    benefit: "Organize thoughts, process emotions, and gain clarity.",
    link: "https://positivepsychology.com/benefits-of-journaling/"
  },
  {
    title: "Healthy Sleep",
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
    benefit: "Boosts mood, focus, and overall mental health.",
    link: "https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html"
  },
  {
    title: "Exercise",
    img: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    benefit: "Releases endorphins and reduces anxiety.",
    link: "https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/physical-activity-and-mental-health"
  },
  {
    title: "Coping with Stress",
    img: "https://cdn-icons-png.flaticon.com/512/4365/4365273.png",
    benefit: "Learn healthy strategies to handle daily challenges.",
    link: "https://www.apa.org/topics/stress/tips"
  },
  {
    title: "Therapy & Support",
    img: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png",
    benefit: "Professional help can guide healing and growth.",
    link: "https://www.nimh.nih.gov/health/publications/psychotherapies"
  },
  {
    title: "Gratitude",
    img: "https://cdn-icons-png.flaticon.com/512/4225/4225904.png",
    benefit: "Shifts perspective and fosters positivity.",
    link: "https://greatergood.berkeley.edu/article/item/why_gratitude_is_good"
  },
  {
    title: "Social Connections",
    img: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    benefit: "Strong relationships improve resilience and happiness.",
    link: "https://www.health.harvard.edu/newsletter_article/the-health-benefits-of-strong-relationships"
  },
];

const AwarenessSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="py-16 px-6 mx-auto max-w-screen-xl lg:py-24">
        
        {/* Intro Section */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Why Mental Health Awareness Matters 💡
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-8">
            Mental well-being is just as important as physical health. 
            Building awareness helps us break stigma, adopt healthy habits, 
            and create a more supportive society where people feel safe to heal and grow.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {awarenessTopics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-2xl p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <img 
                src={topic.img} 
                alt={topic.title} 
                className="mx-auto mb-4 w-24 h-24 rounded-full bg-indigo-50 p-3"
              />
              <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
              <p className="mt-2 text-gray-500 text-sm">{topic.benefit}</p>
              <a 
                href={topic.link} 
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwarenessSection;
