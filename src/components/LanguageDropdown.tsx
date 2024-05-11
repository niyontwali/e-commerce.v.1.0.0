import { useState, useEffect, useRef, MouseEvent } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "lucide-react";

interface Language {
  label: string;
  locale: string;
}

const LanguageDropdown: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=3153600;SameSite=Lax`;
    router.refresh();
  };

  const languages: Language[] = [
    { label: "Estonian", locale: "et" },
    { label: "English", locale: "en" },
    { label: "French", locale: "fr" },
    { label: "German", locale: "de" },
  ];

  const handleClickOutside = (event: MouseEvent<HTMLElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutside as unknown as EventListener
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-between items-center rounded-md border border-gray/90 shadow-sm px-2 py-1 bg-white text-sm font-medium focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-1 focus:ring-gray/50 transition-all duration-300 text-gray/90  w-14 hover:bg-gray/10"
        onClick={() => setIsOpen(!isOpen)}>
        <GlobeIcon className="h-4 w-4 transition-transform duration-300 " />
        <span>{locale}</span>
      </button>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}>
        <div
          className={`py-1 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}>
          {languages.map((lang) => (
            <button
              key={lang.locale}
              className={`${
                locale === lang.locale ? " text-green" : "text-black"
              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray/10 focus:outline-none transition-colors duration-300`}
              onClick={() => handleLanguageChange(lang.locale)}>
              {lang.label}
              {locale === lang.locale && (
                <span className="transition-transform duration-300 transform">
                  &#10003;
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
