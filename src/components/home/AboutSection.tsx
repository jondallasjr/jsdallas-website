"use client";

const AboutSection = () => {
    return (
        <section id="about" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">About</h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Trusted Land Surveying Services Since 1985
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="max-w-2xl text-gray-700">
                        <p className="mb-4">
                            J.S. Dallas, Inc. is a licensed Maryland surveying firm based in Glen Arm. For nearly four decades, we have been a trusted partner in real estate development, management, and transfer, providing accurate and reliable surveying services to clients across the region.
                        </p>

                        <p className="mb-4">
                            For two generations, the Dallas family name has been synonymous with quality service, dedicated to delivering precise measurements and detailed property mapping.
                        </p>

                        <p className="mb-4">
                            Whether you&apos;re developing land, resolving property disputes, or planning construction projects, we are here to provide the expertise and precision you need. Contact us today to learn more about how we can support your next project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;