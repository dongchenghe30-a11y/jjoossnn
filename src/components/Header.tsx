import { Button } from '@/components/ui/button';
import { Globe, FileJson } from 'lucide-react';
import type { TranslationWithLang } from '@/i18n';

interface HeaderProps {
  t: TranslationWithLang;
  onToggleLanguage: () => void;
  currentLang: string;
}

export function Header({ t, onToggleLanguage, currentLang }: HeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <FileJson className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">{t.title}</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">{t.subtitle}</p>
          </div>
        </div>

        {/* Language Switcher */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleLanguage}
          className="gap-2"
        >
          <Globe className="h-4 w-4" />
          <span>{t.switchLang}</span>
        </Button>
      </div>
    </header>
  );
}
