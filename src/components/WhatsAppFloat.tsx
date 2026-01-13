'use client';

import Link from 'next/link';

export default function WhatsAppFloat() {
  const phone = '5491151762247';

  const message = encodeURIComponent(
    'Hola 👋⚽\n' +
    'Estoy interesado/a en conocer más sobre los entrenamientos.\n\n' +
    'Me gustaría recibir información sobre:\n' +
    '• Clases de funcional\n' +
    '• GAP\n' +
    '• Preparación física deportiva\n' +
    '• Entrenamientos personalizados orientados al fútbol\n\n' +
    'Quedo atento/a, ¡gracias!'
  );

  return (
    <Link
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-600 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-700"
    >
      {/* Icono WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-8 w-8"
      >
        <path d="M19.11 17.44c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14-.19.29-.76.95-.93 1.14-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.51-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.27.29-1.02.99-1.02 2.41 0 1.42 1.05 2.79 1.2 2.98.14.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.11-.27-.17-.56-.31z" />
        <path d="M16 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.61 4.63 1.78 6.64l-1.89 6.89 7.06-1.85c1.95 1.06 4.15 1.62 6.38 1.62 7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67zm0 24.01c-2.05 0-4.05-.55-5.8-1.59l-.41-.24-4.19 1.1 1.12-4.08-.27-.42c-1.07-1.73-1.63-3.72-1.63-5.76 0-6.06 4.93-10.99 10.99-10.99S26.99 9.63 26.99 15.69 22.06 26.68 16 26.68z" />
      </svg>
    </Link>
  );
}
