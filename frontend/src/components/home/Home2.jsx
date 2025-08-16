import React from 'react';

const AwarenessSection = () => {
  return (
    <section className="bg-gray-800 dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Mental Health Awareness</h2>
          <p className="font-light sm:text-xl text-white">Learn positive ways to care for your mental well-being</p>
        </div> 
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/4329/4329442.png" alt="Meditation" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Meditation</h3>
            <a className="cursor-pointer" href="https://www.mindful.org/meditation/mindfulness-getting-started/">Read More</a>
          </div>
          
          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Journaling" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Journaling</h3>
            <a className="cursor-pointer" href="https://positivepsychology.com/benefits-of-journaling/">Read More</a>
          </div>
          
          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/1048/1048943.png" alt="Sleep" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Healthy Sleep</h3>
            <a className="cursor-pointer" href="https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html">Read More</a>
          </div>
          
          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="Exercise" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Exercise</h3>
            <a className="cursor-pointer" href="https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/physical-activity-and-mental-health">Read More</a>
          </div>

          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/4365/4365273.png" alt="Stress" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Coping with Stress</h3>
            <a className="cursor-pointer" href="https://www.apa.org/topics/stress/tips">Read More</a>
          </div>

          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/2210/2210153.png" alt="Therapy" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Therapy & Support</h3>
            <a className="cursor-pointer" href="https://www.nimh.nih.gov/health/publications/psychotherapies">Read More</a>
          </div>

          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/4225/4225904.png" alt="Gratitude" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Gratitude</h3>
            <a className="cursor-pointer" href="https://greatergood.berkeley.edu/article/item/why_gratitude_is_good">Read More</a>
          </div>

          <div className="text-center text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png" alt="Social" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">Social Connections</h3>
            <a className="cursor-pointer" href="https://www.health.harvard.edu/newsletter_article/the-health-benefits-of-strong-relationships">Read More</a>
          </div>

        </div>  
      </div>
    </section>
  )
}

export default AwarenessSection;
