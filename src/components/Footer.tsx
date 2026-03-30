import { Shield, Heart, FileText, Lock } from 'lucide-react';

interface FooterProps {
  t: { footer: string; lang?: string };
}

export function Footer({ t }: FooterProps) {
  const isZh = t.lang === 'zh';
  
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="/privacy.html" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Lock className="h-4 w-4" />
              {isZh ? '隐私协议' : 'Privacy Policy'}
            </a>
            <a 
              href="/terms.html" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              {isZh ? '服务条款' : 'Terms of Service'}
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border" />
          
          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>{t.footer}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>for developers</span>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} JSON Formatter. {isZh ? '保留所有权利。' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
