import styled from "styled-components";

const FridaImg = styled.img`
height: 65vh;
`
const Container = styled.main`
padding: 50px;
`
const About = styled.section`
padding: 20px;
`
const Galery = styled.section`
padding: 20px;
`
const Tittle = styled.h2`
padding-bottom: 10px;
`

function Main() {
 
const Biografia = "Além de uma das mais importantes figuras da arte no século XX, ela foi umas das personagens mais significativas no âmbito político e cultural no México. Frida Kahlo como ficou conhecida, Magdalena Carmen Frida Kahlo y Calderon, foi uma mulher guerreira, lutadora tanto na vida privada a qual teve que superar grandes traumas, quanto na vida social. Toda sua obra reflete esta realidade, além da pintura, também deixou um diário onde registrou suas alegrias e frustrações como seu conturbado casamento, sua saúde frágil e a impossibilidade de gerar filhos."

    return (
   <Container>
    <About>
        <Tittle>Sobre Frida</Tittle>
        <p>{Biografia}</p>
    </About>
    <Galery>
        <Tittle>Galeria</Tittle>
        <FridaImg src="https://www.infoescola.com/wp-content/uploads/2009/04/frida.jpg" alt="imagem da frida kahlo"/>
        <FridaImg src="https://pt.wahooart.com/Art.nsf/O/8CEFGC/$File/Frida-Kahlo-El-Peque-o-Ciervo.JPG" alt="o pequeno cervo"/>
    </Galery>
   </Container>
  );
}

export default Main;
