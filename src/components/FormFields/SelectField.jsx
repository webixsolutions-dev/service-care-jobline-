import styles from "./FormFields.module.css";

function optionValue(item) {
  return typeof item === "string" ? item : item.value;
}

function optionLabel(item) {
  return typeof item === "string" ? item : item.label;
}

/**
 * Labeled native select with a custom chevron. `options` may be strings or `{ value, label }`.
 */
export default function SelectField({
  id,
  name,
  label,
  required = false,
  placeholder,
  options = [],
  value,
  onChange,
  error,
  className = "",
  ...rest
}) {
  const fieldId = id || name;
  const errorId = `${fieldId}-error`;

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={fieldId}>
        {label}
        {required ? (
          <span className={styles.required} aria-hidden>
            *
          </span>
        ) : null}
      </label>
      <div className={styles.selectWrap}>
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...rest}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((item) => {
            const val = optionValue(item);
            return (
              <option key={val} value={val}>
                {optionLabel(item)}
              </option>
            );
          })}
        </select>
      </div>
      {error ? (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
