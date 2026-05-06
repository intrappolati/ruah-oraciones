import { useState } from "react";

const C = {
  cream: "#faf6ee",
  creamDark: "#f0e9d8",
  ink: "#3a2a3f",
  inkSoft: "#5a4866",
  lavender: "#9d86b8",
  lavenderLight: "#c9b8db",
  lavenderDark: "#6b4f8a",
  gold: "#b8943d",
  border: "#e0d4c0",
  cardBg: "#fffdf7",
  red: "#a64545",
  blue: "#5a7090",
  green: "#5a7558",
};

const Icon = ({ type, size = 32, color = C.lavenderDark }) => {
  const icons = {
    sun: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <circle cx="32" cy="32" r="10" fill={color} opacity="0.3" />
        <circle cx="32" cy="32" r="7" fill={color} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="32"
            y1="32"
            x2={32 + 18 * Math.cos((deg * Math.PI) / 180)}
            y2={32 + 18 * Math.sin((deg * Math.PI) / 180)}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    ),
    cross: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <rect x="28" y="12" width="8" height="44" fill={color} rx="1" />
        <rect x="16" y="22" width="32" height="8" fill={color} rx="1" />
      </svg>
    ),
    chalice: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <path d="M 18 14 L 46 14 L 42 32 Q 32 38 22 32 Z" fill={color} opacity="0.85" />
        <rect x="30" y="36" width="4" height="14" fill={color} />
        <ellipse cx="32" cy="52" rx="12" ry="3" fill={color} />
      </svg>
    ),
    rose: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <circle cx="32" cy="26" r="10" fill={color} opacity="0.4" />
        <circle cx="32" cy="26" r="6" fill={color} opacity="0.7" />
        <circle cx="32" cy="26" r="3" fill={color} />
        <path d="M 32 36 Q 28 44 32 52 Q 36 44 32 36" fill={color} opacity="0.6" />
        <path d="M 28 42 Q 22 42 22 38" stroke={color} strokeWidth="1.5" fill="none" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <path
          d="M 32 50 C 16 38 12 26 18 20 C 24 14 30 18 32 24 C 34 18 40 14 46 20 C 52 26 48 38 32 50 Z"
          fill={color}
        />
      </svg>
    ),
    dove: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <path
          d="M 14 32 Q 22 24 32 26 Q 42 22 50 28 Q 46 34 36 34 Q 30 38 24 36 Q 18 38 14 32 Z"
          fill={color}
        />
        <circle cx="44" cy="28" r="1" fill={C.cream} />
        <path d="M 50 28 L 56 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    candle: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <path d="M 32 8 Q 28 14 32 18 Q 36 14 32 8" fill={C.gold} />
        <rect x="26" y="20" width="12" height="32" fill={color} rx="1" />
        <ellipse cx="32" cy="54" rx="10" ry="2" fill={color} opacity="0.5" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <path
          d="M 32 8 L 36 26 L 54 26 L 40 36 L 46 54 L 32 44 L 18 54 L 24 36 L 10 26 L 28 26 Z"
          fill={color}
        />
      </svg>
    ),
    book: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <path d="M 12 16 L 32 20 L 32 52 L 12 48 Z" fill={color} opacity="0.85" />
        <path d="M 52 16 L 32 20 L 32 52 L 52 48 Z" fill={color} />
        <line x1="32" y1="20" x2="32" y2="52" stroke={C.cream} strokeWidth="1" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <path
          d="M 32 10 Q 16 22 16 38 Q 16 50 32 54 Q 48 50 48 38 Q 48 22 32 10 Z"
          fill={color}
        />
        <path d="M 32 14 L 32 52" stroke={C.cream} strokeWidth="1.5" />
      </svg>
    ),
    paloma: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        {/* Body */}
        <ellipse cx="30" cy="36" rx="14" ry="9" fill={color} />
        {/* Head */}
        <circle cx="46" cy="28" r="7" fill={color} />
        {/* Beak */}
        <polygon points="53,26 60,28 53,30" fill={color} opacity="0.8" />
        {/* Wing */}
        <path d="M 20 32 Q 14 22 22 18 Q 30 14 36 28" fill={color} opacity="0.7" />
        <path d="M 22 34 Q 12 26 18 20" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Tail */}
        <path d="M 16 36 Q 10 40 12 46 Q 16 42 20 44 Q 18 40 16 36 Z" fill={color} opacity="0.8" />
        {/* Eye */}
        <circle cx="48" cy="27" r="1.5" fill="white" />
        <circle cx="48.5" cy="27" r="0.8" fill={color} opacity="0.5" />
        {/* Olive branch */}
        <path d="M 53 30 Q 56 34 54 38" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="52" cy="36" rx="3" ry="2" fill={color} opacity="0.6" transform="rotate(-30 52 36)" />
        <ellipse cx="55" cy="38" rx="3" ry="2" fill={color} opacity="0.6" transform="rotate(20 55 38)" />
      </svg>
    ),
    virgen: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        {/* Halo */}
        <circle cx="32" cy="16" r="10" fill="none" stroke={color} strokeWidth="1.8" strokeDasharray="3,2" />
        {/* Head */}
        <ellipse cx="32" cy="18" rx="7" ry="8" fill={color} opacity="0.9" />
        {/* Veil */}
        <path d="M 22 16 Q 20 28 22 40 Q 32 44 42 40 Q 44 28 42 16 Q 36 12 32 12 Q 28 12 22 16 Z" fill={color} opacity="0.25" />
        {/* Mantle outline */}
        <path d="M 22 16 Q 18 30 20 44 Q 26 48 32 48 Q 38 48 44 44 Q 46 30 42 16" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Body/robe */}
        <path d="M 26 26 Q 24 36 24 48 Q 28 50 32 50 Q 36 50 40 48 Q 40 36 38 26 Q 35 28 32 28 Q 29 28 26 26 Z" fill={color} opacity="0.5" />
        {/* Hands joined */}
        <path d="M 28 36 Q 30 34 32 35 Q 34 34 36 36 Q 34 40 32 40 Q 30 40 28 36 Z" fill={color} opacity="0.8" />
        {/* Stars on mantle */}
        <circle cx="24" cy="22" r="1.2" fill={color} />
        <circle cx="40" cy="22" r="1.2" fill={color} />
        <circle cx="22" cy="32" r="1" fill={color} />
        <circle cx="42" cy="32" r="1" fill={color} />
      </svg>
    ),
    flor: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        {/* Petals */}
        {[0,60,120,180,240,300].map(deg => (
          <ellipse key={deg} cx={32 + 12*Math.cos(deg*Math.PI/180)} cy={32 + 12*Math.sin(deg*Math.PI/180)}
            rx="7" ry="4.5" fill={color} opacity="0.75"
            transform={`rotate(${deg} ${32 + 12*Math.cos(deg*Math.PI/180)} ${32 + 12*Math.sin(deg*Math.PI/180)})`} />
        ))}
        {/* Center */}
        <circle cx="32" cy="32" r="8" fill={color} />
        <circle cx="32" cy="32" r="4" fill={color} opacity="0.4" />
        {/* Stem */}
        <path d="M 32 44 Q 30 52 28 58" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Leaf */}
        <path d="M 30 52 Q 22 50 20 44 Q 26 46 30 52 Z" fill={color} opacity="0.7" />
      </svg>
    ),
    iglesia: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        {/* Cross on top */}
        <rect x="30" y="4" width="4" height="14" fill={color} rx="1" />
        <rect x="25" y="8" width="14" height="4" fill={color} rx="1" />
        {/* Tower/bell tower */}
        <rect x="26" y="16" width="12" height="14" fill={color} opacity="0.8" />
        {/* Arch window in tower */}
        <path d="M 29 24 Q 29 20 32 20 Q 35 20 35 24 L 35 28 L 29 28 Z" fill={color} opacity="0.3" />
        {/* Main body */}
        <rect x="14" y="30" width="36" height="26" fill={color} opacity="0.7" rx="1" />
        {/* Roof */}
        <polygon points="10,30 32,18 54,30" fill={color} />
        {/* Door */}
        <path d="M 27 56 L 27 44 Q 27 40 32 40 Q 37 40 37 44 L 37 56 Z" fill={color} opacity="0.3" />
        {/* Windows */}
        <path d="M 18 36 Q 18 33 21 33 Q 24 33 24 36 L 24 40 L 18 40 Z" fill={color} opacity="0.3" />
        <path d="M 40 36 Q 40 33 43 33 Q 46 33 46 36 L 46 40 L 40 40 Z" fill={color} opacity="0.3" />
      </svg>
    ),
    manos: (
      <svg viewBox="0 0 64 64" width={size} height={size}>
        {/* Left hand */}
        <path d="M 8 38 Q 6 30 10 24 Q 12 20 15 22 L 16 28 Q 18 22 21 21 Q 24 20 24 24 L 24 28 Q 26 22 29 22 Q 32 22 31 27 L 30 34 Q 34 30 36 32 Q 38 34 34 40 Q 30 46 26 48 Q 20 50 14 46 Q 8 42 8 38 Z" fill={color} opacity="0.85" />
        {/* Right hand */}
        <path d="M 56 38 Q 58 30 54 24 Q 52 20 49 22 L 48 28 Q 46 22 43 21 Q 40 20 40 24 L 40 28 Q 38 22 35 22 Q 32 22 33 27 L 34 34 Q 30 30 28 32 Q 26 34 30 40 Q 34 46 38 48 Q 44 50 50 46 Q 56 42 56 38 Z" fill={color} opacity="0.85" />
        {/* Clasped area highlight */}
        <ellipse cx="32" cy="36" rx="6" ry="5" fill={color} opacity="0.4" />
      </svg>
    ),
  };
  return icons[type] || icons.cross;
};

