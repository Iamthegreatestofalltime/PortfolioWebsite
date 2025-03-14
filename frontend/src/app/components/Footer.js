"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div style={footerContainerStyle}>
                <div style={contactSectionStyle}>
                    <h3 style={footerTitleStyle}>Contact Me</h3>
                    <p style={footerTextStyle}>Phone: +1 (317)-789-5564</p>
                    <p style={footerTextStyle}>Email: alexlotkov124@gmail.com</p>
                </div>
                <div style={socialSectionStyle}>
                    <h3 style={footerTitleStyle}>Follow Me</h3>
                    <div style={socialLinksStyle}>
                        <Link href="https://www.linkedin.com/in/alex-lotkov-0b0948243">
                            <Image src="https://i.pinimg.com/564x/49/32/80/49328097f84b5b6d80ffe0c104e4f429.jpg" alt="LinkedIn" width={30} height={30} style={socialIconStyle} />
                        </Link>
                        <Link href="https://github.com/Iamthegreatestofalltime?tab=repositories">
                            <Image src="https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg" alt="GitHub" width={30} height={30} style={socialIconStyle} />
                        </Link>
                    </div>
                </div>
                <div style={footerNavStyle}>
                    <h3 style={footerTitleStyle}>Quick Links</h3>
                    <ul style={navListStyle}>
                        <li><Link href="/"><p style={footerLinkStyle}>Home</p></Link></li>
                        <li><Link href="/portfolio"><p style={footerLinkStyle}>Portfolio</p></Link></li>
                    </ul>
                </div>
            </div>
            <div style={footerBottomStyle}>
                <p style={footerTextStyle}>&copy; 2024 Alex Lotkov. All rights reserved.</p>
            </div>
        </footer>
    );
}

const footerStyle = {
    backgroundColor: '#111', // Dark background
    color: '#fff', // White text
    padding: '2rem 1rem',
    textAlign: 'left',
};

const footerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '2rem',
};

const contactSectionStyle = {
    flex: '1 1 300px',
    marginBottom: '1rem',
};

const socialSectionStyle = {
    flex: '1 1 300px',
    marginBottom: '1rem',
};

const footerNavStyle = {
    flex: '1 1 300px',
    marginBottom: '1rem',
};

const footerTitleStyle = {
    fontSize: '1.5rem',
    color: '#E11D48', // Red color for the titles
    marginBottom: '1rem',
};

const footerTextStyle = {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    borderRadius: '5px',
    maxWidth: '300px'
};

const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
};

const socialIconStyle = {
    width: '30px',
    height: '30px',
};

const navListStyle = {
    listStyleType: 'none',
    padding: 0,
};

const footerLinkStyle = {
    fontSize: '1rem',
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    cursor: 'pointer',
};

const footerBottomStyle = {
    textAlign: 'center',
    borderTop: '1px solid #333',
    paddingTop: '1rem',
};