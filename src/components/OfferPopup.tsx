import { useEffect, useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Sparkles,
  Gift,
  Phone,
  User,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import CountdownTimer from "./CountdownTimer";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdGOfWSdfF7R8gWdixQNqWSZOK7Z4K1cSuhVZHqLT4u84v17g/formResponse";

const OFFER_END = "2026-07-31T23:59:59+05:30";

const STORAGE_KEY = "jl_offer_submitted";

export default function OfferPopup() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [expired, setExpired] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    if (new Date(OFFER_END).getTime() < Date.now()) {
      setExpired(true);
      return;
    }

    const lastSubmit = localStorage.getItem(STORAGE_KEY);

    if (lastSubmit) {
      const diff =
        Date.now() - Number(lastSubmit);

      if (diff < 24 * 60 * 60 * 1000) {
        return;
      }
    }

    const timer = setTimeout(() => {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
    }
  }, [open]);

  const closePopup = () => {
    setOpen(false);
  };

  const validate = () => {
    let ok = true;

    const newErrors = {
      name: "",
      phone: "",
    };

    if (form.name.trim().length < 2) {
      newErrors.name = "Enter your name";
      ok = false;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid mobile number";
      ok = false;
    }

    setErrors(newErrors);

    return ok;
  };

  const submitOffer = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const fd = new FormData();

    fd.append("entry.1861816151", form.name);
    fd.append("entry.978943001", form.phone);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });

      localStorage.setItem(
        STORAGE_KEY,
        Date.now().toString()
      );

      setSubmitted(true);

      setTimeout(() => {
        setOpen(false);
      }, 2500);
    } catch {
      alert(
        "Unable to submit. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (expired) return null;

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
            relative
            w-full
            max-w-md
            overflow-hidden
            rounded-[32px]
            border
            border-[#CDA349]/40
            bg-gradient-to-br
            from-[#2b0f12]
            via-[#47181d]
            to-[#6b1f26]
            shadow-2xl
            "
          >

            {/* Decorative Glow */}

            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-yellow-300/10 blur-3xl" />

            {/* Close */}

            <button
              onClick={closePopup}
              className="absolute right-4 top-4 rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="p-8">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-xl">

                <Gift className="h-8 w-8 text-[#5b141a]" />

              </div>

              <div className="text-center">

                <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">

                  <Sparkles size={14} />

                  Limited Time Offer

                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-white">

                  Grab

                  <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">

                    20% OFF

                  </span>

                </h2>

                <p className="mt-3 text-sm leading-7 text-white/80">

                  Making Charges on Gold Jewellery

                </p>

                <div className="mt-6">

                  <CountdownTimer endDate={OFFER_END} />

                </div>
                {submitted ? (

<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  className="mt-8 text-center"
>
  <CheckCircle2 className="mx-auto h-16 w-16 text-yellow-300" />

  <h3 className="mt-5 font-serif text-3xl text-white">
    Offer Reserved!
  </h3>

  <p className="mt-3 text-sm leading-7 text-white/75">
    Thank you for your interest.
    <br />
    Our jewellery expert will contact you shortly to help you
    avail this exclusive offer.
  </p>

</motion.div>

) : (

<form
  onSubmit={submitOffer}
  className="mt-8 space-y-5"
>

  {/* Name */}

  <div>

    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-yellow-200">

      Full Name

    </label>

    <div className="relative">

      <User
        className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-300"
        size={18}
      />

      <input
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        placeholder="Enter your name"
        className="
        w-full
        rounded-2xl
        border
        border-white/15
        bg-white/10
        py-4
        pl-12
        pr-4
        text-white
        placeholder:text-white/40
        backdrop-blur
        outline-none
        transition
        focus:border-yellow-400
        "
      />

    </div>

    {errors.name && (

      <p className="mt-2 text-xs text-red-300">

        {errors.name}

      </p>

    )}

  </div>

  {/* Phone */}

  <div>

    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-yellow-200">

      Mobile Number

    </label>

    <div className="relative">

      <Phone
        className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-300"
        size={18}
      />

      <input
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
        placeholder="Enter mobile number"
        maxLength={10}
        className="
        w-full
        rounded-2xl
        border
        border-white/15
        bg-white/10
        py-4
        pl-12
        pr-4
        text-white
        placeholder:text-white/40
        backdrop-blur
        outline-none
        transition
        focus:border-yellow-400
        "
      />

    </div>

    {errors.phone && (

      <p className="mt-2 text-xs text-red-300">

        {errors.phone}

      </p>

    )}

  </div>

  {/* CTA */}

  <button
    disabled={loading}
    type="submit"
    className="
    group
    relative
    mt-2
    flex
    w-full
    items-center
    justify-center
    overflow-hidden
    rounded-2xl
    bg-gradient-to-r
    from-yellow-400
    via-yellow-500
    to-yellow-300
    py-4
    font-semibold
    text-[#541318]
    shadow-xl
    transition
    hover:scale-[1.02]
    active:scale-[0.98]
    disabled:opacity-70
    "
  >

    <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-1000 group-hover:translate-x-full" />

    {loading ? (

      <span className="relative">
        Reserving Offer...
      </span>

    ) : (

      <span className="relative flex items-center gap-2">

        Claim My Offer

        <ArrowRight size={18} />

      </span>

    )}

  </button>

  <button
    type="button"
    onClick={closePopup}
    className="
    w-full
    py-3
    text-sm
    text-white/70
    transition
    hover:text-white
    "
  >

    Maybe Later

  </button>

</form>

)}

<div className="mt-8 border-t border-white/10 pt-5 text-center">

  <p className="text-xs leading-6 text-white/60">

    ✨ Offer valid only till
    <span className="font-semibold text-yellow-300">
      {" "}31 July
    </span>

    <br />

    Applicable on Gold Jewellery Making Charges.

  </p>

</div>

{/* Close text-center */}
</div>

{/* Close p-8 */}
</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

);

}