const DATA = [
  {
    id: "diario",
    title: "Día a día",
    subtitle: "Oraciones para cada momento",
    icon: "sun",
    accent: C.gold,
    prayers: [
      {
        title: "Al despertar",
        text: `Te adoro, Dios mío, y te amo con todo mi corazón.\nTe doy gracias por haberme creado, hecho cristiano y conservado en esta noche.\n\nTe ofrezco las acciones de este día; haz que sean todas según tu santísima voluntad y para mayor gloria tuya.\n\nPresérvame del pecado y de todo mal. Que tu gracia sea siempre conmigo y con todos los míos. Amén.`,
      },
      {
        title: "Ofrecimiento de obras",
        text: `Oh Jesús, por el Corazón Inmaculado de María te ofrezco las oraciones, trabajos, alegrías y sufrimientos del día de hoy, en reparación de nuestros pecados y por todas las intenciones por las que ruega y se ofrece tu Sagrado Corazón.\n\nTe los ofrezco en particular por las intenciones del Santo Padre para este mes. Amén.`,
      },
      {
        title: "Antes de comer",
        text: `Bendícenos, Señor, y bendice estos alimentos\nque por tu bondad vamos a tomar.\nPor Cristo nuestro Señor.\nAmén.`,
      },
      {
        title: "Después de comer",
        text: `Te damos gracias, Señor,\npor todos tus beneficios,\na ti que vives y reinas\npor los siglos de los siglos.\nAmén.`,
      },
      {
        title: "Antes del trabajo o estudio",
        text: `Señor, ven en mi ayuda. Ilumina mi entendimiento, fortalece mi voluntad y purifica mi corazón.\n\nQue todo lo que hoy haga, lo haga por amor a ti y para tu mayor gloria. María, Sede de la Sabiduría, ruega por mí. Amén.`,
      },
      {
        title: "Examen breve de conciencia",
        text: `Señor, dame luz para conocer mis faltas de hoy.\n\n¿He pensado en ti durante el día?\n¿He sido caritativo con los demás?\n¿He cumplido con mis obligaciones?\n¿He huido de las ocasiones de pecado?\n\nMe pesa, Señor, de todo lo que he hecho mal. Propongo enmendarme con tu ayuda. Amén.`,
      },
      {
        title: "Al acostarse",
        text: `Te adoro, Dios mío, y te amo con todo mi corazón.\nTe doy gracias por haberme creado, hecho cristiano y conservado en este día.\n\nPerdóname todo lo malo que hoy he cometido; y si algo bueno he hecho, dígnate aceptarlo.\n\nGuárdame en el descanso de la noche y líbrame de todo peligro. Que tu gracia sea siempre conmigo y con todos los míos. Amén.`,
      },
      {
        title: "Ángel de la Guarda",
        text: `Ángel de mi guarda, mi dulce compañía,\nno me desampares ni de noche ni de día,\nno me dejes solo(a) que me perdería,\nhasta que me pongas en paz y alegría,\ncon todos los santos, Jesús, José y María.\nAmén.`,
      },
    ],
  },
  {
    id: "fundamentales",
    title: "Oraciones esenciales",
    subtitle: "Las plegarias del cristiano",
    icon: "cross",
    accent: C.lavenderDark,
    prayers: [
      {
        title: "Padre Nuestro",
        text: `Padre nuestro, que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad\nen la tierra como en el cielo.\n\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos\na los que nos ofenden;\nno nos dejes caer en la tentación,\ny líbranos del mal.\nAmén.`,
      },
      {
        title: "Ave María",
        text: `Dios te salve, María,\nllena eres de gracia,\nel Señor es contigo.\nBendita Tú eres entre todas las mujeres,\ny bendito es el fruto de tu vientre, Jesús.\n\nSanta María, Madre de Dios,\nruega por nosotros, pecadores,\nahora y en la hora de nuestra muerte.\nAmén.`,
      },
      {
        title: "Gloria",
        text: `Gloria al Padre,\ny al Hijo,\ny al Espíritu Santo.\n\nComo era en el principio,\nahora y siempre,\npor los siglos de los siglos.\nAmén.`,
      },
      {
        title: "Credo de los Apóstoles",
        text: `Creo en Dios, Padre Todopoderoso,\nCreador del cielo y de la tierra.\n\nCreo en Jesucristo, su único Hijo, nuestro Señor,\nque fue concebido por obra y gracia del Espíritu Santo,\nnació de Santa María Virgen,\npadeció bajo el poder de Poncio Pilato,\nfue crucificado, muerto y sepultado,\ndescendió a los infiernos,\nal tercer día resucitó de entre los muertos,\nsubió a los cielos\ny está sentado a la derecha de Dios, Padre todopoderoso.\nDesde allí ha de venir a juzgar a vivos y muertos.\n\nCreo en el Espíritu Santo,\nla santa Iglesia católica,\nla comunión de los santos,\nel perdón de los pecados,\nla resurrección de la carne\ny la vida eterna. Amén.`,
      },
      {
        title: "Salve",
        text: `Dios te salve, Reina y Madre de misericordia,\nvida, dulzura y esperanza nuestra; Dios te salve.\n\nA ti llamamos los desterrados hijos de Eva;\na ti suspiramos, gimiendo y llorando\nen este valle de lágrimas.\n\nEa, pues, Señora, abogada nuestra,\nvuelve a nosotros esos tus ojos misericordiosos;\ny después de este destierro\nmuéstranos a Jesús, fruto bendito de tu vientre.\n\nOh clementísima, oh piadosa,\noh dulce Virgen María.\nAmén.`,
      },
      {
        title: "Acto de Fe",
        text: `Señor Dios mío, creo firmemente todas y cada una de las verdades que la Santa Iglesia Católica cree y enseña, porque Tú, que eres la misma Verdad, las has revelado.\n\nEn esta fe quiero vivir y morir. Amén.`,
      },
      {
        title: "Acto de Esperanza",
        text: `Señor Dios mío, espero por tu bondad y por tus promesas, y por los méritos de Jesucristo nuestro Salvador, alcanzar la vida eterna y las gracias necesarias para merecerla con las buenas obras que debo y propongo hacer. Amén.`,
      },
      {
        title: "Acto de Caridad",
        text: `Señor Dios mío, te amo sobre todas las cosas con todo mi corazón y con toda mi alma, porque eres infinitamente bueno y digno de ser amado.\n\nY por amor a ti amo también a mi prójimo como a mí mismo. Amén.`,
      },
      {
        title: "Acto de Contrición",
        text: `Señor mío Jesucristo, Dios y hombre verdadero,\nCreador, Padre y Redentor mío;\npor ser tú quien eres, Bondad infinita,\ny porque te amo sobre todas las cosas,\nme pesa de todo corazón haberte ofendido.\n\nTambién me pesa porque puedes castigarme con las penas del infierno.\n\nAyudado de tu divina gracia, propongo firmemente\nnunca más pecar, confesarme y cumplir la penitencia\nque me fuere impuesta. Amén.`,
      },
      {
        title: "Señal de la Cruz",
        text: `Por la señal de la Santa Cruz,\nde nuestros enemigos,\nlíbranos, Señor, Dios nuestro.\n\nEn el nombre del Padre,\ny del Hijo,\ny del Espíritu Santo.\nAmén.`,
      },
    ],
  },
  {
    id: "eucaristia",
    title: "La Eucaristía",
    subtitle: "Misa, comunión y adoración",
    icon: "chalice",
    accent: C.gold,
    prayers: [
      {
        title: "Antes de la Misa",
        text: `Señor Jesús, voy a participar en el Santo Sacrificio de la Misa, memorial de tu Pasión, Muerte y Resurrección.\n\nConcédeme la gracia de asistir con fe viva, con devoción profunda y con un corazón abierto a tu Palabra.\n\nQue esta celebración renueve mi vida y me una más a ti y a la Iglesia. Amén.`,
      },
      {
        title: "Antes de comulgar",
        text: `Señor mío Jesucristo, aunque indigno de recibirte, no me atrevo a apartarme de ti, porque tú dijiste: "El que come mi carne y bebe mi sangre tiene vida eterna".\n\nCreo firmemente que estás verdaderamente presente en la Sagrada Hostia. Te recibo con toda la fe, esperanza y amor de que soy capaz. Que esta Comunión me limpie, me fortalezca y me una a ti para siempre. Amén.`,
      },
      {
        title: "Después de comulgar (Alma de Cristo)",
        text: `Alma de Cristo, santifícame.\nCuerpo de Cristo, sálvame.\nSangre de Cristo, embriágame.\nAgua del costado de Cristo, lávame.\nPasión de Cristo, confórtame.\n¡Oh, buen Jesús!, óyeme.\nDentro de tus llagas, escóndeme.\nNo permitas que me aparte de ti.\nDel maligno enemigo, defiéndeme.\nEn la hora de mi muerte, llámame\ny mándame ir a ti,\npara que con tus santos te alabe\npor los siglos de los siglos. Amén.`,
      },
      {
        title: "Comunión espiritual",
        text: `Yo quisiera, Señor, recibirte\ncon aquella pureza, humildad y devoción\ncon que te recibió tu Santísima Madre,\ncon el espíritu y fervor de los santos.\n\nYa que no puedo recibirte ahora sacramentalmente,\nven al menos espiritualmente a mi corazón.\nComo si ya hubieras venido,\nyo te abrazo y me uno todo a ti;\nno permitas, Señor, que jamás me aparte de ti.\nAmén.`,
      },
      {
        title: "Adoro Te Devote",
        text: `Te adoro con profunda reverencia, Dios mío, escondido en este Sacramento.\n\nA ti se somete enteramente mi corazón, porque al contemplarte se siente totalmente desfallecer.\n\nLa vista, el tacto, el gusto se engañan al juzgarte; pero el oído basta para creer firmemente: creo todo lo que el Hijo de Dios ha dicho; nada hay más verdadero que esta Palabra de Verdad.\n\n— Santo Tomás de Aquino`,
      },
      {
        title: "Visita al Santísimo",
        text: `Señor Jesús, vengo a visitarte en este Santísimo Sacramento, donde te encuentras realmente presente por amor a nosotros.\n\nTe adoro, te alabo y te doy gracias por todos los beneficios que me has concedido.\n\nTe pido perdón por mis pecados y por las ofensas que se cometen contra ti en este Sacramento de amor.\n\nQuédate conmigo, Señor, y haz que mi corazón se inflame en tu amor. Amén.`,
      },
      {
        title: "Quince minutos con Jesús Sacramentado",
        text: `Aquí estoy, Señor, ante tu presencia. No tengo grandes palabras, sólo un corazón que quiere descansar en ti.\n\nTú me conoces mejor que yo mismo. Sabes mis luchas, mis miedos, mis alegrías.\n\nQuédate conmigo en este rato de silencio. Habla a mi corazón. Yo te escucho.\n\n(Permanece en silencio ante el Sagrario, sin necesidad de muchas palabras. Basta tu presencia y la suya.)`,
      },
    ],
  },
  {
    id: "confesion",
    title: "Reconciliación",
    subtitle: "Confesión y examen",
    icon: "manos",
    accent: C.blue,
    prayers: [
      {
        title: "Antes de la confesión",
        text: `Espíritu Santo, fuente de luz, ilumina mi entendimiento para conocer mis pecados, mueve mi voluntad para arrepentirme sinceramente y dame valor para confesarlos con humildad.\n\nMaría, refugio de los pecadores, ruega por mí. Amén.`,
      },
      {
        title: "Examen de conciencia",
        text: `Frente a Dios:\n¿He rezado y vivido mi fe? ¿He participado en la Misa dominical? ¿He blasfemado o usado el nombre de Dios en vano?\n\nFrente al prójimo:\n¿He sido caritativo? ¿He juzgado, calumniado o murmurado? ¿He guardado rencor? ¿He sido honrado en mis tratos? ¿He respetado la vida y la dignidad de los demás?\n\nFrente a mí mismo:\n¿He cuidado mi cuerpo y mi alma? ¿He sido casto? ¿He huido de las ocasiones de pecado? ¿He cumplido mis deberes con responsabilidad?\n\nFrente a la creación:\n¿He cuidado los bienes que Dios me ha dado? ¿He compartido con los que tienen menos?`,
      },
      {
        title: "Después de la confesión",
        text: `Gracias, Señor, por el perdón que acabas de darme en este sacramento.\n\nPropongo firmemente, con tu gracia, no volver a ofenderte y huir de las ocasiones de pecado.\n\nVirgen Santísima, ayúdame a perseverar en el bien. San José, intercede por mí. Ángel de mi guarda, acompáñame siempre. Amén.`,
      },
      {
        title: "Acto de Contrición perfecta",
        text: `Dios mío, me arrepiento de todo corazón de todos mis pecados, no por temor al castigo, sino sobre todo porque te ofendí a ti, que eres infinitamente bueno y digno de ser amado sobre todas las cosas.\n\nPropongo firmemente, ayudado por tu gracia, no volver a pecar y evitar las ocasiones próximas de pecado. Amén.`,
      },
    ],
  },
  {
    id: "maria",
    title: "La Virgen María",
    subtitle: "Rosario y devociones marianas",
    icon: "virgen",
    accent: C.lavender,
    prayers: [
      {
        title: "Cómo rezar el Rosario",
        text: `1. Señal de la Cruz y Credo.\n2. En las cuentas mayores: Padre Nuestro.\n3. En las diez cuentas menores: Ave María (meditando el misterio).\n4. Al final de cada decena: Gloria y oración de Fátima.\n5. Al terminar los cinco misterios: Salve.\n\nOración de Fátima:\n"Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva a todas las almas al cielo, especialmente a las más necesitadas de tu divina misericordia." Amén.\n\nMaría, Madre de gracia, Madre de piedad y de misericordia, defiéndenos de nuestros enemigos y ampáranos ahora y en la hora de nuestra muerte. Amén."`,
      },
      {
        title: "Misterios Gozosos (lunes y sábado)",
        text: `1. La Anunciación del Ángel a María.\n2. La Visitación de María a su prima Isabel.\n3. El Nacimiento de Jesús en Belén.\n4. La Presentación de Jesús en el Templo.\n5. El Niño Jesús perdido y hallado en el Templo.`,
      },
      {
        title: "Misterios Luminosos (jueves)",
        text: `1. El Bautismo de Jesús en el Jordán.\n2. Las Bodas de Caná.\n3. El anuncio del Reino y la llamada a la conversión.\n4. La Transfiguración del Señor.\n5. La Institución de la Eucaristía.`,
      },
      {
        title: "Misterios Dolorosos (martes y viernes)",
        text: `1. La oración de Jesús en el Huerto de los Olivos.\n2. La flagelación del Señor.\n3. La coronación de espinas.\n4. Jesús con la cruz a cuestas, camino del Calvario.\n5. La Crucifixión y muerte de Jesús.`,
      },
      {
        title: "Misterios Gloriosos (miércoles y domingo)",
        text: `1. La Resurrección del Señor.\n2. La Ascensión de Jesús al cielo.\n3. La venida del Espíritu Santo.\n4. La Asunción de María al cielo.\n5. La Coronación de María como Reina del Cielo y de la Tierra.`,
      },
      {
        title: "Letanías de los Santos",
        text: `Señor, ten piedad. Cristo, ten piedad. Señor, ten piedad.\n\nSanta María, ruega por nosotros.\nSanta Madre de Dios, ruega por nosotros.\nSanta Virgen de las vírgenes, ruega por nosotros.\n\nSan Miguel, ruega por nosotros.\nSan Gabriel, ruega por nosotros.\nSan Rafael, ruega por nosotros.\nTodos los santos ángeles y arcángeles, rogad por nosotros.\n\nSan Juan Bautista, ruega por nosotros.\nSan José, ruega por nosotros.\nTodos los santos Patriarcas y Profetas, rogad por nosotros.\n\nSan Pedro, ruega por nosotros.\nSan Pablo, ruega por nosotros.\nSan Andrés, ruega por nosotros.\nSan Juan, ruega por nosotros.\nSanta María Magdalena, ruega por nosotros.\nSan Esteban, ruega por nosotros.\nSan Ignacio de Antioquía, ruega por nosotros.\nSan Lorenzo, ruega por nosotros.\nSantas Perpetua y Felícitas, rogad por nosotros.\nSanta Inés, ruega por nosotros.\nSan Gregorio, ruega por nosotros.\nSan Agustín, ruega por nosotros.\nSan Atanasio, ruega por nosotros.\nSan Basilio, ruega por nosotros.\nSan Martín, ruega por nosotros.\nSan Benito, ruega por nosotros.\nSan Francisco y Santo Domingo, rogad por nosotros.\nSan Francisco Javier, ruega por nosotros.\nSan Juan María Vianney, ruega por nosotros.\nSanta Catalina de Siena, ruega por nosotros.\nSanta Teresa de Jesús, ruega por nosotros.\nTodos los Santos y Santas de Dios, rogad por nosotros.\n\nSé propicio, perdónanos, Señor.\nSé propicio, escúchanos, Señor.\n\nDe todo mal, líbranos, Señor.\nDe todo pecado, líbranos, Señor.\nDe la muerte eterna, líbranos, Señor.\nPor tu Encarnación, líbranos, Señor.\nPor tu muerte y Resurrección, líbranos, Señor.\nPor el don del Espíritu Santo, líbranos, Señor.\n\nCordero de Dios, que quitas el pecado del mundo, perdónanos, Señor.\nCordero de Dios, que quitas el pecado del mundo, escúchanos, Señor.\nCordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.\n\nCristo, óyenos. Cristo, escúchanos.\nSeñor, ten piedad. Cristo, ten piedad. Señor, ten piedad.`,
      },
      {
        title: "El Ángelus",
        text: `V. El Ángel del Señor anunció a María.\nR. Y concibió por obra del Espíritu Santo.\n(Ave María)\n\nV. He aquí la esclava del Señor.\nR. Hágase en mí según tu palabra.\n(Ave María)\n\nV. Y el Verbo se hizo carne.\nR. Y habitó entre nosotros.\n(Ave María)\n\nV. Ruega por nosotros, Santa Madre de Dios.\nR. Para que seamos dignos de las promesas de Cristo.\n\nOremos: Te suplicamos, Señor, que derrames tu gracia en nuestras almas, para que, los que hemos conocido por el anuncio del Ángel la Encarnación de tu Hijo Jesucristo, lleguemos por los méritos de su Pasión y de su Cruz, a la gloria de la Resurrección. Por el mismo Cristo nuestro Señor. Amén.`,
      },
      {
        title: "Regina Coeli (tiempo pascual)",
        text: `Reina del cielo, alégrate, aleluya;\nporque el Señor a quien has merecido llevar, aleluya,\nha resucitado, según predijo, aleluya.\nRuega por nosotros a Dios, aleluya.\n\nGózate y alégrate, Virgen María, aleluya.\nPorque ha resucitado verdaderamente el Señor, aleluya.`,
      },
      {
        title: "Acordaos (Memorare)",
        text: `Acordaos, oh piadosísima Virgen María,\nque jamás se ha oído decir\nque ninguno de los que han acudido a tu protección,\nimplorando tu auxilio y reclamando tu socorro,\nhaya sido abandonado de ti.\n\nAnimado por esta confianza, a ti acudo, Madre, Virgen de las vírgenes;\na ti vengo, ante ti me presento gimiendo pecador.\n\nNo deseches, oh Madre del Verbo, mis súplicas,\nantes bien escúchalas y acógelas benignamente. Amén.`,
      },
      {
        title: "Bajo tu amparo",
        text: `Bajo tu amparo nos acogemos,\nSanta Madre de Dios.\nNo desprecies las súplicas\nque te dirigimos en nuestras necesidades,\nantes bien líbranos de todo peligro,\noh Virgen gloriosa y bendita.\nAmén.`,
      },
      {
        title: "Magnificat",
        text: `Proclama mi alma la grandeza del Señor,\nse alegra mi espíritu en Dios mi Salvador,\nporque ha mirado la humildad de su esclava.\n\nDesde ahora me felicitarán todas las generaciones,\nporque el Poderoso ha hecho obras grandes en mí:\nsu nombre es santo, y su misericordia llega a sus fieles\nde generación en generación.\n\nÉl hace proezas con su brazo:\ndispersa a los soberbios de corazón,\nderriba del trono a los poderosos\ny enaltece a los humildes,\na los hambrientos los colma de bienes\ny a los ricos despide vacíos.\n\nAuxilia a Israel, su siervo,\nacordándose de su santa misericordia,\ncomo lo había prometido a nuestros padres,\nen favor de Abrahán y su descendencia\npor siempre. Amén.`,
      },
    ],
  },
  {
    id: "sagrado-corazon",
    title: "Sagrado Corazón",
    subtitle: "Devoción al Corazón de Jesús",
    icon: "heart",
    accent: C.red,
    prayers: [
      {
        title: "Consagración al Sagrado Corazón",
        text: `Yo me entrego y consagro al Sagrado Corazón de Jesús,\nmi persona, mi vida, mis acciones, penas y sufrimientos,\npara no querer servirme de parte alguna de mi ser\nsino para honrarle, amarle y glorificarle.\n\nReina, pues, oh Sagrado Corazón de Jesús, en mí; haz de mí lo que quieras;\nque tu voluntad sea la mía. Amén.`,
      },
      {
        title: "Ofrecimiento al Sagrado Corazón",
        text: `Oh Corazón divino de Jesús,\npor medio del Corazón Inmaculado de María Santísima,\nte ofrezco las oraciones, obras y padecimientos de este día,\nen reparación de nuestros pecados\ny por todas las intenciones por las que tú continuamente te inmolas\nen el Santísimo Sacramento del altar.\n\nTe los ofrezco en particular por las intenciones del Apostolado de la Oración\ny por las intenciones del Santo Padre. Amén.`,
      },
      {
        title: "Las doce promesas del Sagrado Corazón",
        text: `1. Daré a mis devotos todas las gracias necesarias para su estado.\n2. Pondré paz en sus familias.\n3. Les consolaré en todas sus aflicciones.\n4. Seré su refugio seguro durante la vida y, sobre todo, en la muerte.\n5. Derramaré abundantes bendiciones sobre todas sus empresas.\n6. Los pecadores hallarán en mi Corazón la fuente y el océano infinito de la misericordia.\n7. Las almas tibias se harán fervorosas.\n8. Las almas fervorosas se elevarán a una gran perfección.\n9. Bendeciré las casas en las que la imagen de mi Sagrado Corazón sea expuesta y honrada.\n10. Daré a los sacerdotes el don de mover los corazones más empedernidos.\n11. Las personas que propaguen esta devoción tendrán su nombre escrito en mi Corazón.\n12. A los que comulguen los nueve primeros viernes de cada mes les concederé la gracia de la perseverancia final.`,
      },
      {
        title: "Letanías del Sagrado Corazón (selección)",
        text: `Señor, ten piedad. Cristo, ten piedad. Señor, ten piedad.\n\nCorazón de Jesús, Hijo del Eterno Padre, ten piedad de nosotros.\nCorazón de Jesús, formado por el Espíritu Santo en el seno de la Virgen Madre, ten piedad de nosotros.\nCorazón de Jesús, de majestad infinita, ten piedad de nosotros.\nCorazón de Jesús, horno ardiente de caridad, ten piedad de nosotros.\nCorazón de Jesús, lleno de bondad y de amor, ten piedad de nosotros.\nCorazón de Jesús, paciente y de mucha misericordia, ten piedad de nosotros.\nCorazón de Jesús, fuente de vida y de santidad, ten piedad de nosotros.\nCorazón de Jesús, propiciación por nuestros pecados, ten piedad de nosotros.\nCorazón de Jesús, traspasado por una lanza, ten piedad de nosotros.\nCorazón de Jesús, fuente de toda consolación, ten piedad de nosotros.\nCorazón de Jesús, vida y resurrección nuestra, ten piedad de nosotros.\nCorazón de Jesús, paz y reconciliación nuestra, ten piedad de nosotros.\nCorazón de Jesús, salvación de los que en Ti esperan, ten piedad de nosotros.\nCorazón de Jesús, esperanza de los que mueren en Ti, ten piedad de nosotros.\nCorazón de Jesús, delicia de todos los Santos, ten piedad de nosotros.\n\nCordero de Dios, que quitas el pecado del mundo, perdónanos, Señor.\nCordero de Dios, que quitas el pecado del mundo, escúchanos, Señor.\nCordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.`,
      },
    ],
  },
  {
    id: "espiritu",
    title: "Espíritu Santo",
    subtitle: "Invocaciones y dones",
    icon: "paloma",
    accent: C.blue,
    prayers: [
      {
        title: "Ven, Espíritu Santo",
        text: `Ven, Espíritu Santo,\nllena los corazones de tus fieles\ny enciende en ellos el fuego de tu amor.\n\nV. Envía tu Espíritu y serán creados.\nR. Y renovarás la faz de la tierra.\n\nOremos: Oh Dios, que llenaste los corazones de tus fieles con la luz del Espíritu Santo, concédenos por el mismo Espíritu sentir con rectitud y gozar siempre de su consuelo. Por Jesucristo nuestro Señor. Amén.`,
      },
      {
        title: "Veni Creator",
        text: `Ven, Espíritu Creador,\nvisita las almas de tus fieles,\nllena de gracia soberana\nlos corazones que creaste.\n\nTú, llamado Paráclito,\ndon de Dios Altísimo,\nfuente viva, fuego, caridad\ny espiritual unción.\n\nDon en sus dones septiforme,\ndedo de la diestra del Padre,\nsolemne promesa del Padre,\nque inspiras nuestras palabras.\n\nEnciende con tu luz nuestros sentidos,\ninfunde tu amor en nuestros corazones,\ny conforta con tu perpetuo auxilio\nla flaqueza de nuestra carne.\n\nAleja al enemigo de nosotros,\ndanos pronto la paz,\nsé Tú mismo nuestro guía\ny evitaremos todo mal. Amén.`,
      },
      {
        title: "Los siete dones",
        text: `1. Sabiduría — para gustar las cosas de Dios.\n2. Entendimiento — para penetrar las verdades de la fe.\n3. Consejo — para acertar en las decisiones.\n4. Fortaleza — para vencer las dificultades.\n5. Ciencia — para conocer la voluntad de Dios.\n6. Piedad — para tratar a Dios como Padre.\n7. Temor de Dios — para no ofender a quien tanto nos ama.`,
      },
      {
        title: "Los doce frutos",
        text: `Caridad, gozo, paz,\npaciencia, longanimidad, bondad,\nbenignidad, mansedumbre, fidelidad,\nmodestia, continencia, castidad.\n\n(Cf. Gálatas 5, 22-23)`,
      },
      {
        title: "Oración del cardenal Mercier",
        text: `Oh Espíritu Santo, Alma de mi alma, te adoro.\nIlumíname, guíame, fortaléceme, consuélame.\n\nDime lo que debo hacer, dame tus órdenes.\n\nTe prometo someterme a todo lo que desees de mí\ny aceptar todo lo que permitas que me suceda.\n\nSólo hazme conocer tu voluntad. Amén.`,
      },
    ],
  },
  {
    id: "santos",
    title: "Santos e intercesores",
    subtitle: "Oraciones a los santos",
    icon: "star",
    accent: C.green,
    prayers: [
      {
        title: "A San José",
        text: `Glorioso San José,\nesposo virginal de María\ny padre adoptivo de Jesús,\na ti acudimos buscando tu intercesión.\n\nTú que viviste tan unido al Hijo de Dios,\nalcánzanos la gracia de imitar tus virtudes:\nla humildad, el silencio, la laboriosidad\ny el amor a Jesús y María.\n\nProtégenos en la vida y, sobre todo,\nen la hora de nuestra muerte. Amén.`,
      },
      {
        title: "A San Antonio de Padua",
        text: `Glorioso San Antonio,\namigo de los pobres y consuelo de los afligidos,\ntú que durante tu vida realizaste tantos prodigios\npor el poder de la fe,\n\nintercede por mí ante el Señor\npara que me conceda lo que ahora le pido,\nsi es para mayor gloria suya y bien de mi alma.\n\nQue, siguiendo tu ejemplo,\nviva siempre en gracia de Dios\ny merezca alcanzar la gloria eterna. Amén.`,
      },
      {
        title: "Nada te turbe — Santa Teresa",
        text: `Nada te turbe,\nnada te espante,\ntodo se pasa,\nDios no se muda.\n\nLa paciencia\ntodo lo alcanza;\nquien a Dios tiene\nnada le falta:\nsólo Dios basta.`,
      },
      {
        title: "Hazme instrumento — San Francisco",
        text: `Señor, haz de mí un instrumento de tu paz:\ndonde haya odio, ponga yo amor;\ndonde haya ofensa, perdón;\ndonde haya discordia, unión;\ndonde haya error, verdad;\ndonde haya duda, fe;\ndonde haya desesperación, esperanza;\ndonde haya tinieblas, luz;\ndonde haya tristeza, alegría.\n\nMaestro, que no busque tanto\nser consolado, como consolar;\nser comprendido, como comprender;\nser amado, como amar.\n\nPorque dando se recibe,\nperdonando se es perdonado,\ny muriendo se vive para la vida eterna.`,
      },
      {
        title: "A Santa Rita de Casia",
        text: `Gloriosa Santa Rita,\nabogada de los casos imposibles\ny consoladora de los afligidos,\nintercede por mí ante Dios\nen esta necesidad que tengo.\n\nObtén para mí la gracia de la paciencia en las pruebas,\nla fortaleza en los sufrimientos\ny la confianza plena en la Providencia divina.\n\nQue, siguiendo tu ejemplo, sepa unir mis dolores\na los del Crucificado y alcance contigo la gloria del cielo. Amén.`,
      },
      {
        title: "A San Judas Tadeo",
        text: `Glorioso apóstol San Judas Tadeo,\nfiel siervo y amigo de Jesús,\nla Iglesia te invoca como patrón de los casos difíciles y desesperados.\n\nRuega por mí, que soy tan miserable;\nutiliza ese privilegio especial que se te ha concedido\nde traer ayuda visible y rápida cuando casi se ha perdido toda esperanza.\n\nVen en mi auxilio en esta gran necesidad\npara que pueda recibir el consuelo y socorro del cielo. Amén.`,
      },
      {
        title: "A San Miguel Arcángel",
        text: `San Miguel Arcángel,\ndefiéndenos en la batalla.\nSé nuestro amparo contra la perversidad\ny asechanzas del demonio.\n\nReprímale Dios, pedimos suplicantes,\ny tú, Príncipe de la milicia celestial,\narroja al infierno con el divino poder,\na Satanás y a los otros espíritus malignos\nque andan dispersos por el mundo\npara la perdición de las almas. Amén.`,
      },
      {
        title: "Por las almas del Purgatorio",
        text: `Señor Dios, Padre de bondad infinita,\nte pedimos por las almas de los fieles difuntos\nque están en el Purgatorio,\nesperando entrar en tu presencia.\n\nPor los méritos de la Pasión de tu Hijo,\npor la intercesión de la Virgen María\ny por nuestras humildes oraciones,\nconcédeles el descanso eterno.\n\nDales, Señor, el descanso eterno.\nY brille para ellas la luz perpetua.\nDescansen en paz. Amén.`,
      },
    ],
  },
  {
    id: "necesidades",
    title: "Momentos especiales",
    subtitle: "Para cada necesidad",
    icon: "flor",
    accent: C.lavenderDark,
    prayers: [
      {
        title: "En la enfermedad",
        text: `Señor Jesús, que durante tu vida en la tierra\ncuidaste a los enfermos y consolaste a los afligidos,\nmírame con compasión en este momento de enfermedad.\n\nDame paciencia para sobrellevar el dolor,\nfortaleza para no desanimarme\ny confianza para abandonarme en tu voluntad.\n\nUne mis sufrimientos a los tuyos en la cruz,\npara que sirvan para mi santificación\ny la salvación de las almas.\n\nSi es tu voluntad, devuélveme la salud.\nMaría, Salud de los enfermos, ruega por mí. Amén.`,
      },
      {
        title: "Por un familiar enfermo",
        text: `Señor, te confío a esta persona querida\nque ahora sufre por la enfermedad.\n\nTú que sanaste a tantos durante tu vida terrena,\nmírala con misericordia\ny dale alivio en su dolor.\n\nDale paciencia, fortaleza y fe.\nConsuela a quienes le acompañan\ny, si es tu voluntad, devuélvele la salud.\n\nQue se cumpla en ella tu santa voluntad.\nMaría, Madre nuestra, intercede. Amén.`,
      },
      {
        title: "En la angustia o ansiedad",
        text: `Señor Jesús,\nmi corazón está turbado y mi alma inquieta.\n\nTú que dijiste: "Vengan a mí los que están cansados\ny agobiados, que yo los aliviaré",\nacojo tu invitación y vengo a ti.\n\nQuita de mi corazón el miedo,\nlibérame de la angustia,\ny dame tu paz, esa paz que el mundo no puede dar.\n\nPongo en tus manos lo que me preocupa.\nConfío en ti. Tú eres mi Pastor, nada me faltará. Amén.`,
      },
      {
        title: "Por la familia",
        text: `Señor Jesús, María y José,\nen vosotros contemplamos el esplendor del verdadero amor;\na vosotros nos confiamos con confianza.\n\nSagrada Familia de Nazaret, haz también de nuestras familias\nlugar de comunión y cenáculo de oración,\nauténticas escuelas del Evangelio\ne iglesias domésticas pequeñas.\n\nQue nunca más en las familias se experimente\nla violencia, la cerrazón y la división,\ny que cualquiera que haya sido herido o escandalizado\nencuentre pronto consuelo y curación.\n\nAmén.`,
      },
      {
        title: "Por los hijos",
        text: `Señor, te doy gracias por mis hijos,\nregalo precioso de tu providencia.\n\nDame sabiduría para educarlos en la fe,\npaciencia para acompañarlos en sus dificultades,\ny prudencia para corregirlos cuando sea necesario.\n\nProtégelos de todo mal,\nbendícelos en sus estudios y trabajos,\nguía sus pasos por el camino del bien.\n\nQue sean siempre fieles a ti\ny encuentren la felicidad verdadera. Amén.`,
      },
      {
        title: "Antes de un viaje",
        text: `Dios todopoderoso, que siempre acompañas a los que en ti confían,\nescucha nuestras oraciones,\nestablece nuestros pasos en el camino que vamos a emprender,\ny acompáñanos con tu protección,\npara que, defendidos por tu gracia,\nrealicemos felizmente nuestro viaje\ny lleguemos sin contratiempos a nuestro destino.\n\nSan Cristóbal y nuestro Ángel de la Guarda, acompañadnos.\nPor Jesucristo nuestro Señor. Amén.`,
      },
      {
        title: "Por los difuntos",
        text: `Dales, Señor, el descanso eterno,\ny brille para ellos la luz perpetua.\nDescansen en paz. Amén.\n\nPor la misericordia de Dios,\nque las almas de los fieles difuntos descansen en paz. Amén.`,
      },
      {
        title: "Para una buena muerte",
        text: `Jesús, José y María,\nos doy el corazón y el alma mía.\n\nJesús, José y María,\nasistidme en mi última agonía.\n\nJesús, José y María,\nen vosotros descanse en paz el alma mía.\n\nAmén.`,
      },
      {
        title: "En tiempos de duda",
        text: `Señor, creo, ayuda mi poca fe.\n\nEn medio de mis dudas, no me apartes de tu lado.\nIlumina mi entendimiento con la luz de tu Espíritu.\n\nQue mi fe no descanse en mis sentimientos,\nsino en tu Palabra, que no pasa.\n\nMaría, mujer de fe, enséñame a creer como tú creíste,\na confiar como tú confiaste,\na decir "hágase" como tú lo dijiste. Amén.`,
      },
    ],
  },
  {
    id: "semana-santa",
    title: "Semana Santa",
    subtitle: "Vía Crucis y Pasión",
    icon: "candle",
    accent: C.ink,
    prayers: [
      {
        title: "Las siete palabras de Cristo",
        text: `Primera: «Padre, perdónalos, porque no saben lo que hacen.» (Lc 23,34)\n\nSegunda: «En verdad te digo: hoy estarás conmigo en el Paraíso.» (Lc 23,43)\n\nTercera: «Mujer, ahí tienes a tu hijo... Ahí tienes a tu madre.» (Jn 19,26-27)\n\nCuarta: «Dios mío, Dios mío, ¿por qué me has abandonado?» (Mc 15,34)\n\nQuinta: «Tengo sed.» (Jn 19,28)\n\nSexta: «Todo está cumplido.» (Jn 19,30)\n\nSéptima: «Padre, en tus manos encomiendo mi espíritu.» (Lc 23,46)`,
      },
      {
        title: "Vía Crucis — Las catorce estaciones",
        text: `I. Jesús es condenado a muerte.\nII. Jesús carga con la cruz.\nIII. Jesús cae por primera vez.\nIV. Jesús encuentra a su Madre.\nV. El Cireneo ayuda a Jesús a llevar la cruz.\nVI. La Verónica enjuga el rostro de Jesús.\nVII. Jesús cae por segunda vez.\nVIII. Jesús consuela a las mujeres de Jerusalén.\nIX. Jesús cae por tercera vez.\nX. Jesús es despojado de sus vestiduras.\nXI. Jesús es clavado en la cruz.\nXII. Jesús muere en la cruz.\nXIII. Jesús es bajado de la cruz.\nXIV. Jesús es sepultado.\n\nEn cada estación: "Te adoramos, oh Cristo, y te bendecimos, que por tu santa cruz redimiste al mundo."`,
      },
      {
        title: "Stabat Mater (fragmento)",
        text: `De pie, la Madre dolorosa\njunto a la cruz lloraba\nmientras su Hijo pendía.\n\nCuya alma triste y llorosa,\ntraspasada y dolorida,\nfiero cuchillo tenía.\n\nOh, cuán triste y afligida\nse vio la Madre escogida\nde tantos tormentos llena,\ncuando triste contemplaba\ny dolorosa miraba\nde su Hijo amado la pena.`,
      },
      {
        title: "Domingo de Ramos",
        text: `Bendito el que viene en nombre del Señor.\n¡Hosanna en las alturas!\n\nSeñor Jesús, que entraste en Jerusalén aclamado como Rey,\ny pocos días después fuiste clavado en la cruz,\ndanos la gracia de acompañarte en tu Pasión\ncon corazón fiel y agradecido.\n\nQue nuestras palmas de hoy no sean sólo gesto exterior,\nsino expresión de un corazón que te reconoce como Señor de su vida. Amén.`,
      },
      {
        title: "Jueves Santo",
        text: `Señor Jesús, en este día instituiste la Eucaristía y el sacerdocio.\n\nNos dejaste el regalo más grande: tu Cuerpo y tu Sangre,\nalimento para nuestro camino.\n\nNos lavaste los pies para enseñarnos a servir.\nNos diste el mandamiento nuevo: amarnos los unos a los otros como tú nos amas.\n\nQue sepamos vivir agradecidos por estos dones\ny llevarlos a los demás. Amén.`,
      },
      {
        title: "Viernes Santo",
        text: `Te adoramos, oh Cristo, y te bendecimos,\nporque por tu santa cruz redimiste al mundo.\n\nSeñor crucificado, en silencio contemplo tu pasión.\nVeo el precio de mis pecados, veo la inmensidad de tu amor.\n\nNo merezco lo que has hecho por mí, pero lo recibo con gratitud y dolor.\n\nQue tu sangre me purifique, tu cruz me sostenga,\ntu muerte me dé vida nueva. Amén.`,
      },
      {
        title: "Sábado Santo",
        text: `Hoy hay un gran silencio en la tierra; un gran silencio y soledad.\nGran silencio porque el Rey duerme.\n\nSeñor, en este día de espera, acompaño a tu Madre en su dolor.\nElla, que no perdió la fe, me enseña a esperar contra toda esperanza.\n\nQue mi corazón, como el suyo, conserve la llama de la fe\nincluso en las horas más oscuras. Amén.`,
      },
      {
        title: "Pascua de Resurrección",
        text: `¡Cristo ha resucitado! ¡Verdaderamente ha resucitado, aleluya!\n\nSeñor resucitado, tú has vencido a la muerte y al pecado.\nTu victoria es nuestra victoria, tu vida es nuestra vida.\n\nLlena mi corazón de gozo pascual.\nQue viva como hijo de la luz,\ntestigo de tu Resurrección\ny portador de esperanza para el mundo. Amén.`,
      },
    ],
  },
  {
    id: "novenas",
    title: "Novenas",
    subtitle: "Nueve días de oración",
    icon: "candle",
    accent: "#b8943d",
    prayers: [
      {
        title: "Novena al Espíritu Santo — Introducción",
        text: `La Novena al Espíritu Santo se reza durante los nueve días entre la Ascensión y Pentecostés, aunque puede rezarse en cualquier momento del año cuando se desea pedir los dones del Espíritu Santo.\n\nOración para cada día:\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n\nV. Envía tu Espíritu y serán creados.\nR. Y renovarás la faz de la tierra.\n\nOremos: Oh Dios, que llenaste los corazones de tus fieles con la luz del Espíritu Santo, concédenos por el mismo Espíritu sentir con rectitud y gozar siempre de tu consuelo. Por Cristo nuestro Señor. Amén.`,
      },
      {
        title: "Novena al Espíritu Santo — Días 1 al 3",
        text: `DÍA 1 — Don de la Sabiduría:\nEspíritu Santo, Dios de amor, te pido el don de la SABIDURÍA. Dame gustar las cosas de Dios por encima de las del mundo. Que mi corazón no se apegue a nada que no sea eterno.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 2 — Don del Entendimiento:\nEspíritu Santo, luz del alma, te pido el don del ENTENDIMIENTO. Ilumina mi mente para comprender las verdades de la fe. Que la Palabra de Dios penetre en mi corazón y dé fruto.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 3 — Don del Consejo:\nEspíritu Santo, consejero fiel, te pido el don del CONSEJO. Guía mis decisiones y mis pasos. Que no me fíe solo de mi criterio, sino que busque siempre tu voluntad.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)`,
      },
      {
        title: "Novena al Espíritu Santo — Días 4 al 6",
        text: `DÍA 4 — Don de la Fortaleza:\nEspíritu Santo, fortaleza en la debilidad, te pido el don de la FORTALEZA. Dame valor para vivir como cristiano sin avergonzarme. Que sepa resistir las tentaciones y no desanimarme en el camino del bien.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 5 — Don de la Ciencia:\nEspíritu Santo, maestro interior, te pido el don de la CIENCIA. Dame conocer la voluntad de Dios en las cosas de cada día. Que sepa leer los signos de los tiempos con ojos de fe.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 6 — Don de la Piedad:\nEspíritu Santo, espíritu de filiación, te pido el don de la PIEDAD. Que trate a Dios como Padre, con confianza y amor filial. Que mi oración no sea un trámite, sino un encuentro.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)`,
      },
      {
        title: "Novena al Espíritu Santo — Días 7 al 9",
        text: `DÍA 7 — Don del Temor de Dios:\nEspíritu Santo, te pido el don del TEMOR DE DIOS. No el miedo servil, sino el amor reverente que no quiere ofender a quien tanto nos ama. Que prefiera perder todo antes que perder la gracia de Dios.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 8 — Los frutos del Espíritu:\nEspíritu Santo, fuente de todo bien, te pido los FRUTOS de tu presencia: caridad, gozo, paz, paciencia, benignidad, bondad, longanimidad, mansedumbre, fe, modestia, continencia y castidad. Que mi vida sea un jardín donde tú habites.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 9 — Pentecostés personal:\nEspíritu Santo, como los apóstoles en el Cenáculo, me dispongo a recibirte plenamente. Ven sobre mí como viniste en Pentecostés. Renueva en mí el fuego del Bautismo y la Confirmación. Hazme testigo vivo de Jesucristo en el mundo.\nVen, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía tu Espíritu y serán creados, y renovarás la faz de la tierra.\n(Padre Nuestro, Ave María, Gloria)\nAmén.`,
      },
      {
        title: "Novena a San José — Introducción",
        text: `La Novena a San José se reza tradicionalmente antes del 19 de marzo (solemnidad de San José) o del 1 de mayo (San José Obrero), aunque puede rezarse en cualquier momento.\n\nOración para cada día:\nGlorioso San José, padre adoptivo de Jesús y esposo virginal de María, a ti acudo con confianza. Tú, que fuiste elegido por Dios para las más altas misiones, intercede por mí ante el Señor.\n\n(Seguir con la oración del día correspondiente)`,
      },
      {
        title: "Novena a San José — Días 1 al 3",
        text: `DÍA 1 — San José, hombre justo:\nSeñor, que José fue llamado "varón justo", concédeme la gracia de la rectitud en mis pensamientos, palabras y obras. Que mi vida sea honrada ante Dios y ante los hombres.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 2 — San José, esposo fiel:\nSeñor, por la intercesión de José, protege los matrimonios y las familias. Que los esposos se amen como José amó a María: con fidelidad, respeto y entrega total.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 3 — San José, padre protector:\nSeñor, que José protegió a Jesús y María de todos los peligros, que también proteja hoy a mi familia. Que ningún mal nos alcance bajo su amparo.\n(Padre Nuestro, Ave María, Gloria)`,
      },
      {
        title: "Novena a San José — Días 4 al 6",
        text: `DÍA 4 — San José, hombre del silencio:\nSeñor, en el Evangelio José no dice ninguna palabra, pero actúa con fe. Dame la gracia del silencio fecundo: escuchar más, hablar menos, actuar con fidelidad.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 5 — San José, trabajador:\nSeñor, que José santificó el trabajo con sus manos, bendice mi trabajo y el de todos los que trabajan honradamente. Que ningún trabajador carezca de lo necesario.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 6 — San José, hombre de fe:\nSeñor, José obedeció al ángel sin entender todo, fiándose solo de tu Palabra. Dame esa fe que actúa aunque no vea, que confía aunque no comprenda.\n(Padre Nuestro, Ave María, Gloria)`,
      },
      {
        title: "Novena a San José — Días 7 al 9",
        text: `DÍA 7 — San José, en el exilio:\nSeñor, José huyó a Egipto sin quejarse, cargando con la responsabilidad de proteger a Jesús y María. En mis momentos de dificultad y extrañeza, dame su fortaleza serena.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 8 — San José, patrono de la buena muerte:\nSeñor, se cree que José murió entre los brazos de Jesús y María. Concédeme esa muerte feliz: morir en gracia, acompañado y en paz. San José, patrono de los agonizantes, ruega por mí.\n(Padre Nuestro, Ave María, Gloria)\n\nDÍA 9 — San José, patrono de la Iglesia universal:\nSeñor, que José protegió a la Sagrada Familia, protege hoy a tu Iglesia. Que los pastores sean fieles, los fieles santos y la Iglesia sea signo de tu amor en el mundo.\n(Padre Nuestro, Ave María, Gloria)\nAmén.`,
      },
      {
        title: "Novena a la Divina Misericordia — Introducción",
        text: `Esta novena fue dictada por Jesús a Santa Faustina Kowalska y se reza durante los nueve días previos al Domingo de la Divina Misericordia (segundo domingo de Pascua).\n\nOración para comenzar cada día:\nOh Jesús eterno, tú mismo me mandas que interceda por las distintas categorías de almas. En tu misericordia entra a través de las llagas de tu Pasión, que fueron abiertas para nosotros con la más profunda ternura de tu divina caridad.`,
      },
      {
        title: "Novena Divina Misericordia — Días 1 al 3",
        text: `DÍA 1 — Por toda la humanidad, especialmente los pecadores:\n"Hoy tráeme a toda la humanidad, especialmente a todos los pecadores, e immérgela en el océano de mi misericordia."\nPadre Eterno, dirige tu mirada misericordiosa a toda la humanidad... (Coronilla de la Divina Misericordia)\n\nDÍA 2 — Por las almas de los sacerdotes y religiosos:\n"Hoy tráeme las almas de los sacerdotes y religiosos, e introdúcelos en mi insondable misericordia."\nPadre Eterno, te ofrezco los cuerpos y las almas, los trabajos, las mortificaciones, los ayunos de todos los sacerdotes y religiosos...\n\nDÍA 3 — Por todas las almas piadosas y fieles:\n"Hoy tráeme todas las almas piadosas y fieles, e introdúcelas en el río de mi compasión."\nPadre Eterno, dirige tu mirada misericordiosa a las almas fieles como herencia de tu Hijo...`,
      },
      {
        title: "Novena Divina Misericordia — Días 4 al 6",
        text: `DÍA 4 — Por los que no conocen a Dios y los que no creen en Jesús:\n"Hoy tráeme a los paganos y a los que todavía no me conocen."\nPadre Eterno, dirige tu mirada misericordiosa a las almas que no te conocen, especialmente a todas aquellas encerradas en los errores del islam...\n\nDÍA 5 — Por los herejes y apóstatas:\n"Hoy tráeme las almas de los herejes y apóstatas, e introdúcelos en el océano de mi misericordia."\nPadre Eterno, tú que no rechazas nada de lo que te es ofrecido, mira con misericordia a estas almas...\n\nDÍA 6 — Por las almas mansas y humildes y las almas de los niños:\n"Hoy tráeme las almas mansas y humildes y las almas de los niños, e introdúcelas en mi misericordia."\nPadre Eterno, dirige tu mirada misericordiosa a las almas mansas, humildes y a las almas de los niños...`,
      },
      {
        title: "Novena Divina Misericordia — Días 7 al 9",
        text: `DÍA 7 — Por las almas que veneran y glorifican la Divina Misericordia:\n"Hoy tráeme las almas que veneran y glorifican mi misericordia, e introdúcelas en el gozo de mi misericordia."\nPadre Eterno, dirige tu mirada a las almas que glorifican y veneran tu mayor atributo: tu insondable misericordia...\n\nDÍA 8 — Por las almas del purgatorio:\n"Hoy tráeme las almas que están en la prisión del purgatorio, e introdúcelas en el abismo de mi misericordia."\nPadre Eterno, te ofrezco el Cuerpo y la Sangre, el Alma y la Divinidad de tu amantísimo Hijo por las almas que sufren en el purgatorio...\n\nDÍA 9 — Por las almas tibias:\n"Hoy tráeme las almas tibias, e introdúcelas en el abismo de mi misericordia."\nPadre Eterno, dirige tu mirada misericordiosa a las almas tibias que son como un corazón agonizante... que el rayo de tu gracia las transforme.\n\nAmén.`,
      },
      {
        title: "Coronilla de la Divina Misericordia",
        text: `Se reza en el rosario normal.\n\nComienzo:\nPadre Nuestro... Ave María... Credo...\n\nEn las cuentas grandes (Padre Nuestro):\n"Padre Eterno, te ofrezco el Cuerpo y la Sangre, el Alma y la Divinidad de tu amantísimo Hijo, nuestro Señor Jesucristo, en expiación de nuestros pecados y los del mundo entero."\n\nEn las diez cuentas pequeñas (Ave María):\n"Por su dolorosa Pasión, ten misericordia de nosotros y del mundo entero."\n\nAl final (3 veces):\n"Santo Dios, Santo Fuerte, Santo Inmortal, ten piedad de nosotros y del mundo entero."`,
      },
      {
        title: "Novena a la Virgen María — Introducción",
        text: `Esta novena puede rezarse antes de cualquier fiesta mariana: la Inmaculada Concepción (8 diciembre), la Asunción (15 agosto), Nuestra Señora del Carmen (16 julio), la Anunciación (25 marzo) o en cualquier momento del año.\n\nOración inicial para cada día:\nDios te salve, María, llena eres de gracia...\nSanta María, Madre de Dios y Madre mía, en este día de novena acudo a ti con confianza.\n\nSalve...`,
      },
      {
        title: "Novena a la Virgen — Días 1 al 3",
        text: `DÍA 1 — María, llena de gracia:\nSeñora, tú que fuiste llena de la gracia de Dios desde el primer instante de tu concepción, alcánzame la gracia que más necesito en este momento de mi vida. Dame un corazón limpio y disponible como el tuyo.\n(Ave María × 3)\n\nDÍA 2 — María, Madre de Jesús:\nSeñora, tú que dijiste "hágase en mí según tu palabra", dame esa disponibilidad total a la voluntad de Dios. Que yo también pueda decir "sí" a Dios en cada momento de mi vida.\n(Ave María × 3)\n\nDÍA 3 — María, Madre de la Iglesia:\nSeñora, que acompañaste a los apóstoles en el Cenáculo esperando al Espíritu Santo, intercede por tu Iglesia hoy. Que sea fiel a su misión, unida en el amor y valiente en el testimonio.\n(Ave María × 3)`,
      },
      {
        title: "Novena a la Virgen — Días 4 al 6",
        text: `DÍA 4 — María, Madre del Amor Hermoso:\nSeñora, enséñame a amar. Que mi amor no sea egoísta ni interesado, sino generoso como el tuyo. Que sepa amar a Dios sobre todas las cosas y al prójimo como a mí mismo.\n(Ave María × 3)\n\nDÍA 5 — María, Reina de la Paz:\nSeñora, en un mundo lleno de conflictos y divisiones, intercede por la paz. Que comience por mi corazón, se extienda a mi familia y llegue al mundo entero. María, Reina de la Paz, ruega por nosotros.\n(Ave María × 3)\n\nDÍA 6 — María, Consoladora de los afligidos:\nSeñora, tú que conociste el dolor junto a la cruz, consuela a todos los que sufren. En especial te encomiendo a los enfermos, los solos, los que lloran sin consuelo. Muéstrales que no están solos.\n(Ave María × 3)`,
      },
      {
        title: "Novena a la Virgen — Días 7 al 9",
        text: `DÍA 7 — María, Auxilio de los cristianos:\nSeñora, en tantas batallas de la vida, sé nuestro auxilio y defensa. Protégenos del mal, guíanos en la verdad y ayúdanos a perseverar hasta el final.\n(Ave María × 3)\n\nDÍA 8 — María, Estrella de la evangelización:\nSeñora, tú que llevaste a Cristo al mundo en tu seno, ayúdanos a llevar a Cristo a quienes nos rodean. Que seamos testigos alegres del Evangelio con nuestra vida.\n(Ave María × 3)\n\nDÍA 9 — María, Reina y Madre:\nSeñora, en este último día de novena me pongo totalmente en tus manos. Presenta al Señor mis oraciones, mis deseos, mis necesidades y las de todos los que me has encomendado.\nTú que todo lo puedes ante Dios, alcánzame lo que te pido si es para mayor gloria de Él y bien de mi alma.\n(Ave María × 3)\nSalve...\nAmén.`,
      },
    ],
  },
  {
    id: "salmos",
    title: "Salmos y cánticos",
    subtitle: "Del Antiguo y Nuevo Testamento",
    icon: "book",
    accent: C.gold,
    prayers: [
      {
        title: "Salmo 22 — El Señor es mi pastor",
        text: `El Señor es mi pastor, nada me falta:\nen verdes praderas me hace recostar;\nme conduce hacia fuentes tranquilas\ny repara mis fuerzas;\nme guía por el sendero justo,\npor el honor de su nombre.\n\nAunque camine por cañadas oscuras,\nnada temo, porque tú vas conmigo:\ntu vara y tu cayado me sosiegan.\n\nPreparas una mesa ante mí,\nenfrente de mis enemigos;\nme unges la cabeza con perfume,\ny mi copa rebosa.\n\nTu bondad y tu misericordia me acompañan\ntodos los días de mi vida,\ny habitaré en la casa del Señor\npor años sin término.`,
      },
      {
        title: "Salmo 50 — Miserere",
        text: `Misericordia, Dios mío, por tu bondad,\npor tu inmensa compasión borra mi culpa;\nlava del todo mi delito,\nlimpia mi pecado.\n\nPues yo reconozco mi culpa,\ntengo siempre presente mi pecado:\ncontra ti, contra ti solo pequé,\ncometí la maldad que aborreces.\n\nOh Dios, crea en mí un corazón puro,\nrenuévame por dentro con espíritu firme;\nno me arrojes lejos de tu rostro,\nno me quites tu santo espíritu.\n\nDevuélveme la alegría de tu salvación,\nafiánzame con espíritu generoso.\nSeñor, abre mis labios,\ny mi boca proclamará tu alabanza.`,
      },
      {
        title: "Salmo 90 — A la sombra del Altísimo",
        text: `Tú que habitas al amparo del Altísimo,\nque vives a la sombra del Omnipotente,\ndi al Señor: «Refugio mío, alcázar mío,\nDios mío, confío en ti».\n\nÉl te librará de la red del cazador,\nde la peste funesta.\nTe cubrirá con sus plumas,\nbajo sus alas te refugiarás:\nsu brazo es escudo y armadura.\n\nNo temerás el espanto nocturno,\nni la flecha que vuela de día,\nni la peste que se desliza en las tinieblas.\n\nPorque a sus ángeles ha dado órdenes para que te guarden en tus caminos;\nte llevarán en sus palmas, para que tu pie no tropiece en la piedra.`,
      },
      {
        title: "Te Deum",
        text: `A ti, oh Dios, te alabamos,\na ti, Señor, te reconocemos.\nA ti, eterno Padre, te venera toda la creación.\n\nLos ángeles todos, los cielos y todas las potestades te honran.\nLos querubines y serafines te cantan sin cesar:\nSanto, Santo, Santo es el Señor, Dios del universo.\n\nLlenos están los cielos y la tierra de la majestad de tu gloria.\nA ti te ensalza el coro glorioso de los apóstoles,\nla multitud admirable de los profetas,\nel blanco ejército de los mártires.\n\nA ti la santa Iglesia, extendida por toda la tierra,\nte aclama: Padre de inmensa majestad,\nHijo único y verdadero, digno de adoración,\nEspíritu Santo, Defensor.\n\nTú eres el Rey de la gloria, Cristo.\nTú eres el Hijo único del Padre.\nTú, para liberar al hombre,\naceptaste la condición humana sin desdeñar el seno de la Virgen.\n\nTú, rotas las cadenas de la muerte,\nabriste a los creyentes el Reino de los Cielos.\nTú te sientas a la derecha de Dios\nen la gloria del Padre.\n\nCreemos que un día has de venir como juez.\nTe rogamos, pues, que vengas en ayuda de tus siervos,\na quienes redimiste con tu preciosa Sangre.`,
      },
      {
        title: "Cántico de Simeón",
        text: `Ahora, Señor, según tu promesa,\npuedes dejar a tu siervo irse en paz;\nporque mis ojos han visto a tu Salvador,\na quien has presentado ante todos los pueblos:\n\nluz para alumbrar a las naciones\ny gloria de tu pueblo Israel.\n\n(Lucas 2, 29-32)`,
      },
      {
        title: "Salmo 129 — De Profundis",
        text: `Desde lo hondo a ti grito, Señor;\nSeñor, escucha mi voz;\nestén tus oídos atentos\na la voz de mi súplica.\n\nSi llevas cuenta de los delitos, Señor,\n¿quién podrá resistir?\nPero de ti procede el perdón,\ny así infundes respeto.\n\nMi alma espera en el Señor,\nespera en su palabra;\nmi alma aguarda al Señor,\nmás que el centinela la aurora.\n\nAguarde Israel al Señor,\ncomo el centinela la aurora;\nporque del Señor viene la misericordia,\nla redención copiosa;\ny él redimirá a Israel\nde todos sus delitos.`,
      },
    ],
  },
  {
    id: "doctrina",
    title: "Doctrina Católica",
    subtitle: "Verdades de la fe y mandamientos",
    icon: "iglesia",
    accent: C.green,
    prayers: [
      {
        title: "Los Diez Mandamientos",
        text: `1. Amarás a Dios sobre todas las cosas.\n2. No tomarás el nombre de Dios en vano.\n3. Santificarás las fiestas.\n4. Honrarás a tu padre y a tu madre.\n5. No matarás.\n6. No cometerás actos impuros.\n7. No robarás.\n8. No darás falso testimonio ni mentirás.\n9. No consentirás pensamientos ni deseos impuros.\n10. No codiciarás los bienes ajenos.\n\nEstos diez mandamientos se encierran en dos:\nAmarás a Dios sobre todas las cosas,\ny al prójimo como a ti mismo.`,
      },
      {
        title: "Los siete sacramentos",
        text: `1. Bautismo\n2. Confirmación\n3. Eucaristía\n4. Penitencia o Reconciliación\n5. Unción de los enfermos\n6. Orden sagrado\n7. Matrimonio`,
      },
      {
        title: "Las virtudes",
        text: `Virtudes teologales:\n• Fe\n• Esperanza\n• Caridad\n\nVirtudes cardinales:\n• Prudencia\n• Justicia\n• Fortaleza\n• Templanza`,
      },
      {
        title: "Obras de misericordia corporales",
        text: `1. Visitar a los enfermos.\n2. Dar de comer al hambriento.\n3. Dar de beber al sediento.\n4. Dar posada al peregrino.\n5. Vestir al desnudo.\n6. Visitar a los presos.\n7. Enterrar a los muertos.`,
      },
      {
        title: "Obras de misericordia espirituales",
        text: `1. Enseñar al que no sabe.\n2. Dar buen consejo al que lo necesita.\n3. Corregir al que yerra.\n4. Perdonar las ofensas.\n5. Consolar al triste.\n6. Sufrir con paciencia los defectos de los demás.\n7. Rogar a Dios por vivos y difuntos.`,
      },
      {
        title: "Los siete pecados capitales",
        text: `1. Soberbia\n2. Avaricia\n3. Lujuria\n4. Ira\n5. Gula\n6. Envidia\n7. Pereza\n\nVirtudes contrarias:\nHumildad, generosidad, castidad, paciencia, templanza, caridad, diligencia.`,
      },
      {
        title: "Los novísimos",
        text: `1. Muerte\n2. Juicio\n3. Infierno\n4. Gloria\n\n«En todas tus obras acuérdate de tus postrimerías, y no pecarás jamás.» (Eclesiástico 7, 40)`,
      },
      {
        title: "Las bienaventuranzas",
        text: `Bienaventurados los pobres en el espíritu, porque de ellos es el Reino de los Cielos.\nBienaventurados los mansos, porque ellos heredarán la tierra.\nBienaventurados los que lloran, porque ellos serán consolados.\nBienaventurados los que tienen hambre y sed de justicia, porque ellos quedarán saciados.\nBienaventurados los misericordiosos, porque ellos alcanzarán misericordia.\nBienaventurados los limpios de corazón, porque ellos verán a Dios.\nBienaventurados los que trabajan por la paz, porque ellos serán llamados hijos de Dios.\nBienaventurados los perseguidos por causa de la justicia, porque de ellos es el Reino de los Cielos.\n\n(Mateo 5, 3-10)`,
      },
    ],
  },
];

