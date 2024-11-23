const LanguageModal = ({
  onLanguageSelect,
}: {
  onLanguageSelect: (value: "EN" | "NP") => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 animate-fadeIn">
        <h2 className="text-center text-lg font-bold text-[var(--primary-text)] mb-4">
          Select Your Language
        </h2>
        <div className="flex flex-col gap-4">
          <button
            className="w-full py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-[var(--primary-dark)] transition-all"
            onClick={() => onLanguageSelect("NP")}
          >
            नेपाली (Nepali)
          </button>
          <button
            className="w-full py-2 bg-[var(--secondary-color)] text-white rounded-md hover:bg-[var(--secondary-dark)] transition-all"
            onClick={() => onLanguageSelect("EN")}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
