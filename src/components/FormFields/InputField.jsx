import styles from "./FormFields.module.css";

/**
 * Labeled text/email/tel input used by Contact and Job Posting forms.
 */
export default function InputField({
  id,
  name,
  label,
  required = false,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
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
      <input
        id={fieldId}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error ? (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
