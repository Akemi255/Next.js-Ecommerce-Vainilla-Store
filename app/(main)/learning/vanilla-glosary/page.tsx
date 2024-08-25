export default function VanillaGlossaryPage() {
    const glossaryTerms = [
        { term: 'Bean', definition: 'The complete pod and seeds of the vanilla orchid.' },
        { term: 'Beanie', definition: 'An affectionate name for a person who loves vanilla beans.' },
        { term: 'Bourbon', definition: 'A type of whiskey originating in North America, barrel aged, made primarily from corn but also known to be made from wheat or rye. Bourbon is a popular choice for making vanilla extract due to its depth of flavor.' },
        { term: 'Bourbon cure', definition: 'Beans cured using the method developed in the Bourbon Islands (now known as the Réunion Islands), by which vanilla beans are scalded in hot water and wrapped in blankets to steam as well as laid in the sun to dry.' },
        { term: 'Brandy', definition: 'Liquor produced by distilling wine. Brandy is a popular choice for making vanilla extract due to its fruitiness.' },
        { term: 'Caviar (Vanilla Caviar)', definition: 'The small, black seeds inside of the vanilla bean pod.' },
        { term: 'Cure', definition: 'The process of killing, drying, and preparing vanilla beans for use.' },
        { term: 'Double fold', definition: 'Double strength, created by doubling the standard FDA recommended amount of beans or halving the standard FDA recommended amount of alcohol in the ratio of vanilla beans to alcohol.' },
        { term: 'Everclear', definition: 'A brand of strong alcohol, typically found in 190 proof, often used in proofing up other types of alcohol that are at too low of a proof to use for extract.' },
        { term: 'Extract', definition: 'The process of removing and dissolving the natural oils and resins from plant material; (noun) the product resulting from removing the natural oils and resins from plant materials dissolved in alcohol.' },
        { term: 'Fair trade', definition: 'The practice of paying farmers their asking price for their vanilla beans. Allowing farmers and suppliers to set their own pricing structure allows them to receive a livable wage.' },
        { term: 'Flavor notes', definition: 'Complex hints of additional, underlying flavors and aromas besides the dominant vanilla flavor.' },
        { term: 'Fold', definition: 'The term used to describe the strength of vanilla extract.' },
        { term: 'Grade', definition: 'Rating given to vanilla beans based on their length and moisture content. Longer fuller beans are higher grade than shorter beans with less caviar.' },
        { term: 'House rule ratio', definition: '1 ounce of vanilla beans to 1 cup (8 ounces) of alcohol.' },
        { term: 'Lurker Bean', definition: 'Someone who just hangs around our websites reading and thinking about buying vanilla beans, but is unsure of themselves and are worried what might happen to them if they jump down the rabbit hole. Don\'t worry, we\'ve all been lurkers for a little bit.' },
        { term: 'Mexican cure', definition: 'Beans cured using the method developed in Mexico, by which vanilla beans are wilted in the sun, then wrapped in blankets to steam and laid in the sun to dry.' },
        { term: 'Mother jar', definition: 'A jar of perpetually brewing extract that is made by continuously replacing alcohol as extract is used and replacing beans as they get older. Mother jars can be any size, mixed beans or just one type, mixed alcohol or just one type. The only requirement is that it is perpetually going.' },
        { term: 'New Bean', definition: 'An affectionate name given to a person who is new to the vanilla world.' },
        { term: 'Oak blocks/Oak finishing blocks', definition: 'Small blocks of white oak, with varying degrees of toasting ranging from light toast to charred, that are added to a jar of finished vanilla for a period of around 2 weeks. The oak mellows the extract and takes some of the alcohol “bite” out of the finished extract.' },
        { term: 'Oleoresins', definition: 'A naturally occurring mixture of oils and resins that can be extracted from a plant.' },
        { term: 'Organic', definition: 'Grown without pesticides. All vanilla is organic because the orchid is too delicate to tolerate pesticides. However, most is not certified organic because the paperwork to do so is costly.' },
        { term: 'Patience', definition: 'The quality of waiting calmly without complaining. A skill/quality essential to making vanilla that is required from the moment you place your order until the extract is complete.' },
        { term: 'Pod', definition: 'The outer case of the vanilla bean without the seeds.' },
        { term: 'Proof', definition: 'The term used to describe the amount of alcohol in a beverage, found by doubling the percent alcohol. Ex: 80 proof equals 40% alcohol.' },
        { term: 'Proof down', definition: 'The process of adding distilled water to a base alcohol until the desired proof is achieved.' },
        { term: 'Proof up', definition: 'The process of adding a much stronger alcohol, such as Everclear, to a base alcohol until the desired proof is achieved.' },
        { term: 'Resin', definition: 'Mixture of organic compounds secreted by plants for protection or as a response to injury.' },
        { term: 'Rum', definition: 'Alcohol made from sugar cane. Rum can be white, gold, dark, or spiced. Rum is a popular choice for making vanilla extract due to its sweet flavor.' },
        { term: 'Single fold', definition: 'Single strength, created by following the standard FDA recommended ratio of vanilla beans to alcohol.' },
        { term: 'Standard FDA recommended ratio', definition: '2.64 ounces of vanilla beans per 750ml.' },
        { term: 'Tattoo', definition: 'Markings or scrapings that vanilla farmers intentionally put on the beans as they are growing to identify their beans and deter thieves. The bean “scabs” over and the markings are permanent but have no effect on the quality of the bean.' },
        { term: 'Triple fold', definition: 'Triple strength, created by tripling the standard FDA recommended amount of beans or cutting the standard FDA recommended amount of alcohol to 1/3 in the ratio of vanilla beans to alcohol.' },
        { term: 'Vanilla bean', definition: 'The fruit of any vanilla orchid, the world\'s second most expensive spice, and our favorite flavor. The majority of vanilla beans are hand pollinated on vines that are at least five years of age. They take several months to grow and ripen, and then they are harvested and cured over a course of several weeks. This process concentrates the flavor compounds and the beans change from green to dark brown or black. They shrink in size and increase in aroma. Once they are cured, the vanilla beans can be used in a variety of ways. The entire bean is edible, though the pod is woody. Vanilla beans are high in alcohol soluble flavors, and, when soaked in alcohol, will release those flavors (making extract). Vanilla beans can also be dried and ground into powder. The seeds (caviar) can be used alone in recipes. Vanilla beans have natural sweetening properties and flavor enhancing properties that can be utilized in sweet, salty, or savory dishes for spectacular results.' },
        { term: 'Vanilla blood', definition: 'An affectionate term referring to the seeds (caviar) and all liquids that are found inside a highly hydrated vanilla bean. The substance will ooze out of the bean when the end is snipped off and the pod squeezed.' },
        { term: 'Vanilla Orchid', definition: 'The vine-like plant that grows vanilla beans. Native to Mexico, vanilla orchids must be domestically cultivated in most places around the world. Vanilla orchid flowers of bean-producing species typically are hand pollinated. Species include: Vanilla costaricensis, Vanilla cribbiana, Vanilla odorata, Vanilla planifolia, Vanilla pompona, Vanilla tahitensis, Vanilla tsy taitra.' },
        { term: 'Vanilla powder', definition: 'Powder made from grinding dehydrated vanilla pods or beans.' },
        { term: 'Vanilla sugar', definition: 'A blend of sugar and vanilla beans. The sugar acts as a desiccant, preserving the vanilla beans and absorbing the vanilla flavor compounds. The result is sugar that is rich in flavor and can be used to enhance any recipe.' },
        { term: 'Vanillin', definition: 'The primary, naturally occurring chemical compound that gives vanilla its signature flavor.' },
        { term: 'Vanillin crystals', definition: 'Crystals made of vanillin that form on vanilla beans with a very high vanillin content.' },
        { term: 'Vodka', definition: 'Alcohol composed primarily of water and ethanol made by distilling corn, potatoes, or rice. Vodka is the most popular alcohol for making vanilla extract due to its neutral flavor.' },
    ];

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Vanilla Glossary</h1>
            <div>
                {glossaryTerms.map(({ term, definition }) => (
                    <div key={term} className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">{term}</h2>
                        <p className="text-gray-700">{definition}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}