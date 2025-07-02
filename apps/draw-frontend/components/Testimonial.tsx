const Testimonial = () => {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="glass-card rounded-2xl p-12 animate-fade-in-up">
                    <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
                        "The simplest way to sketch ideas. I use it daily!"
                    </blockquote>
                    <cite className="text-lg text-gray-600 font-medium">
                        – Jane D., Designer
                    </cite>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;