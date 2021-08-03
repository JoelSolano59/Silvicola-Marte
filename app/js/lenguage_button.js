const menu1 = document.querySelector('.menu1');
const menu2 = document.querySelector('.menu2');
const menu3 = document.querySelector('.menu3');
const menu4 = document.querySelector('.menu4');
const menu5 = document.querySelector('.menu5');
const menu6 = document.querySelector('.menu6');
const langm = document.querySelector('.langm');

const hamb1 = document.querySelector('.hamb1');
const hamb2 = document.querySelector('.hamb2');
const hamb3 = document.querySelector('.hamb3');
const hamb4 = document.querySelector('.hamb4');
const hamb5 = document.querySelector('.hamb5');
const hamb6 = document.querySelector('.hamb6');
const langh = document.querySelector('.langh');

const qui = document.querySelector('.qui');
const qui1 = document.querySelector('.qui1');
const qui2 = document.querySelector('.qui2');
const qui3 = document.querySelector('.qui3');
const qui4 = document.querySelector('.qui4');
const qui5 = document.querySelector('.qui5');

const prop = document.querySelector('.prop');
const prop1 = document.querySelector('.prop1');

const com = document.querySelector('.com');
const com1 = document.querySelector('.com1');
const com2 = document.querySelector('.com2');
const com3 = document.querySelector('.com3');
const com4 = document.querySelector('.com4');
const com5 = document.querySelector('.com5');
const com6 = document.querySelector('.com6');

const cert = document.querySelector('.cert');
const cert1 = document.querySelector('.cert1');

const prod = document.querySelector('.prod');
const prod1 = document.querySelector('.prod1');

const cont = document.querySelector('.cont');

const foot1 = document.querySelector('.foot1');
const foot2 = document.querySelector('.foot2');
const foot3 = document.querySelector('.foot3');
const foot4 = document.querySelector('.foot4');
const foot5 = document.querySelector('.foot5');
const foot6 = document.querySelector('.foot6');
const langf = document.querySelector('.langf');
const copy = document.querySelector('.copy');

function openLenguage() {
    Swal.fire({
        title: 'Lenguaje | Language',
        showDenyButton: true,
        confirmButtonText: `Change to: English`,
        denyButtonText: `Cancelar | Cancel`,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Changing to: English', 'Wait a second...', 'success')
            const attr = "english";
            menu1.textContent = data[attr].menu1;
            menu2.textContent = data[attr].menu2;
            menu3.textContent = data[attr].menu3;
            menu4.textContent = data[attr].menu4;
            menu5.textContent = data[attr].menu5;
            menu6.textContent = data[attr].menu6;
            langm.textContent = data[attr].langm;
    
            hamb1.textContent = data[attr].hamb1;
            hamb2.textContent = data[attr].hamb2;
            hamb3.textContent = data[attr].hamb3;
            hamb4.textContent = data[attr].hamb4;
            hamb5.textContent = data[attr].hamb5;
            hamb6.textContent = data[attr].hamb6;
            langh.textContent = data[attr].langh;

            qui.textContent = data[attr].qui;
            qui1.textContent = data[attr].qui1;
            qui2.textContent = data[attr].qui2;
            qui3.textContent = data[attr].qui3;
            qui4.textContent = data[attr].qui4;
            qui5.textContent = data[attr].qui5;

            prop.textContent = data[attr].prop;
            prop1.textContent = data[attr].prop1;

            com.textContent = data[attr].com;
            com1.textContent = data[attr].com1;
            com2.textContent = data[attr].com2;
            com3.textContent = data[attr].com3;
            com4.textContent = data[attr].com4;
            com5.textContent = data[attr].com5;
            com6.textContent = data[attr].com6;

            cert.textContent = data[attr].cert;
            cert1.textContent = data[attr].cert1;

            prod.textContent = data[attr].prod;
            prod1.textContent = data[attr].prod1;

            cont.textContent = data[attr].cont;

            foot1.textContent = data[attr].foot1;
            foot2.textContent = data[attr].foot2;
            foot3.textContent = data[attr].foot3;
            foot4.textContent = data[attr].foot4;
            foot5.textContent = data[attr].foot5;
            foot6.textContent = data[attr].foot6;
            langf.textContent = data[attr].langf;
            copy.textContent = data[attr].copy;
        }
    })
}

