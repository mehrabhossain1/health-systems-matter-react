import "./BlinkingButton.css";

const BlinkingButton = ({ children }: { children: React.ReactNode }) => {
  return <button className="button">{children}</button>;
};

export default BlinkingButton;
