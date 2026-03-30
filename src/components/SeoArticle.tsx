import type { TranslationWithLang } from '@/i18n';

interface SeoArticleProps {
  t: TranslationWithLang;
}

export function SeoArticle({ t }: SeoArticleProps) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t.aboutTitle}</h2>
        <p className="text-muted-foreground leading-relaxed">{t.aboutContent}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t.features}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">1</span>
            <span className="text-muted-foreground">{t.feature1}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">2</span>
            <span className="text-muted-foreground">{t.feature2}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">3</span>
            <span className="text-muted-foreground">{t.feature3}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">4</span>
            <span className="text-muted-foreground">{t.feature4}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">5</span>
            <span className="text-muted-foreground">{t.feature5}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">6</span>
            <span className="text-muted-foreground">{t.feature6}</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t.howToUse}</h2>
        <p className="text-muted-foreground leading-relaxed">{t.howToUseContent}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{t.seoArticle}</h2>
        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-muted-foreground leading-relaxed mb-4">{t.seoContent}</p>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">
            {t.lang === 'zh' ? 'JSON 的主要特点' : 'Key Features of JSON'}
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? '轻量级：JSON 格式简洁，易于阅读和编写' : 'Lightweight: JSON format is concise and easy to read and write'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? '语言无关：JSON 是独立于编程语言的文本格式' : 'Language Independent: JSON is a text format independent of programming languages'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? '自描述：JSON 数据结构易于理解' : 'Self-describing: JSON data structures are easy to understand'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? '广泛使用：几乎所有现代编程语言都支持 JSON' : 'Widely Used: Almost all modern programming languages support JSON'}</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            {t.lang === 'zh' ? 'JSON 的常见用途' : 'Common Uses of JSON'}
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? 'Web API 数据交换' : 'Web API data exchange'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? '配置文件存储' : 'Configuration file storage'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? 'NoSQL 数据库文档存储' : 'NoSQL database document storage'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{t.lang === 'zh' ? '日志记录和数据序列化' : 'Logging and data serialization'}</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            {t.lang === 'zh' ? '为什么需要 JSON 格式化工具？' : 'Why Do You Need a JSON Formatter?'}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t.lang === 'zh' 
              ? '在处理 JSON 数据时，原始格式往往难以阅读，特别是当数据结构复杂或嵌套层级较深时。JSON 格式化工具可以将压缩的 JSON 数据转换为带有适当缩进和换行的易读格式，帮助开发者快速理解数据结构、定位错误并调试问题。此外，格式化工具还能验证 JSON 语法的正确性，确保数据可以被正确解析。'
              : 'When working with JSON data, the raw format is often difficult to read, especially when the data structure is complex or deeply nested. A JSON formatter can transform compressed JSON data into a readable format with proper indentation and line breaks, helping developers quickly understand data structures, locate errors, and debug issues. Additionally, formatter tools can validate JSON syntax correctness to ensure data can be properly parsed.'
            }
          </p>
        </div>
      </section>
    </article>
  );
}
