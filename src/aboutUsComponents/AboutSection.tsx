import ImgHotel1 from '../assets/img/Entrada.webp'



const AboutSection: React.FC = () => {
    return(
  
      <>
    <section className="mt-20 mb-20">
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl">Sobre Nosotros</h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">En el Hotel Cristóforo Colombo nos enorgullece ofrecer una experiencia única. Nuestro compromiso con la excelencia se refleja en cada detalle de nuestro servicio y en la calidad de nuestras instalaciones. Con un enfoque sostenible y un equipo dedicado, trabajamos para crear momentos memorables que hagan que nuestros clientes deseen regresar una y otra vez.</p>
    </div>
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="mt-4 space-y-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">
              Visión</h4>
              <p className="mt-2 ">Llegar a ser un hotel 4 estrellas plus líderes en el sector por su crecimiento sostenible, atención y ser el hotel preferido por el viajero de negocios y la familia en cuanto a calidad de servicios.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-rocket">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
                  </path>
                  <path
                    d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
                  </path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg></div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Misión</h4>
              <p className="mt-2 ">Brindar a cada huésped y colaborador una notable experiencia a través de la calidez, honestidad, y la
              actitud proactiva de nuestro personal, el cual refleje el compromiso con la dirección, los huéspedes y los proveedores. Trabajamos para que los clientes sientan el deseo de volver.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg></div>
            </div>
            <div className="ml-4">
  <h4 className="text-lg font-medium leadi">Valores</h4>
  <p className="mt-2">En el Hotel Cristóforo Colombo nos guiamos con los siguientes valores:</p>
  <ul className="mt-2 ml-6 list-disc">
    <li><strong>Orientación a las personas:</strong> El principal activo de la compañía son las personas: nuestros clientes, huéspedes, colaboradores, accionistas y proveedores. Gracias al rendimiento de nuestros colaboradores podemos ofrecer a nuestros clientes y huéspedes un servicio personalizado y una experiencia satisfactoria.</li>
    <li><strong>Responsabilidad con el medioambiente:</strong> En el Hotel Cristóforo Colombo nos comprometemos a realizar todas las acciones necesarias para proteger nuestro medioambiente. Nos enfocamos en una cultura sostenible disminuyendo los impactos negativos que puedan afectarlo.</li>
    <li><strong>Calidad de servicio:</strong> Nuestros clientes y huéspedes son nuestra prioridad, nuestra razón de ser, es por ello que estamos pendientes de sus necesidades cuidándolos en todo momento.</li>
    <li><strong>Trabajo en equipo y calidez:</strong> Buscamos que el cliente y el huésped se sientan cómodos, es nuestro objetivo común. Trabajamos en conjunto hacia un mismo resultado.</li>
    <li><strong>Compromiso:</strong> Nos gusta lo que hacemos, somos responsables y tenemos sentido de pertenencia.</li>
    <li><strong>Respeto:</strong> Comprendemos al otro, sabemos valorar sus intereses y necesidades.</li>
  </ul>
</div>
</div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-[-23rem]">
        <img width="600" height="600" src={ImgHotel1} />
      </div>
    </div>
  </div>
</section>
    
      </>
    )
  };
  
  export default AboutSection;