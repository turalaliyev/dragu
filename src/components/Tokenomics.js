import suspect from "../images/suspect.png";

export const Tokenomics = () => {
  return (
    <div class="wrapper_tokenomics" id="tokenomics">
      <img src={suspect} alt="suspect" class="hanging" />
      <div class="tokenomics">
        <div class="h1">DRAGUNOMICS</div>
        <div
          data-w-id="4c6bb17c-4a56-13b4-3585-2eb3e7861ee4"
          class="tokenomics_details"
        >
          <div class="tokenomics_top">
            <div class="toke_details">
              <div class="tokenomics_title">TOTAL SUPPLY</div>
              <div class="tokenomics_title">500M</div>
            </div>
            <div class="toke_details">
              <div class="tokenomics_title">100% LP</div>
              <div class="tokenomics_title">0% PRESALE</div>
            </div>
          </div>
          <div class="tokenomics_bottom">
            <div class="toke_details">
              <div class="tokenomics_title">LP BURNED</div>
              <div class="tokenomics_title">AT LAUNCH</div>
            </div>
            <div class="toke_details">
              <div class="tokenomics_title">OWNERSHIP</div>
              <div class="tokenomics_title">REVOKED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
