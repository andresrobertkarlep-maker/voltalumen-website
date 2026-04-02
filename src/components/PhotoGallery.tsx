import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const photos = [
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4458_2-800x5211.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4449_2-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4449-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4446_2-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4446-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4444-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4443-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4442_2-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4442-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4439_2-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4439-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4434_3-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4434_2-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4433-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4429-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4426-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4422-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4414-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4413-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4407-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4404-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4400-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4394-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4387-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4386-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4380-800x5331.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4349_tume-525x8001.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4349_2-525x8001.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4339_2-523x8001.jpg",
  "https://voltalumen.com/wp-content/uploads/2011/09/Voltalumen__MG_4310_2-800x5331.jpg",
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="fotod" className="py-24 border-b border-border">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Fotod toodetest</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setSelectedPhoto(photo)}
              className="aspect-square overflow-hidden rounded border border-border hover:border-primary/60 transition-colors"
            >
              <img
                src={photo}
                alt={`Toode ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl p-2">
          <DialogTitle className="sr-only">Toote foto</DialogTitle>
          <DialogDescription className="sr-only">Toote foto suurendatud vaade</DialogDescription>
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Toote foto"
              className="w-full h-auto rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
