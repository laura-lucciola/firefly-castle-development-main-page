interface LocaleFlag {
  nativeName: string;
  flag: string;
}

export  const LocaleFlags: Record<string, LocaleFlag> = {
  'en-GB': { nativeName: 'English', flag: '🇬🇧' },
  'pt-BR': { nativeName: 'Português', flag: '🇧🇷' }
};
export default LocaleFlags;