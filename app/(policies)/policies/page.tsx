export default function PoliciesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Policies</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to our policies page. Here you can find information about our policies, including privacy, returns, and more.
                </p>
                <div className="space-y-4">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Privacy Policy</h2>
                        <p className="text-gray-600 mt-2">
                            We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Return Policy</h2>
                        <p className="text-gray-600 mt-2">
                            If you are not satisfied with your purchase, you can return it within 30 days of receipt. Please refer to our detailed return policy for more information.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Shipping Policy</h2>
                        <p className="text-gray-600 mt-2">
                            We offer a variety of shipping options to meet your needs. Learn more about our shipping rates, delivery times, and order tracking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
