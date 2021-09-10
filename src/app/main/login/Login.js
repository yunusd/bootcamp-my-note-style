import StyledFormWrapper from "./styles/StyledFormWrapper";
import StyledLoginWrapper from "./styles/StyledLoginWrapper";
import StyledLoginHeader from "./styles/StyledLoginHeader";
import Button from '../../shared-components/button';

const Login = () => {
    return (
        <StyledLoginWrapper>
            <div>
                <StyledLoginHeader>
                    Login
                </StyledLoginHeader>

                <StyledFormWrapper>
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <Button type="submit">Log In</Button>
                </StyledFormWrapper>
            </div>
        </StyledLoginWrapper>
    )
}

export default Login;