export function AspectRatioVainilla() {
    return (
        <section className="relative h-[400px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/test3.jpg')",
                }}
            />

            <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white to-transparent" />

            <div className="relative h-full sm:w-1/2 w-full flex flex-col justify-start items-start px-8 py-4 space-y-4 mt-5">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                    {"Lo mejor de nuestra tierra, directo a tu vida"}
                </h1>
                <div className="w-16 h-[3px] bg-amber-600" />
                <p className="text-sm md:text-base text-black max-w-lg  sm:flex">
                    {"Compartimos lo mejor de la naturaleza y cultura ecuatoriana con el mundo, ofreciendo productos naturales de la más alta calidad, elaborados con respeto por la tierra y las tradiciones ancestrales."}
                </p>
            </div>
        </section>
    );
}
