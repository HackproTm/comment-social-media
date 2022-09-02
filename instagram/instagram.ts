// .typeText("", 'Los campeones siguen jugando hasta que lo hacen bien.')
// .click("//form[@method='POST']/textarea")

import { browser, by, element } from 'protractor';

describe('This is the first example of protractor', () => {
  it('should have a title', async () => {
      const frases: string[] = [
        'Estoy convencido de que por lo menos la mitad de lo que separa a los emprendedores exitosos de los que no lo son es mera perseverancia',
        'La riqueza, después de todo, es algo relativo, ya que el que tiene poco y quiere menos es más rico que el que tiene más y quiere aún más',
        'No puedes salvar a las personas, puedes simplemente amarlas',
        'El modo de dar una vez en el clavo, es dar cien veces en la herradura',
        'El que pierde dinero, pierde mucho; el que pierde un amigo; pierde aún más; el que pierde fe, lo pierde todo',
        'Mantén una visión global mientras atiendes los detalles cotidianos',
        'Haz lo que puedas, con lo que tengas, donde estés',
        'No importa cuántas veces falles, sólo debes de estar en lo correcto una vez. Entonces todos te llamarán un éxito de la noche a la mañana y te dirán lo afortunado que eres',
        'Nunca vayas por el camino trazado, porque conduce hacia donde otros ya han estado',
        'Si no te gusta tomar riesgos, debes salir corriendo del negocio',
        'Tu trabajo va a llenar gran parte de tu vida, la única manera de estar realmente satisfecho es hacer lo que creas es un gran trabajo y la única manera de hacerlo es amar lo que haces. Si no lo has encontrado aún, sigue buscando. Como con todo lo que tiene que ver con el corazón, sabrás cuando lo hayas encontrado',
        'Mantén siempre tus ojos abiertos, Siempre observando. Porque cualquier cosa que veas puede inspirarte',
        'Las oportunidades no ocurren, se crean',
        'Compra solo algo con lo que seas feliz si el mercado cierra 10 años',
        'No puedes escapar de la responsabilidad de mañana evadiéndola hoy',
        'El dinero no te hace feliz, pero relaja los nervios',
        'Realmente soy un soñador práctico; mis sueños no son bagatelas en el aire. Lo que yo quiero es convertir mis sueños en realidad',
        'Hay muchas malas razones para empezar una empresa. Pero sólo hay una buena razón y creo que sabes cuál es: para cambiar el mundo',
        'Siempre da más de que lo esperan de ti',
        'El futuro pertenece a quienes creen en la belleza de sus sueños',
        'Da tu primer paso con fe, no es necesario que veas toda la escalera completa, sólo da tu primer paso',
        'El dinero cuesta mucho a menudo',
        'Un optimista ve una oportunidad en toda calamidad, un pesimista ve una calamidad en toda oportunidad',
        'Nuestra gloria más grande no consiste en no haberse caído nunca, sino en haberse levantado después de cada caída',
        'La cosa más importante que debes hacer si estás dentro de un hoyo es dejar de cavar',
        'Odio cómo piensa la gente con el “vaso medio vacío” cuando en realidad su vaso está casi lleno. Estoy agradecido cuando tengo una gota más en el vaso porque sé exactamente qué hacer con ella',
        'Es duro fracasar, pero es todavía peor no haber intentado nunca triunfar',
        'La gente puede ser muy inteligente o tener habilidades que son aplicables, pero si no creen en ello, entonces no van a trabajar realmente duro',
        'Nuestra mayor debilidad es rendirse, la única manera de tener éxito es intentarlo siempre una vez más',
        'Me he dado cuenta de que cuanto más trabajo, más suerte tengo',
        'Compra cuando todo el mundo este vendiendo y guarda dinero cuando todos los demás están comprando. No se trata de un slogan. Es la esencia de las inversiones exitosas',
        'No hay sustituto para el trabajo duro',
        'La mayoría de la gente pierde las oportunidades porque se viste normal y parece trabajo',
        'Creo que es más fácil avanzar en sueños mega-ambiciosos',
        'Hay una regla para el empresario y es: hacer los productos con la mayor calidad posible al menor coste y pagando unos sueldos lo más altos posibles',
        'Compartir las ideas sin procesarlas puede conducirnos al engaño de pensar que en realidad estamos haciendo algo, cuando en realidad no estamos haciendo nada',
        'El hábito del ahorro es una educación; fomenta cada virtud, enseña autocontrol, cultiva el sentido del orden, entrena la previsión y amplia la mente',
        'No gastes tu tiempo golpeando una pared, esperando transformarla en una puerta',
        'Cómo tratas con el fracaso determina cómo consigues el éxito',
        'La experiencia me enseñó que las mejores inversiones son las que uno no hace',
        'Observa, escucha y aprende. No puedes saberlo todo. Todo el que piensa que lo sabe todo está destinado a la mediocridad',
        'Intenta lo imposible para mejorar tu trabajo',
        'Si puedes soñarlo puedes hacerlo, recuerda que todo esto comenzó con un ratón',
        'Solo hay dos formas de vivir tu vida. Una es pensar que nada es un milagro. La otra es pensar que todo es un milagro',
        'Si te asusta, podría ser una buena cosa por intentar',
        'Definitivamente quería ganar mi libertad. Pero la principal motivación no fue hacer dinero, sino causar un impacto',
        'La falta de dinero es la raíz de todo mal',
        'Sólo se puede vivir una vez. Y no quiero perder ni un minuto de mi vida',
        'El hombre se descubre cuando se mide contra un obstáculo',
        'El fracaso es sólo la oportunidad de comenzar de nuevo de forma más inteligente',
        'Un negocio absolutamente dedicado al servicio sólo tendrá una preocupación sobre las ganancias: serán demasiado grandes',
        'A alguna gente no le gusta el cambio, pero necesitas abrazarlo si la alternativa es el desastre',
        'Haz lo que ama y el dinero llegará',
        'Para triunfar, primero debemos creer que podemos',
        'El éxito es un pésimo profesor. Seduce a la gente inteligente para que piense que no puede perder',
        'Si caes siete veces, levántate ocho',
        'Cuando tienes dinero, solo tú recuerdas quien eres. Pero cuando no tienes dinero, todo el mundo olvida quien eres. Así es la vida',
        'El mejor modo de predecir el futuro es inventándolo',
        'Tanto si piensas que puedes, como si piensas que no puedes, estás en lo cierto',
        'El éxito está conectado con la acción. La gente exitosa se mantiene en movimiento. Cometen errores pero nunca se dan por vencido',
        'Si tuviéramos que hablar más que escuchar, tendríamos dos bocas y solamente una oreja',
        'El riesgo más grande es no tomar ninguno. En un mundo que está cambiando tan rápido, la única estrategia que está garantizada a fracasar es no tomar riesgos',
        'Hacer o no hacer. No sirve intentar, sólo hacer',
        'El dinero no puede comprar amigos, pero puedes conseguir una nueva clase de enemigos',
        'Tú serás exitoso porque la mayoría de personas son perezosas',
        'Haz algo que te asuste cada día',
        'No trates de ser original, sólo trata de ser bueno',
        'Tú eres una persona de éxito cuando tienes algunas de las cosas que el dinero puede comprar y todas las cosas que el dinero no puede comprar',
        'Solo existen dos días del año en el que no se puede hacer nada. Uno se llama ayer y otro mañana. Por lo tanto hoy es el día ideal para amar, crecer, hacer, y principalmente vivir',
        'El miedo no existe en otro lugar excepto en la mente',
        'Un cobarde es incapaz de mostrar amor; hacerlo está reservado para los valientes',
        'Hay hombres que luchan un día y son buenos. Hay otros que luchan un año y son mejores. Hay quienes luchan muchos años y son muy buenos. Pero los hay que luchan toda la vida. Esos son los imprescindibles',
        'El dinero no puede comprar vida',
        'El dinero es una herramienta. Te llevará a donde desees, pero no te reemplazará como conductor',
        'El tiempo, la perseverancia y diez años de intentos eventualmente te hará ver como un éxito de la noche a la mañana',
        'El optimismo es la cualidad más asociada con el éxito y la felicidad',
        'Me tomó 20 años tener éxito de la noche a la mañana',
        'Arriesgarte más de lo que los otros piensan es seguro. Soñar más de lo que los otros piensan es práctico',
        'Ganar dinero en si mismo no es difícil. Lo difícil es ganarlo haciendo algo a lo que merezca la pena dedicar la vida',
        'No te preocupes por el financiamiento si no lo necesitas. Hoy es más económico que nunca iniciar un negocio',
        'En las ideas es en donde reside nuestra fuerza y tanto mejor si las sostenemos con obstinación',
        'Ten en mente que tu propósito y tu plan para lograrlo puede ser modificado de vez en cuando… lo importante es que comprendas el significado de trabajar siempre con un objetivo en mente y con un plan bien estructurado',
        'Si duplicas el número de experimentos que haces por año, vas a duplicar tu ingenio',
        'Deja de perseguir el dinero y empieza a perseguir la pasión',
        'La riqueza no consiste en tener grandes posesiones, sino en tener pocas necesidades',
        'Algunas veces se gana, algunas veces se aprende',
        'Solo eres tan bueno como la gente que contratas',
        'La simplicidad y el sentido común deberían ser la base de la planificación y la dirección estratégica',
        'El éxito es aprender a ir de fracaso en fracaso sin desesperarse',
        'Precio es lo que pagas, valor es lo que recibes',
        'Nunca gastes tu dinero antes de tenerlo',
        'Le debo mi éxito a haber escuchado con respeto a los mejores consejos, y luego desaparecer y hacer exactamente lo contrario',
        'Un negocio que no hace más que dinero es un negocio pobre',
        'Cuando se innova, tienes que estar preparado para que la gente te diga que estas loco',
        'Aquellos que dicen que algo no puede hacerse, suelen ser interrumpidos por otros que lo están haciendo',
        'Los que renuncian son más numerosos que los que fracasan',
        'Mientras que el dinero no puede comprar felicidad, te permite elegir tu propia forma de desgracia',
        'El carácter no puede ser desarrollado en la facilidad y la tranquilidad. Sólo a través de la experiencia de prueba y error del sufrimiento puede el alma ser fortalecida, la ambición ser inspirada y alcanzado, finalmente, el éxito',
        'La vida es peligrosa, no por los que hacen el mal, sino por los que se sientan a ver lo que pasa',
        'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito',
        'Cada persona forja su propio destino',
        'Puedes decirle cualquier cosa a la gente, pero la forma en la que lo dices determinara cómo reaccionarán',
        'Creo que es posible que la gente normal elija ser extraordinaria',
        'El éxito es qué tan alto rebotas después de que tocaste fondo',
        'La competición te hace mejor, siempre, siempre te hace mejor, incluso si el competidor gana',
        'Adormecer el dolor por un rato te hará sentirlo luego con más intensidad',
        'Todo el progreso se lleva a cabo fuera de la zona de confort',
        'Vale más hacer la cosa más insignificante del mundo, que estar media hora sin hacer nada',
        'Nunca agaches la cabeza, mira siempre bien alto ganes o pierdas',
        'Aquel que se cree que sabe todo está cerrándose puertas',
        'No he fracasado. He encontrado 10 mil formas que no funcionan',
        'Los líderes sobresalientes salen de su camino para fomentar la autoestima de su personal. Si la gente cree en ellos mismos, es increíble lo que pueden conseguir',
        'Si no puedes volar, corre, si no puedes correr, camina, si no puedes caminar, gatea. Sin importar lo que hagas, sigue avanzado hacia adelante',
        'Regla número 1: nunca pierdas dinero. Regla número 2: nunca olvides la regla número 1',
        'Me gustaría vivir como un hombre pobre con mucho dinero',
        'No es el hombre que tiene poco, sino el que ansía más el que es pobre',
        'Lo que realmente da forma a nuestra vida es el significado que damos a las cosas',
        'La persistencia es muy importante. No debes renunciar al menos que te veas obligado a renunciar',
        'Los amigos y las buenas maneras te llevarán donde el dinero no puede'
      ]
      await browser.waitForAngularEnabled(false);
      await browser.driver.get('https://www.instagram.com/p/CZ93nDzoNc1/');

      const min = Math.ceil(0);
      const max = Math.floor(frases.length);

      let text_message = element(by.xpath('//form[@method="POST"]/textarea'));
      let button_send = element(by.xpath('//form[@method="POST"]/button'));
      let modal_warning = element(by.xpath('//h3[contains(text(), "Try Again Later")]'));
      let button_ok = element(by.xpath('//button[contains(text(), "Report a Problem")]//following-sibling::button'));

      while (true) {
        let index = Math.floor(Math.random() * (max - min) + min);
        await text_message.clear();
        await text_message.sendKeys(frases[index]);
        await browser.driver.sleep(1000);
        await button_send.click();
        await browser.driver.sleep(15000);
        let ins_error = false;
        let timeout = 60000;
        do {
          ins_error = await modal_warning.isPresent();
          if (ins_error) {
            await button_ok.click();
            await browser.driver.sleep(timeout);
            await button_send.click();
            await browser.driver.sleep(15000);
            ins_error = await modal_warning.isPresent();
            timeout = timeout + 30000;
          }
        }
        while (ins_error)
      }
  });
});
