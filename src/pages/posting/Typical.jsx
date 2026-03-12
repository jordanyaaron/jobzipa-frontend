import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import QuillEditor from '../../components/QuilEditor';
import logoAddIcon from '../../assets/icons/gallery.png';
import closeIcon from '../../assets/icons/close.png';
import plusIcon from '../../assets/icons/plus.png';

function TypicalPost() {
    const [biography, setBiography] = useState("");
    const [jobDescriptions, setJobDescriptions] = useState("");
    
    return(
        <>
            <main>
                <em>Typical User</em>

                <div className="datail-box">
                    {/* Organisation */}
                    <h1>Organisation Details</h1>
                    <div className="subdetail-box">
                        {/* <h3>Organisation Logo</h3>   */}
                        <button className="logo-input-button">
                            <img src={logoAddIcon} alt="img-icon" />
                            <p>Tape here to add company logo</p>
                        </button>
                        <input type="file" id="logoInput" accept="image/*"/>
                    </div>
                    <div className="subdetail-box">
                        <h3>Organisation Name</h3> 
                        <div className="textarea-wrapper">
                            <input type="text" placeholder='Enter Company Name . . .'/>
                            {/* <textarea
                                id=""
                                name=""
                                placeholder="Company Name . . ."
                                onInput={(e) => {
                                    e.target.style.height = "";
                                    e.target.style.height = e.target.scrollHeight + "px";
                                }}>
                            </textarea> */}
                        </div>
                    </div>

                    <div className="subdetail-box">
                        <h3>Organisation Biography</h3> 
                        <div id='company-bio-wrapper'>
                            <QuillEditor value={biography} onChange={setBiography} />
                        </div> 
                        <div className="hints-contaener">
                            <p className='hints-title'>Hints:</p>
                            <p className='hints-details'>Company History(shortly), Mission, Vision, Products/Services, Future Goals, Values, Leadership, Culture, Achievements.</p>
                        </div>
                    </div>
                </div>

                <div className="datail-box">
                    {/* Job */}
                    <h1>Job Details</h1>
                    <div className="subdetail-box">
                        <h3>Job title</h3>
                        <div className="textarea-wrapper">
                            <input type="text" placeholder='Enter Job Title . . .'/>
                            {/* <textarea
                                id="job-title"
                                name=""
                                placeholder=""
                                onInput={(e) => {
                                    e.target.style.height = "";
                                    e.target.style.height = e.target.scrollHeight + "px";
                                }}>
                            </textarea> */}
                        </div> 
                    </div>
                    <div className="subdetail-box">
                        <h3>Job Descriptions</h3> 
                        <div id='company-bio-wrapper'>
                            <QuillEditor value={jobDescriptions} onChange={setBiography} />
                        </div> 
                        <div className="hints-contaener">
                            <p className='hints-title'>Hints:</p>
                            <p className='hints-details'>Responsibility, Purpose, Skills, Knowledgy,Qualifictions, Experiences.</p>
                        </div>
                    </div>
                    <div className="subdetail-box">
                        <h3>Job Positions</h3> 
                        <div className="positions-box">
                            <div className='multiple-positons-check'>
                                <input type="checkbox" id="is_multiple_checkbox"/>
                                <label htmlFor="">Multiple Positions</label>
                            </div>
                            <input type="number" className='number-input' name="" id="" step="1" min="0"  placeholder='Specify number of position here...'  />
                        </div>
                    </div>

                    <div className="subdetail-box">
                        <h3  className="detail-category-label"  >Job Locations:</h3>
                        <ul id="location-list" className='location-list'>
                            <li><img src={closeIcon} alt="" /><span>Dar Es Salaam,Bukoba, Tanzania Bukoba, Tanzania Tanzania</span></li>
                            <li><img src={closeIcon} alt="" /><span>Bukoba, Tanzania</span></li>
                            <li><img src={closeIcon} alt="" /><span>KIgari, Rwanda</span></li>
                            <li><img src={closeIcon} alt="" /><span>Tokyo Japan</span></li>
                        </ul>
                        <div className="textarea-container">
                            <div className="textarea-wrapper">
                                <input type="text" placeholder="Enter Region/City . . ."/>
                            </div> 
                        </div>
                        <div className="select-container for-location-country">
                            <i></i>
                            <select id="location-country" name="country" onChange={(e) => console.log(e.target.value)} >
                                <option value="">--Select Country(Optional)--</option>
                                <option value="albania">Albania</option>
                                <option value="algeria">Algeria</option>
                                <option value="andorra">Andorra</option>
                                <option value="angola">Angola</option>
                                <option value="argentina">Argentina</option>
                                <option value="armenia">Armenia</option>
                                <option value="australia">Australia</option>
                                <option value="austria">Austria</option>
                                <option value="azerbaijan">Azerbaijan</option>
                                <option value="bahamas">Bahamas</option>
                                <option value="bahrain">Bahrain</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="barbados">Barbados</option>
                                <option value="belarus">Belarus</option>
                                <option value="belgium">Belgium</option>
                                <option value="belize">Belize</option>
                                <option value="benin">Benin</option>
                                <option value="bhutan">Bhutan</option>
                                <option value="bolivia">Bolivia</option>
                                <option value="bosnia-and-herzegovina">Bosnia and Herzegovina</option>
                                <option value="botswana">Botswana</option>
                                <option value="brazil">Brazil</option>
                                <option value="brunei">Brunei</option>
                                <option value="bulgaria">Bulgaria</option>
                                <option value="burkina-faso">Burkina Faso</option>
                                <option value="burundi">Burundi</option>
                                <option value="cambodia">Cambodia</option>
                                <option value="cameroon">Cameroon</option>
                                <option value="canada">Canada</option>
                                <option value="cape-verde">Cape Verde</option>
                                <option value="central-african-republic">Central African Republic</option>
                                <option value="chad">Chad</option>
                                <option value="chile">Chile</option>
                                <option value="china">China</option>
                                <option value="colombia">Colombia</option>
                                <option value="comoros">Comoros</option>
                                <option value="congo">Congo</option>
                                <option value="costa-rica">Costa Rica</option>
                                <option value="croatia">Croatia</option>
                                <option value="cuba">Cuba</option>
                                <option value="cyprus">Cyprus</option>
                                <option value="czech-republic">Czech Republic</option>
                                <option value="denmark">Denmark</option>
                                <option value="djibouti">Djibouti</option>
                                <option value="dominica">Dominica</option>
                                <option value="dominican-republic">Dominican Republic</option>
                                <option value="ecuador">Ecuador</option>
                                <option value="egypt">Egypt</option>
                                <option value="el-salvador">El Salvador</option>
                                <option value="equatorial-guinea">Equatorial Guinea</option>
                                <option value="eritrea">Eritrea</option>
                                <option value="estonia">Estonia</option>
                                <option value="eswatini">Eswatini</option>
                                <option value="ethiopia">Ethiopia</option>
                                <option value="fiji">Fiji</option>
                                <option value="finland">Finland</option>
                                <option value="france">France</option>
                                <option value="gabon">Gabon</option>
                                <option value="gambia">Gambia</option>
                                <option value="georgia">Georgia</option>
                                <option value="germany">Germany</option>
                                <option value="ghana">Ghana</option>
                                <option value="greece">Greece</option>
                                <option value="grenada">Grenada</option>
                                <option value="guatemala">Guatemala</option>
                                <option value="guinea">Guinea</option>
                                <option value="guinea-bissau">Guinea-Bissau</option>
                                <option value="guyana">Guyana</option>
                                <option value="haiti">Haiti</option>
                                <option value="honduras">Honduras</option>
                                <option value="hungary">Hungary</option>
                                <option value="iceland">Iceland</option>
                                <option value="india">India</option>
                                <option value="indonesia">Indonesia</option>
                                <option value="iran">Iran</option>
                                <option value="iraq">Iraq</option>
                                <option value="ireland">Ireland</option>
                                <option value="israel">Israel</option>
                                <option value="italy">Italy</option>
                                <option value="jamaica">Jamaica</option>
                                <option value="japan">Japan</option>
                                <option value="jordan">Jordan</option>
                                <option value="kazakhstan">Kazakhstan</option>
                                <option value="kenya">Kenya</option>
                                <option value="kiribati">Kiribati</option>
                                <option value="korea-north">North Korea</option>
                                <option value="korea-south">South Korea</option>
                                <option value="kuwait">Kuwait</option>
                                <option value="kyrgyzstan">Kyrgyzstan</option>
                                <option value="laos">Laos</option>
                                <option value="latvia">Latvia</option>
                                <option value="lebanon">Lebanon</option>
                                <option value="lesotho">Lesotho</option>
                                <option value="liberia">Liberia</option>
                                <option value="libya">Libya</option>
                                <option value="liechtenstein">Liechtenstein</option>
                                <option value="lithuania">Lithuania</option>
                                <option value="luxembourg">Luxembourg</option>
                                <option value="madagascar">Madagascar</option>
                                <option value="malawi">Malawi</option>
                                <option value="malaysia">Malaysia</option>
                                <option value="maldives">Maldives</option>
                                <option value="mali">Mali</option>
                                <option value="malta">Malta</option>
                                <option value="marshall-islands">Marshall Islands</option>
                                <option value="mauritania">Mauritania</option>
                                <option value="mauritius">Mauritius</option>
                                <option value="mexico">Mexico</option>
                                <option value="micronesia">Micronesia</option>
                                <option value="moldova">Moldova</option>
                                <option value="monaco">Monaco</option>
                                <option value="mongolia">Mongolia</option>
                                <option value="montenegro">Montenegro</option>
                                <option value="morocco">Morocco</option>
                                <option value="mozambique">Mozambique</option>
                                <option value="myanmar">Myanmar (Burma)</option>
                                <option value="namibia">Namibia</option>
                                <option value="nauru">Nauru</option>
                                <option value="nepal">Nepal</option>
                                <option value="netherlands">Netherlands</option>
                                <option value="new-zealand">New Zealand</option>
                                <option value="nicaragua">Nicaragua</option>
                                <option value="niger">Niger</option>
                                <option value="nigeria">Nigeria</option>
                                <option value="norway">Norway</option>
                                <option value="oman">Oman</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="palau">Palau</option>
                                <option value="panama">Panama</option>
                                <option value="papua-new-guinea">Papua New Guinea</option>
                                <option value="paraguay">Paraguay</option>
                                <option value="peru">Peru</option>
                                <option value="philippines">Philippines</option>
                                <option value="poland">Poland</option>
                                <option value="portugal">Portugal</option>
                                <option value="qatar">Qatar</option>
                                <option value="romania">Romania</option>
                                <option value="russia">Russia</option>
                                <option value="rwanda">Rwanda</option>
                                <option value="saint-kitts-and-nevis">Saint Kitts and Nevis</option>
                                <option value="saint-lucia">Saint Lucia</option>
                                <option value="saint-vincent">Saint Vincent and the Grenadines</option>
                                <option value="samoa">Samoa</option>
                                <option value="san-marino">San Marino</option>
                                <option value="sao-tome-and-principe">Sao Tome and Principe</option>
                                <option value="saudi-arabia">Saudi Arabia</option>
                                <option value="senegal">Senegal</option>
                                <option value="serbia">Serbia</option>
                                <option value="seychelles">Seychelles</option>
                                <option value="sierra-leone">Sierra Leone</option>
                                <option value="singapore">Singapore</option>
                                <option value="slovakia">Slovakia</option>
                                <option value="slovenia">Slovenia</option>
                                <option value="solomon-islands">Solomon Islands</option>
                                <option value="somalia">Somalia</option>
                                <option value="south-africa">South Africa</option>
                                <option value="spain">Spain</option>
                                <option value="sri-lanka">Sri Lanka</option>
                                <option value="sudan">Sudan</option>
                                <option value="suriname">Suriname</option>
                                <option value="sweden">Sweden</option>
                                <option value="switzerland">Switzerland</option>
                                <option value="syria">Syria</option>
                                <option value="taiwan">Taiwan</option>
                                <option value="tajikistan">Tajikistan</option>
                                <option value="tanzania">Tanzania</option>
                                <option value="thailand">Thailand</option>
                                <option value="togo">Togo</option>
                                <option value="tonga">Tonga</option>
                                <option value="trinidad-and-tobago">Trinidad and Tobago</option>
                                <option value="tunisia">Tunisia</option>
                                <option value="turkey">Turkey</option>
                                <option value="turkmenistan">Turkmenistan</option>
                                <option value="tuvalu">Tuvalu</option>
                                <option value="uganda">Uganda</option>
                                <option value="ukraine">Ukraine</option>
                                <option value="united-arab-emirates">United Arab Emirates</option>
                                <option value="united-kingdom">United Kingdom</option>
                                <option value="united-states">United States</option>
                                <option value="uruguay">Uruguay</option>
                                <option value="uzbekistan">Uzbekistan</option>
                                <option value="vanuatu">Vanuatu</option>
                                <option value="vatican-city">Vatican City</option>
                                <option value="venezuela">Venezuela</option>
                                <option value="vietnam">Vietnam</option>
                                <option value="yemen">Yemen</option>
                                <option value="zambia">Zambia</option>
                                <option value="zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                        <button id="add-location-btn" ><img src={null} alt=""/>Add</button>
                    </div>

                    <div className="subdetail-box">
                        <h3>Job Categorisations</h3>
                        <div className="job-categorisations">
                            <div className="job-categorisation ">
                                <label>Type</label>
                                <div className="select-container">
                                    <i className="select-indicator"></i>
                                    <select id="job-type" name="country"  onChange={(e) => console.log(e.target.value)} >
                                        <option value="full_time">Full-Time</option>
                                        <option value="part_time">Part-Time</option>
                                        <option value="contract">Contract</option>
                                        <option value="freelance">Freelancing</option>
                                        <option value="internship">Internship</option>
                                    </select>
                                </div>
                            </div>
                            <div className="job-categorisation">
                                <label>Mode</label>
                                <div className="select-container">
                                    <i className="select-indicator"></i>
                                    <select id="job-mode" name="country" onChange={(e) => console.log(e.target.value)} >
                                        <option value="onsite">Onsite</option>
                                        <option value="remote">Remote</option>
                                        <option value="hybrid">Hybrid</option>
                                    </select>
                                </div>
                            </div>
                            <div className="job-categorisation">
                                <label>Tags</label>
                                <ul id="category-list">
                                    <li><img src={closeIcon} alt="" /><span>Information & Communication Technology </span></li>
                                    <li><img src={closeIcon} alt="" /><span>Healthcare & Medical</span></li>
                                    <li><img src={closeIcon} alt="" /><span>Insurance & Superannuation</span></li>
                                    <li><img src={closeIcon} alt="" /><span>Construction & Building</span></li>
                                </ul>
                                <div className="tags-contaier">
                                    <button><img src={plusIcon} alt="" /><span>Add Tags</span></button>
                                    <select id="job-category" className="job-category-select" name="job-category" onChange={(e) => console.log(e.target.value)} >
                                        <option value=""  disabled ></option>
                                        <option value="administration">Administration & Office Support</option>
                                        <option value="advertising">Advertising, Arts & Media</option>
                                        <option value="banking">Banking & Financial Services</option>
                                        <option value="construction">Construction & Building</option>
                                        <option value="consulting">Consulting & Strategy</option>
                                        <option value="customer-service">Customer Service</option>
                                        <option value="education">Education & Training</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="farming">Farming & Agriculture</option>
                                        <option value="health">Healthcare & Medical</option>
                                        <option value="hospitality">Hospitality & Tourism</option>
                                        <option value="hr">Human Resources & Recruitment</option>
                                        <option value="it">Information & Communication Technology (ICT)</option>
                                        <option value="insurance">Insurance & Superannuation</option>
                                        <option value="legal">Legal</option>
                                        <option value="manufacturing">Manufacturing, Transport & Logistics</option>
                                        <option value="marketing">Marketing & Communications</option>
                                        <option value="mining">Mining, Resources & Energy</option>
                                        <option value="real-estate">Real Estate & Property</option>
                                        <option value="retail">Retail & Consumer Products</option>
                                        <option value="sales">Sales</option>
                                        <option value="science">Science & Technology</option>
                                        <option value="security">Security & Emergency Services</option>
                                        <option value="sports">Sport & Recreation</option>
                                        <option value="trades">Trades & Services</option>
                                        <option value="volunteer">Voluntary & Charity Work</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="datail-box">
                    {/* Link  */}
                    <h1>Aplication Link</h1>
                    <div className="subdetail-box">
                        <h3>Spesify Application link</h3>
                        <div className="textarea-wrapper">
                            <input type="text" placeholder='Enter Job Application Link . . .'/>
                        </div> 
                    </div>
                </div>

                

                <div className="submition-button-container">
                    {/* Submit Button  */}
                    <button>Submit a job</button>
                </div>

            </main>
        </>
    );
}

export default TypicalPost