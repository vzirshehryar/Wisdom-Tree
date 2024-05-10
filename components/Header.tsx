import React from "react";
import OxAuth from "./OxAuth";

const Header = () => {
  return (
    <>
      <header className="header grey-eyebrow-bar" data-corporate-home="False">
        <div className="secondary-nav-wrapper visible-md visible-lg ">
          <div className="container">
            <nav className="secondary-nav clearfix">
              <a
                href="https://www.wisdomtree.com?interest=corp"
                className="external secondary-nav-link"
              >
                Our Company
              </a>
              <a
                href="https://www.wisdomtreeprime.com/?utm_source=referral&utm_medium=wisdomtree.com"
                target="_blank"
                className=" secondary-nav-link"
              >
                WisdomTree Prime
              </a>
              <a
                href="http://ir.wisdomtree.com/"
                className=" secondary-nav-link"
              >
                Investor Relations
              </a>
              <a
                href="https://www.wisdomtree.com/investments/contact-us"
                className=" secondary-nav-link"
              >
                Contact
              </a>

              <div className="dropdown secondary-nav-link">
                <div
                  data-target="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle locale-dropdown"
                >
                  <span>Local Sites</span>
                  <b className="caret"></b>
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.com?allow=ca"
                    >
                      <span>United States</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/de-ch"
                    >
                      <span>Switzerland</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/de-de"
                    >
                      <span>Germany</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/fi-fi"
                    >
                      <span>Finland</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/fr-fr"
                    >
                      <span>France</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/en-gb"
                    >
                      <span>United Kingdom</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/en-ie"
                    >
                      <span>Ireland</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/it-it"
                    >
                      <span>Italy</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/fr-lu"
                    >
                      <span>Luxembourg</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/nl-nl"
                    >
                      <span>Netherlands</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/nb-no"
                    >
                      <span>Norway</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="locale-link js-terms force-external"
                      href="https://www.wisdomtree.eu/sv-se"
                    >
                      <span>Sweden</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="row first-line">
            <div className="col-xs-5 col-sm-3">
              <a href="https://www.wisdomtree.com/investments" className="logo">
                <img
                  src="https://www.wisdomtree.com/investments/-/media/logo.svg?iar=0&amp;hash=D72308FE097419956FDC89213558FC39"
                  alt="Company logo of a Oak tree with “WisdomTree” below it"
                />
              </a>
            </div>

            <div className="col-xs-7 col-sm-9 visible-md visible-lg text-right"></div>

            <div className="col-xs-7 col-sm-9 visible-xs visible-sm text-right">
              <div className="mobile-nav">
                <div
                  className="dropdown-trigger panel-trigger-btn auth-btn"
                  role="button"
                  data-target="#authMobilePanel"
                  aria-expanded="false"
                ></div>
                <div
                  className="dropdown-trigger panel-trigger-btn search-btn"
                  role="button"
                  data-target="#searchHeaderPanel"
                  aria-expanded="false"
                ></div>
                <div
                  className="dropdown-trigger panel-trigger-btn menu-btn"
                  role="button"
                  data-target="#mobileMenuPanel"
                  aria-expanded="false"
                ></div>
              </div>
            </div>
          </div>
          <div className="hidden-xs hidden-sm main-navigation">
            <div className="main-nav-wrapper">
              <nav className="main-nav">
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    href="https://www.wisdomtree.com/investments/etfs"
                    data-target="#panelC5A65ABC23DA462FBC3FA702C75B8245"
                  >
                    ETFs
                  </a>
                  <div
                    id="panelC5A65ABC23DA462FBC3FA702C75B8245"
                    className="row nav-panel nav-panel-wide"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/etfs">
                                <span>All ETFs</span>
                              </a>
                            </li>
                            <li
                              role="presentation"
                              className="link-list-item active"
                            >
                              <a
                                data-target="#panelCD2513D424E0415581EC8A18816CAE04"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Domestic Equity ETFs</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panelAA89D66B545443CCB024F7CA2552F69B"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>EM Equity ETFs</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panelFD5AC4AEE7EC4ABEA7E088E23CD72B3B"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>International Equity ETFs</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panel28DA38707DEF455B9437D4CA06715186"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Fixed Income ETFs </span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panel060CD07B916A4A729C23A79762C79B41"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Alternative ETFs</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panel121D9E599E564B4BBD841C2245DC3E52"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Capital Efficient ETFs</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panel4B2048A4653842518BE2E82E81A2152B"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Megatrend ETFs</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panel66E027C9998D4CDAAA63B2E9245D1885"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Crypto ETFs</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/index">
                                <span>All Indexes</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        id="panelCD2513D424E0415581EC8A18816CAE04"
                        className="products-lists active"
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panel098EC7959AB74BD793CA95867DCCBC38"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Large Cap Core
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/eps"
                                >
                                  <span className="product-code">EPS</span>
                                  <span className="product-title">
                                    WisdomTree U.S. LargeCap Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dgrw"
                                >
                                  <span className="product-code">DGRW</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Quality Dividend Growth Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/usmf"
                                >
                                  <span className="product-code">USMF</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Multifactor Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/ntsx"
                                >
                                  <span className="product-code">NTSX</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Efficient Core Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel4DFB1EC0DD194BDFB81D6F48A2E4B923"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Mid &amp; Small Cap Core
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/ezm"
                                >
                                  <span className="product-code">EZM</span>
                                  <span className="product-title">
                                    WisdomTree U.S. MidCap Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/ees"
                                >
                                  <span className="product-code">EES</span>
                                  <span className="product-title">
                                    WisdomTree U.S. SmallCap Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dgrs"
                                >
                                  <span className="product-code">DGRS</span>
                                  <span className="product-title">
                                    WisdomTree U.S. SmallCap Quality Dividend
                                    Growth Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel22FFF2A417464FC5A36CDFBC4FF8A028"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Large Cap Value
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dln"
                                >
                                  <span className="product-code">DLN</span>
                                  <span className="product-title">
                                    WisdomTree U.S. LargeCap Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dtd"
                                >
                                  <span className="product-code">DTD</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Total Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dhs"
                                >
                                  <span className="product-code">DHS</span>
                                  <span className="product-title">
                                    WisdomTree U.S. High Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/aivl"
                                >
                                  <span className="product-code">AIVL</span>
                                  <span className="product-title">
                                    WisdomTree U.S. AI Enhanced Value Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/wtv"
                                >
                                  <span className="product-code">WTV</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Value Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel1CF72CC706F243B492E22722C6B5FBC8"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Mid &amp; Small Cap Value
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/don"
                                >
                                  <span className="product-code">DON</span>
                                  <span className="product-title">
                                    WisdomTree U.S. MidCap Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/des"
                                >
                                  <span className="product-code">DES</span>
                                  <span className="product-title">
                                    WisdomTree U.S. SmallCap Dividend Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel40D39B48112140C0A08E8229933C89A6"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Large Cap Growth
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/qgrw"
                                >
                                  <span className="product-code">QGRW</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Quality Growth Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelDC309AE13B4A4BDABCD65ADC24AA56E9"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Mid &amp; Small Cap Growth
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/qmid"
                                >
                                  <span className="product-code">QMID</span>
                                  <span className="product-title">
                                    WisdomTree U.S. MidCap Quality Growth Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/qsml"
                                >
                                  <span className="product-code">QSML</span>
                                  <span className="product-title">
                                    WisdomTree U.S. SmallCap Quality Growth Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panelAA89D66B545443CCB024F7CA2552F69B"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panelAA32E78999DA42058D9DAC083BFA7B66"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Emerging Markets
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dem"
                                >
                                  <span className="product-code">DEM</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets High Dividend
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dgre"
                                >
                                  <span className="product-code">DGRE</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets Quality Dividend
                                    Growth Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dgs"
                                >
                                  <span className="product-code">DGS</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets SmallCap
                                    Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/emmf"
                                >
                                  <span className="product-code">EMMF</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets Multifactor Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/ntse"
                                >
                                  <span className="product-code">NTSE</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets Efficient Core
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/xc"
                                >
                                  <span className="product-code">XC</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets ex-China Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/xsoe"
                                >
                                  <span className="product-code">XSOE</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets ex-State-Owned
                                    Enterprises Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelE518FFA8C3C44847AD3F72C972177FFB"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Regional/Single Country
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/cxse"
                                >
                                  <span className="product-code">CXSE</span>
                                  <span className="product-title">
                                    WisdomTree China ex-State-Owned Enterprises
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/epi"
                                >
                                  <span className="product-code">EPI</span>
                                  <span className="product-title">
                                    WisdomTree India Earnings Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panelFD5AC4AEE7EC4ABEA7E088E23CD72B3B"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panel2815638B366949EDA531C74CCE57BDBB"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              International
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dwm"
                                >
                                  <span className="product-code">DWM</span>
                                  <span className="product-title">
                                    WisdomTree International Equity Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dwmf"
                                >
                                  <span className="product-code">DWMF</span>
                                  <span className="product-title">
                                    WisdomTree International Multifactor Fund{" "}
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/ddwm"
                                >
                                  <span className="product-code">DDWM</span>
                                  <span className="product-title">
                                    WisdomTree Dynamic Currency Hedged
                                    International Equity Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dol"
                                >
                                  <span className="product-code">DOL</span>
                                  <span className="product-title">
                                    WisdomTree International LargeCap Dividend
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/aivi"
                                >
                                  <span className="product-code">AIVI</span>
                                  <span className="product-title">
                                    WisdomTree International AI Enhanced Value
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dth"
                                >
                                  <span className="product-code">DTH</span>
                                  <span className="product-title">
                                    WisdomTree International High Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/ihdg"
                                >
                                  <span className="product-code">IHDG</span>
                                  <span className="product-title">
                                    WisdomTree International Hedged Quality
                                    Dividend Growth Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/iqdg"
                                >
                                  <span className="product-code">IQDG</span>
                                  <span className="product-title">
                                    WisdomTree International Quality Dividend
                                    Growth Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/ntsi"
                                >
                                  <span className="product-code">NTSI</span>
                                  <span className="product-title">
                                    WisdomTree International Efficient Core Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelFF55B69D70824D9F87CC78E908D7F20D"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              International Mid &amp; Small Cap
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dls"
                                >
                                  <span className="product-code">DLS</span>
                                  <span className="product-title">
                                    WisdomTree International SmallCap Dividend
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/ddls"
                                >
                                  <span className="product-code">DDLS</span>
                                  <span className="product-title">
                                    WisdomTree Dynamic Currency Hedged
                                    International SmallCap Equity Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dim"
                                >
                                  <span className="product-code">DIM</span>
                                  <span className="product-title">
                                    WisdomTree International MidCap Dividend
                                    Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelC206506AA83D4F39A9CE44BBD038F72F"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Global
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dnl"
                                >
                                  <span className="product-code">DNL</span>
                                  <span className="product-title">
                                    WisdomTree Global ex‐U.S. Quality Dividend
                                    Growth Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dew"
                                >
                                  <span className="product-code">DEW</span>
                                  <span className="product-title">
                                    WisdomTree Global High Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/wtre"
                                >
                                  <span className="product-code">WTRE</span>
                                  <span className="product-title">
                                    WisdomTree New Economy Real Estate Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel7CF0C492BC35401AB97226E448EE76C1"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Regional/Single Country
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dxj"
                                >
                                  <span className="product-code">DXJ</span>
                                  <span className="product-title">
                                    WisdomTree Japan Hedged Equity Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/hedj"
                                >
                                  <span className="product-code">HEDJ</span>
                                  <span className="product-title">
                                    WisdomTree Europe Hedged Equity Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/eudg"
                                >
                                  <span className="product-code">EUDG</span>
                                  <span className="product-title">
                                    WisdomTree Europe Quality Dividend Growth
                                    Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel3CAD7C2090D243A1BE19036E78121EF5"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Regional/Single Country Small Cap
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dfj"
                                >
                                  <span className="product-code">DFJ</span>
                                  <span className="product-title">
                                    WisdomTree Japan SmallCap Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dxjs"
                                >
                                  <span className="product-code">DXJS</span>
                                  <span className="product-title">
                                    WisdomTree Japan Hedged SmallCap Equity Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/dfe"
                                >
                                  <span className="product-code">DFE</span>
                                  <span className="product-title">
                                    WisdomTree Europe SmallCap Dividend Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/eusc"
                                >
                                  <span className="product-code">EUSC</span>
                                  <span className="product-title">
                                    WisdomTree Europe Hedged SmallCap Equity
                                    Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panel28DA38707DEF455B9437D4CA06715186"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panelCB8825DD8E8D4C098D6298D4FDA23D0B"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Strategic Core/Core Plus
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/aggy"
                                >
                                  <span className="product-code">AGGY</span>
                                  <span className="product-title">
                                    WisdomTree Yield Enhanced U.S. Aggregate
                                    Bond Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/agzd"
                                >
                                  <span className="product-code">AGZD</span>
                                  <span className="product-title">
                                    WisdomTree Interest Rate Hedged U.S.
                                    Aggregate Bond Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/shag"
                                >
                                  <span className="product-code">SHAG</span>
                                  <span className="product-title">
                                    WisdomTree Yield Enhanced U.S. Short-Term
                                    Aggregate Bond Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/uniy"
                                >
                                  <span className="product-code">UNIY</span>
                                  <span className="product-title">
                                    WisdomTree Voya Yield Enhanced USD Universal
                                    Bond Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/wtbn"
                                >
                                  <span className="product-code">WTBN</span>
                                  <span className="product-title">
                                    WisdomTree Bianco Total Return Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel76DC71C47E8644B3AFE1D08C1B24F57F"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Securitized Sector
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/mtgp"
                                >
                                  <span className="product-code">MTGP</span>
                                  <span className="product-title">
                                    WisdomTree Mortgage Plus Bond Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelE4B6F55FC3364FBDB6B3AA9A06D37626"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Government Strategies
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/usfr"
                                >
                                  <span className="product-code">USFR</span>
                                  <span className="product-title">
                                    WisdomTree Floating Rate Treasury Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/ussh"
                                >
                                  <span className="product-code">USSH</span>
                                  <span className="product-title">
                                    WisdomTree 1-3 Year Laddered Treasury Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/usin"
                                >
                                  <span className="product-code">USIN</span>
                                  <span className="product-title">
                                    WisdomTree 7-10 Year Laddered Treasury Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel0F728DE87465414DA9D64600C0DA621C"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Credit
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/hyzd"
                                >
                                  <span className="product-code">HYZD</span>
                                  <span className="product-title">
                                    WisdomTree Interest Rate Hedged High Yield
                                    Bond Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/sfig"
                                >
                                  <span className="product-code">SFIG</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Short-Term Corporate Bond
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/wfhy"
                                >
                                  <span className="product-code">WFHY</span>
                                  <span className="product-title">
                                    WisdomTree U.S. High Yield Corporate Bond
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/wfig"
                                >
                                  <span className="product-code">WFIG</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Corporate Bond Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelAD4B67B8EAB04A16B2F22B55CC0FF400"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Emerging Markets
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/eld"
                                >
                                  <span className="product-code">ELD</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets Local Debt Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/fixed-income/emcb"
                                >
                                  <span className="product-code">EMCB</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets Corporate Bond
                                    Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelF3512C3E0B1D4520BCA54B646F6281D8"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Currency Strategies
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/currency/cew"
                                >
                                  <span className="product-code">CEW</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Currency Strategy Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/currency/usdu"
                                >
                                  <span className="product-code">USDU</span>
                                  <span className="product-title">
                                    WisdomTree Bloomberg U.S. Dollar Bullish
                                    Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panel060CD07B916A4A729C23A79762C79B41"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panelDB4F60DE63A042E9A96BB63251265194"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Managed Futures
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/alternative/wtmf"
                                >
                                  <span className="product-code">WTMF</span>
                                  <span className="product-title">
                                    WisdomTree Managed Futures Strategy Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel5D0C99D0D9234C2BA1A55B34A258DC3F"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Option-Based
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/alternative/gtr"
                                >
                                  <span className="product-code">GTR</span>
                                  <span className="product-title">
                                    WisdomTree Target Range Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/alternative/putw"
                                >
                                  <span className="product-code">PUTW</span>
                                  <span className="product-title">
                                    WisdomTree PutWrite Strategy Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelDA8FD560D11D41819A4318AFF72D7BAF"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Commodity
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/alternative/gcc"
                                >
                                  <span className="product-code">GCC</span>
                                  <span className="product-title">
                                    WisdomTree Enhanced Commodity Strategy Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelEFFB513B691B4026841E5A934A544F05"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Credit
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/alternative/hyin"
                                >
                                  <span className="product-code">HYIN</span>
                                  <span className="product-title">
                                    WisdomTree Alternative Income Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panel121D9E599E564B4BBD841C2245DC3E52"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panelD6E3B3B3C12D456AAA29729C1067F9B4"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Core
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/ntsx"
                                >
                                  <span className="product-code">NTSX</span>
                                  <span className="product-title">
                                    WisdomTree U.S. Efficient Core Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/ntsi"
                                >
                                  <span className="product-code">NTSI</span>
                                  <span className="product-title">
                                    WisdomTree International Efficient Core Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/ntse"
                                >
                                  <span className="product-code">NTSE</span>
                                  <span className="product-title">
                                    WisdomTree Emerging Markets Efficient Core
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/gde"
                                >
                                  <span className="product-code">GDE</span>
                                  <span className="product-title">
                                    WisdomTree Efficient Gold Plus Equity
                                    Strategy Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelA1F56C9FF05E472E8EC10385A837466E"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Tactical
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/capital-efficient/gdmn"
                                >
                                  <span className="product-code">GDMN</span>
                                  <span className="product-title">
                                    WisdomTree Efficient Gold Plus Gold Miners
                                    Strategy Fund{" "}
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panel4B2048A4653842518BE2E82E81A2152B"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panelCD5617E491A74496980419764704186E"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Megatrends
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/megatrends/wbat"
                                >
                                  <span className="product-code">WBAT</span>
                                  <span className="product-title">
                                    WisdomTree Battery Value Chain and
                                    Innovation Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/megatrends/wcbr"
                                >
                                  <span className="product-code">WCBR</span>
                                  <span className="product-title">
                                    WisdomTree Cybersecurity Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/megatrends/wcld"
                                >
                                  <span className="product-code">WCLD</span>
                                  <span className="product-title">
                                    WisdomTree Cloud Computing Fund{" "}
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/megatrends/wdna"
                                >
                                  <span className="product-code">WDNA</span>
                                  <span className="product-title">
                                    WisdomTree BioRevolution Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/megatrends/wtai"
                                >
                                  <span className="product-code">WTAI</span>
                                  <span className="product-title">
                                    WisdomTree Artificial Intelligence and
                                    Innovation Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/equity/wtre"
                                >
                                  <span className="product-code">WTRE</span>
                                  <span className="product-title">
                                    WisdomTree New Economy Real Estate Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panel66E027C9998D4CDAAA63B2E9245D1885"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panelB60E40C6F54B49C08BD54DD157D8017C"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Bitcoin
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/etfs/crypto/btcw"
                                >
                                  <span className="product-code">BTCW</span>
                                  <span className="product-title">
                                    WisdomTree Bitcoin Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    data-target="#panel7AA0ACD8C1414C93BD50A36A1D76DCC8"
                  >
                    DIGITAL FUNDS
                  </a>
                  <div
                    id="panel7AA0ACD8C1414C93BD50A36A1D76DCC8"
                    className="row nav-panel nav-panel-wide"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/digital-funds">
                                <span>All Digital Funds</span>
                              </a>
                            </li>
                            <li
                              role="presentation"
                              className="link-list-item active"
                            >
                              <a
                                data-target="#panelB5E0037278DF4993BF5198F19C48EADB"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Asset Allocation</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panelC25A5FF711C146B38E718D5275E3EF27"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Equity</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panel89C6543DA4CD47B68598546C8B5A7E47"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Fixed Income</span>
                              </a>
                            </li>
                            <li role="presentation" className="link-list-item ">
                              <a
                                data-target="#panel9651D618886A40129149810BB36F57A9"
                                role="tab"
                                data-toggle="tab"
                              >
                                <span>Money Market</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        id="panelB5E0037278DF4993BF5198F19C48EADB"
                        className="products-lists active"
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panel0FD54A54A58B48759F88B2773C40EF95"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Income
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/asset-allocation/wtsix"
                                >
                                  <span className="product-code">WTSIX</span>
                                  <span className="product-title">
                                    WisdomTree Short-Duration Income Digital
                                    Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel7F99B3DE779E48F4B9E7F7580261AE15"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Siegel Collaboration Strategies
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/asset-allocation/eqtyx"
                                >
                                  <span className="product-code">EQTYX</span>
                                  <span className="product-title">
                                    WisdomTree Siegel Global Equity Digital Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/asset-allocation/lngvx"
                                >
                                  <span className="product-code">LNGVX</span>
                                  <span className="product-title">
                                    WisdomTree Siegel Longevity Digital Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/asset-allocation/modrx"
                                >
                                  <span className="product-code">MODRX</span>
                                  <span className="product-title">
                                    WisdomTree Siegel Moderate Digital Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panelC25A5FF711C146B38E718D5275E3EF27"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panelB6A0510A88F24919876608BED6682405"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Technology
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/equity/techx"
                                >
                                  <span className="product-code">TECHX</span>
                                  <span className="product-title">
                                    WisdomTree Technology &amp; Innovation 100
                                    Digital Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panelBF8799F406DF4EB48BF5C56C1F50101B"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              U.S. LargeCap Core
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/equity/spxux"
                                >
                                  <span className="product-code">SPXUX</span>
                                  <span className="product-title">
                                    WisdomTree 500 Digital Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panel89C6543DA4CD47B68598546C8B5A7E47"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panel3C10CE5191A948ABBC2C86D9AD1D59C9"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Government
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/fixed-income/wtlgx"
                                >
                                  <span className="product-code">WTLGX</span>
                                  <span className="product-title">
                                    WisdomTree Long Term Treasury Digital Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/fixed-income/wtstx"
                                >
                                  <span className="product-code">WTSTX</span>
                                  <span className="product-title">
                                    WisdomTree 7-10 Year Treasury Digital Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/fixed-income/wttsx"
                                >
                                  <span className="product-code">WTTSX</span>
                                  <span className="product-title">
                                    WisdomTree 3-7 Year Treasury Digital Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel98AE7FCE0785483A95D4100CD1D9F6AA"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Interest Rate Strategies
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/fixed-income/tipsx"
                                >
                                  <span className="product-code">TIPSX</span>
                                  <span className="product-title">
                                    WisdomTree TIPS Digital Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="panel811DA54162E040D187C821A944002F06"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <div className="links-list-title products-list-title">
                              Short-Term Government
                            </div>
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/fixed-income/flttx"
                                >
                                  <span className="product-code">FLTTX</span>
                                  <span className="product-title">
                                    WisdomTree Floating Rate Treasury Digital
                                    Fund
                                  </span>
                                </a>
                              </li>
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/fixed-income/wtsyx"
                                >
                                  <span className="product-code">WTSYX</span>
                                  <span className="product-title">
                                    WisdomTree Short-Term Treasury Digital Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        id="panel9651D618886A40129149810BB36F57A9"
                        className="products-lists "
                      >
                        <div className="products-lists-inner ">
                          <div
                            id="panel7A89C8390C684936B50AAD7F103C8C50"
                            className="links-list-wrapper products-list-wrapper"
                          >
                            <ul className="links-list products-list">
                              <li className="link-list-item products-list-item">
                                <a
                                  className="product-link"
                                  href="https://www.wisdomtree.com/investments/digital-funds/money-market/wtgxx"
                                >
                                  <span className="product-code">WTGXX</span>
                                  <span className="product-title">
                                    WisdomTree Government Money Market Digital
                                    Fund
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    data-target="#panel0D58F1EF168045D4878DF4C85CE5BDDC"
                  >
                    STRATEGIES
                  </a>
                  <div
                    id="panel0D58F1EF168045D4878DF4C85CE5BDDC"
                    className="row nav-panel"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/on-the-markets">
                                <span>On the Markets</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/quality">
                                <span>Quality for Volatility</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/fixed-income">
                                <span>Fixed Income: A New Rate Regime</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/tactical-ideas">
                                <span>Tactical Investment Ideas</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/emerging-markets">
                                <span>Emerging Markets</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/capital-efficient-etfs">
                                <span>Capital Efficiency</span>
                              </a>
                            </li>
                            <li className="link-list-item arrow-right">
                              <a href="https://www.wisdomtree.com/investments/strategies/megatrends">
                                <span>Megatrends</span>
                              </a>
                              <ul className="sublist-items">
                                <li className="link-list-item">
                                  <a href="https://www.wisdomtree.com/investments/strategies/ai">
                                    <span>
                                      Artificial Intelligence &amp; Innovation
                                    </span>
                                  </a>
                                </li>
                                <li className="link-list-item">
                                  <a href="https://www.wisdomtree.com/investments/strategies/biorevolution">
                                    <span>BioRevolution</span>
                                  </a>
                                </li>
                                <li className="link-list-item">
                                  <a href="https://www.wisdomtree.com/investments/strategies/cloud-computing">
                                    <span>Cloud Computing</span>
                                  </a>
                                </li>
                                <li className="link-list-item">
                                  <a href="https://www.wisdomtree.com/investments/strategies/cybersecurity">
                                    <span>Cybersecurity</span>
                                  </a>
                                </li>
                                <li className="link-list-item">
                                  <a href="https://www.wisdomtree.com/investments/strategies/energy-transformation">
                                    <span>Global Energy Transformation</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/crypto">
                                <span>The Evolution of Crypto</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/currency-hedging">
                                <span>Currency Hedging</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/strategies/value-investing-strategy-etfs">
                                <span>Value Investing</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    data-target="#panelD07C4ABC142E4FF2B70C52689A269F00"
                  >
                    MODEL PORTFOLIOS
                  </a>
                  <div
                    id="panelD07C4ABC142E4FF2B70C52689A269F00"
                    className="row nav-panel"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/mac">
                                <span>Model Adoption Center</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/portfolio-and-growth-solutions">
                                <span>Portfolio &amp; Growth Solutions</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    href="https://www.wisdomtree.com/investments/tools"
                    data-target="#panel2FEF5CDA904B4B5B9BF29C865225FFAB"
                  >
                    PATH
                  </a>
                  <div
                    id="panel2FEF5CDA904B4B5B9BF29C865225FFAB"
                    className="row nav-panel"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/tools">
                                <span>All PATH Tools</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/tools#fund-comparison">
                                <span>Fund Comparison</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/tools#index-attribution">
                                <span>Index Attribution</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/tools#performance-at-a-glance">
                                <span>Performance at Glance</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/tools#morningstar-ratings">
                                <span>Morningstar Ratings</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/tools#fibb&">
                                <span>Fixed Income Barbell</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/tools#earnings">
                                <span>Earnings Path</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    data-target="#panel3885E457B6AD49C2A3DE1E575C71CFE5"
                  >
                    RESOURCES
                  </a>
                  <div
                    id="panel3885E457B6AD49C2A3DE1E575C71CFE5"
                    className="row nav-panel"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/index">
                                <span>All Indexes</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/research">
                                <span>WisdomTree Insights</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/resource-library/prospectus-regulatory-reports">
                                <span>Prospectus &amp; Regulatory</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/resource-library/fact-sheets-reports">
                                <span>Fact Sheets &amp; Reports</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/etf-education">
                                <span>ETF Education</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/press-room">
                                <span>Press Room</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/resource-library/2023-estimated-capital-gains-distributions">
                                <span>2023 Capital Gains Distributions</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    data-target="#panel79C0C900E6044604B7C2A2E5ECC2ACA9"
                  >
                    SOLUTIONS
                  </a>
                  <div
                    id="panel79C0C900E6044604B7C2A2E5ECC2ACA9"
                    className="row nav-panel"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/advisor-solutions">
                                <span>Advisor Solutions</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/the-modern-investor">
                                <span>The Modern Investor Solutions</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    href="https://www.wisdomtree.com/investments/all-insights"
                    data-target="#panelDA841415887D466B91C589C0FD18131B"
                  >
                    INSIGHTS
                  </a>
                  <div
                    id="panelDA841415887D466B91C589C0FD18131B"
                    className="row nav-panel"
                  >
                    <div className="nav-panel-container ">
                      <div className="nav-panel-content ">
                        <div className="links-list-wrapper" role="tabpanel">
                          <ul className="links-list">
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/all-insights">
                                <span>All Insights</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/blog">
                                <span>Blog</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/research">
                                <span>Research</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/multimedia/videos">
                                <span>Videos</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/multimedia/podcasts">
                                <span>Podcasts</span>
                              </a>
                            </li>
                            <li className="link-list-item">
                              <a href="https://www.wisdomtree.com/investments/blog-contributors">
                                <span>Contributors</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div className="main-cta-wrapper">
              <div className="auth-panel-desktop">
                <div
                  className="dropdown-trigger panel-trigger-btn sign-in-btn"
                  role="button"
                  data-target="#signInHeaderPanel"
                >
                  <OxAuth />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
