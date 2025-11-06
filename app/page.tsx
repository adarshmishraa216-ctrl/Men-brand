"use client"
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link href="/akriti" style={{ margin: '20px', padding: '20px', border: '1px solid black', textDecoration: 'none' }}>
        <h2>Akriti</h2>
      </Link>
      <Link href="/pranoshakti" style={{ margin: '20px', padding: '20px', border: '1px solid black', textDecoration: 'none' }}>
        <h2>Pranoshakti</h2>
      </Link>
      <Link href="/rejivika" style={{ margin: '20px', padding: '20px', border: '1px solid black', textDecoration: 'none' }}>
        <h2>Rejivika</h2>
      </Link>
    </div>
  );
};

export default Page;