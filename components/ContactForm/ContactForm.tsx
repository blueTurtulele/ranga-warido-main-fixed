import Alert from "@components/Alert";
import Button from "@components/Button";
import { Checks, PaperPlaneTilt, WarningCircle } from "phosphor-react";
import { FC, useRef, useState } from "react";
import styles from "./ContactForm.module.scss";

/**
 * Formularz bez backendu (działa na hostingu statycznym):
 * - wysyłka przez FormSubmit (POST) na konkretny adres e-mail
 * - brak przeładowania strony (ukryty iframe)
 * - prosta ochrona anty-spam: honeypot (_honey)
 */

const CONTACT_EMAIL = "info@ranga.net.pl"; // docelowy adres odbiorcy
const CC_EMAIL = "info@ranga.net.pl"; // kopia (opcjonalnie)

const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <>
      {/* Ukryty iframe — dzięki temu po submit nie przeładowuje strony */}
      <iframe
        name="contact_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          // onLoad uruchamia się też przy pierwszym renderze — ignorujemy jeśli nie wysyłamy
          if (!isSubmitting) return;
          setIsSubmitting(false);
          setStatus("success");
          formRef.current?.reset();
        }}
      />

      <form
        ref={formRef}
        className={styles.wrapper}
        action={`https://formsubmit.co/${CONTACT_EMAIL}`}
        method="POST"
        target="contact_iframe"
        onSubmit={() => {
          setIsSubmitting(true);
          setStatus("idle");

          // Fallback gdyby coś poszło nie tak (np. brak odpowiedzi)
          window.setTimeout(() => {
            setIsSubmitting((still) => {
              if (still) {
                setStatus("error");
                return false;
              }
              return still;
            });
          }, 8000);
        }}
      >
        {/* FormSubmit options */}
        <input type="hidden" name="_subject" value="Wiadomość ze strony (formularz kontaktowy)" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_cc" value={CC_EMAIL} />
        {/* Captcha potrafi blokować kolejne próby — na hostingu statycznym stabilniej jest ją wyłączyć */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Honeypot (bots will fill it, humans won't) */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {status === "success" && (
          <Alert className={styles.success} icon={Checks}>
            Wiadomość została wysłana. Dziękujemy! ✅
          </Alert>
        )}

        {status === "error" && (
          <Alert className={styles.sent_error} icon={WarningCircle}>
            Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na e-mail.
          </Alert>
        )}

        <div className={styles.input_wrapper}>
          <label htmlFor="firmName">Nazwa firmy</label>
          <input id="firmName" name="firmName" required />
        </div>

        <div className={styles.row}>
          <div className={styles.input_wrapper}>
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className={styles.input_wrapper}>
            <label htmlFor="phone">Telefon</label>
            <input id="phone" name="phone" type="tel" inputMode="tel" />
          </div>
        </div>

        <div className={styles.input_wrapper}>
          <label htmlFor="message">Wiadomość</label>
          <textarea id="message" name="message" required rows={6} />
        </div>

        <Button className={styles.button} loading={isSubmitting} type="submit" size="small" icon={PaperPlaneTilt}>
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
