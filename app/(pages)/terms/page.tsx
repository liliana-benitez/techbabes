import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-12 px-4 md:px-20 py-12">
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Terms and Conditions
        </h1>
        <p className="text-muted-foreground text-sm">
          Last updated{" "}
          <strong className="text-foreground">February 25, 2026</strong>
        </p>
      </div>

      {/* Intro */}
      <div className="p-6 rounded-2xl bg-linear-to-br from-primary/5 to-secondary/5 border border-border/50 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          We are <strong className="text-foreground">Tech Babes Inc.</strong>,
          doing business as{" "}
          <strong className="text-foreground">Tech Babes</strong>{" "}
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
          &quot;our&quot;). We operate the website{" "}
          <a
            href="https://techbabes.dev"
            className="text-primary underline underline-offset-4"
          >
            https://techbabes.dev
          </a>{" "}
          (the &quot;Site&quot;), as well as any other related products and
          services that refer or link to these legal terms (collectively, the
          &quot;Services&quot;).
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can contact us by email at{" "}
          <a
            href="mailto:thetechbabesinc@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            thetechbabesinc@gmail.com
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          These Legal Terms constitute a legally binding agreement between you
          and Tech Babes Inc. concerning your access to and use of the Services.{" "}
          <strong className="text-foreground">
            By accessing the Services, you have read, understood, and agreed to
            be bound by all of these Legal Terms.
          </strong>{" "}
          IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
          EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE
          USE IMMEDIATELY.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Services are intended for users who are at least 18 years old.
          Persons under the age of 18 are not permitted to use or register for
          the Services.
        </p>
      </div>

      {/* Table of Contents */}
      <section>
        <div className="rounded-2xl border border-border/50 bg-card shadow-sm p-6">
          <h2 className="font-display font-bold text-xl mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-1.5">
            {[
              ["#services", "1. Our Services"],
              ["#ip", "2. Intellectual Property Rights"],
              ["#userreps", "3. User Representations"],
              ["#products", "4. Products"],
              ["#purchases", "5. Purchases and Payment"],
              ["#returnpolicy", "6. Return Policy"],
              ["#prohibited", "7. Prohibited Activities"],
              ["#ugc", "8. User Generated Contributions"],
              ["#license", "9. Contribution License"],
              ["#thirdparty", "10. Third-Party Websites and Content"],
              ["#sitemanage", "11. Services Management"],
              ["#privacypolicy", "12. Privacy Policy"],
              ["#terms", "13. Term and Termination"],
              ["#modifications", "14. Modifications and Interruptions"],
              ["#law", "15. Governing Law"],
              ["#disputes", "16. Dispute Resolution"],
              ["#corrections", "17. Corrections"],
              ["#disclaimer", "18. Disclaimer"],
              ["#liability", "19. Limitations of Liability"],
              ["#indemnification", "20. Indemnification"],
              ["#userdata", "21. User Data"],
              [
                "#electronic",
                "22. Electronic Communications, Transactions, and Signatures"
              ],
              ["#california", "23. California Users and Residents"],
              ["#misc", "24. Miscellaneous"],
              ["#contact", "25. Contact Us"]
            ].map(([href, label]) => (
              <li key={href} className="text-sm">
                <a
                  href={href}
                  className="text-primary hover:underline underline-offset-4 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 1 */}
      <section id="services" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">1. Our Services</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.),
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </p>
      </section>

      {/* Section 2 */}
      <section id="ip" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          2. Intellectual Property Rights
        </h2>
        <h3 className="font-display font-semibold text-lg">
          Our intellectual property
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the &quot;Content&quot;), as
          well as the trademarks, service marks, and logos contained therein
          (the &quot;Marks&quot;). Our Content and Marks are protected by
          copyright and trademark laws and treaties in the United States and
          around the world.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Content and Marks are provided in or through the Services &quot;AS
          IS&quot; for your personal, non-commercial use or internal business
          purpose only.
        </p>
        <h3 className="font-display font-semibold text-lg">
          Your use of our Services
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Subject to your compliance with these Legal Terms, we grant you a
          non-exclusive, non-transferable, revocable license to access the
          Services and download or print a copy of any portion of the Content to
          which you have properly gained access, solely for your personal,
          non-commercial use or internal business purpose.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Except as set out in this section, no part of the Services and no
          Content or Marks may be copied, reproduced, aggregated, republished,
          uploaded, posted, publicly displayed, encoded, translated,
          transmitted, distributed, sold, licensed, or otherwise exploited for
          any commercial purpose whatsoever, without our express prior written
          permission.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section, please address your request to:{" "}
          <a
            href="mailto:thetechbabesinc@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            thetechbabesinc@gmail.com
          </a>
          . Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use our Services
          will terminate immediately.
        </p>
        <h3 className="font-display font-semibold text-lg">Your submissions</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Submissions:</strong> By directly
          sending us any question, comment, suggestion, idea, feedback, or other
          information about the Services (&quot;Submissions&quot;), you agree to
          assign to us all intellectual property rights in such Submission. You
          agree that we shall own this Submission and be entitled to its
          unrestricted use and dissemination for any lawful purpose, commercial
          or otherwise, without acknowledgment or compensation to you.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You are solely responsible for your Submissions and you expressly
          agree to reimburse us for any and all losses that we may suffer
          because of your breach of this section, any third party&apos;s
          intellectual property rights, or applicable law.
        </p>
      </section>

      {/* Section 3 */}
      <section id="userreps" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          3. User Representations
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          By using the Services, you represent and warrant that: (1) you have
          the legal capacity and you agree to comply with these Legal Terms; (2)
          you are not a minor in the jurisdiction in which you reside; (3) you
          will not access the Services through automated or non-human means,
          whether through a bot, script, or otherwise; (4) you will not use the
          Services for any illegal or unauthorized purpose; and (5) your use of
          the Services will not violate any applicable law or regulation.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>
      </section>

      {/* Section 4 */}
      <section id="products" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">4. Products</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We make every effort to display as accurately as possible the colors,
          features, specifications, and details of the products available on the
          Services. However, we do not guarantee that the colors, features,
          specifications, and details of the products will be accurate,
          complete, reliable, current, or free of other errors, and your
          electronic display may not accurately reflect the actual colors and
          details of the products. All products are subject to availability, and
          we cannot guarantee that items will be in stock. We reserve the right
          to discontinue any products at any time for any reason. Prices for all
          products are subject to change.
        </p>
      </section>

      {/* Section 5 */}
      <section id="purchases" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          5. Purchases and Payment
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We accept the following forms of payment: Visa, Mastercard, American
          Express, and PayPal.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Services. You
          further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed. Sales tax will be added to the price of purchases as deemed
          required by us. We may change prices at any time. All payments shall
          be in <strong className="text-foreground">CAD</strong>.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order. We reserve the right to correct any errors or mistakes in
          pricing, even if we have already requested or received payment.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We reserve the right to refuse any order placed through the Services.
          We may, in our sole discretion, limit or cancel quantities purchased
          per person, per household, or per order. These restrictions may
          include orders placed by or under the same customer account, the same
          payment method, and/or orders that use the same billing or shipping
          address.
        </p>
      </section>

      {/* Section 6 */}
      <section id="returnpolicy" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">6. Return Policy</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Please review our Return Policy prior to making any purchases:{" "}
          <a
            href="https://techbabes.dev/shipping"
            className="text-primary underline underline-offset-4"
          >
            https://techbabes.dev/shipping
          </a>
          .
        </p>
      </section>

      {/* Section 7 */}
      <section id="prohibited" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          7. Prohibited Activities
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>
        <p className="text-sm font-semibold text-foreground">
          As a user of the Services, you agree not to:
        </p>
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
              "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
              "Circumvent, disable, or otherwise interfere with security-related features of the Services.",
              "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
              "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
              "Make improper use of our support services or submit false reports of abuse or misconduct.",
              "Use the Services in a manner inconsistent with any applicable laws or regulations.",
              "Engage in unauthorized framing of or linking to the Services.",
              "Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.",
              "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
              "Delete the copyright or other proprietary rights notice from any Content.",
              "Attempt to impersonate another user or person or use the username of another user.",
              "Use a buying agent or purchasing agent to make purchases on the Services.",
              "Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users for the purpose of sending unsolicited email.",
              "Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 8 */}
      <section id="ugc" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          8. User Generated Contributions
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Services does not currently offer users to submit or post content.
          We may provide you with the opportunity to create, submit, post,
          display, transmit, perform, publish, distribute, or broadcast content
          and materials to us or on the Services, including but not limited to
          text, writings, video, audio, photographs, graphics, comments,
          suggestions, or personal information or other material (collectively,
          &quot;Contributions&quot;). When you create or make available any
          Contributions, you represent and warrant that your Contributions are
          original, non-infringing, accurate, not misleading, not solicited or
          unauthorized advertising, and do not violate any applicable law,
          regulation, or the rights of any third party.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Any use of the Services in violation of the foregoing violates these
          Legal Terms and may result in, among other things, termination or
          suspension of your rights to use the Services.
        </p>
      </section>

      {/* Section 9 */}
      <section id="license" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          9. Contribution License
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You and Services agree that we may access, store, process, and use any
          information and personal data that you provide following the terms of
          the Privacy Policy and your choices (including settings).
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          By submitting suggestions or other feedback regarding the Services,
          you agree that we can use and share such feedback for any purpose
          without compensation to you.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You
          are solely responsible for your Contributions to the Services and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </p>
      </section>

      {/* Section 10 */}
      <section id="thirdparty" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          10. Third-Party Websites and Content
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Services may contain links to other websites (&quot;Third-Party
          Websites&quot;) as well as articles, photographs, text, graphics,
          pictures, designs, music, sound, video, information, applications,
          software, and other content belonging to or originating from third
          parties (&quot;Third-Party Content&quot;). Such Third-Party Websites
          and Third-Party Content are not investigated, monitored, or checked
          for accuracy, appropriateness, or completeness by us, and we are not
          responsible for any Third-Party Websites accessed through the Services
          or any Third-Party Content posted on, available through, or installed
          from the Services.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you decide to leave the Services and access Third-Party Websites or
          use any Third-Party Content, you do so at your own risk, and these
          Legal Terms no longer govern. Any purchases you make through
          Third-Party Websites will be through other websites and from other
          companies, and we take no responsibility whatsoever in relation to
          such purchases.
        </p>
      </section>

      {/* Section 11 */}
      <section id="sitemanage" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          11. Services Management
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We reserve the right, but not the obligation, to: (1) monitor the
          Services for violations of these Legal Terms; (2) take appropriate
          legal action against anyone who, in our sole discretion, violates the
          law or these Legal Terms, including without limitation, reporting such
          user to law enforcement authorities; (3) in our sole discretion and
          without limitation, refuse, restrict access to, limit the availability
          of, or disable any of your Contributions or any portion thereof; (4)
          remove from the Services or otherwise disable all files and content
          that are excessive in size or are in any way burdensome to our
          systems; and (5) otherwise manage the Services in a manner designed to
          protect our rights and property and to facilitate the proper
          functioning of the Services.
        </p>
      </section>

      {/* Section 12 */}
      <section id="privacypolicy" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">12. Privacy Policy</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We care about data privacy and security. Please review our Privacy
          Policy:{" "}
          <a
            href="https://techbabes.dev/privacy"
            className="text-primary underline underline-offset-4 font-semibold"
          >
            https://techbabes.dev/privacy
          </a>
          . By using the Services, you agree to be bound by our Privacy Policy,
          which is incorporated into these Legal Terms. Please be advised the
          Services are hosted in the United States. If you access the Services
          from any other region of the world with laws or other requirements
          governing personal data collection, use, or disclosure that differ
          from applicable laws in the United States, then through your continued
          use of the Services, you are transferring your data to the United
          States, and you expressly consent to have your data transferred to and
          processed in the United States.
        </p>
      </section>

      {/* Section 13 */}
      <section id="terms" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          13. Term and Termination
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>
      </section>

      {/* Section 14 */}
      <section id="modifications" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          14. Modifications and Interruptions
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. We also reserve the right to modify or discontinue all or part
          of the Services without notice at any time. We will not be liable to
          you or any third party for any modification, price change, suspension,
          or discontinuance of the Services.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We cannot guarantee the Services will be available at all times. We
          may experience hardware, software, or other problems or need to
          perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. You agree that we have no liability
          whatsoever for any loss, damage, or inconvenience caused by your
          inability to access or use the Services during any downtime or
          discontinuance of the Services.
        </p>
      </section>

      {/* Section 15 */}
      <section id="law" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">15. Governing Law</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          These Legal Terms shall be governed by and defined following the laws
          of <strong className="text-foreground">Canada</strong>. Tech Babes
          Inc. and yourself irrevocably consent that the courts of Canada shall
          have exclusive jurisdiction to resolve any dispute which may arise in
          connection with these Legal Terms.
        </p>
      </section>

      {/* Section 16 */}
      <section id="disputes" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          16. Dispute Resolution
        </h2>
        <div className="rounded-2xl border border-border/50 bg-card p-6 space-y-5">
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-lg">
              Informal Negotiations
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To expedite resolution and control the cost of any dispute,
              controversy, or claim related to these Legal Terms (each a
              &quot;Dispute&quot;), the Parties agree to first attempt to
              negotiate any Dispute informally for at least thirty (30) days
              before initiating arbitration. Such informal negotiations commence
              upon written notice from one Party to the other Party.
            </p>
          </div>
          <div className="border-t border-border/50 pt-5 space-y-2">
            <h3 className="font-display font-semibold text-lg">
              Binding Arbitration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Any dispute arising out of or in connection with these Legal
              Terms, including any question regarding its existence, validity,
              or termination, shall be referred to and finally resolved by the
              International Commercial Arbitration Court under the European
              Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
              according to the Rules of this ICAC. The number of arbitrators
              shall be one (1). The seat of arbitration shall be Toronto,
              Canada. The language of the proceedings shall be English. The
              governing law of these Legal Terms shall be substantive law of
              Canada.
            </p>
          </div>
          <div className="border-t border-border/50 pt-5 space-y-2">
            <h3 className="font-display font-semibold text-lg">Restrictions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law: (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis; and (c) there is
              no right or authority for any Dispute to be brought in a purported
              representative capacity on behalf of the general public or any
              other persons.
            </p>
          </div>
          <div className="border-t border-border/50 pt-5 space-y-2">
            <h3 className="font-display font-semibold text-lg">
              Exceptions to Informal Negotiations and Arbitration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Parties agree that the following Disputes are not subject to
              the above provisions: (a) any Disputes seeking to enforce or
              protect any intellectual property rights of a Party; (b) any
              Dispute related to allegations of theft, piracy, invasion of
              privacy, or unauthorized use; and (c) any claim for injunctive
              relief.
            </p>
          </div>
        </div>
      </section>

      {/* Section 17 */}
      <section id="corrections" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">17. Corrections</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
      </section>

      {/* Section 18 */}
      <section id="disclaimer" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">18. Disclaimer</h2>
        <div className="p-5 rounded-xl border border-border/50 bg-muted/20">
          <p className="text-sm text-muted-foreground leading-relaxed">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
            AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
            THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
            THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
            ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT AND WE WILL
            ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR
            INACCURACIES OF CONTENT AND MATERIALS, PERSONAL INJURY OR PROPERTY
            DAMAGE, ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
            AND/OR ANY PERSONAL INFORMATION STORED THEREIN, OR ANY INTERRUPTION
            OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES.
          </p>
        </div>
      </section>

      {/* Section 19 */}
      <section id="liability" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          19. Limitations of Liability
        </h2>
        <div className="p-5 rounded-xl border border-border/50 bg-muted/20">
          <p className="text-sm text-muted-foreground leading-relaxed">
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>
        </div>
      </section>

      {/* Section 20 */}
      <section id="indemnification" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">20. Indemnification</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys&apos; fees and
          expenses, made by any third party due to or arising out of: (1) use of
          the Services; (2) breach of these Legal Terms; (3) any breach of your
          representations and warranties set forth in these Legal Terms; (4)
          your violation of the rights of a third party, including but not
          limited to intellectual property rights; or (5) any overt harmful act
          toward any other user of the Services with whom you connected via the
          Services.
        </p>
      </section>

      {/* Section 21 */}
      <section id="userdata" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">21. User Data</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </p>
      </section>

      {/* Section 22 */}
      <section id="electronic" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          22. Electronic Communications, Transactions, and Signatures
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you electronically
          satisfy any legal requirement that such communication be in writing.
          YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
          ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
          POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR
          VIA THE SERVICES.
        </p>
      </section>

      {/* Section 23 */}
      <section id="california" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          23. California Users and Residents
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>
      </section>

      {/* Section 24 */}
      <section id="misc" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">24. Miscellaneous</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision is deemed
          severable from these Legal Terms and does not affect the validity and
          enforceability of any remaining provisions. There is no joint venture,
          partnership, employment, or agency relationship created between you
          and us as a result of these Legal Terms or use of the Services.
        </p>
      </section>

      {/* Section 25 */}
      <section id="contact" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">25. Contact Us</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </p>
        <div className="p-5 rounded-xl border border-border/50 bg-muted/20 text-sm text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground">Tech Babes Inc.</p>
          <p>
            <a
              href="mailto:thetechbabesinc@gmail.com"
              className="text-primary underline underline-offset-4"
            >
              thetechbabesinc@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer note */}
      <div className="rounded-2xl border border-border/50 bg-muted/30 p-4 text-xs text-muted-foreground">
        These Terms and Conditions were created using{" "}
        <a
          href="https://termly.io/products/terms-and-conditions-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          Termly&apos;s Terms and Conditions Generator
        </a>
        .
      </div>

      {/* CTA */}
      <section>
        <div className="w-full space-y-6 py-16 px-8 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <div>
            <h2 className="font-display font-bold text-3xl mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re happy to help, reach out any time!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="btn-pink px-8 py-2.5 rounded-full font-semibold text-sm">
                Contact Us
              </button>
            </Link>
            <Link href="/shop">
              <button className="btn-blue px-8 py-2.5 rounded-full font-semibold text-sm">
                Back to Shop
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
