const Location: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-gray-900">Ubicación</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Hotel Cristoforo Colombo se encuentra ubicado en el corazón de Buenos Aires a espaldas de la “La Rural” y Embajada de los EUA, con vistas al Zoo y los Bosques de Palermo, ofreciendo una mezcla ideal de negocios y placer con atención personalizada.
                    </p>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="w-full h-74 md:h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21468.284541601286!2d-58.41755900222902!3d-34.58414953834857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c8a08ada1%3A0x169fbe55d529d0d2!2sCrist%C3%B3foro%20Colombo!5e0!3m2!1ses-419!2sus!4v1718038014723!5m2!1ses-419!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto overflow-hidden rounded-lg">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                                    <p className="mt-1 text-gray-600">Fray Justo S. M. de Oro 2747</p>
                                </div>
                                <div className="hidden px-6 py-4 border-t border-gray-200 sm:block">
                                    <h3 className="text-lg font-medium text-gray-900">Accesos</h3>
                                    <p className="mt-1 text-gray-600">A 4 cuadras del subte que une Palermo con el resto de la Ciudad.</p>
                                    <p className="mt-1 text-gray-600">A 5KM del Aeroparque Jorge Newbery.</p>
                                    <p className="mt-1 text-gray-600">A 6KM de acceso a Panamericana.</p>
                                    <p className="mt-1 text-gray-600">A 40KM del Aeropuerto Internacional Ministro Pistarini (Ezeiza).</p>
                                </div>
                                <div className="hidden px-6 py-4 border-t border-gray-200 sm:block">
                                    <h3 className="text-lg font-medium text-gray-900">Puntos de Interés (a pie):</h3>
                                    <p className="mt-1 text-gray-600">Detrás del Centro de Exposiciones La Rural.</p>
                                    <p className="mt-1 text-gray-600">3 minutos del Consulado de EEUU.</p>
                                    <p className="mt-1 text-gray-600">5 minutos de los Bosques de Palermo.</p>
                                    <p className="mt-1 text-gray-600">8 minutos del Zoológico.</p>
                                    <p className="mt-1 text-gray-600">8 minutos de Plaza Italia.</p>
                                    <p className="mt-1 text-gray-600">8 minutos del Jardín Botánico.</p>
                                    <p className="mt-1 text-gray-600">15 minutos de zona de outlet.</p>
                                    <p className="mt-1 text-gray-600">15 minutos de Plaza Cortázar (Serrano).</p>
                                    <p className="mt-1 text-gray-600">15 minutos del Centro Comercial Alto Palermo.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;

