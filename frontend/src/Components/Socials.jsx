import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import {animate, motion} from 'framer-motion';

const iconVariants = (duration) => ({
    initial : {y:-10},
    animate : {
        y:[-10,10],
        transition:{
            duration:duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",
        },
    },
});
export function Socials(){
    return <div>
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="mt-20 mb-10 text-center text-4xl">Socials</h1>
            
            <div className="flex flex-wrap items-center justify-center gap-5">
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                 <a href="https://www.instagram.com/ajsolutions_svks?igsh=eGQwdGZzZGR4YWt0" target="blank">
                 
                    <RiInstagramLine className="text-6xl text-pink-600"></RiInstagramLine></a>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial = "initial"
                animate = "animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4"><a href="https://www.linkedin.com/in/aj-solutions-0150ab285/" target="blank">
                    <RiLinkedinBoxLine className="text-6xl text-cyan-600"></RiLinkedinBoxLine></a>
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                initial = "initial"
                animate = "animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFacebookCircleFill className="text-6xl text-blue-600"></RiFacebookCircleFill>
                </motion.div>
                <motion.div
                variants={iconVariants(1.5)}
                initial = "initial"
                animate = "animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTwitterXFill className="text-6xl"></RiTwitterXFill>
                </motion.div>
            </div>
        </div>
    </div>
}