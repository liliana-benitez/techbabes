import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col gap-12 px-20 py-12">
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm">
          Last updated{" "}
          <strong className="text-foreground">February 25, 2026</strong>
        </p>
      </div>

      {/* Intro */}
      <div className="p-6 rounded-2xl bg-linear-to-br from-primary/5 to-secondary/5 border border-border/50 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          This Privacy Notice for{" "}
          <strong className="text-foreground">Tech Babes Inc.</strong> (doing
          business as <strong className="text-foreground">Tech Babes</strong>)
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) describes how and
          why we might access, collect, store, use, and/or share
          (&quot;process&quot;) your personal information when you use our
          services (&quot;Services&quot;), including when you:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>
            Visit our website at{" "}
            <a
              href="https://techbabes.dev"
              className="text-primary underline underline-offset-4"
            >
              https://techbabes.dev
            </a>{" "}
            or any website of ours that links to this Privacy Notice
          </li>
          <li>
            Engage with us in other related ways, including any marketing or
            events
          </li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Questions or concerns?</strong>{" "}
          Reading this Privacy Notice will help you understand your privacy
          rights and choices. We are responsible for making decisions about how
          your personal information is processed. If you do not agree with our
          policies and practices, please do not use our Services. If you still
          have any questions or concerns, please contact us at{" "}
          <a
            href="mailto:thetechbabesinc@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            thetechbabesinc@gmail.com
          </a>
          .
        </p>
      </div>

      {/* Summary of Key Points */}
      <section>
        <h2 className="font-display font-bold text-2xl mb-4">
          Summary of Key Points
        </h2>
        <div className="rounded-2xl border border-border/50 bg-card p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            <em>
              This summary provides key points from our Privacy Notice. You can
              find more details by using the table of contents below.
            </em>
          </p>
          <p>
            <strong className="text-foreground">
              What personal information do we process?
            </strong>{" "}
            When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with us and the
            Services, the choices you make, and the products and features you
            use.
          </p>
          <p>
            <strong className="text-foreground">
              Do we process any sensitive personal information?
            </strong>{" "}
            We do not process sensitive personal information.
          </p>
          <p>
            <strong className="text-foreground">
              Do we collect any information from third parties?
            </strong>{" "}
            We do not collect any information from third parties.
          </p>
          <p>
            <strong className="text-foreground">
              How do we process your information?
            </strong>{" "}
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent.
          </p>
          <p>
            <strong className="text-foreground">
              In what situations and with which parties do we share personal
              information?
            </strong>{" "}
            We may share information in specific situations and with specific
            third parties.
          </p>
          <p>
            <strong className="text-foreground">
              How do we keep your information safe?
            </strong>{" "}
            We have adequate organizational and technical processes and
            procedures in place to protect your personal information. However,
            no electronic transmission over the internet can be guaranteed to be
            100% secure.
          </p>
          <p>
            <strong className="text-foreground">What are your rights?</strong>{" "}
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information.
          </p>
          <p>
            <strong className="text-foreground">
              How do you exercise your rights?
            </strong>{" "}
            The easiest way is by submitting a{" "}
            <a
              href="https://app.termly.io/dsar/d1c2869d-30db-413b-ad60-0df3d3aa8e95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              data subject access request
            </a>
            , or by contacting us.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section>
        <div className="rounded-2xl border border-border/50 bg-card shadow-sm p-6">
          <h2 className="font-display font-bold text-xl mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-1.5">
            {[
              ["#infocollect", "1. What Information Do We Collect?"],
              ["#infouse", "2. How Do We Process Your Information?"],
              [
                "#legalbases",
                "3. What Legal Bases Do We Rely On to Process Your Personal Information?"
              ],
              [
                "#whoshare",
                "4. When and With Whom Do We Share Your Personal Information?"
              ],
              ["#inforetain", "5. How Long Do We Keep Your Information?"],
              ["#infosafe", "6. How Do We Keep Your Information Safe?"],
              ["#infominors", "7. Do We Collect Information From Minors?"],
              ["#privacyrights", "8. What Are Your Privacy Rights?"],
              ["#DNT", "9. Controls for Do-Not-Track Features"],
              [
                "#uslaws",
                "10. Do United States Residents Have Specific Privacy Rights?"
              ],
              ["#policyupdates", "11. Do We Make Updates to This Notice?"],
              ["#contact", "12. How Can You Contact Us About This Notice?"],
              [
                "#request",
                "13. How Can You Review, Update, or Delete the Data We Collect From You?"
              ]
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
      <section id="infocollect" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          1. What Information Do We Collect?
        </h2>
        <h3 className="font-display font-semibold text-lg">
          Personal information you disclose to us
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> We collect personal information that you
            provide to us.
          </em>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and Services, when you participate in activities on the
          Services, or otherwise when you contact us.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">
            Personal Information Provided by You.
          </strong>{" "}
          The personal information we collect may include: names, phone numbers,
          email addresses, mailing addresses, billing addresses, and
          debit/credit card numbers.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Sensitive Information.</strong> We
          do not process sensitive information.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Payment Data.</strong> We may
          collect data necessary to process your payment if you choose to make
          purchases, such as your payment instrument number and security code.
          All payment data is handled and stored by{" "}
          <a
            href="https://stripe.com/en-nl/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Stripe
          </a>{" "}
          and{" "}
          <a
            href="https://www.printful.com/policies/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Printful
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>
      </section>

      {/* Section 2 */}
      <section id="infouse" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          2. How Do We Process Your Information?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law. We may also
            process your information for other purposes only with your prior
            explicit consent.
          </em>
        </p>
        <p className="text-sm font-semibold text-foreground">
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
          <li>
            <strong className="text-foreground">
              To deliver and facilitate delivery of services to the user.
            </strong>{" "}
            We may process your information to provide you with the requested
            service.
          </li>
          <li>
            <strong className="text-foreground">
              To respond to user inquiries/offer support to users.
            </strong>{" "}
            We may process your information to respond to your inquiries and
            solve any potential issues you might have with the requested
            service.
          </li>
          <li>
            <strong className="text-foreground">
              To fulfill and manage your orders.
            </strong>{" "}
            We may process your information to fulfill and manage your orders,
            payments, returns, and exchanges made through the Services.
          </li>
          <li>
            <strong className="text-foreground">
              To save or protect an individual&apos;s vital interest.
            </strong>{" "}
            We may process your information when necessary to save or protect an
            individual&apos;s vital interest, such as to prevent harm.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="legalbases" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          3. What Legal Bases Do We Rely On to Process Your Information?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> We only process your personal information
            when we believe it is necessary and we have a valid legal reason to
            do so under applicable law.
          </em>
        </p>

        <div className="p-5 rounded-xl border border-border/50 bg-muted/20 space-y-3">
          <p className="text-sm font-semibold text-foreground underline underline-offset-4">
            If you are located in the EU or UK, this section applies to you.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The GDPR and UK GDPR require us to explain the valid legal bases we
            rely on in order to process your personal information. We may rely
            on the following:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>
              <strong className="text-foreground">Consent.</strong> We may
              process your information if you have given us permission to use
              your personal information for a specific purpose. You can withdraw
              your consent at any time.
            </li>
            <li>
              <strong className="text-foreground">
                Performance of a Contract.
              </strong>{" "}
              We may process your personal information when necessary to fulfill
              our contractual obligations to you, including providing our
              Services or at your request prior to entering into a contract with
              you.
            </li>
            <li>
              <strong className="text-foreground">Legal Obligations.</strong> We
              may process your information where necessary for compliance with
              our legal obligations, such as to cooperate with a law enforcement
              body or regulatory agency, exercise or defend our legal rights, or
              disclose your information as evidence in litigation in which we
              are involved.
            </li>
            <li>
              <strong className="text-foreground">Vital Interests.</strong> We
              may process your information where necessary to protect your vital
              interests or the vital interests of a third party, such as
              situations involving potential threats to the safety of any
              person.
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-xl border border-border/50 bg-muted/20 space-y-3">
          <p className="text-sm font-semibold text-foreground underline underline-offset-4">
            If you are located in Canada, this section applies to you.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We may process your information if you have given us specific
            permission (express consent) to use your personal information for a
            specific purpose, or in situations where your permission can be
            inferred (implied consent). You can withdraw your consent at any
            time.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            In some exceptional cases, we may be legally permitted under
            applicable law to process your information without your consent,
            including:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              If collection is clearly in the interests of an individual and
              consent cannot be obtained in a timely way
            </li>
            <li>For investigations and fraud detection and prevention</li>
            <li>
              For business transactions provided certain conditions are met
            </li>
            <li>
              If it is contained in a witness statement and the collection is
              necessary to assess, process, or settle an insurance claim
            </li>
            <li>
              For identifying injured, ill, or deceased persons and
              communicating with next of kin
            </li>
            <li>
              If we have reasonable grounds to believe an individual has been,
              is, or may be a victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect collection and use with consent
              would compromise the availability or accuracy of the information
              and collection is reasonable for purposes related to investigating
              a breach of an agreement or contravention of the laws of Canada or
              a province
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant,
              court order, or rules of the court relating to the production of
              records
            </li>
            <li>
              If it was produced by an individual in the course of their
              employment, business, or profession and the collection is
              consistent with the purposes for which the information was
              produced
            </li>
            <li>
              If the collection is solely for journalistic, artistic, or
              literary purposes
            </li>
            <li>
              If the information is publicly available and is specified by the
              regulations
            </li>
            <li>
              We may disclose de-identified information for approved research or
              statistics projects, subject to ethics oversight and
              confidentiality commitments
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section id="whoshare" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          4. When and With Whom Do We Share Your Personal Information?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following third
            parties.
          </em>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We may need to share your personal information in the following
          situations:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Business Transfers.</strong> We
            may share or transfer your information in connection with, or during
            negotiations of, any merger, sale of company assets, financing, or
            acquisition of all or a portion of our business to another company.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="inforetain" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          5. How Long Do We Keep Your Information?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this Privacy Notice
            unless otherwise required by law.
          </em>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements).
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </section>

      {/* Section 6 */}
      <section id="infosafe" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          6. How Do We Keep Your Information Safe?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> We aim to protect your personal
            information through a system of organizational and technical
            security measures.
          </em>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </p>
      </section>

      {/* Section 7 */}
      <section id="infominors" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          7. Do We Collect Information From Minors?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under 18 years of age or the equivalent age as
            specified by law in your jurisdiction.
          </em>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We do not knowingly collect, solicit data from, or market to children
          under 18 years of age, nor do we knowingly sell such personal
          information. By using the Services, you represent that you are at
          least 18 or the equivalent age as specified by law in your
          jurisdiction, or that you are the parent or guardian of such a minor
          and consent to such minor dependent&apos;s use of the Services. If we
          learn that personal information from users less than 18 years of age
          has been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at{" "}
          <a
            href="mailto:thetechbabesinc@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            thetechbabesinc@gmail.com
          </a>
          .
        </p>
      </section>

      {/* Section 8 */}
      <section id="privacyrights" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          8. What Are Your Privacy Rights?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> Depending on your state of residence in
            the US or in some regions, such as the EEA, UK, Switzerland, and
            Canada, you have rights that allow you greater access to and control
            over your personal information.
          </em>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          In some regions (like the EEA, UK, Switzerland, and Canada), you have
          certain rights under applicable data protection laws. These may
          include the right (i) to request access and obtain a copy of your
          personal information, (ii) to request rectification or erasure, (iii)
          to restrict the processing of your personal information, (iv) if
          applicable, to data portability, and (v) not to be subject to
          automated decision-making. In certain circumstances, you may also have
          the right to object to the processing of your personal information.
          You can make such a request by using the contact details provided in
          section 12 below.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We will consider and act upon any request in accordance with
          applicable data protection laws.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your{" "}
          <a
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Member State data protection authority
          </a>{" "}
          or{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            UK data protection authority
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you are located in Switzerland, you may contact the{" "}
          <a
            href="https://www.edoeb.admin.ch/edoeb/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Federal Data Protection and Information Commissioner
          </a>
          .
        </p>
        <div
          className="p-5 rounded-xl border border-border/50 bg-muted/20 space-y-3"
          id="withdrawconsent"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Withdrawing your consent:
            </strong>{" "}
            If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending
            on the applicable law, you have the right to withdraw your consent
            at any time by contacting us using the details in section 12 below.
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal, nor will it affect the processing
            of your personal information conducted in reliance on lawful
            processing grounds other than consent.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Opting out of marketing and promotional communications:
            </strong>{" "}
            You can unsubscribe from our marketing and promotional
            communications at any time by clicking on the unsubscribe link in
            the emails that we send, or by contacting us using the details in
            section 12 below. You will then be removed from the marketing lists.
            However, we may still communicate with you for service-related
            messages necessary for the administration and use of your account.
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you have questions or comments about your privacy rights, you may
          email us at{" "}
          <a
            href="mailto:thetechbabesinc@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            thetechbabesinc@gmail.com
          </a>
          .
        </p>
      </section>

      {/* Section 9 */}
      <section id="DNT" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          9. Controls for Do-Not-Track Features
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&quot;DNT&quot;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. At
          this stage, no uniform technology standard for recognizing and
          implementing DNT signals has been finalized. As such, we do not
          currently respond to DNT browser signals or any other mechanism that
          automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the
          future, we will inform you about that practice in a revised version of
          this Privacy Notice.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          California law requires us to let you know how we respond to web
          browser DNT signals. Because there currently is not an industry or
          legal standard for recognizing or honoring DNT signals, we do not
          respond to them at this time.
        </p>
      </section>

      {/* Section 10 */}
      <section id="uslaws" className="scroll-mt-8 space-y-6">
        <h2 className="font-display font-bold text-2xl">
          10. Do United States Residents Have Specific Privacy Rights?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> If you are a resident of California,
            Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
            Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
            Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may
            have the right to request access to and receive details about the
            personal information we maintain about you.
          </em>
        </p>

        <div className="space-y-3">
          <h3 className="font-display font-semibold text-lg">
            Categories of Personal Information We Collect
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The table below shows the categories of personal information we have
            collected in the past twelve (12) months. For a comprehensive
            inventory of all personal information we process, please refer to
            section 1 above.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border/50 w-2/5">
                    Category
                  </th>
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border/50 w-2/5">
                    Examples
                  </th>
                  <th className="text-center p-3 font-semibold text-foreground border-b border-border/50">
                    Collected
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "A. Identifiers",
                    "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name"
                  ],
                  [
                    "B. Personal information as defined in the California Customer Records statute",
                    "Name, contact information, education, employment, employment history, and financial information"
                  ],
                  [
                    "C. Protected classification characteristics under state or federal law",
                    "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data"
                  ],
                  [
                    "D. Commercial information",
                    "Transaction information, purchase history, financial details, and payment information"
                  ],
                  ["E. Biometric information", "Fingerprints and voiceprints"],
                  [
                    "F. Internet or other similar network activity",
                    "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements"
                  ],
                  ["G. Geolocation data", "Device location"],
                  [
                    "H. Audio, electronic, sensory, or similar information",
                    "Images and audio, video or call recordings created in connection with our business activities"
                  ],
                  [
                    "I. Professional or employment-related information",
                    "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us"
                  ],
                  [
                    "J. Education Information",
                    "Student records and directory information"
                  ],
                  [
                    "K. Inferences drawn from collected personal information",
                    "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics"
                  ],
                  ["L. Sensitive personal Information", ""]
                ].map(([cat, examples], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-transparent" : "bg-muted/20"}
                  >
                    <td className="p-3 text-muted-foreground border-b border-border/30 align-top">
                      {cat}
                    </td>
                    <td className="p-3 text-muted-foreground border-b border-border/30 align-top">
                      {examples}
                    </td>
                    <td className="p-3 text-center text-muted-foreground border-b border-border/30 align-middle font-medium">
                      NO
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of: receiving help
            through our customer support channels; participation in customer
            surveys or contests; and facilitation in the delivery of our
            Services and to respond to your inquiries.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-display font-semibold text-lg">
            Sources of Personal Information
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Learn more about the sources of personal information we collect in{" "}
            <a
              href="#infocollect"
              className="text-primary underline underline-offset-4"
            >
              section 1, &quot;What Information Do We Collect?&quot;
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-semibold text-lg">
            How We Use and Share Personal Information
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Learn more about how we use your personal information in{" "}
            <a
              href="#infouse"
              className="text-primary underline underline-offset-4"
            >
              section 2, &quot;How Do We Process Your Information?&quot;
            </a>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Will your information be shared with anyone else?
            </strong>{" "}
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Learn more in{" "}
            <a
              href="#whoshare"
              className="text-primary underline underline-offset-4"
            >
              section 4, &quot;When and With Whom Do We Share Your Personal
              Information?&quot;
            </a>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We may use your personal information for our own business purposes,
            such as for undertaking internal research for technological
            development and demonstration. This is not considered to be
            &quot;selling&quot; of your personal information.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We have not disclosed, sold, or shared any personal information to
            third parties for a business or commercial purpose in the preceding
            twelve (12) months. We will not sell or share personal information
            in the future belonging to website visitors, users, and other
            consumers.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-semibold text-lg">Your Rights</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You have rights under certain US state data protection laws.
            However, these rights are not absolute, and in certain cases, we may
            decline your request as permitted by law. These rights include:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              <strong className="text-foreground">Right to know</strong> whether
              or not we are processing your personal data
            </li>
            <li>
              <strong className="text-foreground">Right to access</strong> your
              personal data
            </li>
            <li>
              <strong className="text-foreground">Right to correct</strong>{" "}
              inaccuracies in your personal data
            </li>
            <li>
              <strong className="text-foreground">Right to request</strong> the
              deletion of your personal data
            </li>
            <li>
              <strong className="text-foreground">
                Right to obtain a copy
              </strong>{" "}
              of the personal data you previously shared with us
            </li>
            <li>
              <strong className="text-foreground">
                Right to non-discrimination
              </strong>{" "}
              for exercising your rights
            </li>
            <li>
              <strong className="text-foreground">Right to opt out</strong> of
              the processing of your personal data if it is used for targeted
              advertising (or sharing as defined under California&apos;s privacy
              law), the sale of personal data, or profiling in furtherance of
              decisions that produce legal or similarly significant effects
              (&quot;profiling&quot;)
            </li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Depending upon the state where you live, you may also have the
            following rights:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              Right to access the categories of personal data being processed
              (as permitted by applicable law, including the privacy law in
              Minnesota)
            </li>
            <li>
              Right to obtain a list of the categories of third parties to which
              we have disclosed personal data (as permitted by applicable law,
              including the privacy law in California, Delaware, and Maryland)
            </li>
            <li>
              Right to obtain a list of specific third parties to which we have
              disclosed personal data (as permitted by applicable law, including
              the privacy law in Minnesota and Oregon)
            </li>
            <li>
              Right to obtain a list of third parties to which we have sold
              personal data (as permitted by applicable law, including the
              privacy law in Connecticut)
            </li>
            <li>
              Right to review, understand, question, and depending on where you
              live, correct how personal data has been profiled (as permitted by
              applicable law, including the privacy law in Connecticut and
              Minnesota)
            </li>
            <li>
              Right to limit use and disclosure of sensitive personal data (as
              permitted by applicable law, including the privacy law in
              California)
            </li>
            <li>
              Right to opt out of the collection of sensitive data and personal
              data collected through the operation of a voice or facial
              recognition feature (as permitted by applicable law, including the
              privacy law in Florida)
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-semibold text-lg">
            How to Exercise Your Rights
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To exercise these rights, you can contact us by submitting a{" "}
            <a
              href="https://app.termly.io/dsar/d1c2869d-30db-413b-ad60-0df3d3aa8e95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              data subject access request
            </a>
            , by emailing us at{" "}
            <a
              href="mailto:thetechbabesinc@gmail.com"
              className="text-primary underline underline-offset-4"
            >
              thetechbabesinc@gmail.com
            </a>
            , by visiting{" "}
            <a
              href="https://techbabes.dev/contact"
              className="text-primary underline underline-offset-4"
            >
              https://techbabes.dev/contact
            </a>
            , or by referring to the contact details at the bottom of this
            document.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Under certain US state data protection laws, you can designate an
            authorized agent to make a request on your behalf. We may deny a
            request from an authorized agent that does not submit proof that
            they have been validly authorized to act on your behalf in
            accordance with applicable laws.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-semibold text-lg">
            Request Verification
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Upon receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. We will only use personal information provided in
            your request to verify your identity or authority to make the
            request. However, if we cannot verify your identity from the
            information already maintained by us, we may request that you
            provide additional information for the purposes of verifying your
            identity and for security or fraud-prevention purposes.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you submit the request through an authorized agent, we may need
            to collect additional information to verify your identity before
            processing your request and the agent will need to provide a written
            and signed permission from you to submit such request on your
            behalf.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-semibold text-lg">Appeals</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Under certain US state data protection laws, if we decline to take
            action regarding your request, you may appeal our decision by
            emailing us at{" "}
            <a
              href="mailto:thetechbabesinc@gmail.com"
              className="text-primary underline underline-offset-4"
            >
              thetechbabesinc@gmail.com
            </a>
            . We will inform you in writing of any action taken or not taken in
            response to the appeal, including a written explanation of the
            reasons for the decisions. If your appeal is denied, you may submit
            a complaint to your state attorney general.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-semibold text-lg">
            California &quot;Shine The Light&quot; Law
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            California Civil Code Section 1798.83, also known as the &quot;Shine
            The Light&quot; law, permits our users who are California residents
            to request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in section 12 below.
          </p>
        </div>
      </section>

      {/* Section 11 */}
      <section id="policyupdates" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          11. Do We Make Updates to This Notice?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <em>
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </em>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated &quot;Revised&quot; date at
          the top of this Privacy Notice. If we make material changes to this
          Privacy Notice, we may notify you either by prominently posting a
          notice of such changes or by directly sending you a notification. We
          encourage you to review this Privacy Notice frequently to be informed
          of how we are protecting your information.
        </p>
      </section>

      {/* Section 12 */}
      <section id="contact" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          12. How Can You Contact Us About This Notice?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you have questions or comments about this notice, you may email us
          at{" "}
          <a
            href="mailto:thetechbabesinc@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            thetechbabesinc@gmail.com
          </a>{" "}
        </p>
      </section>

      {/* Section 13 */}
      <section id="request" className="scroll-mt-8 space-y-4">
        <h2 className="font-display font-bold text-2xl">
          13. How Can You Review, Update, or Delete the Data We Collect From
          You?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You have the right to request access to the personal information we
          collect from you, details about how we have processed it, correct
          inaccuracies, or delete your personal information. You may also have
          the right to withdraw your consent to our processing of your personal
          information. These rights may be limited in some circumstances by
          applicable law. To request to review, update, or delete your personal
          information, please fill out and submit a{" "}
          <a
            href="https://app.termly.io/dsar/d1c2869d-30db-413b-ad60-0df3d3aa8e95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            data subject access request
          </a>
          .
        </p>
      </section>

      {/* Footer note */}
      <div className="rounded-2xl border border-border/50 bg-muted/30 p-4 text-xs text-muted-foreground">
        This Privacy Policy was created using{" "}
        <a
          href="https://termly.io/products/privacy-policy-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 p-4"
        >
          Termly&apos;s Privacy Policy Generator
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
