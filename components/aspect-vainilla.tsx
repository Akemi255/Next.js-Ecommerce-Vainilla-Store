export function AspectRatioVainilla() {
    return (
        <section className="relative h-[400px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/test3.jpg')",
                }}
            />

            {/* Gradiente blanco que cubre el 40% de la imagen */}
            <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white to-transparent" />

            <div className="relative h-full w-1/2 flex flex-col justify-start items-start px-8 py-4 space-y-4 mt-5">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                    {"Lo mejor de nuestra tierra, directo a tu vida"}
                </h1>
                <div className="w-16 h-[3px] bg-amber-600" />
                <p className="text-sm md:text-base text-black max-w-lg">
                    {"Compartimos lo mejor de la naturaleza y cultura ecuatoriana con el mundo, ofreciendo productos naturales de la más alta calidad, elaborados con respeto por la tierra y las tradiciones ancestrales."}
                </p>
            </div>
        </section>
    );
}
