export interface ButtonDataType {
  title: string;
  variant: 'primary' | 'white' | 'primaryDisabled' | 'whiteDisabled' | 'red';
  href?: string;
  disabled?: boolean;
}
