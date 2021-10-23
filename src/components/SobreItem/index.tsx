import SectionTitle from '../SectionTitle';
import { TextContainer, Container } from './styles';


function SobreItem() {
  return (
    <Container>

      <section>
        <SectionTitle title="Sobre mim" />
        <TextContainer>
          <section>
            <h3>Quem sou eu?</h3>
            <h5>
              Eu sou William Freittas, ou só Will, tenho 45 anos, e sou apaixponado por aprendizados.
              Sou artista nato, então amo desenhar, pintar, esculpir e as vezes até arrisco algumas notas quando
              encontro um violãozinho dando sopa por aí...rs
              Sou louco com tecnologias, e dentre algumas habilidades que tenho, possuo grande desenvolvtura com
              ferramentas gráficas, como o CorelDraw, InkScape e Phothoshop,
              Que utilizo na maior parte do meu tempo livre como hobby, e, quando há oportunidades, faço uma graninha,
              criando logos, folders e essas coisas que a gente consegue fazer com um pouco de habilidade e prática.

            </h5>
            {/* </div> */}
          </section>

        </TextContainer>
      </section>

    </Container>
  );
};

export default SobreItem;
