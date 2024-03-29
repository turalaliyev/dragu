import smiling from "../images/smile.png";
import fire from "../images/fire.png";

import LBank from "../images/lbank.jpeg";
import HTX from "../images/htx.jpg";
import Hawksight from "../images/Hawksight.jpeg";
import BingX from "../images/BingX.jpeg";
import Jupiter from "../images/Jupiter.jpeg";
import KuCoin from "../images/KuCoin.jpeg";
import OneDex from "../images/OneDex.jpeg";
import BitGet from "../images/BitGet.png";

export const StorySection = () => {
  return (
    <div class="wrapper_tokenomics bg-[#8C5FFF]" id="tokenomics">
      <img src={fire} alt="salute" class="salute" />
      <img src={smiling} alt="smile" class="smile" />
      <div class="tokenomics">
        <div class="contribs_details">
          <div class="h1 mb-6">DRAGU LEGENDS</div>
          <div class="contribs_flex">
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={LBank} />
              <h3>LBank</h3>
            </div>
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={HTX} />
              <h3>HTX</h3>
            </div>
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={Hawksight} />
              <h3>Hawksight</h3>
            </div>
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={BingX} />
              <h3>BingX</h3>
            </div>
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={Jupiter} />
              <h3>Jupiter</h3>
            </div>
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={KuCoin} />
              <h3>KuCoin</h3>
            </div>
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={OneDex} />
              <h3>OneDex</h3>
            </div>
            <div class="contrib">
              <img class="contribimg" alt="contribimg" src={BitGet} />
              <h3>BitGet</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
