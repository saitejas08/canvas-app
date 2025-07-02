const Footer = () => {
    const links = [
        { name: "GitHub", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Contact", href: "#" }
    ];

    return (
        <footer className="container mx-auto px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-500 text-sm">
                        © 2024 DrawSpace. Open-source and free forever.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;