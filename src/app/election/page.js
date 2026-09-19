'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Video, 
  Share2, 
  Camera, 
  Award, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Globe, 
  Mail, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Languages,
  Check
} from 'lucide-react';
import Card from '@/components/ui/Card';

export default function ElectionPage() {
  const [activeLang, setActiveLang] = useState('both'); // 'hi', 'en', 'both'

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Language Selection Header */}
        <div className="sticky top-28 z-40 mb-8 bg-[#18072b] backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl flex flex-wrap items-center justify-between gap-4 isolate pointer-events-auto">
          <div className="flex items-center space-x-2 text-primary font-bold text-base md:text-lg">
            <Languages className="w-6 h-6 text-primary-light" />
            <span>Select View / भाषा चुनें:</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveLang('hi')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeLang === 'hi' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary-light' 
                  : 'bg-white/5 text-foreground-muted hover:bg-white/10'
              }`}
            >
              🇮🇳 हिंदी (Hindi)
            </button>
            <button
              onClick={() => setActiveLang('en')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeLang === 'en' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary-light' 
                  : 'bg-white/5 text-foreground-muted hover:bg-white/10'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setActiveLang('both')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeLang === 'both' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary-light' 
                  : 'bg-white/5 text-foreground-muted hover:bg-white/10'
              }`}
            >
              🌐 Both / दोनों (Hindi & English)
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 🇮🇳 HINDI SECTION */}
        {/* ========================================================================= */}
        {(activeLang === 'hi' || activeLang === 'both') && (
          <section className="mb-20">
            
            {/* Hindi Main Hero */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 via-background-card to-background p-8 md:p-12 border border-primary/30 shadow-2xl mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>उत्तर प्रदेश विधानसभा चुनाव 2027</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                आपके अभियान की कहानी, सही अंदाज़ में
              </h1>
              <p className="text-xl md:text-2xl text-primary-light font-bold mb-4">
                कंटेंट | कम्युनिकेशन | डिजिटल स्टोरीटेलिंग
              </p>
              
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6 bg-white/5 p-4 rounded-xl border-l-4 border-primary">
                उत्तर प्रदेश विधानसभा चुनाव 2027 की तैयारी कर रहे राजनीतिक नेताओं एवं उम्मीदवारों के लिए एक भरोसेमंद कंटेंट पार्टनर
              </h2>

              <div className="space-y-4 text-foreground-muted text-base md:text-lg leading-relaxed mb-8">
                <p>
                  आज का मतदाता केवल रैली, पोस्टर या अखबार से जानकारी हासिल नहीं करता। मोबाइल फोन और डिजिटल प्लेटफॉर्म अब राजनीतिक संवाद का महत्वपूर्ण माध्यम बन चुके हैं।
                </p>
                <p>
                  ऐसे में एक सफल राजनीतिक अभियान के लिए जरूरी है कि उम्मीदवार की सोच, काम, व्यक्तित्व, विज़न और जनता से जुड़ाव को लगातार, प्रभावी और पेशेवर तरीके से प्रस्तुत किया जाए।
                </p>
                <p className="text-white font-semibold">
                  DeltaClicks राजनीतिक नेताओं और चुनावी अभियानों के लिए वीडियो प्रोडक्शन, सोशल मीडिया कंटेंट और डिजिटल स्टोरीटेलिंग की एकीकृत सेवाएं प्रदान करता है।
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:7355453408"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  कंसल्टेशन कॉल करें: 7355453408
                </a>
                <a
                  href="https://deltaclicks.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all border border-white/10"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  deltaclicks.in
                </a>
              </div>
            </div>

            {/* Hindi Services Overview Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                आपके अभियान के लिए हम क्या कर सकते हैं?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mt-4"></div>
            </div>

            {/* Hindi 5 Core Services */}
            <div className="space-y-8 mb-16">
              
              {/* 1. प्रोफेशनल वीडियो प्रोडक्शन */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Video className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">सेवा 01</span>
                    <h3 className="text-2xl font-bold text-white">1. प्रोफेशनल वीडियो प्रोडक्शन</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-6 font-medium">
                  आपके राजनीतिक सफर और अभियान को प्रभावशाली वीडियो स्टोरी में बदलना।
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'उम्मीदवार परिचय वीडियो',
                    'विज़न एवं प्राथमिकताओं पर वीडियो',
                    'क्षेत्र एवं विधानसभा-केंद्रित वीडियो',
                    'किए गए कार्यों की डॉक्यूमेंटेशन',
                    'जनसभाओं और कार्यक्रमों की कवरेज',
                    'शॉर्ट वीडियो, Reels एवं Shorts',
                    'इंटरव्यू एवं संवाद कार्यक्रम',
                    'डॉक्यूमेंट्री शैली की फिल्में',
                    'अभियान के महत्वपूर्ण पलों की वीडियो कवरेज'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 2. सोशल मीडिया कंटेंट */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Share2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">सेवा 02</span>
                    <h3 className="text-2xl font-bold text-white">2. सोशल मीडिया कंटेंट</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-4 font-medium">
                  आपका डिजिटल अभियान सिर्फ चुनाव के दौरान नहीं, हर दिन सक्रिय और जीवंत दिखाई देना चाहिए।
                </p>
                <p className="text-foreground-muted text-sm mb-4">
                  हम आपके लिए विभिन्न डिजिटल प्लेटफॉर्म के अनुरूप कंटेंट तैयार कर सकते हैं:
                </p>

                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-primary-light font-bold text-base mb-6 text-center">
                  Instagram | Facebook | YouTube | X | WhatsApp | अन्य डिजिटल प्लेटफॉर्म
                </div>

                <p className="text-white font-semibold mb-3">कंटेंट में शामिल हो सकता है:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Reels एवं Shorts',
                    'सोशल मीडिया पोस्ट',
                    'मोशन ग्राफिक्स',
                    'इन्फोग्राफिक्स',
                    'फोटो स्टोरी',
                    'कार्यक्रमों की Highlights',
                    'उम्मीदवार के संदेश',
                    'मुद्दों की जानकारी देने वाले वीडियो',
                    'क्षेत्रीय अपडेट',
                    'त्योहार एवं विशेष अवसरों की क्रिएटिव सामग्री'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 3. ऑन-ग्राउंड कंटेंट प्रोडक्शन */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">सेवा 03</span>
                    <h3 className="text-2xl font-bold text-white">3. ऑन-ग्राउंड कंटेंट प्रोडक्शन</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-4 leading-relaxed">
                  चुनावी अभियान तेज़ गति से चलता है। इसलिए कंटेंट का प्रोडक्शन भी तेज़ और व्यवस्थित होना चाहिए।
                </p>
                <p className="text-foreground-muted text-base mb-4">
                  हमारी टीम आपके साथ मैदान में रहकर आपके अभियान की गतिविधियों को रिकॉर्ड कर सकती है—
                </p>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-6 text-center font-bold text-primary-light text-sm md:text-base leading-relaxed">
                  जनसंपर्क → जनसभा → क्षेत्रीय दौरे → कार्यकर्ता बैठक → स्थानीय कार्यक्रम → जनता से संवाद
                </div>

                <p className="text-foreground-muted text-sm mb-4">
                  और फिर उसी सामग्री को तेज़ी से डिजिटल प्लेटफॉर्म के लिए तैयार किया जा सकता है।
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">कैप्चर करें।</div>
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">एडिट करें।</div>
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">तैयार करें।</div>
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">प्रकाशित करें।</div>
                </div>
              </Card>

              {/* 4. उम्मीदवार की डिजिटल ब्रांडिंग */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">सेवा 04</span>
                    <h3 className="text-2xl font-bold text-white">4. उम्मीदवार की डिजिटल ब्रांडिंग</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-4 leading-relaxed">
                  हर उम्मीदवार की एक अलग पहचान होती है। हमारा उद्देश्य उस पहचान को एक सुसंगत और प्रोफेशनल डिजिटल विज़ुअल पहचान में बदलना है।
                </p>
                <p className="text-white font-semibold mb-4">हम तैयार कर सकते हैं:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    'उम्मीदवार की डिजिटल ब्रांड पहचान',
                    'अभियान का विज़ुअल लुक एवं फील',
                    'वीडियो की एकरूप शैली',
                    'फोटोग्राफी स्टाइल',
                    'सोशल मीडिया टेम्पलेट्स',
                    'रंग एवं टाइपोग्राफी सिस्टम',
                    'वीडियो Intro/Outro',
                    'अभियान के लिए ग्राफिक्स पैकेज'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 5. विधानसभा क्षेत्र की कहानी */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">सेवा 05</span>
                    <h3 className="text-2xl font-bold text-white">5. विधानसभा क्षेत्र की कहानी</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base leading-relaxed mb-4">
                  हर विधानसभा की अपनी कहानी होती है।
                </p>
                <p className="text-foreground-muted text-base leading-relaxed mb-4">
                  अपने क्षेत्र के लोग, स्थानीय मुद्दे, उपलब्धियां, आकांक्षाएं और विकास से जुड़े विषय आपके अभियान की महत्वपूर्ण कहानी बन सकते हैं।
                </p>
                <p className="text-foreground-muted text-base leading-relaxed mb-6">
                  हम इन वास्तविक कहानियों को उच्च गुणवत्ता वाले वीडियो, फोटो और डिजिटल कंटेंट के माध्यम से प्रस्तुत करने में आपकी मदद करते हैं।
                </p>

                <div className="p-4 bg-primary/10 rounded-2xl border-l-4 border-primary text-white font-bold text-base md:text-lg space-y-1">
                  <p>क्योंकि हर क्षेत्र की एक कहानी है।</p>
                  <p className="text-primary-light">और हर कहानी को सही तरीके से बताया जाना चाहिए।</p>
                </div>
              </Card>

            </div>

            {/* Hindi Content Engine */}
            <div className="bg-gradient-to-r from-primary/30 via-background-card to-primary/20 p-8 md:p-12 rounded-3xl border border-primary/30 mb-16 text-center shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                आपका कंटेंट इंजन — एक ही टीम के साथ
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 my-6 text-xl md:text-3xl font-extrabold text-primary-light tracking-wide">
                <span>IDEA</span>
                <span>→</span>
                <span>SHOOT</span>
                <span>→</span>
                <span>EDIT</span>
                <span>→</span>
                <span>DESIGN</span>
                <span>→</span>
                <span>DELIVER</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-4xl mx-auto mt-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 font-bold text-white">
                  एकीकृत कंटेंट टीम।
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 font-bold text-white">
                  एक सुसंगत विज़ुअल पहचान।
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 font-bold text-white">
                  लगातार तैयार होने वाला अभियान कंटेंट।
                </div>
              </div>
            </div>

            {/* Hindi Why DeltaClicks */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  DeltaClicks क्यों?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mt-3"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">⚡ SPEED — तेज़ डिलीवरी</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    चुनावी अभियान में समय बेहद महत्वपूर्ण है। हमारा वर्कफ़्लो तेज़ टर्नअराउंड के लिए तैयार किया जा सकता है।
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">🎥 QUALITY — प्रोफेशनल क्वालिटी</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    सिनेमैटोग्राफी, वीडियो एडिटिंग, ग्राफिक्स और स्टोरीटेलिंग—एक ही टीम के माध्यम से।
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">🎯 CONSISTENCY — एक जैसी पहचान</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    आपका वीडियो, सोशल मीडिया पोस्ट, फोटो और ग्राफिक्स—हर जगह एक सुसंगत अभियान पहचान के साथ दिखाई दें।
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">📍 LOCAL STORYTELLING — स्थानीय कहानियां</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    आपके क्षेत्र के वास्तविक लोगों, स्थानों और गतिविधियों पर आधारित प्रामाणिक कंटेंट।
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10 md:col-span-2 lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">🚀 SCALE — जरूरत के अनुसार विस्तार</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    एक विधानसभा क्षेत्र से लेकर बड़े अभियान तक, आपकी जरूरत के अनुसार प्रोडक्शन टीम और कंटेंट सिस्टम तैयार किया जा सकता है।
                  </p>
                </Card>
              </div>
            </div>

            {/* Hindi Narrative & Approach */}
            <div className="bg-background-card p-8 md:p-12 rounded-3xl border border-white/10 mb-16 text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                आपके पास अभियान है।
              </h3>
              <h4 className="text-xl md:text-2xl font-bold text-primary-light mb-6">
                हमारे पास उसे कहानी में बदलने की क्षमता।
              </h4>
              <p className="text-foreground-muted text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                राजनीतिक संचार केवल एक अच्छा वीडियो बनाने का नाम नहीं है। यह एक निरंतर और विश्वसनीय सार्वजनिक संवाद तैयार करने की प्रक्रिया है—जिसमें आपका काम, आपका विज़न और जनता के साथ आपका जुड़ाव लगातार सामने आता रहे।
              </p>

              <div className="border-t border-white/10 pt-8">
                <h5 className="text-xl font-bold text-white mb-4">हमारा तरीका</h5>
                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-base md:text-lg font-bold text-primary-light inline-block">
                  सुनें → समझें → योजना बनाएं → बनाएं → प्रकाशित करें → लगातार बेहतर करें
                </div>
              </div>
            </div>

            {/* Hindi Footer CTA */}
            <div className="rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-primary p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
                आइए, आपके अभियान का डिजिटल कंटेंट सिस्टम तैयार करें।
              </h2>
              <h3 className="text-xl font-bold text-white/90 mb-2">
                DeltaClicks
              </h3>
              <p className="text-base text-white/80 font-medium mb-6">
                Content Production | Political Communication | Digital Storytelling
              </p>
              
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 max-w-xl mx-auto mb-8">
                <p className="text-sm font-semibold mb-3">कंसल्टेशन एवं अभियान प्रस्ताव के लिए:</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="tel:7355453408"
                    className="px-5 py-2.5 bg-white text-primary rounded-xl font-bold flex items-center hover:bg-white/90 transition-all shadow-md text-base"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    7355453408
                  </a>
                  <a
                    href="https://deltaclicks.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white/20 text-white rounded-xl font-bold flex items-center hover:bg-white/30 transition-all text-base"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    deltaclicks.in
                  </a>
                </div>
              </div>

              <p className="text-xs text-white/70 max-w-3xl mx-auto border-t border-white/20 pt-4 leading-relaxed">
                <ShieldCheck className="w-4 h-4 inline mr-1" />
                सभी कंटेंट एवं संचार सेवाएं लागू चुनावी कानूनों, निर्वाचन आयोग के दिशा-निर्देशों तथा संबंधित प्लेटफॉर्म की नीतियों के अनुरूप प्रदान की जाएंगी।
              </p>
            </div>

          </section>
        )}

        {/* Divider if showing both */}
        {activeLang === 'both' && (
          <div className="relative my-20">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-primary/40"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-primary text-white font-extrabold px-6 py-2 rounded-full text-base tracking-wider uppercase shadow-xl">
                ENGLISH VERSION BELOW
              </span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 🇬🇧 ENGLISH SECTION */}
        {/* ========================================================================= */}
        {(activeLang === 'en' || activeLang === 'both') && (
          <section className="mb-20">
            
            {/* English Main Hero */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 via-background-card to-background p-8 md:p-12 border border-primary/30 shadow-2xl mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>UP Assembly Elections 2027 Strategic Partner</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                TURN YOUR POLITICAL JOURNEY INTO A POWERFUL DIGITAL STORY
              </h1>
              <p className="text-xl md:text-2xl text-primary-light font-bold mb-4">
                Content. Communication. Connect.
              </p>
              
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6 bg-white/5 p-4 rounded-xl border-l-4 border-primary">
                A Strategic Content Partner for Uttar Pradesh Political Campaigns
              </h2>

              <div className="space-y-4 text-foreground-muted text-base md:text-lg leading-relaxed mb-8">
                <p>
                  The political landscape is changing. Voters increasingly discover leaders, understand issues, and follow campaigns through their phones and social-media feeds.
                </p>
                <p>
                  A strong campaign today needs more than rallies, posters and press coverage. It needs a consistent, credible and compelling content presence—one that communicates a candidate&apos;s work, vision, personality and connection with the people.
                </p>
                <p className="text-white font-semibold">
                  DeltaClicks is a content production and communications company built to help political leaders turn their ideas, public work and campaign activities into high-quality digital content.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:7355453408"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Consultations: 7355453408
                </a>
                <a
                  href="https://deltaclicks.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all border border-white/10"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  deltaclicks.in
                </a>
              </div>
            </div>

            {/* English Services Overview Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                WHAT WE CAN BUILD FOR YOUR CAMPAIGN
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mt-4"></div>
            </div>

            {/* English 5 Core Services */}
            <div className="space-y-8 mb-16">
              
              {/* 1. Campaign Video Production */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Video className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Service 01</span>
                    <h3 className="text-2xl font-bold text-white">1. Campaign Video Production</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-6 font-medium">
                  From the first introduction to the final phase of the campaign, we produce professional video content designed for digital platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    'Candidate introduction films',
                    'Vision & manifesto videos',
                    'Constituency-focused films',
                    'Development and work-documentation videos',
                    'Rally and public-meeting coverage',
                    'Short-form campaign videos',
                    'Interviews and leadership profiles',
                    'Testimonial and documentary-style content'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 2. Social Media Content */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Share2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Service 02</span>
                    <h3 className="text-2xl font-bold text-white">2. Social Media Content</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-4 font-medium">
                  Your campaign should remain active and recognizable every day—not only on rally days.
                </p>
                <p className="text-foreground-muted text-sm mb-4">
                  We can create a structured content pipeline for:
                </p>

                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-primary-light font-bold text-base mb-6 text-center">
                  Instagram | Facebook | YouTube | X | WhatsApp | Other digital platforms
                </div>

                <p className="text-white font-semibold mb-3">Including:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    'Reels and Shorts',
                    'Campaign creatives',
                    'Motion graphics',
                    'Infographics',
                    'Photo stories',
                    'Event highlights',
                    'Candidate statements',
                    'Issue-explainer content',
                    'Festival and occasion creatives',
                    'Constituency updates'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 3. On-Ground Content Team */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Service 03</span>
                    <h3 className="text-2xl font-bold text-white">3. On-Ground Content Team</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-4 leading-relaxed">
                  Campaigns move fast. Content needs to move faster.
                </p>
                <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                  Our production team can document your campaign on the ground—from constituency visits and जनसभाएं to meetings, public interactions and grassroots activities.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">Capture it.</div>
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">Edit it.</div>
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">Package it.</div>
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 font-bold text-white text-base">Publish it.</div>
                </div>
              </Card>

              {/* 4. Candidate Branding */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Service 04</span>
                    <h3 className="text-2xl font-bold text-white">4. Candidate Branding</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base mb-4 leading-relaxed">
                  Build a recognizable public identity across every communication channel.
                </p>
                <p className="text-white font-semibold mb-4">We can develop:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    'Candidate visual identity',
                    'Campaign look & feel',
                    'Video language',
                    'Photography style',
                    'Social-media templates',
                    'Typography and colour system',
                    'Intro/outro packages',
                    'Campaign presentation formats'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 5. Constituency Storytelling */}
              <Card className="p-8 bg-background-card border border-white/10 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Service 05</span>
                    <h3 className="text-2xl font-bold text-white">5. Constituency Storytelling</h3>
                  </div>
                </div>

                <p className="text-foreground-muted text-base leading-relaxed mb-4">
                  Every constituency has its own people, places, aspirations and challenges.
                </p>
                <p className="text-foreground-muted text-base leading-relaxed">
                  We help transform local realities and legitimate campaign priorities into compelling, professionally produced stories—giving the candidate a consistent way to communicate with the constituency.
                </p>
              </Card>

            </div>

            {/* English Content Engine */}
            <div className="bg-gradient-to-r from-primary/30 via-background-card to-primary/20 p-8 md:p-12 rounded-3xl border border-primary/30 mb-16 text-center shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                FROM RAW FOOTAGE TO CAMPAIGN-READY CONTENT
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 my-6 text-xl md:text-3xl font-extrabold text-primary-light tracking-wide">
                <span>IDEA</span>
                <span>→</span>
                <span>SHOOT</span>
                <span>→</span>
                <span>EDIT</span>
                <span>→</span>
                <span>DESIGN</span>
                <span>→</span>
                <span>PUBLISH</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-4xl mx-auto mt-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 font-bold text-white">
                  One integrated content team.
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 font-bold text-white">
                  One consistent visual language.
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 font-bold text-white">
                  A continuous stream of campaign-ready material.
                </div>
              </div>
            </div>

            {/* English Why DeltaClicks */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  WHY DeltaClicks?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mt-3"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">SPEED</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Political campaigns cannot wait weeks for content. Our workflow is designed for rapid turnaround.
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">QUALITY</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Professional cinematography, editing, design and storytelling—built for today&apos;s digital audience.
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">CONSISTENCY</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    A campaign&apos;s identity should look coherent whether the audience sees a Reel, YouTube film, photograph or graphic.
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">LOCAL STORYTELLING</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    We focus on real people, real places and authentic campaign moments rather than generic promotional content.
                  </p>
                </Card>

                <Card className="p-6 bg-background-card border border-white/10 md:col-span-2 lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">SCALE</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    From a single constituency to a larger campaign operation, our production capacity can be structured around your requirements.
                  </p>
                </Card>
              </div>
            </div>

            {/* English Narrative & Approach */}
            <div className="bg-background-card p-8 md:p-12 rounded-3xl border border-white/10 mb-16 text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                YOUR CAMPAIGN HAS A STORY.
              </h3>
              <h4 className="text-xl md:text-2xl font-bold text-primary-light mb-6">
                LET&apos;S TELL IT BETTER.
              </h4>
              <p className="text-foreground-muted text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                Whether you are preparing for the election, building your public profile or entering the campaign phase, DeltaClicks can become your dedicated content production partner.
              </p>

              <div className="border-t border-white/10 pt-8">
                <h5 className="text-xl font-bold text-white mb-4">OUR APPROACH</h5>
                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-base md:text-lg font-bold text-primary-light inline-block mb-4">
                  Listen → Understand → Create → Deliver → Repeat
                </div>
                <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
                  Because effective political communication isn&apos;t about producing one viral video. It is about building a consistent public narrative, day after day.
                </p>
              </div>
            </div>

            {/* English Footer CTA */}
            <div className="rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-primary p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
                LET&apos;S BUILD YOUR CONTENT ENGINE.
              </h2>
              <h3 className="text-xl font-bold text-white/90 mb-2">
                DeltaClicks
              </h3>
              <p className="text-base text-white/80 font-medium mb-6">
                Content Production | Political Communication | Digital Storytelling
              </p>
              
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 max-w-xl mx-auto mb-8">
                <p className="text-sm font-semibold mb-3">For consultations & campaign proposals:</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="tel:7355453408"
                    className="px-5 py-2.5 bg-white text-primary rounded-xl font-bold flex items-center hover:bg-white/90 transition-all shadow-md text-base"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    7355453408
                  </a>
                  <a
                    href="https://deltaclicks.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white/20 text-white rounded-xl font-bold flex items-center hover:bg-white/30 transition-all text-base"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    deltaclicks.in
                  </a>
                </div>
              </div>

              <p className="text-xs text-white/70 max-w-3xl mx-auto border-t border-white/20 pt-4 leading-relaxed">
                <ShieldCheck className="w-4 h-4 inline mr-1" />
                Content services are provided subject to applicable election laws, platform rules and other relevant regulations.
              </p>
            </div>

          </section>
        )}

      </div>
    </div>
  );
}
