type TypographyAsType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypographyVariantType =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge';

export interface TypographyProps {
  label: string;
  variant: TypographyVariantType;
  as: TypographyAsType;
  textProps?: object;
  containerProps?: object;
}
