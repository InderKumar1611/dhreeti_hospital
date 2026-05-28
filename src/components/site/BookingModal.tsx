import { useState } from "react";
import { X } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", date: "", service: "General Medicine", message: "" });

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Appointment Request*%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919901515300?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div className="bg-card w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-6 shadow-soft" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-primary">{t.booking.title}</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted min-h-11 min-w-11" aria-label={t.booking.close}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input required placeholder={t.booking.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12" />
          <input required type="tel" placeholder={t.booking.phone} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12" />
          <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12" />
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12">
            <option>General Medicine</option>
            <option>OB-GYN</option>
            <option>Ultrasound</option>
            <option>Pharmacy</option>
          </select>
          <textarea placeholder={t.booking.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-background min-h-24" rows={3} />
          <button type="submit" className="bg-gradient-hero text-white font-semibold py-4 rounded-xl shadow-soft min-h-12">
            {t.booking.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
