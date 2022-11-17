import type { Track } from "@/models/track";
import dropIt from "@/assets/music/techno/drop-it-124014.mp3";
import brainFluid from "@/assets/music/techno/cinim-brainfluid-122844.mp3";
import technoCoverImage from "@/assets/img/techno-1.jpg";

export const technoTracks: Track[] = [
  {
    audioSrc: dropIt,
    imgSrc: technoCoverImage,
    name: "Drop it",
    artist: "Coma-Media",
  },
  {
    audioSrc: brainFluid,
    imgSrc: technoCoverImage,
    name: "Brainfluid",
    artist: "CINIM",
  },
];
