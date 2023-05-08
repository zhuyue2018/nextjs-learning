import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles.main}>
        <h1>This Is The Page of Users:Rieux!</h1>
        <h1>Value Of Params is: {router.query.params}</h1>
      </div>
    </>
  );
}
