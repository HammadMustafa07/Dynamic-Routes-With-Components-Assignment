

import Link from "next/link";

export default function CountryList() {
  return (
    <div>
      <h1>Country List</h1>

      <ul>

        <li>
          <Link href="/country/Australia" style={{ fontSize: 30, color: "black", display: "block", margin: 10, textDecoration: "none" }}>Australia</Link>
        </li>

        <li>
          <Link href="/country/Canada" style={{ fontSize: 30, color: "black", display: "block", margin: 10, textDecoration: "none" }}>Canada</Link>
        </li>

        <li>
          <Link href="/country/Germany" style={{ fontSize: 30, color: "black", display: "block", margin: 10, textDecoration: "none" }}>Germany</Link>
        </li>

        <li>
          <Link href="/country/Japan" style={{ fontSize: 30, color: "black", display: "block", margin: 10, textDecoration: "none" }}>Japan</Link>
        </li>

        <li>
          <Link href="/country/Brazil" style={{ fontSize: 30, color: "black", display: "block", margin: 10, textDecoration: "none" }}>Brazil</Link>
        </li>

      </ul>

    </div>
  );
}
