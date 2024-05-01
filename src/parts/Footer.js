import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-auto" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline">
                            We keboom your beauty holiday instantly and memorable.
                        </p>
                    </div>
                    <div className="col-12 col-lg-auto mr-5">
                        <h6 className="mt-2"> For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link'>
                                    New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link'>
                                    Start Booking a Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link'>
                                    Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link'>
                                    Our Carrers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link'>
                                    Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link'>
                                    Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link' href='https://www.instagram.com/shelter_camp/'>
                                @shelter_camp</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='https://api.whatsapp.com/send/?phone=%2B6282197549841&text&type=phone_number&app_absent=0&utm_source=heylink.me'>
                                    +62 821-9754-9841</Button>
                            </li>
                            <li className="list-group-item">
                                <span>Jl. Barunagri, RT.02/RW.12, Sukajaya, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40391, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center copyrights">
                        {/* Copyright 2022 • All rights reserved • Staycation */}
                    </div>
                </div>
            </div>
        </footer>
    )
}