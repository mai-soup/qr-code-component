const linkClasses = "underline hover:text-black transition-all";

const AttributionContainer = () => {
  return (
    <div className="flex justify-center items-center text-2xl text-dark-blue mb-6">
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className={linkClasses}
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://mai-soup.github.io"
          target="_blank"
          className={linkClasses}
        >
          Maijs Garais
        </a>
        .
      </p>
    </div>
  );
};

export default AttributionContainer;
