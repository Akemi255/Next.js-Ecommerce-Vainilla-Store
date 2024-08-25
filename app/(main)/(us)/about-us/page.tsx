export default function AboutUs() {
    return (
        <div className="about-us-container p-8 max-w-3xl mx-auto ">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-6">
                At Ancestral Land, our passion for vanilla drives everything we do. From sourcing the highest quality vanilla beans to crafting exquisite vanilla products, we are committed to excellence. Our journey began with a simple love for this remarkable spice, and it has grown into a mission to share that love with the world.
            </p>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-lg mb-6">
                We strive to bring the finest vanilla products to your kitchen, offering a range of options that cater to both the casual cook and the professional chef. We believe in sustainable practices, fair trade, and supporting the communities where our vanilla is grown.
            </p>
            <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
            <ul className="list-disc list-inside mb-6">
                <li className="text-lg">Quality: Only the best vanilla beans make it into our products.</li>
                <li className="text-lg">Sustainability: We prioritize eco-friendly practices in every step of our process.</li>
                <li className="text-lg">Fair Trade: We ensure fair compensation for the farmers and artisans we work with.</li>
                <li className="text-lg">Community: We are dedicated to giving back to the communities that support us.</li>
            </ul>
        </div>
    );
}
