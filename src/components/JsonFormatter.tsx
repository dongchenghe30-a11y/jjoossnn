import { useState, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Check, 
  Copy, 
  Download, 
  Trash2, 
  Upload, 
  AlertCircle,
  CheckCircle2,
  FileJson,
  AlignLeft,
  Minimize2
} from 'lucide-react';
import type { TranslationWithLang } from '@/i18n';

interface JsonFormatterProps {
  t: TranslationWithLang;
}

type IndentType = '2' | '4' | 'tab';

export function JsonFormatter({ t }: JsonFormatterProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [indent, setIndent] = useState<IndentType>('2');
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getIndentString = useCallback(() => {
    switch (indent) {
      case '2': return '  ';
      case '4': return '    ';
      case 'tab': return '\t';
      default: return '  ';
    }
  }, [indent]);

  const formatJson = useCallback(() => {
    if (!input.trim()) {
      setOutput('');
      setError(null);
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, getIndentString());
      setOutput(formatted);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  }, [input, getIndentString]);

  const minifyJson = useCallback(() => {
    if (!input.trim()) {
      setOutput('');
      setError(null);
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  }, [input]);

  const validateJson = useCallback(() => {
    if (!input.trim()) {
      setError(null);
      return;
    }

    try {
      JSON.parse(input);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  }, [input]);

  const clearAll = useCallback(() => {
    setInput('');
    setOutput('');
    setError(null);
  }, []);

  const copyToClipboard = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [output]);

  const downloadJson = useCallback(() => {
    if (!output) return;
    const blob = new Blob([output], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [output]);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setInput(content);
      try {
        JSON.parse(content);
        setError(null);
      } catch (e) {
        setError((e as Error).message);
      }
    };
    reader.readAsText(file);
  }, []);

  const renderLineNumbers = (text: string) => {
    if (!showLineNumbers) return null;
    const lines = text.split('\n').length;
    return (
      <div className="select-none text-right pr-3 text-muted-foreground text-sm font-mono leading-6">
        {Array.from({ length: Math.max(lines, 1) }, (_, i) => i + 1).map(num => (
          <div key={num} className="h-6">{num}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-2">
          <Button 
            onClick={formatJson} 
            size="sm" 
            className="gap-1.5"
            disabled={!input.trim()}
          >
            <AlignLeft className="h-4 w-4" />
            {t.format}
          </Button>
          <Button 
            onClick={minifyJson} 
            variant="outline" 
            size="sm" 
            className="gap-1.5"
            disabled={!input.trim()}
          >
            <Minimize2 className="h-4 w-4" />
            {t.minify}
          </Button>
          <Button 
            onClick={validateJson} 
            variant="outline" 
            size="sm"
            disabled={!input.trim()}
          >
            <CheckCircle2 className="h-4 w-4 mr-1.5" />
            {t.validate}
          </Button>
        </div>

        <div className="h-6 w-px bg-border mx-2" />

        <div className="flex items-center gap-2">
          <Button 
            onClick={() => fileInputRef.current?.click()} 
            variant="outline" 
            size="sm"
            className="gap-1.5"
          >
            <Upload className="h-4 w-4" />
            {t.upload}
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button 
            onClick={clearAll} 
            variant="outline" 
            size="sm"
            className="gap-1.5"
            disabled={!input && !output}
          >
            <Trash2 className="h-4 w-4" />
            {t.clear}
          </Button>
        </div>

        <div className="h-6 w-px bg-border mx-2" />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{t.indent}:</span>
            <select
              value={indent}
              onChange={(e) => setIndent(e.target.value as IndentType)}
              className="h-8 px-2 text-sm border rounded-md bg-background"
            >
              <option value="2">{t.space2}</option>
              <option value="4">{t.space4}</option>
              <option value="tab">{t.tab}</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="line-numbers"
              checked={showLineNumbers}
              onCheckedChange={setShowLineNumbers}
            />
            <Label htmlFor="line-numbers" className="text-sm cursor-pointer">
              {t.lineNumbers}
            </Label>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-lg">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-medium">{t.invalidJson}</p>
            <p className="text-sm opacity-90 truncate">{error}</p>
          </div>
        </div>
      )}

      {/* Input/Output Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium flex items-center gap-2">
              <FileJson className="h-4 w-4 text-primary" />
              Input
            </Label>
            <span className="text-xs text-muted-foreground">
              {input.length.toLocaleString()} chars
            </span>
          </div>
          <div className="relative border rounded-lg bg-background overflow-hidden">
            {showLineNumbers && (
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-muted/30 border-r pt-3">
                {renderLineNumbers(input)}
              </div>
            )}
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.inputPlaceholder}
              className={`min-h-[400px] font-mono text-sm resize-none border-0 focus-visible:ring-0 ${
                showLineNumbers ? 'pl-14' : 'pl-3'
              }`}
              spellCheck={false}
            />
          </div>
        </div>

        {/* Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Output
            </Label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {output.length.toLocaleString()} chars
              </span>
              {output && (
                <>
                  <Button 
                    onClick={copyToClipboard} 
                    variant="ghost" 
                    size="sm"
                    className="h-7 px-2"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <Button 
                    onClick={downloadJson} 
                    variant="ghost" 
                    size="sm"
                    className="h-7 px-2"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="relative border rounded-lg bg-muted/20 overflow-hidden">
            {showLineNumbers && output && (
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-muted/30 border-r pt-3">
                {renderLineNumbers(output)}
              </div>
            )}
            <Textarea
              value={output}
              readOnly
              placeholder={t.outputPlaceholder}
              className={`min-h-[400px] font-mono text-sm resize-none border-0 focus-visible:ring-0 bg-transparent ${
                showLineNumbers && output ? 'pl-14' : 'pl-3'
              }`}
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
