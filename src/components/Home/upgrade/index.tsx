import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getImagePrefix } from "@/utils/utils";

const Upgrade = () => {
  return (
    <section className="md:py-40 py-20" id="entrenamiento">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
          <div>
            <p className="text-primary sm:text-28 text-18 mb-3">Entrenamiento</p>
            <h2 className="text-white sm:text-40 text-30  font-medium mb-5">
              Tu máximo nivel comienza aquí
            </h2>
            <p className="text-muted text-opacity-60 text-18 mb-7">
              Un programa integral diseñado para optimizar tu potencia, 
              técnica y rendimiento físico.
            </p>
            <div className="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-white group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="text-18 text-muted text-opacity-60">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden lg:ml-8 xl:ml-14">
              <video
                className="w-full h-full object-cover"
                src={`${getImagePrefix()}images/portfolio/Preentreno.webm`}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
