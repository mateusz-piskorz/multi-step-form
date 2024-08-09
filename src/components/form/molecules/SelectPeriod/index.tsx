import { styled, css } from 'styled-components';
import { Switch } from '../../atoms/Switch';
import { FieldValues } from 'react-hook-form';
import { FieldProps } from '@/types/form';
import { modifiers } from '@/utils/modifiers';

export const SelectPeriod = <T extends FieldValues>({
  checked,
  ...props
}: FieldProps<T> & { checked?: boolean }) => {
  const { styledComponentId: SelectPeriod } = StyledSelectPeriod;
  const periodClass = `${SelectPeriod}_period`;
  return (
    <StyledSelectPeriod $className={SelectPeriod}>
      <p
        className={modifiers({
          baseClass: periodClass,
          modifiers: !checked && 'selected',
        })}
      >
        Monthly
      </p>

      <Switch
        ariaLabel="yearly payment period"
        defaultChecked={checked}
        {...props}
      />

      <p
        className={modifiers({
          baseClass: periodClass,
          modifiers: checked && 'selected',
        })}
      >
        Yearly
      </p>
    </StyledSelectPeriod>
  );
};

const StyledSelectPeriod = styled.div<{ $className: string }>(
  ({ theme, $className }) => {
    return css`
      display: flex;
      justify-content: center;
      margin-top: 15px;
      gap: 25px;
      padding: 20px 15px 20px 15px;
      background-color: ${theme.magnolia};
      border-radius: 5px;

      .${$className} {
        &_period {
          font-weight: bolder;
          color: ${theme.coolGray};
        }

        &_period--selected {
          font-weight: bolder;
          color: ${theme.coolGray};
        }
      }

      > p.selected {
        color: ${theme.marineBlue};
      }
    `;
  },
);
