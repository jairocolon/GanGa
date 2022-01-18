const { Subcategory } = require("../db");

const infoSubCategory = [
  { name: "Computacion" },
  { name: "Celulares y telefonos" },
  { name: "Camaras y accesorios" },
  { name: "Electronica, audio y video" },
  { name: "Televisores" },
  { name: "Consolas y videojuegos" },
  { name: "Otros" },
  { name: "Adornos y Decoracion" },
  { name: "Baños" },
  { name: "Bazar y Cocina" },
  { name: "Camas, Colchones y Accesorios" },
  { name: "Cuidado del Hogar y Lavanderia" },
  { name: "Iluminación para el Hogar" },
  { name: "Jardin y Aire Libre" },
  { name: "Muebles para el Hogar" },
  { name: "Organización para el Hogar" },
  { name: "Seguridad para el Hogar" },
  { name: "Textiles de Hogar y Decoración" },
  { name: "Artefactos de cuidado personal" },
  { name: "Climatizacion" },
  { name: "Cocción" },
  { name: "Dispensadores y purificadores" },
  { name: "Pequeños electrodomésticos" },
  { name: "Refrigeracion" },
  { name: "Lavado" },
  { name: "Accesorios para Herramientas" },
  { name: "Cajas y Organizadores" },
  { name: "Herramientas Electricas" },
  { name: "Herramientas Industriales" },
  { name: "Herramientas Manuales" },
  { name: "Herramientas Neumaticas" },
  { name: "Herramientas para Jardin" },
  { name: "Tester y Equipos de Medición" },
  { name: "Aberturas" },
  { name: "Accesorios de Construccion" },
  { name: "Baños y Sanitarios" },
  { name: "Electricidad" },
  { name: "Maquinarias para Construccion" },
  { name: "Materiales de Obra" },
  { name: "Mobiliario para Cocinas" },
  { name: "Pintureria" },
  { name: "Pisos y Revestimientos" },
  { name: "Plomeria" },
  { name: "Juegos de salon" },
  { name: "Patin y Skateboard" },
  { name: "Suplementos y shakers" },
  { name: "Surf y bodyboard" },
  { name: "Esgrima" },
  { name: "Bádminton" },
  { name: "Kitesurf" },
  { name: "Básquet" },
  { name: "Esqui y snowboard" },
  { name: "Monopatines y scooters" },
  { name: "Pilates y yoga" },
  { name: "Buceo" },
  { name: "Fitness y musculación" },
  { name: "Pulsómetros y cronómetros" },
  { name: "Tenis, padel y squash" },
  { name: "Fútbol" },
  { name: "Montañismo y trekking" },
  { name: "Ropa deportiva" },
  { name: "Tiro deportivo" },
  { name: "Camping, caza y pesca" },
  { name: "Futbol americano" },
  { name: "Natación" },
  { name: "Voley" },
  { name: "Canoas, kayaks e inflables" },
  { name: "Golf" },
  { name: "Paintball" },
  { name: "Wakeboard y esqui acuatico" },
  { name: "Rugby" },
  { name: "Ciclismo" },
  { name: "Handball" },
  { name: "Hockey" },
  { name: "Parapente" },
  { name: "Slackluine" },
  { name: "Windsurf" },
  { name: "Softball y beisbol" },
  { name: "Acc. para Motos y Cuatriciclos" },
  { name: "Acc. de Auto y Camioneta" },
  { name: "Accesorios para Camiones" },
  { name: "Audio para Vehiculos" },
  { name: "GNC" },
  { name: "Herramientas" },
  { name: "Limpieza de Vehiculos" },
  { name: "Llantas" },
  { name: "Navegadores GPS" },
  { name: "Neumaticos" },
  { name: "Performance" },
  { name: "Repuestos Autos y Camionetas" },
  { name: "Repuestos de Linea Pesada" },
  { name: "Repuestos Motos y Cuatriciclos" },
  { name: "Seguridad Vehicular" },
  { name: "Tuning" },
  { name: "Remeras" },
  { name: "Camisas" },
  { name: "Pantalones" },
  { name: "Bufandas" },
  { name: "Zapatillas" },
  { name: "Zapatos" },
  { name: "Ojotas" },
  { name: "Borcegos" },
  { name: "Buzos" },
  { name: "Camperas" },
  { name: "Armas y Lanzadores de juguete" },
  { name: "Hobbies" },
  { name: "Juegos de plaza y aire" },
  { name: "Juguetes de construccion" },
  { name: "Patines y patinetas" },
  { name: "Peloteros y castillos" },
  { name: "Juguetes de oficios" },
  { name: "Instrumentos musicales" },
  { name: "Arte y manualidades" },
  { name: "Casas y carpas para niños" },
  { name: "Juegos de agua y Playa" },
  { name: "Juegos de salon" },
  { name: "Peluches" },
  { name: "Titeres y marionetas" },
  { name: "Juguetes para bebés" },
  { name: "Vehiculos de juguete" },
  { name: "Electrónicos para niños" },
  { name: "Juegos de mesa y cartas" },
  { name: "Electrónicos para niños" },
  { name: "Juguetes antiestrés e ingenio" },
  { name: "Vehiculos montables para niños" },
  { name: "Mesas y sillas para niños" },
  { name: "Figuritas, álbumes y cromos" },
  { name: "Juguetes de bromas" },
  { name: "Muñecos y Muñecas" },
  { name: "Andadores y vehiculos de bebés" },
  { name: "Articulos de bebés para baño" },
  { name: "Artículos de maternidad" },
  { name: "Chupetes y mordillos" },
  { name: "Comida para bebés" },
  { name: "Corralitos" },
  { name: "Cuarto del bebé" },
  { name: "Higiene y cuidado del bebé" },
  { name: "Juegos y juguetes para bebés" },
  { name: "Lactancia y alimentación" },
  { name: "Paseo del bebé" },
  { name: "Ropa y calzado para bebés" },
  { name: "Salud del bebé" },
  { name: "Seguridad de bebés" },
  { name: "Artefactos para el Cabellos" },
  { name: "Articulos de Peluqueria" },
  { name: "Barberia" },
  { name: "Cuidado de la Piel" },
  { name: "Cuidado del Cabello" },
  { name: "Depilacion" },
  { name: "Farmacia" },
  { name: "Higiene Personal" },
  { name: "Manicuria y Pedicuria" },
  { name: "Maquillaje" },
  { name: "Perfumes y Fragancias" },
  { name: "Tratamientos de Belleza" },
  { name: "Cuidado de la salud" },
  { name: "Equipamiento médico" },
  { name: "Masajes" },
  { name: "Movilidad" },
  { name: "Ortopedia" },
  { name: "Suplementos alimenticios" },
  { name: "Terapias alternativas" },
  { name: "Arquitectura y diseño" },
  { name: "Embalaje y logística" },
  { name: "Equipamiento médico" },
  { name: "Equipamiento para comercios" },
  { name: "Equipamiento para oficinas" },
  { name: "Gastronomía y hotelería" },
  { name: "Gráfica e impresión" },
  { name: "Herramientas industriales" },
  { name: "Publicidad y promoción" },
  { name: "Seguridad laboral" },
  { name: "Textil y calzado" },
  { name: "Uniformes y ropa de trabajo" },
  { name: "Animales" },
  { name: "Generadores de Energia" },
  { name: "Infraestructura Rural" },
  { name: "Insumos Agricolas" },
  { name: "Insumos Ganaderos" },
  { name: "Maquinas y Herramientas" },
  { name: "Repuestos Maquinaria Agricola" },
  { name: "Asesoramiento Contable y Legal" },
  { name: "Belleza y Cuidado Perfumes" },
  { name: "Comunicacion y diseño" },
  { name: "Cursos Y Clases" },
  { name: "Fiestas y Eventos" },
  { name: "Fotografía, Musica y Cine" },
  { name: "Hogar y Construccion" },
  { name: "Imprenta" },
  { name: "Mantenimiento de Vehiculos" },
  { name: "Medicina y Salud" },
  { name: "Ropa y Moda" },
  { name: "Servicios para Mascotas" },
  { name: "Servicios para Oficinas" },
  { name: "Tecnologia" },
  { name: "Transporte" },
  { name: "Viaje y Turismo" },
  { name: "Aseguramiento contable y legal" },
  { name: "Belleza y cuidado personal" },
  { name: "Comunicacion y diseño" },
  { name: "Cursos y clases" },
  { name: "Delivery" },
  { name: "Fiestas y eventos" },
  { name: "Fotografía, música y cine" },
  { name: "Hogar y construcción" },
  { name: "Imprenta" },
  { name: "Mantenimiento de vehículos" },
  { name: "Medicina y salud" },
  { name: "Ropa y moda" },
  { name: "Servicios para mascotas" },
  { name: "Servicios para oficinas" },
  { name: "Tecnología" },
  { name: "Transporte" },
  { name: "Viajes y turismo" },
];

async function preLoadSubCategory() {
  try {
    await Subcategory.bulkCreate(infoSubCategory);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  preLoadSubCategory,
};