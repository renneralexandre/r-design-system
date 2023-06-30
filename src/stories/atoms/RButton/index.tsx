import Button from "@mui/material/Button";

type TypeButton = "default" | "action" | "cancel";

interface Props {
  type: TypeButton;
  label: string;
  onAction?: () => void;
  disabled: boolean;
}

export const RButton = ({ type = "default", label, disabled, onAction }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const password = "123456";

    if (onAction) {
      onAction();
    }
  };
  return (
    <Button color={type === "action" ? "secondary" : "primary"} variant={type === "cancel" ? "outlined" : "contained"} onClick={handleClick} disabled={disabled} fullWidth size="medium" data-testid="r-button">
      {label}
    </Button>
  );
};
