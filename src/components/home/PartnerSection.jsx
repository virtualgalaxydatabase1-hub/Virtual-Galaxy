import React from 'react';
import partner1 from '../../assets/Government Projects/gmc_nagpur.png';
import partner2 from '../../assets/Government Projects/high_court.png';
import partner3 from '../../assets/Government Projects/igmc_nagpur.png';
import partner4 from '../../assets/Government Projects/macp_bank.png';
import partner5 from '../../assets/Government Projects/maharashtra-co-bank.png';
import partner6 from '../../assets/Government Projects/maharashtra-labour-bank.png';
import partner7 from '../../assets/Government Projects/maharashtra.png';
import partner8 from '../../assets/Government Projects/msamb.png';
import partner9 from '../../assets/Government Projects/mumbai_apmc.png';
import partner10 from '../../assets/Government Projects/nach.png';
import partner11 from '../../assets/Government Projects/nmmc.png';
import partner12 from '../../assets/inter-banking-projects/arusha_saccos.jpg';
import partner13 from '../../assets/inter-banking-projects/dcb_bank.jpg';
import partner14 from '../../assets/inter-banking-projects/maiic_bank.jpg';
import partner15 from '../../assets/inter-banking-projects/nyombo_saccos.jpg';
import partner16 from '../../assets/inter-banking-projects/trasaccos.jpg';
import partner17 from '../../assets/inter-banking-projects/wazalendo_saccos.jpg';
import partner18 from '../../assets/inter-banking-projects/wazo_hill_saccos_ltd.jpg';
import partner19 from '../../assets/National-bank/apex_bank.jpg';
import partner20 from '../../assets/National-bank/auranabad-dcc.jpg';
import partner21 from '../../assets/National-bank/bdcc_bank.jpg';
import partner22 from '../../assets/National-bank/bhandara_bank.jpg';
import partner23 from '../../assets/National-bank/bhandara_urban_co_bank.jpg';
import partner24 from '../../assets/National-bank/gdcc_bank.jpg';
import partner25 from '../../assets/National-bank/jalna-logo.png';
import partner26 from '../../assets/National-bank/mahalaxmi_bank.jpg';
import partner27 from '../../assets/National-bank/nagar_sahakari_bank.jpg';
import partner28 from '../../assets/National-bank/osmanbad_dcc_bank.jpg';
import partner29 from '../../assets/National-bank/pusad_urban_bank.jpg';
import partner30 from '../../assets/National-bank/sadhana_sahkari_bank.jpg';
import partner31 from '../../assets/National-bank/sanmitra_mahil_agri_sahakari_bank.jpg';
import partner32 from '../../assets/National-bank/wardha_dcc_bank Ltd.jpg';
import partner33 from '../../assets/National-bank/yavatmal_dcc_bank.jpg';


function PartnerSection() {
  const logoStyle = {
    height: '60px',
    width: 'auto',
    objectFit: 'contain',
    margin: '0 20px',
    flexShrink: 0,
    maxWidth: '180px'
  };

  return (
    <div className="section-partner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner-wrap">
              <p className="text-secondary text fw-semibold">
                Trusted by 100+ <br /> top-tier brands
              </p>

              <div className="infiniteSlide_tech_main d-grid">
                <div
                  className="infiniteSlide infiniteSlide_partner"
                  data-clone="5"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <img src={partner1} alt="GMC Nagpur" style={logoStyle} />
                  <img src={partner2} alt="High Court" style={logoStyle} />
                  <img src={partner3} alt="IGMC Nagpur" style={logoStyle} />
                  <img src={partner4} alt="MACP Bank" style={logoStyle} />
                  <img src={partner5} alt="Maharashtra Co Bank" style={logoStyle} />
                  <img src={partner6} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner7} alt="Maharashtra" style={logoStyle} />
                  <img src={partner8} alt="Msamb" style={logoStyle} />
                  <img src={partner9} alt="Mumbai apmc" style={logoStyle} />
                  <img src={partner10} alt="Nach" style={logoStyle} />
                  <img src={partner11} alt="Nmmc" style={logoStyle} />
                  <img src={partner12} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner12} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner13} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner14} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner15} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner16} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner17} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner18} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner19} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner20} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner21} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner22} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner23} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner24} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner25} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner27} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner28} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner29} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner30} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner31} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner32} alt="Maharashtra Labour Bank" style={logoStyle} />
                  <img src={partner33} alt="Maharashtra Labour Bank" style={logoStyle} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;