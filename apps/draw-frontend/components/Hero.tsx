import { Button } from "@repo/ui/button";

const Hero = () => {
    return (
        <section className="container mx-auto px-6 pt-20 pb-16 text-center">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
                    Draw Freely,{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Think Clearly
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
                    An open-source whiteboard for effortless sketching & collaboration
                </p>

                <div className="mb-16 animate-fade-in-up-delay-2">
                    <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Start Drawing →
                    </Button>
                </div>

                <div className="glass-card rounded-2xl p-8 mx-auto max-w-4xl animate-fade-in-up-delay-3">
                    <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">✏️</span>
                            </div>
                            <p className="text-gray-500 font-medium">App Preview Coming Soon</p>
                            <p className="text-sm text-gray-400 mt-1">Minimalist Drawing Interface</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;