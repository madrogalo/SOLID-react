import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to='/single-responsibility-principle'>Single Responsibility Principle</Link>
      <Link to='/open-closed-principle'>Open-closed Principle</Link>
      <Link to='/liskov-substitution-principle'>Liskov (Barbara) Substitution Principle</Link>
      <Link to='/interface-segregation-principle'>Interface Segregation Principle</Link>
      <Link to='/dependency-inversion-principle'>Dependency Inversion Principle</Link>
    </div>
  );
}
