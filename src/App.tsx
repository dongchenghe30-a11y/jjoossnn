import { Header } from '@/components/Header';
import { JsonFormatter } from '@/components/JsonFormatter';
import { SeoArticle } from '@/components/SeoArticle';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header 
        t={t} 
        onToggleLanguage={toggleLanguage} 
        currentLang={lang}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 md:py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {t.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.subtitle}
              </p>
            </div>
            
            <JsonFormatter t={t} />
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <SeoArticle t={t} />
          </div>
        </section>
      </main>

      <Footer t={t} />
      <Toaster />
    </div>
  );
}

export default App;
