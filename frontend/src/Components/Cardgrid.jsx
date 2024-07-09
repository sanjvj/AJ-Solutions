import { Card } from "./Card";
import { motion } from "framer-motion";
const PHOTOS = [
  {
    thumbnail: "thumbnail1.png",
    title: "Web Designing",
  },
  {
    thumbnail: "thumbnail2.png",
    title: "UI Design",
  },
  {
    thumbnail: "thumbnail3.png",
    title: "Branding Design",
  },
  {
    thumbnail: "thumbnail4.png",
    title: "E Commerce",
  },
  {
    thumbnail: "thumbnail5.png",
    title: "Mobile Application",
  },
  {
    thumbnail: "thumbnail6.png",
    title: "Web Application",
  },
  {
    thumbnail: "thumbnail7.png",
    title: "Digital Marketing",
  },
  {
    thumbnail: "thumbnail8.png",
    title: "Cybersecurity",
  },
];

export const Cardgrid = () => {
  return (
    <motion.div
      
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
    >
      {PHOTOS.map((photo) => (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Card thumbnail={photo.thumbnail} title={photo.title}></Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
