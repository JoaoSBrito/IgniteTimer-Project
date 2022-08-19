import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
}


export function Button({variant} : ButtonProps) {
  return <ButtonContainer variant='primary'>Enviar</ButtonContainer>
}