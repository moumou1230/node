import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>실행중</div>
      <ul>
        <li>
          <a href="/sub">/pages/sub/</a>
        </li>
        <li>
          <a href="/sub/about">/pages/sub/about</a>
        </li>
        <li>
          <a href="/sub/product">/pages/sub/product</a>
        </li>
      </ul>
    </>
  );
}
