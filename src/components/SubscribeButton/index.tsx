import styles from "./styles.module.scss";

interface SubcribeButtonProps {
  priceId: string;
}

export function SubcribeButton({ priceId }: SubcribeButtonProps) {
  return (
    <button className={styles.subscribeButton} type="button">
      {" "}
      Subscribe now
    </button>
  );
}
