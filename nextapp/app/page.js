import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/sub">/sub/page.js</Link>
        </li>
        <li>
          <Link href="/sub/about">/sub/about.js</Link>
        </li>
      </ul>
    </div>
  );
}
