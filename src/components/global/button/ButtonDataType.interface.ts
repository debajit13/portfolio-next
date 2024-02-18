export interface ButtonDataType {
  title: string;
  variant: 'primary' | 'white' | 'primaryDisabled' | 'whiteDisabled';
  href?: string;
  disabled?: boolean;
}
