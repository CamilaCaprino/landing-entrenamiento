"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const AboutMe = () => {
  return (
    <section className="md:py-32 py-20" id="about">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-primary sm:text-28 text-18 mb-3">
              Sobre mí
            </p>

            <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
              Entrenamiento con criterio, compromiso y propósito
            </h2>

            <p className="text-muted text-opacity-60 text-18 mb-6">
              Trabajo acompañando personas que buscan mejorar su rendimiento físico
              y su bienestar general a través de un entrenamiento consciente,
              planificado y adaptado a cada etapa.
            </p>

            <p className="text-muted text-opacity-60 text-18">
              Mi enfoque combina metodología, seguimiento y constancia,
              priorizando procesos sostenibles que generen resultados reales
              y duraderos.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={`${getImagePrefix()}/images/work/pretemporada2.png`}
                alt="Sobre mí"
                width={420}
                height={420}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
