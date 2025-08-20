import Navbar from '../navbar/Navbar';

const AnonymousSharing = () => {
  const user = localStorage.getItem('tokenUser');
  const links = [
    { name: 'Create a post right now', href: `/${user}/createanonymouspost` },
    { name: 'View all anonymous posts', href: `/${user}/allanonymousposts` },
  ];

  return (
    <>
      <Navbar />
      <div className="relative h-screen flex items-center justify-center mt-24">
        {/* Background */}
        <div className="absolute inset-0 bg-blue-80"></div> {/* Darker background */}

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="text-4xl font-extrabold text-gray drop-shadow-lg">
            Anonymous Sharing
          </h2>
          <p className="mt-6 text-lg text-black leading-relaxed">
            Welcome to the Anonymous Sharing Portal, a safe haven where you can express yourself freely without the fear of being judged. 
            <br />
            Share your thoughts, feelings, and experiences openly, knowing that your identity remains confidential.
            <br />
            Whether you seek advice, want to share a story, or simply need a place to vent — our community is here for you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-semibold shadow-lg transition"
              >
                {link.name} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnonymousSharing;
