"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav1 = () => {
  return (
    <div className="flex gap-6 items-center">
      <Link href="/" className="hover:text-primary transition">
        Home
      </Link>
      <Link href="/login" className="hover:text-primary transition">
        Login
      </Link>
      <Link href="/sign" className="hover:text-primary transition">
        Sign In
      </Link>
    </div>
  );
};

export default Nav1;
