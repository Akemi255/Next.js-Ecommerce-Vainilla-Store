import React from 'react';

export default function AdvancedTopicsPage() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Advanced Vanilla Topics</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">What is a Mother Jar?</h2>
                <p className="text-gray-700">
                    A mother jar is a large container filled with vanilla beans and alcohol, used to create vanilla extract. Over time, extract can be poured from the mother jar into smaller bottles for regular use. As the liquid level drops, more alcohol is added to maintain the extract, allowing the process to continue.
                </p>
                <p className="text-gray-700 mt-2">
                    Vanilla beans can be removed, scraped for their seeds, or added to various recipes. To keep the extract strong, new beans are sometimes added. Mother jars often contain a higher concentration of beans, sometimes two or three times more than the typical ratio.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Does Light Affect Vanilla?</h2>
                <p className="text-gray-700">
                    Yes, light can affect vanilla. The main aromatic compound in vanilla, vanillin, can oxidize and degrade when exposed to light and moist air. To preserve the quality of your vanilla, it&apos;s best to store it away from direct sunlight, ideally in a cool, dark place.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">How Can I Speed Up the Extracting Process Safely?</h2>
                <p className="text-gray-700">
                    The extraction process can be accelerated by gently heating the vanilla extract. Ideal temperatures for extraction are between 60-90°F (15-32°C). It’s important not to exceed 130°F (55°C) to avoid damaging the flavor compounds.
                </p>
                <p className="text-gray-700 mt-2">
                    Some people use a warm water bath or a Sous Vide immersion circulator to gently heat the extract. It&apos;s crucial to never heat alcohol under pressure and to always supervise the process to ensure safety.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Should You Split the Beans for Extract?</h2>
                <p className="text-gray-700">
                    It’s not necessary to split the beans when making vanilla extract. Splitting them can speed up the process, but leaving the beans whole preserves the seeds (caviar) inside. If you do use the seeds in a recipe, the empty pod can be returned to the extract jar to continue the process.
                </p>
                <p className="text-gray-700 mt-2">
                    Ensure that all beans remain fully submerged in alcohol to prevent them from molding. You can bend or fold the beans to fit them better in the jar.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Are Your Vanilla Beans Organic and Fair Trade?</h2>
                <p className="text-gray-700">
                    Vanilla orchids are sensitive and generally cannot withstand synthetic farming methods, making almost all vanilla beans organically grown. However, certification can be costly, so many farmers do not pursue it. While our beans are organically grown, they are not certified. Similarly, although we follow fair trade practices, we have not paid for official certification. We always ensure that farmers receive fair compensation for their work.
                </p>
            </section>
        </div>
    );
}
