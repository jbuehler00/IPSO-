const serifFont = { fontFamily: "'Playfair Display', serif" };

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 border-t border-border" style={serifFont}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
          {/* todo: remove mock functionality - replace with actual company name */}
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
