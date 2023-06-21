import React from "react";
// import { StyledButton } from './styles';

type TypeButton = "default" | "action" | "cancel";

interface Props {
  type: TypeButton;
  label: string;
  disabled?: boolean;
  onAction?: () => void;
}

interface Option {
  color: "primary" | "secondary";
  variant: "contained" | "outlined";
}

type Options = Record<TypeButton, Option>;

export const SkyButton = ({ type = "default", label, disabled, onAction }: Props) => {
  const getButtonPropsByType = (type: TypeButton): Option => {
    const options: Options = {
      default: { color: "primary", variant: "contained" },
      action: { color: "secondary", variant: "contained" },
      cancel: { color: "primary", variant: "outlined" },
    };

    return options[type];
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (onAction) {
      onAction();
    }
  };

  const { color, variant } = getButtonPropsByType(type);

  return (
    <StyledButton color={color} variant={variant} onClick={handleClick} disabled={disabled} size="medium" fullWidth data-testid="sky-button">
      {label}
    </StyledButton>
  );
};
