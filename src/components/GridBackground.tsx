export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
