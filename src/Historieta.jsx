import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const Historieta = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // Duración de la animación (ms)
            once: false,     // Ejecutar la animación solo una vez
            offset: 100,    // Distancia para activar la animación
        });
      }, []);



      

/*mesaje sde wasp*/

 // Define el número de teléfono y el mensaje
 let phoneNumber = "+593991014212"                                                                                               
 let message = "¡Hola! Me gustaría agendar una reunion.";

 // Función que genera el enlace de WhatsApp
 const sendMessage = () => {
   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
   window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
 };

  return (
    <>
    <div  className="containerlogo">
    <img className="imgologo" src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734415183/sicmas_2500_x_931_px_vxwyxm.png" alt="" />
    </div>
  
  
  
  
  
   <div  className="container" >
      
      
      
      
      
      <header className="header">
        <h1 className="title">La Historia de TechPro Solutions</h1>
      </header>

      
      
      
      
      
      
      <main className="main">
        {/* Sección del problema */}

        <section className="sectionProblem">
          <h2 className="subtitle">El Reto</h2>
          <p className="text">
            TechPro Solutions, una empresa tecnológica emergente, había
            estado operando sin certificaciones de calidad ISO ni una estrategia
            formal de seguridad ocupacional. A pesar de tener un excelente
            producto, la empresa empezaba a enfrentar dificultades para atraer
            nuevos clientes y mantener a los actuales debido a que no cumplían
            con varias normativas internacionales. Además, un pequeño incidente
            en el área de trabajo, relacionado con un incumplimiento en las
            normas de seguridad, aumentó sus costos y afectó la moral del
            equipo.
          </p>
          
          <ul  className="listdesio">
            <h2 className="titulolista"  >El Desafío de TechPro Solutions</h2>
          
            <li className="itemesokuruti"    data-aos="fade-up" >
              <h3 className="itemlitatitulo"  >Cumplimiento normativo</h3>
              <p className="itemlitatexto"  >
                TechPro Solutions no tenía la certificación ISO 9001, lo que
                limitaba su competitividad en el mercado.
              </p>
            </li>
          
            <li className="itemesokuruti"    data-aos="fade-down"  >
              <h3 className="itemlitatitulo" >Riesgos ocupacionales</h3>
              <p className="itemlitatexto">
                Un pequeño accidente laboral en el área de producción puso en
                evidencia la falta de políticas claras de seguridad y salud
                ocupacional.
              </p>
            </li>
           
            <li  className="itemesokuruti"  data-aos="fade-up" > 
              <h3 className="itemlitatitulo">Confianza del clientes</h3>
              <p className="itemlitatexto">
                Sin una certificación reconocida, los clientes empezaban a
                cuestionar la fiabilidad de sus productos y procesos, lo que
                afectó su reputación.
              </p>
            </li>
          
          </ul>
      
      
       </section>











        {/* Sección de la solución */}
        <section    data-aos="fade-right"  className="solution">
          <h2 className="subtitlesoution">La Solución</h2>
          <p className="textsolutio">
            TechPro Solutions decidió contactar a SICMAS, una empresa de
            consultoría con amplia experiencia en la implementación de sistemas
            de gestión y normativas internacionales.
          </p>

          <ul data-aos="fade-left"  className="lisasoluciones" >
            <h2  className="subtitle"  >Soluciones implementadas</h2>
            
            <li data-aos="fade-up-right"   className="itemsluiocne" >
              <h3 className="tuliitemsliuneces"  >Implementación de ISO 9001</h3>
              <p className="textitemsluinec" >
                SICMAS comenzó con un diagnóstico exhaustivo para entender los
                procesos de la empresa y diseñar un plan de implementación de la
                norma ISO 9001. Gracias a la experiencia del equipo de SICMAS,
                TechPro Solutions fue capaz de establecer procesos documentados
                y estructurados que no solo mejoraron la calidad de los
                productos, sino también la eficiencia operativa.
              </p>
            </li>
          
            <li  data-aos="fade-up-left" className="itemsluiocne"  >
              <h3 className="tuliitemsliuneces"  >Consultoría en Seguridad y Salud Ocupacional</h3>
              <p className="textitemsluinec" >
                SICMAS desarrolló un plan de acción para cumplir con las
                normativas de seguridad y salud en el trabajo. Esto incluyó la
                capacitación del personal, la identificación de riesgos y la
                implementación de protocolos de seguridad más estrictos. La
                empresa vio una disminución significativa en los accidentes
                laborales y una mejora en la satisfacción del equipo.{" "}
              </p>
            </li>
            
            <li  data-aos="fade-up-right" className="itemsluiocne" >
              <h3 className="tuliitemsliuneces" >Auditorías y Mejoras Continuas</h3>
              <p className="textitemsluinec"  >
                Con el apoyo de SICMAS, TechPro Solutions implementó auditorías
                internas regulares para asegurarse de que siempre estuvieran
                cumpliendo con las normativas ISO y otras regulaciones. Esto les
                permitió mantener un ciclo constante de mejora continua,
                optimizando sus procesos a medida que crecían.
              </p>
            </li>
          </ul>
        </section>

        {/* resutaslo*/}
        <section data-aos="fade-up"  className="results">  
          
          <h2 className="subtitle" > Resultados</h2>
         
          <article  className="conteresutados"    >
            
            <div data-aos="fade-up"  className="itemsliocn " >
              <p className="soluciontext" >
                
                TechPro Solutions obtuvo la certificación ISO 9001 en menos de
                seis meses, lo que les permitió abrir nuevas oportunidades de
                negocio con clientes más grandes y exigentes.{" "}
              </p>
            </div>
           
           
           
            <div data-aos="fade-up" className="itemsliocn "  >
              <p>
                La implementación de un sistema robusto de seguridad laboral
                redujo los accidentes en un 40%, lo que resultó en una mayor
                satisfacción de los empleados y una reducción de los costos
                relacionados con lesiones.
              </p>
            </div>
           
           
            <div data-aos="fade-up" className="itemsliocn "  >
              <p>
                La reputación de la empresa creció significativamente al poder
                demostrar el cumplimiento de estándares internacionales, y como
                resultado, aumentaron sus ventas en un 30% en el primer año
                posterior a la certificación.
              </p>
            </div>
         
          </article>
         
          <div data-aos="fade-down-right"   className="lessonlearned" >
            <h2>La lección aprendida </h2>
            <p>
              "No subestimes el valor de cumplir con las normativas
              internacionales. Con el apoyo de expertos como SICMAS, puedes no
              solo cumplir con ellas, sino también aprovecharlas como una
              ventaja competitiva."
            </p>
          </div>
       
        </section>

        {/* Llam ado a la acción */}
        <section  data-aos="flip-left" className="cta">
          <h2 className="ctaTitle">¿Quieres resultados como estos?</h2>
          <p stclassNameyle="ctaText">
            En SICMAS, ayudamos a empresas como la tuya a alcanzar la excelencia
            en gestión y certificación.
          </p>
          <button onClick={sendMessage}
            className="button">
         Contáctanos Hoy
          </button>
        </section>
      </main>
   
    </div>
                </>
  );
};

export default Historieta;
