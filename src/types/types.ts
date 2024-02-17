export interface SectionHeaderDataType {
  title: string;
}

export interface ButtonDataType {
  title: string;
  variant: 'primary' | 'white' | 'primaryDisabled' | 'whiteDisabled';
  href?: string;
  disabled?: boolean;
}

export interface BadgeDataType {
  title: string;
  variant: 'pill' | 'rectangle';
}
