import HomeCarousel from "@/components/shared/home/home-carousel";
import { Button } from "@/components/ui/button";
import data from "@/lib/data";


export default function Home() {
  return (
    <>
      <HomeCarousel items={data.carousels} />
    </>
  );
}
