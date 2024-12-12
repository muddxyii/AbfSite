﻿import React from "react";

const CompanyInfo = () => (
    <div className="text-left">
        <h3 className="text-lg font-bold" itemProp="name">AnyBackflow.com Inc.</h3>
        <div className="space-x-2">
            <a href="mailto:info@anybackflow.com" className="link link-hover" itemProp="email">
                info@anybackflow.com
            </a>
            <a href="tel:+16022282923" className="link link-hover" itemProp="telephone">
                (602) 228-2923
            </a>
        </div>
        <p className="text-sm" itemProp="license">ROC 252348 C-37; ROC 334105 CR-16</p>
    </div>
);

export default CompanyInfo;