const Features = () => {
    const features = [
        {
            icon: "✏️",
            title: "Infinite Canvas",
            description: "Sketch without borders or distractions"
        },
        {
            icon: "👥",
            title: "Real-Time Collaboration",
            description: "Draw with teammates instantly"
        },
        {
            icon: "⚡",
            title: "Offline-First",
            description: "Works without internet"
        }
    ];

    return (
        <section className="container mx-auto px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up-delay-${index + 1}`}
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;