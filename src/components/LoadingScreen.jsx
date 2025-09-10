import { useProgress } from "@react-three/drei";

export function LoadingScreen() {
  const { progress, loaded, total } = useProgress();
  
  if (loaded === total) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0D]">
      <div className="text-center">
        <div className="mb-4">
          <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-300" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
        <p className="text-sm text-gray-400">Loading 3D Scene ({Math.round(progress)}%)</p>
      </div>
    </div>
  );
}
