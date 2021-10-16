import SectionTitle from '../SectionTitle';
import ExperienciaItems from './ExperienciaItems';

import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ExperienciasProps {}

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Desde 2010" description="envolvido com tecnologia" />

      <section>
        <ExperienciaItems
          year="2021"
          title="Beginners-Pro - em formação"
          description="Cursando Desenvolvimento Web pela faculdade Iv2"
        />
        <ExperienciaItems
          year="2020"
          title="Início da Jornada Dev"
          description="Início da jornada de aprendizado de desenvolvimento"
        />
        <ExperienciaItems
          year="2015"
          title="Suporte tec de Ti"
          description="Atendimento on demand para empresas na área de informática"
        />

        <ExperienciaItems
          year="2010"
          title="Técnico de informática"
          description="Formatação e otimização de sistemas operacionais, manutenção de hardware"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
