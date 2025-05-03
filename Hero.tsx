// components/Hero.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('/coffee-hero.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenido a Tizhurt Coffee
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Desde las montañas de Colombia hasta tu taza. Café de origen, cultivado con pasión.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Button className="text-lg px-6 py-3 rounded-2xl shadow-xl" onClick={() => {
            const target = document.getElementById('products');
            target?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explorar productos
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
