import { useState, ChangeEvent } from 'react';
import {
  ParentElement,
  Icon,
  IconAlt,
  Switch,
  ButtonParent,
  ButtonVariant,
  SwitchInput,
  Wrapper,
} from './Button.styles';

export type ButtonProps = {
  text?: string;
  disabled?: boolean;
  variant?: 'checkbox' | 'button';
};

const Button = ({ text, variant = 'button', disabled, ...props }: ButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const checker = () => (isChecked ? <IconAlt /> : <Icon />);

  if (variant === 'checkbox') {
    return (
      <ParentElement>
        <Switch>
          <SwitchInput disabled={disabled} onChange={handleChange} {...props} />
          <ButtonParent>
            <Wrapper>
              {checker()}
              {text}
            </Wrapper>
          </ButtonParent>
        </Switch>
      </ParentElement>
    );
  }

  return (
    <ParentElement>
      <ButtonVariant disabled={disabled} {...props}>
        <Wrapper>
          {checker()}
          {text}
        </Wrapper>
      </ButtonVariant>
    </ParentElement>
  );
};

export default Button;
