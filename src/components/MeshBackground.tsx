export function MeshBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* Base gradient - subtle institutional blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-black to-black" />
      
      {/* Top-right subtle mesh */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, hsl(220, 30%, 15%) 0%, transparent 70%)'
        }}
      />
      
      {/* Bottom-left subtle mesh */}
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, hsl(210, 25%, 12%) 0%, transparent 70%)'
        }}
      />
      
      {/* Center ambient glow - very subtle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
        style={{
          background: 'radial-gradient(circle at center, hsl(191, 100%, 44%) 0%, transparent 50%)'
        }}
      />
    </div>
  );
}
