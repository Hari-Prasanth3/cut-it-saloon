import React from "react";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#121212] border-t border-white/10 px-6" data-testid="footer">
            <div className="md:max-w-7xl md:mx-auto md:py-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img src="/images/logo-removebg-preview.png" alt="Logo" className="w-48 md:w-72 h-12 md:h-24 max-w-full" />
                        </div>
                        <p className="text-[#a1a1aa] text-base leading-relaxed">
                            Premium grooming and spa services in Coimbatore. Experience luxury, style, and sophistication.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <a
                                href="https://www.instagram.com/cutit2.osalon?utm_source=qr&igsh=ZmtoeWl4M2RybWRk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[#a1a1aa] hover:text-[#ededed] transition-colors text-base"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={20} />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="mailto:ramsubhash07@gmail.com"
                                className="flex items-center gap-2 text-[#a1a1aa] hover:text-[#ededed] transition-colors text-base"
                                aria-label="Email us"
                            >
                                <Mail size={20} />
                                <span>ramsubhash07@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    

                    <div>
                        <h4 className="text-[#ededed] uppercase tracking-wider text-sm font-bold mb-6">
                            Quick Links
                        </h4>
                        <div className="space-y-3">
                            {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-[#a1a1aa] hover:text-[#ededed] transition-colors text-base"
                                    data-testid={`footer-link-${link.toLowerCase()}`}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#ededed] uppercase tracking-wider text-sm font-bold mb-6">
                            Contact
                        </h4>
                        <p className="text-[#a1a1aa] text-base mb-2 leading-relaxed">114 thanner panthal, vilankurichi road</p>
                        <p className="text-[#a1a1aa] text-base mb-2">Coimbatore – 641004</p>
                        <a
                            href="tel:08072016978"
                            className="text-[#a1a1aa] hover:text-[#ededed] transition-colors text-base"
                        >
                            080720 16978
                        </a>

                        <p className="text-[#a1a1aa] text-base mb-2 mt-2 leading-relaxed"> 25A, Puliyankulam to Sowripalayam road,<br />
                            Opposite Meena Estate Busstand, Meena estate,<br />
                            Coimbatore, Tamil Nadu – 641022</p>

                        <a
                            href="tel:93618 56556"
                            className="text-[#a1a1aa] hover:text-[#ededed] transition-colors text-base"
                        >
                            93618 56556
                        </a>

                        
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 text-center">
                    <p className="text-[#a1a1aa] text-sm">
                        © {new Date().getFullYear()} Cut It Salon & Spa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
