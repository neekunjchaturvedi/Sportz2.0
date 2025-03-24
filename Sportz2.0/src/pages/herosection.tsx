export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="\src\assets\images\Hero.png"
          alt="Stadium background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-lg md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Where Artists Can Enhance Opportunities
          </h1>
          <p className="text-2xl text-white/90 mb-8">
            Connect with experts in the entertainment industry and assess your
            skills and performances
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
