import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="w-6 h-6 bg-cyan-400 rounded-full blur-xl opacity-70" />
    </div>
  );
};

export default CustomCursor;
