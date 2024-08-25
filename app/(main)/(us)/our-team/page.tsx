export default function OurTeamPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Our team is made up of dedicated professionals who are passionate about delivering the best results. Get to know us better below.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                        <img
                            src="/team-member-1.jpg"
                            alt="Team Member 1"
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Alice Johnson</h2>
                        <p className="text-gray-600">
                            Alice is our lead designer with a keen eye for detail. She brings creativity and innovation to every project.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                        <img
                            src="/team-member-2.jpg"
                            alt="Team Member 2"
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Bob Smith</h2>
                        <p className="text-gray-600">
                            Bob is our senior developer, skilled in a wide range of technologies. He ensures that our solutions are robust and scalable.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                        <img
                            src="/team-member-3.jpg"
                            alt="Team Member 3"
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Charlie Davis</h2>
                        <p className="text-gray-600">
                            Charlie is our project manager who excels at coordinating efforts and ensuring timely delivery of our projects.
                        </p>
                    </div>
                    {/* Puedes agregar más miembros del equipo aquí */}
                </div>
            </div>
        </div>
    );
}
