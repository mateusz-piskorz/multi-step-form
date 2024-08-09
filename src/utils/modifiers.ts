type AddClassModifierProps = {
  baseClass: string;
  modifiers?: string | string[] | false;
};

export const modifiers = ({ baseClass, modifiers }: AddClassModifierProps) => {
  let modifierClass = '';
  if (modifiers) {
    if (Array.isArray(modifiers)) {
      modifierClass = modifiers
        .map((item) => ` ${baseClass}--${item}`)
        .join('');
    } else {
      modifierClass = ` ${baseClass}--${modifiers}`;
    }
  }

  const className = `${baseClass}${modifierClass}`;
  return className;
};
