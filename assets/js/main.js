/**
 * INDORE GUJRAT CARRIER (IGC) — Interactive Engine
 * WhatsApp inquiry, Bilty tracker, Bilingual switcher,
 * Scroll-driven animations, Parallax, Mobile Navigation.
 *
 * Contact Data extracted from visiting cards:
 *  Indore: Godown No. 23, Roshan Compound, A.B. Road, Dewas Naka, Indore-452010
 *    Ph: 0731-4048469 | Mob: 9303444449, 9303233706
 *    Email: igcindore808@gmail.com
 *  Ahmedabad: Godown No. 202, Transport Nagar, Aslali, Ahmedabad (Guj.)
 *    Ph: 07929708750 | Mob: 7069802689, 9099972689, 9898542689, 9712602689
 *    Email: igcahmedabad808@gmail.com
 */

const IGC_WHATSAPP_NUMBER = '919303444449';

// ========================
// BILINGUAL TRANSLATIONS
// ========================
const translations = {
  en: {
    top_badge: '⚡ DAILY DIRECT FLEET SERVICE',
    top_call: 'Helpline: +91 93034 44449',
    hero_badge: 'Indore & Gujarat Logistics Partner — 20+ Years of Trust',
    hero_title: '<span class="hero-brand-kicker">Indore Gujrat Carrier (IGC)</span>Fast, Safe & Reliable <span class="highlight">Transport Service</span> Between Indore & Gujarat',
    hero_desc: 'Daily Full Truck (FTL), Parcel & Door-to-Door logistics connecting Indore, Pithampur, Dewas to Ahmedabad, Surat, Baroda, Rajkot and all major Gujarat industrial hubs.',
    stat_experience: '20+ <span>Years</span>',
    stat_experience_lbl: 'Industry Experience',
    stat_trucks: '50+ <span>Daily</span>',
    stat_trucks_lbl: 'Direct Trucks',
    stat_clients: '500+ <span>Top</span>',
    stat_clients_lbl: 'Corporate Clients',
    btn_call_now: 'Call Branch Now',
    btn_whatsapp_now: 'Chat on WhatsApp',
    card_title: 'Quick Rate & Booking',
    card_sub: 'Get instant freight quote on WhatsApp',
    label_from: 'From (कहाँ से):',
    label_to: 'To (कहाँ तक):',
    label_service: 'Service Type (सर्विस):',
    label_goods: 'Material / Weight Details:',
    label_phone: 'Your Mobile Number:',
    opt_ftl: 'Full Truck Load (पूरा ट्रक)',
    opt_parcel: 'Parcel / Part Load (पार्सल)',
    opt_door: 'Door-to-Door Delivery (डोर डिलीवरी)',
    opt_express: 'Time-Bound Express (समय पर पक्की डिलीवरी)',
    btn_get_rate: 'Get Rate on WhatsApp',
    quote_hint: 'Instant reply directly from dispatch godown',
    bilty_label: 'Track Consignment / Bilty Status:',
    bilty_placeholder: 'ENTER BILTY / LR NUMBER (उदा. 1042)',
    bilty_btn: 'Check Status',
    bilty_helper: 'Directly connects you with dispatch godown desk',
    direct_call_label: '24x7 Customer Care:',
    services_tag: 'OUR SERVICES',
    services_title: 'Tailored Logistics for Every Cargo',
    services_sub: 'From small parcels to 32ft heavy trailers — guaranteed safe delivery with proper bilty documentation.',
    s1_title: 'Full Truck Load (FTL)',
    s1_hindi: 'पूरा ट्रक लोड सर्विस',
    s1_desc: 'Dedicated container and open trucks (14ft, 19ft, 24ft, 32ft) for manufacturing plants, FMCG and bulk shipments.',
    s2_title: 'Parcel & Part Load',
    s2_hindi: 'पार्ट लोड एवं पार्सल सेवा',
    s2_desc: 'Cost-effective daily parcel service for small traders, shopkeepers, and regional distributors with zero damage guarantee.',
    s3_title: 'Door-to-Door Delivery',
    s3_hindi: 'दुकान/फैक्ट्री तक डिलीवरी',
    s3_desc: 'Hassle-free pickup from your godown/factory in Indore and direct doorstep delivery anywhere across Gujarat.',
    s4_title: 'Time-Bound Express',
    s4_hindi: 'समय पर पक्की डिलीवरी',
    s4_desc: 'Express dispatch with 12 to 18 hours turnaround between Indore and Ahmedabad/Surat for urgent materials.',
    fleet_tag: 'COMPANY-OWNED FLEET',
    fleet_title: 'Modern & Maintained Vehicle Fleet',
    fleet_sub: 'From 32ft heavy sealed containers to door-to-door express pickups — company-managed vehicles ensuring direct accountability.',
    routes_tag: 'DIRECT DAILY ROUTES',
    routes_title: 'Indore ⇄ Gujarat Key Destinations',
    routes_sub: 'Daily departures every evening. Next-day morning arrival at main Gujarat stations.',
    transit_label: 'Avg. Transit Time:',
    depart_label: 'Departure:',
    depart_daily: 'Daily Evening 8 PM',
    btn_route_inquire: 'Inquire for this Route',
    branch_tag: 'OUR GODOWNS & OFFICES',
    branch_title: 'Visit or Contact Our Strategic Hubs',
    branch_sub: 'Spacious godowns with convenient trailer loading docks, forklift handling and secured warehousing.',
    indore_badge: 'HEAD OFFICE & GODOWN',
    indore_name: 'Indore Central Hub (M.P.)',
    ahmedabad_badge: 'GUJARAT REGIONAL HUB',
    ahmedabad_name: 'Ahmedabad — Transport Nagar, Aslali',
    btn_call_godown: 'Call Godown',
    btn_open_maps: 'Open Google Maps',
    clients_tag: 'TRUSTED BY INDUSTRY LEADERS',
    clients_title: 'Our Esteemed Corporate Clients',
    clients_sub: 'Trusted logistics partner for top battery, pharmaceutical, agriculture and electrical manufacturers.',
    about_tag: 'FOUNDER’S FOCUS &amp; LEADERSHIP',
    about_title: 'Under the Able Leadership of Mr. Hari Singh Jhooria',
    about_text1: 'Indore Gujrat Road Carrier Company was founded with a singular conviction: to bridge Central India’s manufacturing belt with Gujarat’s commercial ports and industrial cities through transparent, reliable, and owner-accountable transport services.',
    about_text2: 'Under Mr. Jhooria’s steadfast direction, IGC operates daily express departures from Central Godown No. 23, Dewas Naka, Indore. Combining seasoned highway drivers, rigorous vehicle maintenance, and direct personal accessibility, we provide seamless logistics for Fortune 500 corporations and regional traders alike.',
    founder_badge_exp: '20+ Years Logistics Veteran',
    founder_designation: 'Founder &amp; Managing Director',
    founder_subtag: 'Indore Gujrat Carrier • Fleet Owners',
    founder_direct_label: 'Direct Leadership Line',
    founder_est: 'Est. 2000s • Central Godown No. 23',
    founder_quote: 'In road transport, a bilty is not mere paperwork — it is a solemn commercial promise. For over 20 years, my commitment has been simple: honest weight, genuine billing, safe tarping, and zero excuses on delivery times.',
    founder_sig_role: '— Founder &amp; Managing Director',
    pillar_1_title: 'Owner Accountability',
    pillar_1_desc: 'Direct access to leadership — no ticketing bureaucracy or automated runarounds.',
    pillar_2_title: '100% On-Time Record',
    pillar_2_desc: 'Daily scheduled 8:00 PM departures with 12–14 hr delivery in Ahmedabad and Surat.',
    pillar_3_title: 'Transparent Bilty &amp; GST',
    pillar_3_desc: 'Clear fair weighment, verified E-way bill compliance, and zero hidden detention fees.',
    pillar_4_title: 'Zero-Damage Handling',
    pillar_4_desc: 'Specialized all-weather double tarping, palletized stacking, and dedicated handlers.',
    fstat_years: 'Years in Transport',
    fstat_clients: 'Corporate Clients',
    fstat_commitment: 'Direct Commitment',
    check_ontime: '100% On-Time Delivery Track Record',
    check_doc: 'Genuine GST & Bilty Documentation',
    check_fleet: 'Well-Maintained Dedicated Fleet',
    check_damage: 'Safe Handling & Zero Damage Assurance',
    cta_title: 'Ready to Ship Your Cargo?',
    cta_sub: 'Get the best freight rate for your consignment in under 2 minutes. No paperwork, no wait — instant WhatsApp quote.',
    faq_tag: 'FREQUENTLY ASKED QUESTIONS',
    faq_title: 'Everything You Need to Know About Our Transport Service',
    faq_sub: 'Clear answers on booking, daily transit times, godown locations, bilty tracking, and door-to-door delivery.',
    faq_q1: 'What transport routes does Indore Gujrat Carrier operate daily?',
    faq_a1: 'We run daily direct container and open fleet trucks connecting Indore (Dewas Naka, Pithampur, Dewas, Ujjain) with all major Gujarat destinations: Ahmedabad (Aslali), Surat, Vadodara (Baroda), Rajkot, Vapi, Ankleshwar, Bharuch, and Gandhidham.',
    faq_q2: 'Where is your Indore central godown located and how can I contact you?',
    faq_a2: 'Our central head office and main godown is located at <strong>Godown No. 23, Roshan Compound, A.B. Road, Dewas Naka, Indore – 452 010 (M.P.)</strong>. You can call our 24x7 helpline at <strong>+91 93034 44449</strong>, <strong>+91 93032 33706</strong>, or office landline <strong>0731-4048469</strong>.',
    faq_q3: 'What is the average delivery transit time from Indore to Gujarat?',
    faq_a3: 'Our express fleet departs daily at 8:00 PM evening. Average transit time is <strong>12 to 14 hours</strong> for Ahmedabad, <strong>11 to 13 hours</strong> for Vadodara, and <strong>14 to 16 hours</strong> for Surat, ensuring reliable next-day morning delivery.',
    faq_q4: 'How do I book Full Truck Load (FTL) or small parcel cargo?',
    faq_a4: 'Booking is quick and hassle-free. Fill out the Quick Rate form above, WhatsApp your consignment details to <strong>+91 93034 44449</strong>, or call our branch directly for instant rates and same-day vehicle placement.',
    faq_q5: 'Do you provide doorstep pickup and delivery in industrial areas?',
    faq_a5: 'Yes, we offer complete door-to-door logistics with pickup directly from your factory or godown in Indore, Pithampur SEZ, Sanwer Road, or Dewas, and safe doorstep delivery across all of Gujarat with proper GST documentation.',
    faq_q6: 'How can I track my Bilty / LR consignment status?',
    faq_a6: 'Simply enter your Bilty / LR number in the status box on this page or WhatsApp your Bilty number to <strong>+91 93034 44449</strong> to receive live location and dispatch status directly from our godown desk.',
    mobile_call: 'Call Now',
    mobile_whatsapp: 'WhatsApp'
  },
  hi: {
    top_badge: '⚡ रोज़ाना डायरेक्ट ट्रांसपोर्ट सेवा',
    top_call: 'हेल्पलाइन: +91 93034 44449',
    hero_badge: '20+ वर्षों से इंदौर और गुजरात का भरोसेमंद ट्रांसपोर्ट',
    hero_title: '<span class="hero-brand-kicker">इंदौर गुजरात कैरियर (IGC)</span>इंदौर से गुजरात <span class="highlight">तेज़, सुरक्षित और भरोसेमंद</span> ट्रांसपोर्ट सेवा',
    hero_desc: 'रोज़ाना पूरा ट्रक (FTL), पार्सल और घर/दुकान तक सीधी डिलीवरी। इंदौर, पीथमपुर, देवास से अहमदाबाद, सूरत, वडोदरा, राजकोट और पूरे गुजरात के लिए।',
    stat_experience: '20+ <span>वर्ष</span>',
    stat_experience_lbl: 'अनुभव और विश्वास',
    stat_trucks: '50+ <span>रोज़ाना</span>',
    stat_trucks_lbl: 'डायरेक्ट गाड़ियां',
    stat_clients: '500+ <span>बड़ी</span>',
    stat_clients_lbl: 'कंपनियां व व्यापारी',
    btn_call_now: 'ब्रांच से बात करें',
    btn_whatsapp_now: 'व्हाट्सएप पर बात करें',
    card_title: 'रेट व बुकिंग पूछताछ',
    card_sub: 'व्हाट्सएप पर तुरंत माल भाड़ा रेट जानें',
    label_from: 'कहाँ से (From):',
    label_to: 'कहाँ तक (To):',
    label_service: 'सर्विस का प्रकार:',
    label_goods: 'सामान / वज़न की जानकारी:',
    label_phone: 'आपका मोबाइल नंबर:',
    opt_ftl: 'फुल ट्रक लोड (पूरा ट्रक)',
    opt_parcel: 'पार्सल / पार्ट लोड (छोटा माल)',
    opt_door: 'डोर-टू-डोर डिलीवरी (दुकान तक)',
    opt_express: 'टाइम-बाउंड एक्सप्रेस (अर्जेंट)',
    btn_get_rate: 'व्हाट्सएप पर तुरंत रेट पूछें',
    quote_hint: 'गोदाम डेस्क से तुरंत जवाब मिलेगा',
    bilty_label: 'बिल्टी नंबर से माल का स्टेटस जानें:',
    bilty_placeholder: 'बिल्टी / LR नंबर डालें (जैसे: 1042)',
    bilty_btn: 'स्टेटस चेक करें',
    bilty_helper: 'सीधा गोदाम डिस्पैच काउंटर से संपर्क होगा',
    direct_call_label: '24 घंटे सहायता नंबर:',
    services_tag: 'हमारी सेवाएं',
    services_title: 'हर प्रकार के माल के लिए पक्की व्यवस्था',
    services_sub: 'छोटे पार्सल से लेकर 32 फीट भारी कंटेनर तक — पूरी सुरक्षा और पक्की बिल्टी के साथ डिलीवरी।',
    s1_title: 'फुल ट्रक लोड (FTL)',
    s1_hindi: 'पूरा ट्रक लोड सर्विस',
    s1_desc: 'फैक्ट्री और भारी माल के लिए 14, 19, 24 और 32 फीट के बंद कंटेनर और खुले ट्रक उपलब्ध।',
    s2_title: 'पार्सल एवं पार्ट लोड',
    s2_hindi: 'किफायती पार्सल सेवा',
    s2_desc: 'व्यापारियों और दुकानदारों के लिए रोज़ाना सुरक्षित पार्सल सेवा, माल का कोई नुकसान नहीं।',
    s3_title: 'डोर-टू-डोर डिलीवरी',
    s3_hindi: 'दुकान/गोदाम तक सीधी डिलीवरी',
    s3_desc: 'इंदौर में आपकी दुकान या फैक्ट्री से पिकअप और गुजरात के किसी भी शहर में सीधे पते पर डिलीवरी।',
    s4_title: 'टाइम-बाउंड एक्सप्रेस',
    s4_hindi: 'समय पर पक्की डिलीवरी',
    s4_desc: 'अर्जेंट माल के लिए 12 से 18 घंटे में इंदौर से अहमदाबाद/सूरत एक्सप्रेस गाड़ियां।',
    fleet_tag: 'कंपनी की अपनी गाड़ियां',
    fleet_title: 'आधुनिक और सुरक्षित कमर्शियल फ्लीट',
    fleet_sub: '32 फीट बंद कंटेनर से लेकर घर-घर पिकअप वाली बोलेरो तक — कंपनी के स्वामित्व वाली गाड़ियां और पक्की जिम्मेदारी।',
    routes_tag: 'रोज़ाना डायरेक्ट रूट्स',
    routes_title: 'इंदौर ⇄ गुजरात के मुख्य शहर',
    routes_sub: 'हर शाम 8 बजे सीधी रवानगी। अगली सुबह माल गुजरात गोदाम पर तैयार।',
    transit_label: 'पहुंचने का समय:',
    depart_label: 'रवानगी:',
    depart_daily: 'रोज़ाना शाम 8:00 बजे',
    btn_route_inquire: 'इस रूट का रेट पूछें',
    branch_tag: 'हमारे गोदाम और ऑफिस',
    branch_title: 'इंदौर व अहमदाबाद के मुख्य ऑफिस',
    branch_sub: 'सुविधाजनक लोडिंग-अनलोडिंग, सुरक्षित वेयरहाउसिंग और पक्के दस्तावेज़।',
    indore_badge: 'मुख्य ऑफिस व गोदाम',
    indore_name: 'इंदौर सेंट्रल हब (म.प्र.)',
    ahmedabad_badge: 'गुजरात रीजनल हब',
    ahmedabad_name: 'अहमदाबाद — ट्रांसपोर्ट नगर, असलाली',
    btn_call_godown: 'गोदाम पर कॉल करें',
    btn_open_maps: 'गूगल मैप में देखें',
    clients_tag: 'बड़ी कंपनियों का विश्वास',
    clients_title: 'हमारे प्रतिष्ठित कॉर्पोरेट ग्राहक',
    clients_sub: 'बैटरी, फार्मास्युटिकल, कृषि और इलेक्ट्रॉनिक्स क्षेत्र के शीर्ष ब्रांड्स का भरोसेमंद पार्टनर।',
    about_tag: 'संस्थापक का दृष्टिकोण एवं नेतृत्व',
    about_title: 'श्री हरि सिंह झूरिया के कुशल नेतृत्व में',
    about_text1: 'इंदौर गुजरात रोड कैरियर कंपनी की स्थापना एक स्पष्ट संकल्प के साथ हुई थी: मध्य प्रदेश के औद्योगिक क्षेत्रों को गुजरात के प्रमुख बंदरगाहों और व्यापारिक शहरों से ईमानदार, सुरक्षित और जिम्मेदार ट्रांसपोर्ट सेवा द्वारा जोड़ना।',
    about_text2: 'श्री झूरिया के निरंतर नेतृत्व में, आईजीसी सेंट्रल गोडाउन नं. 23 (देवास नाका, इंदौर) से प्रतिदिन सीधी एक्सप्रेस गाड़ियां संचालित करता है। अनुभवी चालकों, सुव्यवस्थित वाहनों और सीधे मालिक के संपर्क की बदौलत हम बहुराष्ट्रीय कंपनियों से लेकर स्थानीय व्यापारियों तक सभी को निश्चित समय पर माल पहुंचने का भरोसा देते हैं।',
    founder_badge_exp: '20+ वर्षों का उद्योग अनुभव',
    founder_designation: 'संस्थापक एवं प्रबंध निदेशक',
    founder_subtag: 'इंदौर गुजरात कैरियर • फ्लीट ओनर्स',
    founder_direct_label: 'सीधी नेतृत्व हेल्पलाइन',
    founder_est: 'स्थापना 2000s • सेंट्रल गोडाउन नं. 23',
    founder_quote: 'सड़क परिवहन में बिल्टी केवल कागज़ नहीं — यह व्यापारी के भरोसे का प्रतीक है। 20 वर्षों से हमारा संकल्प रहा है: सही तौल, पक्का बिल, सुरक्षित तिरपाल और समय पर डिलीवरी में कोई बहाना नहीं।',
    founder_sig_role: '— संस्थापक एवं प्रबंध निदेशक',
    pillar_1_title: 'सीधी मालिक की जिम्मेदारी',
    pillar_1_desc: 'किसी भी महत्वपूर्ण माल के लिए सीधे मैनेजमेंट से बात — कोई कॉल सेंटर या भटकाव नहीं।',
    pillar_2_title: '100% समय पर डिलीवरी',
    pillar_2_desc: 'प्रतिदिन शाम 8:00 बजे सीधी रवानगी, अहमदाबाद और सूरत में 12-14 घंटे में निश्चित डिलीवरी।',
    pillar_3_title: 'पक्की बिल्टी व GST बिलिंग',
    pillar_3_desc: 'ई-वे बिल के पूर्ण नियमों का पालन, पारदर्शी वजन और बिना किसी छिपे हुए अतिरिक्त शुल्क के बिल।',
    pillar_4_title: 'शून्य नुकसान (Zero Damage)',
    pillar_4_desc: 'वाटरप्रूफ डबल तिरपाल, अनुभवी स्टाफ द्वारा सावधानीपूर्वक लोडिंग और सुरक्षित सफर।',
    fstat_years: 'वर्षों का अनुभव',
    fstat_clients: 'कॉर्पोरेट ग्राहक',
    fstat_commitment: 'व्यक्तिगत जिम्मेदारी',
    check_ontime: '100% समय पर डिलीवरी का रिकॉर्ड',
    check_doc: 'पक्के GST बिल और बिल्टी की सुविधा',
    check_fleet: 'खुद की आधुनिक और सुरक्षित गाड़ियां',
    check_damage: 'माल की पूरी सुरक्षा और सुरक्षित हैंडलिंग',
    cta_title: 'माल भेजना है?',
    cta_sub: '2 मिनट में बेस्ट फ्रेट रेट जानें। कोई कागज़ी कार्रवाई नहीं — सीधा व्हाट्सएप पर तुरंत रेट।',
    faq_tag: 'अक्सर पूछे जाने वाले सवाल (FAQ)',
    faq_title: 'ट्रांसपोर्ट सर्विस से जुड़े महत्वपूर्ण सवाल और उनके जवाब',
    faq_sub: 'बुकिंग, डिलीवरी समय, इंदौर-अहमदाबाद गोदाम, बिल्टी ट्रैकिंग और डोर डिलीवरी की पूरी जानकारी।',
    faq_q1: 'इंदौर गुजरात कैरियर रोज़ाना किन-किन रूट्स पर सर्विस देता है?',
    faq_a1: 'हम रोज़ाना इंदौर (देवास नाका, पीथमपुर, देवास, उज्जैन) से गुजरात के सभी प्रमुख शहरों — अहमदाबाद (असलाली), सूरत, वडोदरा (बड़ौदा), राजकोट, वापी, अंकलेश्वर, भरूच और गांधीधाम के लिए डायरेक्ट गाड़ियां चलाते हैं।',
    faq_q2: 'इंदौर में आपका गोदाम कहाँ है और संपर्क नंबर क्या है?',
    faq_a2: 'हमारा मुख्य ऑफिस व गोदाम <strong>गोदाम नं. 23, रोशन कंपाउंड, ए. बी. रोड, देवास नाका, इंदौर (म.प्र.)</strong> में स्थित है। 24 घंटे सहायता के लिए <strong>+91 93034 44449</strong>, <strong>+91 93032 33706</strong> या <strong>0731-4048469</strong> पर संपर्क करें।',
    faq_q3: 'इंदौर से गुजरात माल पहुँचने में कितना समय लगता है?',
    faq_a3: 'हमारी गाड़ियां हर शाम 8:00 बजे देवास नाका से सीधी रवाना होती हैं। अहमदाबाद <strong>12 से 14 घंटे</strong>, वडोदरा <strong>11 से 13 घंटे</strong>, और सूरत <strong>14 से 16 घंटे</strong> में अगली सुबह सुरक्षित माल पहुँच जाता है।',
    faq_q4: 'पूरा ट्रक (FTL) या छोटा पार्सल कैसे बुक करें?',
    faq_a4: 'बुकिंग बेहद आसान है। इस पेज पर दिए फॉर्म से व्हाट्सएप पर तुरंत रेट पूछें या हमारे हेल्पलाइन नंबर <strong>+91 93034 44449</strong> पर कॉल करें। तुरंत रेट और उसी दिन गाड़ी प्लेसमेंट की सुविधा उपलब्ध है।',
    faq_q5: 'क्या पीथमपुर और देवास की फैक्ट्रियों से डोर पिकअप मिलता है?',
    faq_a5: 'जी हाँ, इंदौर, सांवेर रोड, पीथमपुर इंडस्ट्रियल एरिया और देवास से आपकी फैक्ट्री या दुकान से सीधा माल उठाने और गुजरात में सीधे पते पर डोर डिलीवरी की पक्की सुविधा उपलब्ध है।',
    faq_q6: 'बिल्टी (LR) का स्टेटस कैसे चेक करें?',
    faq_a6: 'हमारी वेबसाइट पर अपना बिल्टी / LR नंबर डालें या व्हाट्सएप <strong>+91 93034 44449</strong> पर बिल्टी नंबर भेजें। गोदाम डेस्क से तुरंत माल की वर्तमान लोकेशन की जानकारी दी जाएगी।',
    mobile_call: 'कॉल करें',
    mobile_whatsapp: 'व्हाट्सएप करें'
  }
};