const styles = {
  app: {
    minHeight: "100vh",
    background: C.cream,
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
    color: C.ink,
    maxWidth: 430,
    margin: "0 auto",
    position: "relative",
    overflowX: "hidden",
  },
  brandHeader: {
    background: `linear-gradient(180deg, ${C.cream} 0%, ${C.creamDark} 100%)`,
    padding: "12px 20px 10px",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: `1px solid ${C.border}`,
  },
  ornament: { color: C.lavender, fontSize: 11, letterSpacing: 6, marginBottom: 8 },
  brandName: {
    fontSize: 28,
    fontWeight: 300,
    color: C.lavenderDark,
    margin: 0,
    letterSpacing: 4,
  },
  brandTagline: {
    fontSize: 9,
    color: C.inkSoft,
    marginTop: 4,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  subHeader: {
    background: C.creamDark,
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderBottom: `1px solid ${C.border}`,
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  backBtn: {
    background: "none",
    border: "none",
    color: C.lavenderDark,
    fontSize: 14,
    cursor: "pointer",
    padding: 6,
    fontFamily: "inherit",
    fontWeight: 500,
  },
  subTitle: {
    flex: 1,
    fontSize: 16,
    color: C.ink,
    fontWeight: 600,
    textAlign: "center",
    paddingRight: 60,
  },
  list: { padding: "20px 16px 100px" },
  intro: {
    textAlign: "center",
    marginBottom: 24,
    color: C.inkSoft,
    fontSize: 13,
    fontStyle: "italic",
    padding: "0 20px",
    lineHeight: 1.6,
  },
  categoryCard: {
    background: C.cardBg,
    border: `1px solid ${C.border}`,
    borderRadius: 14,
    marginBottom: 12,
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(60, 40, 80, 0.04)",
    display: "flex",
    alignItems: "center",
    padding: "16px",
    gap: 14,
  },
  categoryIconBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  categoryInfo: { flex: 1 },
  categoryTitle: {
    fontSize: 17,
    fontWeight: 600,
    color: C.ink,
    margin: 0,
  },
  categorySub: { fontSize: 12, color: C.inkSoft, marginTop: 2 },
  categoryArrow: { color: C.lavender, fontSize: 22, fontWeight: 300 },
  prayerList: { padding: "16px 16px 100px" },
  prayerItem: {
    background: C.cardBg,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    marginBottom: 10,
    cursor: "pointer",
  },
  prayerItemHeader: {
    padding: "16px 18px",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  prayerItemTitle: {
    fontSize: 16,
    color: C.ink,
    fontWeight: 500,
    margin: 0,
    flex: 1,
  },
  prayerItemArrow: { color: C.lavender, fontSize: 18 },
  prayerDetail: { padding: "24px 24px 60px" },
  prayerDetailTitle: {
    fontSize: 24,
    fontWeight: 500,
    color: C.lavenderDark,
    margin: "0 0 4px 0",
    textAlign: "center",
  },
  divider: {
    textAlign: "center",
    color: C.lavender,
    fontSize: 12,
    letterSpacing: 8,
    margin: "12px 0 24px",
  },
  prayerText: {
    lineHeight: 1.85,
    color: C.ink,
    whiteSpace: "pre-wrap",
    fontWeight: 400,
  },
  favBtn: {
    background: "transparent",
    border: `1.5px solid ${C.lavender}`,
    borderRadius: 22,
    color: C.lavenderDark,
    padding: "9px 24px",
    fontSize: 13,
    cursor: "pointer",
    margin: "32px auto 0",
    display: "block",
    fontFamily: "inherit",
    letterSpacing: 0.5,
  },
  favBtnActive: { background: C.lavenderLight, color: C.lavenderDark },
  emptyState: {
    textAlign: "center",
    color: C.inkSoft,
    padding: "60px 30px",
    fontSize: 14,
    lineHeight: 1.7,
    fontStyle: "italic",
  },
  search: {
    width: "100%",
    padding: "13px 18px",
    borderRadius: 22,
    border: `1px solid ${C.border}`,
    background: C.cardBg,
    color: C.ink,
    fontSize: 15,
    fontFamily: "inherit",
    boxSizing: "border-box",
    outline: "none",
    marginBottom: 18,
  },
  tabBar: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: 430,
    background: C.cardBg,
    borderTop: `1px solid ${C.border}`,
    display: "flex",
    zIndex: 200,
    paddingBottom: "max(8px, env(safe-area-inset-bottom))",
  },
  tab: {
    flex: 1,
    padding: "10px 0 6px",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    fontFamily: "inherit",
  },
  tabLabel: { fontSize: 10, letterSpacing: 0.5, fontWeight: 500 },
};


const RosaryIllustration = ({ color = "#6b4f8a", size = 220 }) => (
  <svg viewBox="0 0 200 280" width={size} height={size * 1.4} style={{ display: "block", margin: "24px auto 8px" }}>
    {/* Rosary beads forming heart shape */}
    {(() => {
      const beads = [];
      // Left curve of heart
      const leftPoints = [
        [100,30],[82,22],[64,22],[50,32],[42,46],[42,62],[50,76],[62,90],[76,104],[90,118],[100,130]
      ];
      // Right curve of heart  
      const rightPoints = [
        [100,30],[118,22],[136,22],[150,32],[158,46],[158,62],[150,76],[138,90],[124,104],[110,118],[100,130]
      ];
      // Bottom of heart going down to cross
      const bottomPoints = [
        [100,130],[94,144],[90,158],[88,172],[88,186],[90,200],[96,210],[100,218]
      ];
      [...leftPoints, ...rightPoints, ...bottomPoints].forEach(([x,y], i) => {
        beads.push(<circle key={i} cx={x} cy={y} r="4.5" fill={color} />);
      });
      return beads;
    })()}
    {/* Cross at bottom */}
    <rect x="96" y="218" width="8" height="28" fill={color} rx="1.5" />
    <rect x="88" y="228" width="24" height="6" fill={color} rx="1.5" />
    {/* Small connector bead */}
    <circle cx="100" cy="216" r="5" fill={color} />
    {/* Larger accent beads every 10 */}
    <circle cx="100" cy="30" r="6" fill={color} />
    <circle cx="42" cy="62" r="6" fill={color} />
    <circle cx="158" cy="62" r="6" fill={color} />
    <circle cx="100" cy="130" r="6" fill={color} />
    {/* Virgin Mary face - simplified line art */}
    <ellipse cx="100" cy="82" rx="18" ry="22" fill="none" stroke={color} strokeWidth="1.8" />
    {/* Halo */}
    <ellipse cx="100" cy="66" rx="22" ry="10" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" />
    {/* Eyes */}
    <path d="M 93 78 Q 96 76 99 78" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M 101 78 Q 104 76 107 78" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Nose */}
    <path d="M 100 80 L 99 86 L 101 86" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Veil/mantle */}
    <path d="M 82 72 Q 76 90 80 104 Q 88 110 100 112 Q 112 110 120 104 Q 124 90 118 72" fill={color} opacity="0.12" />
    {/* Dove at bottom of face */}
    <path d="M 88 100 Q 94 96 100 98 Q 106 94 112 98 Q 110 104 104 104 Q 100 107 96 104 Q 90 104 88 100 Z" fill={color} opacity="0.7" />
    <circle cx="109" cy="97" r="1" fill="white" />
  </svg>
);

const RuahLogo = () => (
  <img
    src="data:image/png;base64,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"
    alt="Ruah Papelería Cristiana"
    style={{ width: 180, height: "auto", display: "block", margin: "0 auto" }}
  />
);

export default function App() {
  const [tab, setTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrayer, setSelectedPrayer] = useState(null);
  const [searchQ, setSearchQ] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [fontSize, setFontSize] = useState(17);

  const toggleFav = (catId, prayerTitle) => {
    const key = `${catId}::${prayerTitle}`;
    setFavorites((f) =>
      f.includes(key) ? f.filter((x) => x !== key) : [...f, key]
    );
  };

  const isFav = (catId, prayerTitle) =>
    favorites.includes(`${catId}::${prayerTitle}`);

  const favPrayers = favorites
    .map((key) => {
      const [catId, title] = key.split("::");
      const cat = DATA.find((c) => c.id === catId);
      if (!cat) return null;
      const prayer = cat.prayers.find((p) => p.title === title);
      if (!prayer) return null;
      return {
        ...prayer,
        catId,
        catTitle: cat.title,
        catIcon: cat.icon,
        accent: cat.accent,
      };
    })
    .filter(Boolean);

  const searchResults =
    searchQ.length > 1
      ? DATA.flatMap((cat) =>
          cat.prayers
            .filter(
              (p) =>
                p.title.toLowerCase().includes(searchQ.toLowerCase()) ||
                p.text.toLowerCase().includes(searchQ.toLowerCase())
            )
            .map((p) => ({
              ...p,
              catId: cat.id,
              catTitle: cat.title,
              catIcon: cat.icon,
              accent: cat.accent,
            }))
        )
      : [];

  const goBack = () => {
    if (selectedPrayer) setSelectedPrayer(null);
    else if (selectedCategory) setSelectedCategory(null);
  };

  const currentCat = selectedCategory
    ? DATA.find((c) => c.id === selectedCategory)
    : null;

  const showSubHeader = selectedCategory || selectedPrayer;

  const renderHeader = () => {
    if (showSubHeader && tab === "home") {
      return (
        <div style={styles.subHeader}>
          <button style={styles.backBtn} onClick={goBack}>
            ← Volver
          </button>
          <div style={styles.subTitle}>
            {selectedPrayer ? selectedPrayer.title : currentCat?.title}
          </div>
        </div>
      );
    }
    return (
      <div style={styles.brandHeader}>
        <RuahLogo />
      </div>
    );
  };

  const renderHome = () => {
    if (selectedPrayer) {
      const prayer = selectedPrayer;
      const fav = isFav(prayer.catId || selectedCategory, prayer.title);
      return (
        <div style={styles.prayerDetail}>
          <h2 style={styles.prayerDetailTitle}>{prayer.title}</h2>
          <div style={styles.divider}>✦ ✦ ✦</div>
          <div style={{ display:"flex", justifyContent:"center", gap:12, marginBottom:20, alignItems:"center" }}>
            <button onClick={() => setFontSize(s => Math.max(13, s-1))}
              style={{ background:"none", border:`1px solid ${C.border}`, borderRadius:20, width:32, height:32,
                cursor:"pointer", fontSize:18, color:C.lavenderDark, display:"flex", alignItems:"center", justifyContent:"center" }}>−</button>
            <span style={{ fontSize:12, color:C.inkSoft, letterSpacing:1 }}>Tamaño</span>
            <button onClick={() => setFontSize(s => Math.min(26, s+1))}
              style={{ background:"none", border:`1px solid ${C.border}`, borderRadius:20, width:32, height:32,
                cursor:"pointer", fontSize:18, color:C.lavenderDark, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
          </div>
          <p style={{ ...styles.prayerText, fontSize }}>{prayer.text}</p>
          <button
            style={{ ...styles.favBtn, ...(fav ? styles.favBtnActive : {}) }}
            onClick={() => toggleFav(prayer.catId || selectedCategory, prayer.title)}
          >
            {fav ? "♥ En favoritos" : "♡ Añadir a favoritos"}
          </button>
        </div>
      );
    }

    if (selectedCategory && currentCat) {
      return (
        <div style={styles.prayerList}>
          <p style={styles.intro}>{currentCat.subtitle}</p>
          {currentCat.prayers.map((prayer) => (
            <div
              key={prayer.title}
              style={styles.prayerItem}
              onClick={() =>
                setSelectedPrayer({ ...prayer, catId: selectedCategory })
              }
            >
              <div style={styles.prayerItemHeader}>
                <p style={styles.prayerItemTitle}>{prayer.title}</p>
                {isFav(selectedCategory, prayer.title) && (
                  <span style={{ color: currentCat.accent, fontSize: 14 }}>♥</span>
                )}
                <span style={styles.prayerItemArrow}>›</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div style={styles.list}>
        <p style={styles.intro}>
          Compendio de oraciones para acompañar tu vida cristiana
        </p>
        {DATA.map((cat) => (
          <div
            key={cat.id}
            style={styles.categoryCard}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <div style={{ ...styles.categoryIconBox, background: `${cat.accent}15` }}>
              <Icon type={cat.icon} size={32} color={cat.accent} />
            </div>
            <div style={styles.categoryInfo}>
              <p style={styles.categoryTitle}>{cat.title}</p>
              <p style={styles.categorySub}>
                {cat.prayers.length} oraciones · {cat.subtitle}
              </p>
            </div>
            <span style={styles.categoryArrow}>›</span>
          </div>
        ))}
      </div>
    );
  };

  const renderFavorites = () => (
    <div style={styles.prayerList}>
      {favPrayers.length === 0 ? (
        <div style={styles.emptyState}>
          <div style={{ fontSize: 38, marginBottom: 18, color: C.lavender }}>♡</div>
          <p>Aún no tienes oraciones favoritas.</p>
          <p>Pulsa el corazón en cualquier oración para guardarla aquí.</p>
        </div>
      ) : (
        favPrayers.map((prayer) => (
          <div
            key={`${prayer.catId}::${prayer.title}`}
            style={styles.prayerItem}
            onClick={() => {
              setSelectedCategory(prayer.catId);
              setSelectedPrayer({ ...prayer });
              setTab("home");
            }}
          >
            <div style={styles.prayerItemHeader}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${prayer.accent}15`,
                  flexShrink: 0,
                }}
              >
                <Icon type={prayer.catIcon} size={22} color={prayer.accent} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={styles.prayerItemTitle}>{prayer.title}</p>
                <p style={{ fontSize: 11, color: C.inkSoft, marginTop: 2 }}>
                  {prayer.catTitle}
                </p>
              </div>
              <span style={{ color: prayer.accent, fontSize: 16 }}>♥</span>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderSearch = () => (
    <div style={{ padding: "18px 16px 100px" }}>
      <input
        value={searchQ}
        onChange={(e) => setSearchQ(e.target.value)}
        placeholder="Buscar oración..."
        style={styles.search}
      />
      {searchQ.length > 1 && searchResults.length === 0 && (
        <p
          style={{
            color: C.inkSoft,
            textAlign: "center",
            marginTop: 30,
            fontStyle: "italic",
          }}
        >
          No se encontraron resultados
        </p>
      )}
      {searchResults.map((prayer) => (
        <div
          key={`${prayer.catId}::${prayer.title}`}
          style={styles.prayerItem}
          onClick={() => {
            setSelectedCategory(prayer.catId);
            setSelectedPrayer({ ...prayer });
            setTab("home");
          }}
        >
          <div style={styles.prayerItemHeader}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${prayer.accent}15`,
                flexShrink: 0,
              }}
            >
              <Icon type={prayer.catIcon} size={22} color={prayer.accent} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={styles.prayerItemTitle}>{prayer.title}</p>
              <p style={{ fontSize: 11, color: C.inkSoft, marginTop: 2 }}>
                {prayer.catTitle}
              </p>
            </div>
            <span style={styles.prayerItemArrow}>›</span>
          </div>
        </div>
      ))}
    </div>
  );


  const getLiturgicalInfo = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    // Calculate Easter (Computus algorithm)
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const easterMonth = Math.floor((h + l - 7 * m + 114) / 31);
    const easterDay = ((h + l - 7 * m + 114) % 31) + 1;
    const easter = new Date(year, easterMonth - 1, easterDay);

    // Key dates based on Easter
    const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };
    const ashWednesday = addDays(easter, -46);
    const palmSunday = addDays(easter, -7);
    const ascension = addDays(easter, 39);
    const pentecost = addDays(easter, 49);
    const corpusChristi = addDays(easter, 60);
    const advent1 = (() => {
      const christmas = new Date(year, 11, 25);
      const dow = christmas.getDay();
      return addDays(christmas, -(dow === 0 ? 28 : (dow + 21)));
    })();

    const toDateNum = d => d.getFullYear() * 10000 + (d.getMonth()+1) * 100 + d.getDate();
    const todayNum = year * 10000 + month * 100 + day;
    const christmas = new Date(year, 11, 25);
    const epiphany = new Date(year, 0, 6);
    const baptismLord = new Date(year, 0, 13);
    const advent1Next = (() => {
      const c2 = new Date(year+1, 11, 25);
      const dow = c2.getDay();
      return addDays(c2, -(dow === 0 ? 28 : (dow + 21)));
    })();

    let season, color, icon, description, prayer;

    if (todayNum >= toDateNum(advent1) || todayNum < toDateNum(epiphany)) {
      season = "Adviento / Navidad";
      color = "#4a6fa5";
      icon = "star";
      if (todayNum >= toDateNum(new Date(year,11,25)) || month === 1) {
        season = "Navidad";
        color = C.gold;
        description = "Celebramos el nacimiento de nuestro Señor Jesucristo. Tiempo de gozo y gratitud.";
        prayer = "Oh Dios, que de manera admirable creaste al hombre y de manera más admirable lo restauraste, concédenos participar de la divinidad de tu Hijo, que se dignó participar de nuestra humanidad. Amén.";
      } else {
        description = "Tiempo de espera y preparación para la venida del Señor. Cuatro semanas de conversión y esperanza.";
        const adventPrayers = [
          "Ven, Señor Jesús. Maranatha. Despierta nuestros corazones para que preparemos los caminos de tu llegada. Que la espera no nos adormezca sino que nos mantenga vigilantes y llenos de esperanza. Amén.",
          "Señor, prepara en mi corazón un lugar digno para tu venida. Que quite los obstáculos que me alejan de ti: el orgullo, el apego, el miedo. Ven, Señor Jesús. Amén.",
          "Virgen María, tú que esperaste con fe la venida del Salvador, enséñame a esperar con paciencia y esperanza. Ven, Señor Jesús. Amén.",
          "Señor, en este Adviento quiero convertirme. Que el Juan Bautista de mi corazón me llame a enderezar mis caminos y a prepararme para recibirte. Amén.",
          "Ven, Emmanuel, Dios con nosotros. Que tu venida traiga paz a mi corazón, a mi familia y al mundo entero. Maranatha, ven Señor Jesús. Amén.",
          "Señor, que en la espera no me quede con los brazos cruzados. Que el Adviento me mueva a hacer el bien, a dar de lo mío, a consolar a quien sufre. Ven, Señor Jesús. Amén.",
          "Señor Jesús, luz que vienes a iluminar las tinieblas, disipa la oscuridad de mi alma. Que tu luz de Navidad sea primero luz en mi corazón. Amén.",
        ];
        prayer = adventPrayers[today.getDay()];
      }
    } else if (todayNum >= toDateNum(epiphany) && todayNum < toDateNum(ashWednesday)) {
      season = "Tiempo Ordinario";
      color = C.green;
      icon = "leaf";
      description = "Tiempo para crecer en la fe y en el seguimiento de Jesús. Escuchamos su Palabra y aprendemos a vivir el Evangelio.";
      const ordinaryPrayers1 = [
        "Señor Jesús, en este tiempo ordinario no hay nada ordinario: cada día es una oportunidad para seguirte más de cerca. Ayúdame a crecer en la fe, en la esperanza y en el amor. Amén.",
        "Señor, que tu Palabra sea lámpara para mis pasos y luz en mi camino. Que no me guíe por mis propios criterios sino por tu Evangelio. Amén.",
        "Jesús, maestro y Señor, enséñame a amarte a ti en cada persona que encuentre hoy. Que vea tu rostro en el rostro de los demás. Amén.",
        "Señor, dame corazón de siervo. Que no busque ser servido sino servir, como tú que viniste no a ser servido sino a dar tu vida. Amén.",
        "Jesús, pan de vida, aliméntame con tu Palabra y tu Eucaristía. Que tu presencia me dé fuerza para este día. Amén.",
        "Señor, que en este día ordinario encuentre momentos extraordinarios de tu presencia: en el silencio, en las personas, en la belleza de la creación. Amén.",
        "Jesús, luz del mundo, ilumina mi camino de hoy. Que yo sea también un pequeño reflejo de tu luz para quienes me rodean. Amén.",
      ];
      prayer = ordinaryPrayers1[today.getDay()];
    } else if (todayNum >= toDateNum(ashWednesday) && todayNum < toDateNum(easter)) {
      season = "Cuaresma";
      color = C.lavenderDark;
      icon = "cross";
      if (todayNum >= toDateNum(palmSunday)) {
        season = "Semana Santa";
        description = "La semana más santa del año. Acompañamos a Jesús en su Pasión, Muerte y Resurrección.";
        prayer = "Señor crucificado, te adoro y te amo. Dame la gracia de acompañarte en tu Pasión con corazón agradecido. Que tu sacrificio no sea en vano en mi vida. Amén.";
      } else {
        description = "Cuarenta días de oración, ayuno y limosna para preparar la Pascua. Tiempo de conversión y penitencia.";
        const lentPrayers = [
          "Señor, en esta Cuaresma concédeme la gracia de la conversión. Ayúdame a orar más, a ayunar con sentido y a dar con generosidad. Que al llegar la Pascua, mi corazón esté más limpio y más cerca de ti. Amén.",
          "Señor, que este tiempo de ayuno me enseñe a depender solo de ti. Que cuando sienta el hambre, me acuerde de que no solo de pan vive el hombre. Amén.",
          "Señor, en esta Cuaresma quiero perdonar de verdad a quienes me han herido. Dame la gracia del perdón sincero, no solo de palabras. Amén.",
          "Señor, enséñame a dar limosna con alegría y sin esperar nada a cambio. Que abra mis manos y mi corazón a los que tienen menos que yo. Amén.",
          "Señor crucificado, que contemplar tu cruz me ayude a relativizar mis propios sufrimientos y a unirlos a los tuyos con amor. Amén.",
          "Señor, que en este Viernes de Cuaresma me una de manera especial a tu Pasión. Ofrezco mis sacrificios de hoy por las almas que más te necesitan. Amén.",
          "Señor, prepara mi corazón para la Pascua. Que la espera de la Resurrección llene de esperanza mis días de penitencia. Amén.",
        ];
        prayer = lentPrayers[today.getDay()];
      }
    } else if (todayNum >= toDateNum(easter) && todayNum < toDateNum(pentecost)) {
      season = "Tiempo Pascual";
      color = C.gold;
      icon = "sun";
      const dayOfWeek = today.getDay();
      const weekInPaschal = Math.floor((today - easter) / (7 * 86400000));
      const paschalPrayers = [
        "Señor resucitado, llena mi corazón del gozo de tu Resurrección. Que viva como hijo de la luz, testigo de tu victoria sobre la muerte. Aleluya. Amén.",
        "Señor Jesús, tú que apareciste a los discípulos con las puertas cerradas, entra también en mi corazón cerrado. Disipa mis miedos y llénalo de tu paz. Aleluya. Amén.",
        "Señor resucitado, como Tomás quiero tocarte y creer. Ayúdame a superar mis dudas y a proclamar: ¡Señor mío y Dios mío! Aleluya. Amén.",
        "Señor Jesús, que hiciste arder el corazón de los discípulos de Emaús al explicarles las Escrituras, enciende también el mío en el amor a tu Palabra. Aleluya. Amén.",
        "Señor resucitado, tú preparaste el desayuno a los apóstoles a la orilla del lago. Cuídame también a mí en las necesidades de cada día. Aleluya. Amén.",
        "Buen Pastor, tú que diste tu vida por las ovejas, cuida de mí y de todos los que me has encomendado. Que nadie se pierda. Aleluya. Amén.",
        "Señor Jesús, vid verdadera, que yo permanezca unido a ti para dar mucho fruto. Sin ti nada puedo hacer; contigo todo lo puedo. Aleluya. Amén.",
        "Espíritu Santo, Paráclito prometido por Jesús, ven sobre mí. Enséñame todas las cosas y recuérdame todo lo que Jesús dijo. Aleluya. Amén.",
      ];
      description = "¡Aleluya! Cristo ha resucitado. Cincuenta días de gozo pascual hasta Pentecostés.";
      prayer = paschalPrayers[weekInPaschal % paschalPrayers.length];
    } else {
      season = "Tiempo Ordinario";
      color = C.green;
      icon = "leaf";
      description = "Tiempo para crecer en la fe y en el seguimiento de Jesús a lo largo del año.";
      const ordinaryPrayers2 = [
        "Señor, en el tiempo ordinario de la vida, ayúdame a encontrarte en lo cotidiano. Que cada día sea una oportunidad de amarte más. Amén.",
        "Señor, que tu Palabra sea lámpara para mis pasos y luz en mi camino. Que no me guíe por mis propios criterios sino por tu Evangelio. Amén.",
        "Jesús, maestro y Señor, enséñame a amarte a ti en cada persona que encuentre hoy. Que vea tu rostro en el rostro de los demás. Amén.",
        "Señor, dame corazón de siervo. Que no busque ser servido sino servir, como tú que viniste no a ser servido sino a dar tu vida. Amén.",
        "Jesús, pan de vida, aliméntame con tu Palabra y tu Eucaristía. Que tu presencia me dé fuerza para este día. Amén.",
        "Señor, que en este día ordinario encuentre momentos extraordinarios de tu presencia: en el silencio, en las personas, en la belleza de la creación. Amén.",
        "Jesús, luz del mundo, ilumina mi camino de hoy. Que yo sea también un pequeño reflejo de tu luz para quienes me rodean. Amén.",
      ];
      prayer = ordinaryPrayers2[today.getDay()];
    }

    const days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

    // Upcoming feast days
    const feasts = [
      { date: new Date(year,0,6), name: "Epifanía del Señor", emoji:"⭐" },
      { date: new Date(year,1,2), name: "Presentación del Señor", emoji:"🕯️" },
      { date: new Date(year,2,19), name: "San José", emoji:"⚒️" },
      { date: new Date(year,2,25), name: "Anunciación del Señor", emoji:"🕊️" },
      { date: ashWednesday, name: "Miércoles de Ceniza", emoji:"✝️" },
      { date: palmSunday, name: "Domingo de Ramos", emoji:"🌿" },
      { date: addDays(easter,-3), name: "Jueves Santo", emoji:"🍞" },
      { date: addDays(easter,-2), name: "Viernes Santo", emoji:"✝️" },
      { date: addDays(easter,-1), name: "Sábado Santo", emoji:"🕯️" },
      { date: easter, name: "Pascua de Resurrección", emoji:"🎉" },
      { date: ascension, name: "Ascensión del Señor", emoji:"☁️" },
      { date: pentecost, name: "Pentecostés", emoji:"🔥" },
      { date: corpusChristi, name: "Corpus Christi", emoji:"🍞" },
      { date: new Date(year,5,29), name: "San Pedro y San Pablo", emoji:"⛵" },
      { date: new Date(year,7,15), name: "Asunción de María", emoji:"🌹" },
      { date: new Date(year,10,1), name: "Todos los Santos", emoji:"👑" },
      { date: new Date(year,10,2), name: "Fieles Difuntos", emoji:"🙏" },
      { date: new Date(year,11,8), name: "Inmaculada Concepción", emoji:"💜" },
      { date: advent1, name: "1er Domingo de Adviento", emoji:"🕯️" },
      { date: christmas, name: "Navidad del Señor", emoji:"⭐" },
    ].filter(f => toDateNum(f.date) >= todayNum)
     .sort((a,b) => toDateNum(a.date) - toDateNum(b.date))
     .slice(0, 5);

    return {
      season, color, icon, description, prayer,
      dateStr: `${days[today.getDay()]}, ${day} de ${months[month-1]} de ${year}`,
      feasts,
      months,
    };
  };

  const renderCalendar = () => {
    const info = getLiturgicalInfo();
    const { season, color, icon, description, prayer, dateStr, feasts } = info;
    return (
      <div style={{ padding:"20px 16px 100px" }}>
        {/* Date header */}
        <div style={{ textAlign:"center", marginBottom:20 }}>
          <div style={{ fontSize:12, color:C.inkSoft, letterSpacing:2, textTransform:"uppercase", marginBottom:4 }}>Hoy es</div>
          <div style={{ fontSize:16, color:C.ink, fontWeight:500 }}>{dateStr}</div>
        </div>

        {/* Current season card */}
        <div style={{ background:C.cardBg, border:`2px solid ${color}30`, borderRadius:16,
          padding:"20px 18px", marginBottom:16, borderLeft:`4px solid ${color}` }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
            <div style={{ width:44, height:44, borderRadius:12, background:`${color}15`,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Icon type={icon} size={28} color={color} />
            </div>
            <div>
              <div style={{ fontSize:11, color:C.inkSoft, letterSpacing:2, textTransform:"uppercase" }}>Tiempo litúrgico</div>
              <div style={{ fontSize:19, fontWeight:600, color, marginTop:2 }}>{season}</div>
            </div>
          </div>
          <p style={{ fontSize:14, color:C.inkSoft, lineHeight:1.7, marginBottom:16 }}>{description}</p>
          <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:14 }}>
            <div style={{ fontSize:11, color:C.inkSoft, letterSpacing:2, marginBottom:8, textTransform:"uppercase" }}>Oración del tiempo</div>
            <p style={{ fontSize:15, color:C.ink, lineHeight:1.8, fontStyle:"italic" }}>{prayer}</p>
          </div>
        </div>

        {/* Upcoming feasts */}
        <div style={{ marginBottom:16 }}>
          <h3 style={{ fontSize:14, color:C.inkSoft, letterSpacing:2, textTransform:"uppercase",
            marginBottom:12, paddingLeft:4 }}>Próximas fiestas</h3>
          {feasts.map((feast, i) => {
            const d = feast.date;
            const ms = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
            const daysUntil = Math.round((feast.date - new Date(new Date().setHours(0,0,0,0))) / 86400000);
            return (
              <div key={i} style={{ background:C.cardBg, border:`1px solid ${C.border}`,
                borderRadius:12, padding:"12px 16px", marginBottom:8,
                display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:44, height:44, background:`${C.lavenderLight}40`, borderRadius:10,
                  display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span style={{ fontSize:13, fontWeight:700, color:C.lavenderDark, lineHeight:1 }}>{d.getDate()}</span>
                  <span style={{ fontSize:10, color:C.inkSoft }}>{ms[d.getMonth()]}</span>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:14, color:C.ink, fontWeight:500 }}>{feast.emoji} {feast.name}</div>
                  <div style={{ fontSize:11, color:C.inkSoft, marginTop:2 }}>
                    {daysUntil === 0 ? "¡Hoy!" : daysUntil === 1 ? "Mañana" : `En ${daysUntil} días`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Color legend */}
        <div style={{ background:C.cardBg, border:`1px solid ${C.border}`, borderRadius:14, padding:"16px" }}>
          <h3 style={{ fontSize:13, color:C.inkSoft, letterSpacing:2, textTransform:"uppercase", marginBottom:12 }}>Los tiempos litúrgicos</h3>
          {[
            { name:"Adviento", color:"#4a6fa5", desc:"4 semanas antes de Navidad" },
            { name:"Navidad", color:C.gold, desc:"Del 25 dic al Bautismo del Señor" },
            { name:"Cuaresma", color:C.lavenderDark, desc:"40 días antes de Pascua" },
            { name:"Semana Santa", color:"#3a2a3f", desc:"Última semana de Cuaresma" },
            { name:"Tiempo Pascual", color:C.gold, desc:"50 días de Pascua a Pentecostés" },
            { name:"Tiempo Ordinario", color:C.green, desc:"El resto del año litúrgico" },
          ].map((t,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
              <div style={{ width:12, height:12, borderRadius:3, background:t.color, flexShrink:0 }} />
              <span style={{ fontSize:13, color:C.ink, fontWeight:500, minWidth:110 }}>{t.name}</span>
              <span style={{ fontSize:11, color:C.inkSoft }}>{t.desc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: "home", label: "Oraciones", icon: "book" },
    { id: "search", label: "Buscar", icon: "star" },
    { id: "favorites", label: "Favoritos", icon: "heart" },
    { id: "calendar", label: "Calendario", icon: "leaf" },
  ];

  return (
    <div style={styles.app}>
      {renderHeader()}
      <div>
        {tab === "home" && renderHome()}
        {tab === "search" && renderSearch()}
        {tab === "favorites" && renderFavorites()}
        {tab === "calendar" && renderCalendar()}
      </div>
      <div style={styles.tabBar}>
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              style={styles.tab}
              onClick={() => {
                setTab(t.id);
                if (t.id !== "home") {
                  setSelectedCategory(null);
                  setSelectedPrayer(null);
                }
              }}
            >
              <Icon
                type={t.icon}
                size={22}
                color={active ? C.lavenderDark : C.inkSoft}
              />
              <span
                style={{
                  ...styles.tabLabel,
                  color: active ? C.lavenderDark : C.inkSoft,
                }}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
