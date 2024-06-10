const OurServices: React.FC = () => {

return(
<>

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h3
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
           ¿POR QUÉ ELEGIRNOS?
        </h3>
    </div>


    <div className="grid max-w-full gap-10 px-2 mx-auto mt-16 md:grid-cols-4">

    <div className="flex flex-col items-start gap-4 ">
        <span className="p-3 rounded-full bg-[#00acee] bg-opacity-50">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-wifi"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l.01 0" /><path d="M9.172 15.172a4 4 0 0 1 5.656 0" /><path d="M6.343 12.343a8 8 0 0 1 11.314 0" /><path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" /></svg>
        </span>
        <div>
            <h3 className="text-xl font-semibold"> Internet</h3>
            <p className="mt-1 text-gray-500"> Tenemos cobertura gratuita de WiFi de alta velocidad en todo el hotel</p>
        </div>
    </div>

    <div className="flex flex-col items-start gap-4 ">
        <span className="p-3 rounded-full bg-[#00acee] bg-opacity-50">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 5h2" /><path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" /><path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" /><path d="M12 18v2" /><path d="M10 11v.01" /><path d="M14 11v.01" /><path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" /><path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" /></svg>
        </span>
        <div>
            <h3 className="text-xl font-semibold"> Aceptamos Mascotas</h3>
            <p className="mt-1 text-gray-500"> Porque entendemos que toda la familia puede disfrutar de la estadía en nuestro hotel.</p>
        </div>
    </div>


    <div className="flex flex-col items-start gap-4 ">
        <span className="p-3 rounded-full bg-[#00acee] bg-opacity-50">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-barbell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M9 12h6" /><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" /></svg>
        </span>
        <div>
            <h3 className="text-xl font-semibold"> Gimnasio/Spa</h3>
            <p className="mt-1 text-gray-500"> Ubicado en el piso 16, es una muy buena oportunidad para mantener su estado físico, disfrutando un ambiente confortable y de panorámicas vistas de Palermo.</p>
        </div>
    </div>

    <div className="flex flex-col items-start gap-4 ">
        <span className="p-3 rounded-full bg-[#00acee] bg-opacity-50">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pool"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" /><path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" /><path d="M15 12v-7.5a1.5 1.5 0 0 1 3 0" /><path d="M9 12v-7.5a1.5 1.5 0 0 0 -3 0" /><path d="M15 5l-6 0" /><path d="M9 10l6 0" /></svg>
        </span>
        <div>
            <h3 className="text-xl font-semibold"> Piscina</h3>
            <p className="mt-1 text-gray-500">Nuestra piscina climatizada ofrece una opción de distensión para disfrutar el aire libre dentro de las instalaciones del hotel. Disponible de diciembre a Semana Santa</p>
        </div>
    </div>
</div>

</div>


</>


)



}

export default OurServices
