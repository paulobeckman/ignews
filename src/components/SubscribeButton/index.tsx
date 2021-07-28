import styles from './styles.module.scss'

interface SubscriberButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscriberButtonProps) {
  return (
    <button 
      type="submit"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}
