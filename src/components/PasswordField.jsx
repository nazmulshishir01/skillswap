import { useId, useState, useMemo } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({
  label = "Password",
  name = "password",
  value,
  onChange,
  autoComplete = "current-password",
  placeholder = "••••••••",
  showStrength = false,
  minLength = 6,
  required = true,
}) {
  const [show, setShow] = useState(false);
  const id = useId();

  const strength = useMemo(() => {
    if (!showStrength) return null;
    const v = value || "";
    let score = 0;
    if (v.length >= 6) score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[a-z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    const levels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Excellent"];
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-lime-500",
      "bg-green-600",
      "bg-emerald-600",
    ];
    return {
      score,
      label: levels[score] || levels[0],
      barClass: colors[score] || colors[0],
      percent: Math.min((score / 5) * 100, 100),
    };
  }, [value, showStrength]);

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative mt-1">
        <input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="input input-bordered w-full pr-10 p-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          className="absolute inset-y-0 right-2 my-auto h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {showStrength && (
        <div className="mt-2">
          <div className="h-2 w-full rounded bg-base-300 overflow-hidden">
            <div
              className={`h-2 ${strength.barClass} transition-all`}
              style={{ width: `${strength.percent}%` }}
            />
          </div>
          <div className="mt-1 text-xs opacity-70">{strength.label}</div>
        </div>
      )}
    </div>
  );
}
