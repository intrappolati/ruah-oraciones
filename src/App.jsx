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
        text: `Ángel de Dios, que eres mi custodio,\npues la bondad divina me ha encomendado a ti,\nilumíname, guárdame, dirígeme y gobiérname.\nAmén.\n\nÁngel Santo de mi guarda,\namoroso compañero,\nno me desampares nunca,\nni de noche ni de día.\nAmén.`,
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
    icon: "dove",
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
    icon: "rose",
    accent: C.lavender,
    prayers: [
      {
        title: "Cómo rezar el Rosario",
        text: `1. Señal de la Cruz y Credo.\n2. En las cuentas mayores: Padre Nuestro.\n3. En las diez cuentas menores: Ave María (meditando el misterio).\n4. Al final de cada decena: Gloria y oración de Fátima.\n5. Al terminar los cinco misterios: Salve.\n\nOración de Fátima:\n"Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia."`,
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
    icon: "dove",
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
    icon: "candle",
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
    title: "Doctrina cristiana",
    subtitle: "Verdades de la fe y mandamientos",
    icon: "leaf",
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
    padding: "24px 20px 18px",
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
    fontSize: 16.5,
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

const RuahLogo = () => (
  <svg viewBox="0 0 100 100" width="56" height="56" style={{ marginBottom: 4 }}>
    <circle cx="50" cy="38" r="28" fill={C.lavenderLight} opacity="0.4" />
    <rect x="46" y="24" width="8" height="22" fill={C.lavenderDark} />
    <rect x="40" y="30" width="20" height="6" fill={C.lavenderDark} />
    <path
      d="M 20 58 Q 50 50 80 58 L 80 72 Q 50 64 20 72 Z"
      fill={C.lavenderDark}
      opacity="0.85"
    />
    <path d="M 22 62 Q 50 56 78 62" stroke={C.cream} strokeWidth="0.8" fill="none" />
    <path d="M 22 66 Q 50 60 78 66" stroke={C.cream} strokeWidth="0.8" fill="none" />
  </svg>
);

export default function App() {
  const [tab, setTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrayer, setSelectedPrayer] = useState(null);
  const [searchQ, setSearchQ] = useState("");
  const [favorites, setFavorites] = useState([]);

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
        <div style={styles.ornament}>✦ ✦ ✦</div>
        <h1 style={styles.brandName}>RUAH</h1>
        <div style={styles.brandTagline}>Papelería Cristiana</div>
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
          <p style={styles.prayerText}>{prayer.text}</p>
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

  const tabs = [
    { id: "home", label: "Oraciones", icon: "book" },
    { id: "search", label: "Buscar", icon: "star" },
    { id: "favorites", label: "Favoritos", icon: "heart" },
  ];

  return (
    <div style={styles.app}>
      {renderHeader()}
      <div>
        {tab === "home" && renderHome()}
        {tab === "search" && renderSearch()}
        {tab === "favorites" && renderFavorites()}
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
