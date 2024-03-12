"use client"

import Link from "next/link";
import {Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar style={{backgroundColor: "#0F0F0F", }} expand="lg" className='py-3'>
            <Navbar.Brand href="/" className='ms-2 text-white'><strong>Fabrica de modelos</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background: "white"}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href={"/model_selection"} className="text-white nav-link" style={{"fontWeight": "normal"}}>Seleccion de modelos</Link>
                    <Link href={"/score_record"} className="text-white nav-link" style={{"fontWeight": "normal"}}>Mejores modelos</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}