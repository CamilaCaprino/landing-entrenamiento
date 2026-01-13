"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getImagePrefix } from "@/utils/utils";

const images = [
  "/images/gallery/img1.png",
  "/images/gallery/img2.png",
  "/images/gallery/img3.png",
  "/images/gallery/img4.png",
];

const phone = "5491151762247";

const message = encodeURIComponent(
  "Hola 👋⚽\n" +
    "Estoy interesado/a en conocer más sobre los entrenamientos.\n\n" +
    "Me gustaría recibir información sobre:\n" +
    "• Clases de funcional\n" +
    "• GAP\n" +
    "• Preparación física deportiva\n" +
    "• Entrenamientos personalizados orientados al fútbol\n\n" +
    "Quedo atento/a, ¡gracias!"
);

const whatsappLink = `https://wa.me/${phone}?text=${message}`;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const GallerySection = () => {
  return (
    <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden py-24">
        {/* Fondo decorativo */}
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-PaleSkyBlu dark:bg-secondary rounded-full opacity-60 hidden xl:block" />

        <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
            <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
            >
            {/* Slider */}
            <motion.div variants={leftVariants}>
                <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                    <Image
                        src={`${getImagePrefix()}${src}`}
                        alt="Galería entrenamiento"
                        width={600}
                        height={400}
                        className="rounded-2xl w-full object-cover"
                    />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            {/* Texto */}
            <motion.div variants={rightVariants}>
                <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
                Entrenamiento en acción
                </h2>

                <p className="text-muted text-opacity-70 text-18 mb-8 max-w-md">
                Imágenes reales de sesiones, procesos y evolución.
                Cada entrenamiento forma parte de un camino planificado
                hacia un mejor rendimiento.
                </p>

                <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
                >
                Contactanos
                </a>
            </motion.div>
            </motion.div>
        </div>
        </section>

  );
};

export default GallerySection;
