import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"
import LinkWrapper from "components/LinkWrapper"
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, beatae. Iure voluptatibus esse, obcaecati porro cupiditate perferendis velit soluta corrupti ea nemo nobis, numquam, incidunt perspiciatis at fugiat. Reiciendis, harum.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
