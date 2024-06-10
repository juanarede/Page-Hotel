
const Location: React.FC = () => {
 

  return (
    <section className="bg-white">
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
            <h2 className="text-3xl font-extrabold text-gray-900">Ubicación</h2>
            <p className="mt-4 text-lg text-gray-500">Hotel Cristoforo Colombo se encuentra ubicado en el corazón de Buenos Aires a espaldas de la “La Rural” y Embajada de los EUA, con vistas al Zoo y los Bosques de Palermo, ofreciendo una mezcla ideal de negocios y placer con atención personalizada.</p>
        </div>
        <div className="mt-16 lg:mt-20">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21468.284541601286!2d-58.41755900222902!3d-34.58414953834857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c8a08ada1%3A0x169fbe55d529d0d2!2sCrist%C3%B3foro%20Colombo!5e0!3m2!1ses-419!2sus!4v1718038014723!5m2!1ses-419!2sus" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>

                      <div>
                    <div className="max-w-full mx-auto overflow-hidden rounded-lg">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                            <p className="mt-1 text-gray-600">Fray Justo S. M. de Oro 2747</p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200">
                            {/* <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                            <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p className="mt-1 text-gray-600">Sunday: Closed</p> */}
                        </div>
                        {/* <div className="px-6 py-4 border-t border-gray-200"> */}
                            {/* <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                            <p className="mt-1 text-gray-600">Email: info@example.com</p>
                            <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Location;