var data = {
    "english":
    {
        "menu1": "About Us",
        "menu2": "Purpose",
        "menu3": "Commitments",
        "menu4": "Certification",
        "menu5": "Products",
        "menu6": "Contact",
        "langm": "English",
        
        "hamb1": "About Us",
        "hamb2": "Purpose",
        "hamb3": "Commitments",
        "hamb4": "Certification",
        "hamb5": "Products",
        "hamb6": "Contact",
        "langh": "English",

        "qui": "About Us",
        "qui1": "Productora Silvicola Marte was created in 1983 due to a growing concern to improve the forest condition and management, this endeavor has been strengthened through three generations.",
        "qui2": "Where we are",
        "qui3": "Located in the Mexican state of Puebla at Chignahuapan County. PSM is integrated by timberlands composed of pines and firs predominantly. (Pinus patula,  Pinus montezumae, Pinus ayacahuite and Abies religiosa species)",
        "qui4": "What we do",
        "qui5": "Throughout the last three decades, PSM has participated in various initiatives intended to improve natural resources management alongside other lumber producers and has been certificated to comply with international standards. It also maintains a close relationship with neighboring communities.",
        
        "prop": "Purpose",
        "prop1": "Safeguard the forest, incorporating best practices, through natural resources operation and management, preserving and renewing the ecosystem, providing employment and benefits for the community.",
    
        "com": "Commitments",
        "com1": "With the Environment",
        "com2": "Comprehend and understand the ecosystem, monitoring and balancing natural, productive, industrial, and economic cycles to guarantee the adequate equilibrium of flora and fauna.",
        "com3": "With the Community",
        "com4": "Provide employment opportunities to local communities. Continuously training our employees on lumbering best practices and promoting safety. Cooperation and support with neighboring timberlands to attend natural risks such as fires and plagues.",
        "com5": "With our Stakeholders",
        "com6": "Sustain close and respectful relations with our clients, understanding their needs and aiming to meet them. Seek forthcoming and transparent communication with our shareholders about the forest management, and business administration. Provide the authorities with accurate information and comply with their regulations. Offer a fair and respectful treatment to our suppliers and contractors.",

        "cert": "Certification",
        "cert1": "Since 2012 PSM has continuously been sanctioned under the criteria of the Forest Stewardship Council (FSC). Throughout this time, all observations made during audits have been attended in order to keep best practices in forest management and fulfill all our obligations with employees, authorities and neighbors.",

        "prod": "Products",
        "prod1": "We primary produce raw wood logs, poles, and other secondary products. We have the flexibility to produce a wide range of log lengths; from 3’6” up to 16’7” in a variety of diameters meeting different industrial needs seeking to minimize waste.",

        "cont": "Contact Us",

        "foot1": "About Us",
        "foot2": "Purpose",
        "foot3": "Commitments",
        "foot4": "Certification",
        "foot5": "Products",
        "foot6": "Contact",
        "langf": "English",
        "copy": "© Productora Silvicola Marte. All rights reserved.",
    },
    "spanish":
    {
        "menu1": "Quiénes somos",
        "menu2": "Propósito",
        "menu3": "Compromisos",
        "menu4": "Certificación",
        "menu5": "Productos",
        "menu6": "Contacto",
        "lang": "Español",

        "qui": "Quiénes somos",
        "qui1": "Productora Silvícola Marte es una empresa que surgió en 1983, por la preocupación de darle mejor tratamiento al recurso forestal y que se ha robustecido a través de tres generaciones. Localizada en el municipio de Chignahuapan, en el estado mexicano de Puebla; incorpora varios predios boscosos con árboles de las especies  pino y oyamel predominantemente (Pinus patula, Pinus montezumae, Pinus ayacahuite; Abies religiosa). Durante estas tres últimas décadas PSM ha participado en diversas iniciativas encaminadas al mejor manejo del recurso natural junto con otros productores forestales, y de manera individual a través de la certificación internacional de sus actividades. De igual manera, mantiene un acercamiento constante y una buena vecindad con la comunidad que le rodea.",

        "prop": "Propósito",
        "prop1": "Custodiar el bosque incorporando las mejores prácticas, a través de trabajar y administrar los recursos naturales, preservando y renovando el ecosistema y proporcionado fuentes de empleo y beneficios a la comunidad.",    
        
        "com": "Compromisos",
        "com1": "Con el medio ambiente",
        "com2": "Comprender el ecosistema existente, monitorear y balancear los ciclos naturales, productivos, industriales y económicos  del bosque para garantizar el adecuado equilibrio de flora y fauna.",        "com3": "With the Community",
        "com3": "Con la comunidad",
        "com4": "Proporcionar oportunidades de empleo a los habitantes de la localidad. Capacitar continuamente a nuestros empleados con las mejores prácticas de manejo forestal priorizando su seguridad. Cooperación y apoyo con los predios vecinos para la atención de riesgos naturales como incendios y plagas.",
        "com5": "Con otras partes interesadas",
        "com6": "Mantener un trato cercano y respetuoso con nuestros clientes, entendiendo sus intereses y buscando ajustarnos a sus necesidades. Procurar la comunicación cercana y transparente con nuestros accionistas sobre el manejo del bosque y administración del negocio. Proveer de información pertinente a las autoridades y cumplir con las regulaciones forestales. Otorgar un trato justo y respetuoso a proveedores y subcontratistas.",
        
        "cert": "Certificación",
        "cert1": "Desde el año 2012 PSM ha estado continuamente certificada bajo los criterios del Forest Stewardship Council. (FSC) Atendiendo todas las observaciones que se han hecho para seguir manteniendo los mejores estándares del manejo forestal y cumpliendo con  todas nuestras obligaciones con empleados, autoridades y vecinos.",
        
        "prod": "Productos",
        "prod1": "Producimos madera en rollo como producto primario y algunos derivados como brazuelo como productos secundarios. Tenemos la flexibilidad de producir la madera desde el bosque, en diferentes largos desde 1.10 hasta 5.10 metros y en diferentes diámetros, lo cual contribuye de manera importante a la eficiencia de la industrialización al minimizar desperdicios.",
        
        "cont": "Contacto",

        "copy": "© Productora Silvicola Marte. Todos los derechos reservados.",
    }
}