let currentLanguage = 'en';

// ========================
// LANGUAGE SWITCHER
// ========================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('igc_lang', lang);

  document.body.classList.toggle('lang-hi', lang === 'hi');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

// ========================
// WHATSAPP QUOTE GENERATOR
// ========================
function handleQuoteSubmission(e) {
  e.preventDefault();
  const from = document.getElementById('quoteFrom').value || 'Indore';
  const to = document.getElementById('quoteTo').value || 'Ahmedabad';
  const service = document.getElementById('quoteService').value || 'Full Truck Load';
  const goods = document.getElementById('quoteGoods').value.trim() || 'General Goods';
  const phone = document.getElementById('quotePhone').value.trim() || 'Not specified';

  const msg = `*INDORE GUJRAT CARRIER — NEW INQUIRY*
━━━━━━━━━━━━━━━━━━
📍 *From:* ${from}
🏁 *To:* ${to}
🚛 *Service:* ${service}
📦 *Material/Weight:* ${goods}
📞 *Phone:* ${phone}
━━━━━━━━━━━━━━━━━━
Please provide best freight rate and dispatch schedule.`;

  window.open(`https://wa.me/${IGC_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========================
// BILTY STATUS VIA WHATSAPP
// ========================
function handleBiltyCheck(e) {
  e.preventDefault();
  const inp = document.getElementById('biltyNumber');
  const num = inp.value.trim();
  if (!num) {
    alert(currentLanguage === 'hi' ? 'कृपया बिल्टी या LR नंबर दर्ज करें।' : 'Please enter your Bilty or LR Number.');
    inp.focus();
    return;
  }
  const msg = `*IGC BILTY STATUS INQUIRY*
Hello, please check dispatch & delivery status of Bilty/LR Number: *${num}*.
Thank you.`;
  window.open(`https://wa.me/${IGC_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========================
// ROUTE INQUIRY VIA WHATSAPP
// ========================
function inquireRoute(from, to) {
  const msg = `*IGC ROUTE INQUIRY*
Hello, I want to book transport / check freight rate:
*${from} ➔ ${to}*
Please tell me today's rate and truck availability.`;
  window.open(`https://wa.me/${IGC_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========================
// MOBILE MENU TOGGLE
// ========================
function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  if (!btn || !drawer) return;
  btn.addEventListener('click', () => drawer.classList.toggle('open'));
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

// ========================
// SCROLL-DRIVEN ANIMATIONS (IntersectionObserver)
// ========================
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after first reveal to save resources
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
    observer.observe(el);
  });
}

// ========================
// NAVBAR SCROLL EFFECT
// ========================
function setupNavbarScroll() {
  const header = document.getElementById('mainHeader');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 60);
    lastY = y;
  }, { passive: true });
}

// ========================
// ANIMATED STAT COUNTER
// ========================
function setupCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          el.textContent = Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ========================
// FAQ ACCORDION HANDLER
// ========================
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const b = i.querySelector('.faq-question-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Expose globally for inline onclick handlers
window.inquireRoute = inquireRoute;
window.setLanguage = setLanguage;

// ========================
// INIT
// ========================
function initApp() {
  setLanguage(localStorage.getItem('igc_lang') || 'en');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const bookingForm = document.getElementById('quickQuoteForm');
  if (bookingForm) bookingForm.addEventListener('submit', handleQuoteSubmission);

  const biltyForm = document.getElementById('biltyForm');
  if (biltyForm) biltyForm.addEventListener('submit', handleBiltyCheck);

  setupMobileMenu();
  setupScrollAnimations();
  setupNavbarScroll();
  setupCounters();
  setupFaqAccordion();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

