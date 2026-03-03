import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  textarea?: boolean;
  required?: boolean;
};

export function FormField({
  label,
  name,
  placeholder,
  textarea = false,
  required = true,
}: FormFieldProps) {
  return (
    <label className="block space-y-3">
      <span className="text-sm font-medium text-white/78">{label}</span>
      {textarea ? (
        <Textarea name={name} placeholder={placeholder} required={required} />
      ) : (
        <Input name={name} placeholder={placeholder} required={required} />
      )}
    </label>
  );
}
