import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  function goToUsers() {
    // router.push("/users");
    router.push({
      pathname:"/users/[name]",
    })
  }
  return (
    <>
      <div className={styles.main}>
        <h1>Hello Next.js!</h1>
        <Link replace href="/dashboard">
          go to Dashboard
        </Link>
        <Link
          href={{
            pathname: "/users/rieux",
            query: { params: "concrete value" },
          }}
        >
          go to Rieux
        </Link>
        <button onClick={goToUsers}>go to users</button>
      </div>
    </>
  );
}
