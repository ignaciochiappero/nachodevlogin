

//ICONOS
import { SiPrisma, SiTypescript, SiTailwindcss, SiRadixui,   } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";

function Footer() {
  return (

    <>

      {/* CAJA DE INFO */}
      <footer className="text-gray-400 text-center mb-4">
        <div className="flex-col">
          <div>
            <h1>Desarrollado por Nacho <span className="text-orange-500">Dev</span></h1>
          </div>
          
          <div className="flex justify-center gap-3 m-2">
            <div>
              <SiPrisma className="text-blue-800" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <RiNextjsFill className="text-rose-600" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <SiRadixui className="text-yellow-500" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <SiTailwindcss className="text-cyan-500" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <SiTypescript className="text-blue-600" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <BiLogoPostgresql  className="text-green-600" />
            </div>
            <div>
              <TiPlus />
            </div>
            <div>
              <FaReact className="text-blue-400" />
            </div>
          </div>
          <div>
            <h2>Santa Fe - Argentina - 2024</h2>
          </div>
        </div>
      </footer>

      </>
  )
}

export default Footer;
