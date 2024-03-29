import React from "react";
import telegram from "../images/telegram.png";
import discort from "../images/discord.png";
import twitter from "../images/twitter.png";
import dragu_hero from "../images/dragu_hero.png";
import dragu_coin from "../images/dragu.png";
import fly from "../images/fly.png";

import Snowfall from "./Snowfall";

export const HeroSeaction = () => {
  const wallets = 1264;
  const walletsPercentage = "45.3%";

  return (
    <>
      <div class="wrapper_header">
        <div class="header">
          <div class="menu_left">
            <a href="/#WHO" class="menu_button w-button">
              STORY
            </a>
            <a href="/#TOK" class="menu_button w-button">
              DRAGU LEGENDS
            </a>
            <a href="/#STATS" class="menu_button w-button">
              DRAGUNOMICS
            </a>
          </div>
          <div class="menu_right">
            <img className="socials p-1" src={telegram} alt="telegram" />
            <img className="socials p-1" src={twitter} alt="twitter" />
            <img className="socials" src={discort} alt="discort" />
          </div>
        </div>
      </div>

      <div class="wrapper">
        <div class="section_hero">
          <div class="block_chara">
            <img src={dragu_hero} loading="lazy" alt="" class="booby" />
          </div>
          <div class="block_logo">
            <div class="main-text">
              <img src={dragu_coin} alt="dragu" class="coin" />
              DRAGU
            </div>
            <div class="pre-sale">
              REFUND ADDRESS (Custodian is{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://twitter.com/LBankExchange/status/1769918019738976697"
                target="_blank"
                rel="noreferrer"
              >
                LBANK
              </a>
              ):
            </div>
            <div class="block_ca" data-tooltip-id="tt" id="tt">
              <div class="ca">fCuw5ppJ9aZYzjm8EsT2fHwxV1h5JwUfqXM44iX3Pzb</div>
            </div>
            <div class="loading-parent">
              <div class="break-points">
                <div class="break-1">
                  20%
                  <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="break-2">
                  50%
                  <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="break-3">
                  75%
                  <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="break-3">
                  100%
                  <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div class="loading-bar">
                <div
                  class="half-bar"
                  style={{ width: `${walletsPercentage}` }}
                ></div>
                <div class="progress-overlay"></div>
                <img
                  src={fly}
                  alt="fly"
                  class="slerf-progress"
                  style={{ marginLeft: `${walletsPercentage}` }}
                />
                <div
                  class="tool-tip"
                  style={{ marginLeft: `${walletsPercentage}` }}
                >
                  <div class="tool-tip-1">
                    {wallets} Wallets
                    <br />({walletsPercentage})
                  </div>
                  <div class="tool-tip-2"></div>
                  <div class="tool-tip-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snowfall className="absolute top-0" />
    </>
  );
};
