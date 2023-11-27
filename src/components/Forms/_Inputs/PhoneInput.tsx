import Image from "next/image";
import { enforceFormat, formatToPhone } from "@/utilities/helpers/format-phone";

interface Props {
  name: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  isComplete: boolean;
  label: string;
  error?: null | string;
  disabled?: boolean;
}

export default function PhoneInput(props: Props) {
  const {
    name,
    value,
    onChange,
    placeholder,
    isComplete,
    label,
    error,
    disabled,
  } = props;

  return (
    <div className="row">
      <div className="flex1 column">
        <label htmlFor={name} className="label mb-5">
          {label}

          {isComplete && !error ? (
            <Image
              src="/svg/checkmark-circle.svg"
              height={16}
              width={16}
              className="field-check"
              alt="check-icon"
            />
          ) : null}

          {error ? <span className="input-error">{error}</span> : null}
        </label>

        <input
          id={name}
          name={name}
          type="tel"
          className={disabled ? "input disabled" : "input"}
          placeholder={placeholder}
          value={value}
          onKeyUp={formatToPhone}
          onKeyDown={enforceFormat}
          pattern="^((+1)?[s-]?)?(?[1-9]dd)?[s-]?[1-9]dd[s-]?dddd"
          onChange={(e: any) => onChange(e.target.value)}
        />

        {/*<input
          id={name}
          name={name}
          type={type ? type : "text"}
          className={disabled ? "input disabled" : "input"}
          placeholder={placeholder}
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
          disabled={disabled}
        />*/}
      </div>
    </div>
  );
}
