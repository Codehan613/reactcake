/*
 * @Description: Responsive Loading Component
 */
interface LoadingProps {
  tipText?: string;
  loadingImage?: any;
}
import { Image } from "@heroui/react";

export default function LoadingNumber(props: LoadingProps) {
  const { tipText, loadingImage } = props;
  return (
    <div className="fixed inset-0 z-[9999] bg-[#faf9f6] flex flex-col items-center justify-center p-6">
      {!loadingImage ? (
        <div className="flex flex-col items-center">
          {/* A more elegant, premium minimalist loader */}
          <div className="w-12 h-12 border-2 border-stone-200 border-t-amber-600 rounded-full animate-spin mb-4"></div>
          <div className="text-stone-400 font-serif italic text-sm tracking-widest animate-pulse">
            Boulangerie de Luxe
          </div>
        </div>
      ) : (
        <Image src={loadingImage} alt="loading" width="120" className="opacity-80" />
      )}
      {tipText && (
        <div className="mt-4 text-stone-500 font-light text-sm">{tipText}</div>
      )}
    </div>
  );
}
