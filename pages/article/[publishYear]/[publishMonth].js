import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={styles.main}>
      <h1>This Is The Product Page For year:{router.query.publishYear} month:{router.query.publishMonth}</h1>
      </div>
    </>
  );
}