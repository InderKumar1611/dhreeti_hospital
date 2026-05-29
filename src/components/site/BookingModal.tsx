import { useState, useCallback } from "react";
import { X } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("General Medicine");
  const [message, setMessage] = useState("");

  const handleName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value), []);
  const handlePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value), []);
  const handleDate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value), []);
  const handleService = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => setService(e.target.value), []);
  const handleMessage = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value), []);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Appointment Request*%0A%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0AService: ${service}%0AMessage: ${message}`;
    window.open(`https://wa.me/919901515300?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div className="bg-card w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-6 shadow-soft" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-primary">{t.booking.title}</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted min-h-11 min-w-11" aria-label={t.booking.close}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input required placeholder={t.booking.name} value={name} onChange={handleName} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12" />
          <input required type="tel" placeholder={t.booking.phone} value={phone} onChange={handlePhone} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12" />
          <input required type="date" value={date} onChange={handleDate} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12" />
          <select value={service} onChange={handleService} className="px-4 py-3 rounded-lg border border-input bg-background min-h-12">
            <option>General Medicine</option>
            <option>OB-GYN</option>
            <option>Ultrasound</option>
            <option>Pharmacy</option>
          </select>
          <textarea placeholder={t.booking.message} value={message} onChange={handleMessage} className="px-4 py-3 rounded-lg border border-input bg-background min-h-24" rows={3} />
          <button type="submit" className="bg-gradient-hero text-white font-semibold py-4 rounded-xl shadow-soft min-h-12">
            {t.booking.submit}
          </button>
        </form>
      </div>
    </div>
  );
}