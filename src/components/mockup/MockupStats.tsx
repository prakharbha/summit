import Image from 'next/image';

const MockupStats = () => {
  const stats = [
    {
      number: "1985",
      label: "Founded",
      description: "Four decades of excellence"
    },
    {
      number: "1000+",
      label: "Projects Completed",
      description: "Across diverse industries"
    },
    {
      number: "100%",
      label: "Customer Satisfaction",
      description: "Our unwavering commitment"
    },
    {
      number: "24/7",
      label: "Safety Focus",
      description: "Preventing incidents always"
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/greybar-home.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-summit-primary/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven <span className="text-summit-red">Excellence</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our track record speaks for itself - delivering exceptional results since 1985
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-summit-red mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-white/80">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Summit Difference?
            </h3>
            <p className="text-white/90 mb-6">
              Join the hundreds of satisfied clients who trust Summit for their environmental drilling needs.
            </p>
            <button className="summit-btn-primary text-lg px-8 py-4">
              Get Your Quote Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupStats;
