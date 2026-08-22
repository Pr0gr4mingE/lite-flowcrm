export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500 shrink-0">
      <p>© {new Date().getFullYear()} CRM App. Todos os direitos reservados.</p>
    </footer>
  );
}