import {motion} from 'framer-motion'
export function Card(props) {
  return (
    <div className="">
      <motion.img whileHover={{scale:1.05}}
     
        className="rounded-xl cursor-pointer"
        src={props.thumbnail}
        alt="thumbnail"
      />
      <div className="grid grid-cols-1 my-3">
        <div className="text-gray-300">{props.title}</div>
      </div>
    </div>
  );
}
