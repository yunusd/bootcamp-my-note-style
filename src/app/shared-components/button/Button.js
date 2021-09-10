import { StyledButton } from "./styles";

const Button = ({children, ...rest}) => <StyledButton {...rest}>{children}</StyledButton>

export default Button;