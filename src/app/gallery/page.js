import path from 'path';
import { readdir } from 'fs/promises';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import GalleryGrid from '@/components/sections/GalleryGrid';

export const metadata = {
  title: 'Gallery',
  description: 'Explore visual highlights from DeltaClicks projects, shoots, events, and campaigns.',
};

async function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery');

  try {
    const files = await readdir(galleryPath);

    return files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <Hero
        title="Our Gallery"
        subtitle="A quick look at the moments, visuals, and stories we have captured."
        primaryCTA={{ href: '/contact', text: 'Start Your Project' }}
        secondaryCTA={{ href: '/services', text: 'View Services' }}
        background="gradient"
        image="/images/main-page/animation illustration GIF by Tony Babel.gif"
        align="left"
      />

      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <SectionHeading
                label="Showcase"
                title="Project Moments & Creative Work"
                subtitle="Fresh visuals directly loaded from our gallery collection."
                align="center"
              />
            </FadeIn>

            {images.length === 0 ? (
              <div className="text-center py-16 text-foreground-muted text-lg">
                No gallery images found in /public/images/gallery.
              </div>
            ) : (
              <GalleryGrid images={images} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
