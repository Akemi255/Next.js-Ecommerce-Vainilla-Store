export default function FavoriteCausePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Favorite Causes</h1>
                <p className="text-lg text-gray-700 mb-8">
                    We are passionate about supporting various causes that make a positive impact in our community. Here are some of our favorite causes that we actively support and encourage you to get involved with.
                </p>
                <div className="space-y-6">
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Cause 1: Environmental Conservation</h2>
                        <p className="text-gray-600">
                            We are dedicated to protecting our planet and preserving natural resources. Join us in our efforts to combat climate change and promote sustainability.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Cause 2: Education for All</h2>
                        <p className="text-gray-600">
                            Education is a fundamental right, and we believe in providing quality education to underprivileged communities. Support our initiatives to make education accessible to everyone.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Cause 3: Health and Wellness</h2>
                        <p className="text-gray-600">
                            Promoting health and wellness is essential for a thriving community. Get involved in our health programs and initiatives aimed at improving well-being for all.
                        </p>
                    </div>
                    {/* Puedes agregar más causas favoritas aquí */}
                </div>
            </div>
        </div>
    );
}
