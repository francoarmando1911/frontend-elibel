import BannerDiscount from "@/components/banner-discount";
import CarrouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarrouselTextBanner/>
      <FeaturedProducts/>
      <BannerDiscount/>
      <ChooseCategory/>
    </main>
  );
}
