import styles from "./FormFields.module.css";

/**
 * Labeled textarea used by Contact and Job Posting forms.
 */
export default function TextareaField({
  id,
  name,
  label,
  required = false,
  placeholder,
  value,
  onChange,
  error,
  rows = 5,
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
      <textarea
        id={fieldId}
        name={name}
        rows={rows}
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
