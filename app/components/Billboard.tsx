import type { FC } from "react";
import type { Billboard as B } from "~/types/Billboard";

interface BillboardProps {
  data: B;
}

const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl border-3 border-red-50 relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center text-center gap-x-8">
          <div className="font-bold text-3xl sm:text-5xl lg:tex-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
