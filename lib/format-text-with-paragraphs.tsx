export const formatTextWithParagraphs = (text: string) => {
    const formattedText = text.replace(/(<br \/>)+/g, '<br />').trim();
    return formattedText.split(/<br \/>+/).map((line, index) => (
        line.trim() ? (
            <p key={index} className="my-2">
                {line}
            </p>
        ) : <br key={index} />
    ));
};