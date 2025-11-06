"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* 로고 */}
      <div className={styles.logoWrapper}>
        <Image
          src="/logo.svg"
          alt="DoppelGanger Logo"
          width={120}
          height={40}
        />
      </div>

      {/* 검색창 */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="후쿠오카"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <FaSearch size={12} color="#FFFFFF" />
        </button>
      </div>

      {/* 유저 아이콘 */}
      <div className={styles.userIconContainer}>
        <FaUserCircle size={20} color="#707070" />
      </div>
    </header>
  );
}
