import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.info(router.query);
  if (!router.query.birth) { // 注意这里的取值必须和文件的命名一致,都是 name
    return (
        <>
        <div className={styles.main}>
        <h1>Loading</h1>
        </div>
      </>
    )
  }
  return (
    <>
      <div className={styles.main}>
      <h1>This Is The Users Page For birth in {router.query.birth[0]} and {router.query.birth[1]}</h1>
      </div>
    </>
  );
}