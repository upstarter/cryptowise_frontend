import React from "react"
import { Modal } from "antd"

export default class TermsOfServiceComponent extends React.Component {

  render() {
    const { classes, confirmLoading, onCancel, onCreate, wrapClassName, visible } = this.props;

    return (
      <React.Fragment>
        <Modal
          // wrapClassName={wrapClassName}
          // bodyStyle={{background: `${colors.secondaryDark}`, color: '#fff'}}
          visible={visible}
          title="Terms of Service"
          okText="Submit"
          onCancel={onCancel}
          // onOk={onCreate}
          centered={true}
          confirmLoading={confirmLoading}
        >
          <section className="">
            <h1>Terms of Service</h1>

            <h2>Aion Labs, Inc. ("us", "we", or "our") operates the www.cryptowise.ai website (the "Service").</h2>
            <p>
              This terms of service (“agreement”) is a binding contract between you, an
              individual user (“you”), and Aion Labs, Inc. (“we,” “us” or “our”), and governs
              your use of any website that links to these terms, including
              https://www.cryptowise.ai/ (and all related subdomains), and all related mobile
              applications that we make available (each, an “app” and collectively, the
              “apps,” together with the site, the “service”). By accessing or using any part
              of the service (including by downloading any app), you agree that you have read,
              understood and agree to be bound by this agreement. If you do not agree to this
              agreement, then you must not access or use the service (or download any app). If
              you are accessing the service on behalf of a business or corporate entity
              (“organization”), then you hereby represent and warrant that you have the
              authority to bind that organization and your acceptance of this agreement will
              be treated as acceptance by the organization. In that event, “user” (defined in
              section 1.a) and “you” in this agreement will refer to the organization.
            </p>

            <p>
              Material terms: as provided in greater detail in this agreement (and
              without limiting the express language of this agreement), you
              acknowledge the following:

              You consent to the collection, use and disclosure of information
              in accordance with our privacy policy (“privacy policy”);

              The service is provided “as is” without warranties of any kind,
              Aion Labs liability to you in connection with the service is
              limited, and you bear all risks associated with any investments
              made through the service;

              We will resolve disputes arising under this agreement through
              binding arbitration. By accepting this agreement, as provided in
              greater detail in section 9 of this agreement, you and Aion Labs
              are each waiving the right to a trial by jury or to participate in
              a class action.
            </p>
            <h3>1) General terms and conditions.</h3>
            <p>
              a. Description. The service provides users (defined below in this
              section 1.a) with general information about our products and services.
              The platform (defined in section 2.a below) allows individuals acting
              on their own behalf or as the representative of an organization (each
              such individual or organization, an “investor”) to obtain our advice
              about investments in certain cryptocurrencies and to manage the same.
              As used in this agreement, “user” means all users of the service, and
              the "Aion Labs parties” means Aion Labs and all of its affiliated
              entities (CryptoWise included).
            </p>
            <p>
              b. Disclaimers and other terms. To the fullest extent permitted by
              law, and without limiting any other terms in this agreement, the
              following terms apply:
            </p>
            <p>
              Limitations on liability. None of the Aion Labs parties will have any
              liability to you in connection with: (1) any outage or unavailability
              or any security breach of any aspect of the service; or (2) the
              performance of any investment made through the service. You bear all
              risks of using the service, and you should only invest amounts you are
              willing and able to lose. No guarantee. None of the Aion Labs parties
              makes any representations regarding the likelihood or probability that
              any investment made through the service will achieve a particular
              investment outcome or goal. Past performance is not a guarantee of
              future success, and volatility means that returns in any period may be
              far above or below those of previous periods. You may lose all or part
              of any investment made through the service. You further acknowledge
              and agree that none of the Aion Labs parties makes any guarantees or
              other commitments about your ability to access or use the service.
              Information submitted to us; identity checks.
            </p>
            <p>
              1. You are solely responsible for ensuring the accuracy and
              completeness of all information and materials that you provide to us
              in ci. Information submitted to us; identity checks.
            </p>
            <p>          ‍
              2. You are solely responsible for ensuring the accuracy and
              completeness of all information and materials that you provide to us
              in connection with your use of the service, including, without
              limitation, all information and material that you provide to us in
              connection with us checking your background as further described under
              1.b.iii.2 below. You hereby represent and warrant that: (a) all such
              information and materials are true, accurate and complete in all
              respects, comply with all applicable laws, rules and regulations and
              do not violate or infringe any third party rights; and (b) you will
              immediately notify us about, and correct, any inaccuracy in any such
              materials or information. You acknowledge that we will check your
              background and identity as required by applicable laws in connection
              with certain uses of the service. You hereby authorize us to, directly
              or through third parties, make any inquiries and conduct any
              investigation we consider necessary or helpful to verify your identity
              and to take any actions we deem necessary or helpful based on the
              results of such inquiries and investigations. You further authorize
              any and all third parties to whom any such inquiries or investigations
              may be directed to fully respond to such inquiries or investigations.
              You acknowledge and agree that we may, in our sole discretion, deny
              you the right to use the service. None of the Aion Labs parties will
              have any liability to you for any liability or other losses arising
              from any inquiries or investigations arising under this section
              Additional terms. We may require you to agree to additional terms
              and/or policies from time-to-time in connection with your use of the
              service (“additional terms”). Such additional terms may include terms
              that govern your rights in connection with any investments made on
              your behalf through the services, including, without limitation, the
              terms of the investment advisory agreement you must execute with us
              prior to accessing the platform (“investment terms”), as those
              investment terms are not subject to this agreement. Except as
              expressly stated otherwise in additional terms, any additional terms
              are hereby incorporated into and subject to this agreement, and this
              agreement will control in the event of any conflict or inconsistency
              with the additional terms to the extent of the conflict or
              inconsistency; provided, however, that any investment terms are not
              incorporated into this agreement, and if there is any conflict or
              inconsistency between this agreement and any investment terms, then
              the investment terms will control to the extent of the conflict or
              inconsistency.
            </p>
            <p>
              Changes to this agreement. You understand and agree that Aion Labs may
              change this agreement at any time without prior notice. You may read a
              current, effective copy of this agreement at any time by selecting the
              appropriate link on the service. The revised agreement will become
              effective at the time of posting, and your use of the service after
              such time will constitute your acceptance of the revised agreement. If
              any change to this agreement is not acceptable to you, then your sole
              remedy is to stop using the service. Notwithstanding the preceding
              sentences of this section 1.d, no revisions to this agreement will
              apply to any dispute between you and Aion Labs that arose prior to the
              effective date of those revisions. Consideration. Aion Labs currently
              provides you with access to the service for free. In return for
              enjoying this free access, you acknowledge and agree that we may
              generate revenues, increase goodwill or otherwise increase the value
              of Aion Labs from your use of the service, and you will have no right
              to share in any such revenues, goodwill or value whatsoever. However,
              we may in our sole discretion charge you fees for certain uses of the
              service or offer certain financial incentives in connection with
              certain uses of the service, and we will notify you of the same before
              those fees or benefits apply or accrue. Notwithstanding the foregoing,
              we may charge you a fee as set forth in the investment terms Privacy
              policy. Use of the service is also subject to Aion Labs privacy
              policy, which is incorporated into this agreement by reference.
              Jurisdictional issues. Aion Labs makes no representation that materials
              on the service are appropriate, lawful or available for use in any
              locations other than the United States of America. Those who choose to
              access or use the service from locations outside the united states of
              America do so on their own initiative and are responsible for
              compliance with local laws, if and to the extent local laws are
              applicable. Eligibility. The service is not for any users previously
              suspended or blocked from the service by Aion Labs. Furthermore, by
              using the service, you affirm that you are at least 18 years of age
              and otherwise have the legal capacity to contract. Mobile services.
              The service will be accessible via a mobile phone, tablet or other
              wireless device (collectively, “mobile services”). Your mobile
              carrier’s normal messaging, data and other rates and fees will apply
              to your use of the mobile services. In addition, downloading,
              installing or using certain mobile services may be prohibited or
              restricted by your mobile carrier, and not all mobile services may
              work with all carriers or devices. Therefore, you are solely
              responsible for checking with your mobile carrier to determine if the
              mobile services are available for your mobile device(s), what
              restrictions, if any, may be applicable to your use of the mobile
              services, and how much they will cost you. Nevertheless, all use of
              the service and the related mobile services must be in accordance with
              this agreement. Messages. You may be able to send messages to others
              through certain functionality available on the service (“messages”).
              You represent and warrant that: (a) you will only send messages to
              others who have given you their prior express consent to receive them;
              (b) you, and only you, take all actions necessary to initiate and send
              all messages, and we are merely a technology provider that plays no
              active role whatsoever in initiating and/or sending messages; and (c)
              you will indemnify and hold us harmless from any and all claims and
              losses arising out of your messages. Without limiting the foregoing,
              you are solely responsible for all fees and charges associated with
              your messages.
            </p>

            <h2>2) Registration; accounts.</h2>
            <p>
              a. Login credentials. While you may always browse public-facing
              portions of the service without registering with us, in order to
              access the password-protected portion of the service as an investor
              (the “platform”), you must register an account with us (an “account”).
            </p>
            <p>‍
              b. Account security. You are responsible for the security of your
              account, and are fully responsible for all activities that occur
              through the use of your credentials. You agree to notify us
              immediately at accounts@cryptowise.ai if you suspect or know of any
              unauthorized use of your login credentials or any other breach of
              security with respect to your account. We will not be liable for any
              loss or damage arising from unauthorized use of your credentials.
              Separate login credentials may be required to access external sites
              (defined in section 7 below).
            </p>
            <p>
              c. Accuracy of information. When creating an account, you will provide
              true, accurate, current and complete information as we request. You
              will update the information about yourself promptly, and as necessary,
              to keep it current and accurate. We reserve the right to disallow,
              cancel, remove or reassign certain usernames and permalinks in
              appropriate circumstances, as determined by us in our sole discretion,
              and may, with or without prior notice, suspend or terminate your
              account if activities occur on your account which, in our sole
              discretion, would or might constitute a violation of this agreement,
              cause damage to or impair the service, infringe or violate any third
              party rights, damage or bring into disrepute the reputation of Aion
              Labs, or violate any applicable laws or regulations. If messages sent
              to the e-mail address you provide are returned as undeliverable, then
              we may terminate your account immediately without notice to you and
              without any liability to you or any third party.
            </p>
            <h2>3) Intellectual property rights.</h2>
            <p>
              a. License. Subject to your complete and ongoing compliance with this
              agreement, we hereby grant you a revocable, non-exclusive,
              non-transferable, non-sub licensable, royalty-free and worldwide right
              and license to: (i) download, access and use an object code version of
              each app on any device that you own or control; and (ii) access and
              use all other portions of the service, in the case of both (i) and
              (ii), solely for your personal use and solely in strict compliance
              with the provisions of this agreement. Any third-party code that may
              be incorporated into the apps is covered by the applicable open source
              or third party license, if applicable. For a list of the open source
              components included in the apps, please refer to the document located
              here.
            </p>
            <p>‍
              b. Content. The content that Aion Labs provides to you on the service,
              including, without limitation, any text, graphics, software,
              interactive features, information or other materials, is protected by
              copyright or other intellectual property rights and owned by Aion Labs
              or its licensors (collectively, the “Aion Labs content”). Moreover,
              Aion Labs or its licensors own all design rights, database and
              compilation rights and other intellectual property rights in and to
              the service, in each case whether registered or unregistered, and any
              related goodwill.
            </p>
            <p>‍
              c. Marks. The Aion Labs trademarks, service marks and logos
              (collectively, the “Aion Labs trademarks”) used and displayed on the
              service are Aion Labs' registered and/or unregistered trademarks or
              service marks. Any other product and service names located on any part
              of the service may be trademarks or service marks owned by third
              parties (collectively with the Aion Labs trademarks, the “trademarks”).
              You may not use the trademarks to disparage Aion Labs or the applicable
              third party, Aion Labs' or a third party’s products or services, or in
              any manner (using commercially reasonable judgment) that may damage
              any goodwill in the trademarks. You may not use any trademarks as part
              of a link to or from any website without Aion Labs' prior express
              written consent. All goodwill generated from the use of any Aion Labs
              trademark will inure solely to Aion Labs benefit.
            </p>
            <p>     ‍
              d. Restrictions. Aion Labs hereby reserves all rights not expressly
              granted to you in this section 3. Accordingly, nothing in this
              agreement or on the service will be construed as granting to you, by
              implication, estoppel or otherwise, any additional license rights in
              and to the service or any Aion Labs content or trademarks located or
              displayed on or within the service
            </p>

            <h2>4) Content.</h2>
            <p>
              a. General. Certain features on the service may allow you to submit or
              upload (collectively, “submit”) content to the service, such as user
              profile content or other materials subject to intellectual property or
              similar laws (“user content”). For all user content that you submit to
              the service, you hereby grant us (and those we work with) a worldwide
              license to use, exploit, host, store, transmit, reproduce, modify,
              create derivative works of (such as those resulting from changes we
              make so that your user content works better with our service),
              publish, publicly perform and display and distribute such content;
              provided that we will not share with other users any user content that
              you submit to the service that is not viewable by other users based on
              any privacy settings available on the service. The rights you grant in
              this section are for the purpose of operating, promoting, and
              improving our service and business and this license continues even if
              you stop using our service.
            </p>
            <p>‍
              b. You must have rights to the content you submit. You represent and
              warrant that: (i) you own the user content submitted by you or
              otherwise have the right to grant the license set forth in this
              agreement; (ii) the submission of your user content and the use of the
              same as contemplated in this agreement does not and will not violate
              any right of any third party; (iii) the submission of your user
              content will not require us to pay any amounts or provide any
              attribution to any third parties; and (iv) the submission of your user
              content does not result in a breach of contract between you and a
              third party.
            </p>
            <p>
              c. Disclaimer. We are under no obligation to edit or control user
              content that you submit, and will not be in any way responsible or
              liable for user content. Aion Labs may, however, at any time and
              without prior notice, screen, remove, edit or block any user content
              that in our sole judgment violates this agreement or is otherwise
              objectionable, such as, without limitation, user content that Aion Labs
              determines is or could be interpreted to be abusive, bigoted,
              defamatory, harassing, harmful, infringing, obscene, offensive,
              pornographic, racist, threatening, unlawful, vulgar or otherwise
              inappropriate (collectively, “objectionable content”). Further, we
              may, in our sole discretion, take any action we deem necessary and/or
              appropriate against any user who submits objectionable content,
              including, but not limited to, warning the user or suspending or
              terminating the user’s account.
            </p>
              <h2>5) Notice and procedure for making claims of intellectual property infringements.</h2>
            <p>
              a. Respect of third party rights. We comply with the provisions of the
              digital millennium copyright act applicable to internet service
              providers (17 U.S.c. § 512, as amended). If you have an intellectual
              property rights-related complaint about material appearing on the
              service, then you may contact our designated agent at the following
              address: Aion Labs, Inc.
            </p>
            <p>
              Attn: legal department (copyright notification)
              754 The Alameda #2316
              San Jose, CA 95126
              email: admin@cryptowise.ai
            </p>
            <p>
              b.  Any notice alleging that materials hosted by or distributed
              through the service infringe intellectual property rights
              (“notification of claimed infringement”) must include the following
              information:
            </p>
            <p>
              An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other right being infringed;
              A description of the copyrighted work or other intellectual property that you claim has been infringed;
              A description of the material that you claim is infringing and where it is located on the service;
              Your address, telephone number and email address;
              A statement by you that you have a good faith belief that the use of the
              materials on the service of which you are complaining is not authorized by the
              copyright owner, its agent or the law;
            </p>
            <p>
              A statement by you that the above information in your notice is
              accurate and that, under penalty of perjury, you are the copyright or
              intellectual property owner or authorized to act on the copyright or
              intellectual property owner’s behalf.
            </p>
            <p>
              c. Repeat infringer policy. Aion Lab’s intellectual property policy is
              to: (i) remove or disable access to material that Aion Labs believes
              in good faith, upon notice from an intellectual property owner or his
              or her agent, is infringing the intellectual property of a third party
              by being made available through the service; (ii) remove any user
              content submitted by users who are determined to be “repeat
              infringers”; and (iii) promptly terminate the accounts of repeat
              infringers. Aion Labs currently considers a “repeat infringer” to be
              any user that has submitted user content and for whom Aion Labs has
              received more than two takedown notices compliant with the provisions
              of 17 U.S.c. § 512 with respect to such user content. Aion Labs has
              discretion, however, to terminate the account of any user after
              receipt of a single notification of claimed infringement (as defined
              in section 5.a) or upon Aion Labs own determination.
              6) Restrictions on use of the service.
            </p>
            <p>

              a. Without limiting any other terms of this agreement, you agree not to (and not to attempt to):

              Decipher, decompile, disassemble or reverse engineer any of the software or source code comprising or making up the service, except to the extent any such restrictions are expressly prohibited by applicable law;
              Rent, lease, loan, resell, sublicense, distribute or otherwise transfer any part of the service or content thereon to any third party or use any part of the service for the benefit of any third party;
              Use any device, software or routine to interfere or attempt to interfere with the proper working of the service, or any activity conducted thereon;
              Delete, make unauthorized copies of, or alter any material Aion Labs makes available on the service;
              Frame or link to any of the materials or information available on the service;
              Use or exploit any trademarks or Aion Labs content in any manner that is not expressly authorized by this agreement;
              Access, tamper with or use non-public areas of the service, Aion Labs (and its hosting company’s) computer systems and infrastructure or the technical delivery systems of Aion Labs providers;
              Provide any false information to Aion Labs;
              Create a false identity or impersonate another person or entity in any way;
              Restrict, discourage or inhibit any person from using the service;
              Use the service, without Aion Labs prior express written consent, for any unauthorized purpose;
              Gain unauthorized access to the service, other users’ accounts or to other computers or websites connected or linked to the service;
              Use the service, without Aion Labs prior express written consent, for any unauthorized purpose;
              Transmit to the service any virus, worm, spyware or any other computer code,
              file or program that may or is intended to disable, overburden, impair, damage
              or hijack the operation of any hardware, software or telecommunications
              equipment, or any other aspect of the service or communications equipment and
              computers connected thereto;
              Violate any federal, state or local laws or regulations or the terms of this agreement;
              Assist or permit any person in engaging in any of the activities described above;
            </p>

            <h2>7) External sites.</h2>
            <p>

              The service may contain links to other websites or other online
              properties that are not owned or controlled by Aion Labs (collectively,
              “external sites”). Aion Labs does not make any representations
              regarding the content or accuracy of any materials on external sites.
              You should contact the site administrator or Webmaster for external
              sites if you have any concerns regarding content located on those
              external sites. If you decide to access any external sites, then you
              do so at your own risk. Further, you will be solely responsible for
              compliance with any terms of service or similar terms imposed by any
              external service in connection with your use of external sites.
              8) Feedback.
            </p>
            <p>
              If you choose to provide us with input or suggestions regarding
              problems with or proposed modifications or improvements to the service
              (“feedback”), then you hereby grant to us a non-exclusive, perpetual,
              irrevocable, transferable, sub licensable (through multiple tiers),
              worldwide and royalty-free right to use and exploit the feedback in
              any manner and for any purpose without any restriction, credit,
              attribution or fees due to you.
            </p>

          <h2>9) Dispute resolution.</h2>
          <p>

              a. General. In the interest of resolving disputes between you and Aion
              Labs in the most expedient and cost effective manner, you and Aion
              Labs agree that any dispute arising out of or in any way related to
              this agreement or your use of the service will be resolved by binding
              arbitration. Arbitration is less formal than a lawsuit in court.
              Arbitration uses a neutral arbitrator instead of a judge or jury, may
              allow for more limited discovery than in court, and can be subject to
              very limited review by courts. Arbitrators can award the same damages
              and relief that a court can award. This agreement to arbitrate
              disputes includes all claims arising out of or in any way related to
              this agreement or your use of the service, whether based in contract,
              tort, statute, fraud, misrepresentation or any other legal theory, and
              regardless of whether a claim arises during or after the termination
              of this agreement. You understand and agree that, by entering into
              this agreement, you and Aion Labs are each waiving the right to a
              trial by jury or to participate in a class action and that this
              agreement shall be subject to and governed by the federal arbitration
              act. ‍
          </p>
          <p>

            b. Exceptions. Notwithstanding section 9.a above, nothing in this
            agreement will be deemed to waive, preclude or otherwise limit the
            right of either party to: (i) bring an individual action in small
            claims court; (ii) pursue an enforcement action through the applicable
            federal, state or local agency if that action is available; (iii) seek
            injunctive relief in aid of arbitration from a court of competent
            jurisdiction; or (iv) to file suit in a court of law to address an
            intellectual property infringement claim.
          </p>
          <p>
              ‍
              c. Arbitrator. Any arbitration between you and Aion Labs will be
              governed by the federal arbitration act and the commercial dispute
              resolution procedures and supplementary procedures for consumer
              related disputes (collectively, “AAA rules”) of the American
              arbitration association (“AAA”), as modified by this agreement, and
              will be administered by the AAA. The AAA rules and filing forms are
              available online at www.adr.org, by calling the AAA at 1-800-778-7879
              or by contacting Aion Labs. The arbitrator has exclusive authority to
              resolve any dispute relating to the interpretation, applicability or
              enforceability of this binding arbitration agreement.
            </p>
            <p>
               ‍
              d. Notice; process. A party who intends to seek arbitration must first
              send a written notice of the dispute to the other party by U.S. mail
              (“notice”). Aion Labs address for notice is: 399 Fremont St., San
              Francisco, CA 94105 or by email at legal@snowball.money, Attn: Chief
              Executive Officer. The notice must: (i) describe the nature and basis
              of the claim or dispute; and (ii) set forth the specific relief sought
              (“demand”). The parties will make good faith efforts to resolve the
              claim directly, but if the parties do not reach an agreement to do so
              within 30 days after the notice is received, then you or Aion Labs may
              commence an arbitration proceeding. During the arbitration, the amount
              of any settlement offer made by you or Aion Labs must not be disclosed
              to the arbitrator until after the arbitrator makes a final decision
              and award, if any. If the dispute is finally resolved through
              arbitration in your favor with a monetary award that exceeds the last
              written settlement amount offered by Aion Labs prior to selection of
              an arbitrator, then Aion Labs will pay you the highest of the
              following: (1) the amount awarded by the arbitrator, if any; (2) the
              last written settlement amount offered by Aion Labs in settlement of
              the dispute prior to the arbitrator’s award; or (3) $15,000.
            </p>
            <p>
                       ‍
              e. Fees. If you commence arbitration in accordance with this
              agreement, then Aion Labs will reimburse you for your payment of the
              filing fee, unless your claim is for more than $15,000 or as set forth
              below, in which case the payment of any fees will be decided by the
              AAA rules. Any arbitration hearing will take place at a location to be
              agreed upon in San Francisco county, California, but if the claim is
              for $15,000 or less, then you may choose whether the arbitration will
              be conducted: (i) solely on the basis of documents submitted to the
              arbitrator; (ii) through a non-appearance based telephone hearing; or
              (iii) by an in-person hearing as established by the AAA rules in the
              county (or parish) of your billing address. If the arbitrator finds
              that either the substance of your claim or the relief sought in the
              demand is frivolous or brought for an improper purpose (as measured by
              the standards set forth in federal rule of civil procedure 11(b)),
              then the payment of all fees will be governed by the AAA rules. In
              that case, you agree to reimburse Aion Labs for all monies previously
              disbursed by it that are otherwise your obligation to pay under the
              AAA rules. Regardless of the manner in which the arbitration is
              conducted, the arbitrator must issue a reasoned written decision
              sufficient to explain the essential findings and conclusions on which
              the decision and award, if any, are based. Each party agrees that such
              written decision, and information exchanged during arbitration, will
              be kept confidential except to the extent necessary to enforce or
              permit limited judicial review of the award. The arbitrator may make
              rulings and resolve disputes as to the payment and reimbursement of
              fees or expenses at any time during the proceeding and upon request
              from either party made within 14 days of the arbitrator’s ruling on
              the merits. Notwithstanding anything in this agreement to the
              contrary, and for the avoidance of doubt, the arbitrator can award
              injunctive relief as a remedy in any arbitration required under these
              dispute resolution provisions.
            </p>
            <p>
              ‍
              f. No class actions. You and Aion Labs agree that each may bring
              claims against the other only in your or its individual capacity and
              not as a plaintiff or class member in any purported class or
              representative proceeding. Further, unless both you and Aion Labs
              agree otherwise, the arbitrator may not consolidate more than one
              person’s claims, and may not otherwise preside over any form of a
              representative or class proceeding.   ‍
            </p>
            <p>

              g. Modifications to this arbitration provision. Except as otherwise
              provided in this agreement, if Aion Labs makes any future change to
              this arbitration provision, other than a change to Aion Labs address
              for notice, then you may reject the change by sending us written
              notice within 30 days of the change to Aion Labs address for notice,
              in which case this arbitration provision, as in effect immediately
              prior to the changes you rejected, will continue to govern any
              disputes between you and Aion Labs.
            </p>
            <p>
              ‍
              h. Enforceability. If section 9.f above is found to be unenforceable
              or if the entirety of this section 9 is found to be unenforceable,
              then the entirety of this section 9 will be null and void.
            </p>
            <p>

              10) Limitation of liability and disclaimer of warranties. The terms of
              this section 10 apply to the fullest extent permitted by law:
            </p>
            <p>

              a. None of the Aion Labs parties makes any warranties or
              representations about the service or any content thereon. Accordingly,
              the service and all content thereon are provided on an “as is” and “as
              available” basis without any warranties of any kind, and the Aion Labs
              parties hereby disclaim all warranties, including, but not limited to,
              the warranties of title, merchantability, non-infringement of third
              party rights and fitness for a particular purpose.
            </p>
            <p>
                         ‍
              b. Without limiting section 10.a, the Aion Labs parties do not warrant that
              the service and any content thereon are free of errors, computer viruses or
              similar contamination or destructive features. If your use of the service or
              any content thereon results in the need for servicing or replacing equipment
              or data, then no Aion Labs party will be responsible for those costs.
            </p>
            <p>
              ‍
              c. In no event will any Aion Labs party be liable for any special,
              indirect, punitive, incidental or consequential damages, lost profits
              or damages resulting from lost data or business interruption resulting
              from, or in connection with, the service and any content thereon,
              whether based on warranty, contract, tort (including negligence) or
              any other legal theory, even if the Aion Labs party has been advised
              of the possibility of such damages. Aion Labs liability, and the
              liability of any of the other Aion Labs parties, to you or any third
              parties in any circumstance arising from this agreement is limited to
              U.S. $100.
            </p>
            <p>


              d. There may be inadvertent technical or factual inaccuracies and typographical
              errors in information or materials on the service, and none of the Aion Labs
              parties makes any warranties regarding the accuracy, completeness or timeliness
              of such information or materials. None of the Aion Labs parties provides any
              guarantees against the possibility of deletion, mis-delivery or failure to store
              communications, personalized settings, or other data. The Aion Labs parties
              hereby expressly disclaim all liability for errors or omissions in, or the
              misuse or misinterpretation of, any information or materials contained on the
              service.
            </p>
            <p>
              ‍
              e. No advice or information, whether oral or written, obtained by you
              from any of the Aion Labs parties or otherwise through the service,
              will create any warranty.
            </p>
            <p>
                       ‍
              f. Notwithstanding the foregoing, nothing contained in this agreement
              or any other document shall constitute a waiver by a client of any of
              his, her or its legal rights under applicable U.S. federal securities
              laws or any other laws whose applicability is not permitted to be
              contractually waived.
            </p>

              <h2>11) Third party disputes.</h2>
              <p>

              Any dispute you have with any third party, including other users
              and/or the issuers of cryptocurrencies, in connection with your use of
              the service is directly between you and such third party. Accordingly,
              to the fullest extent permitted by law, you hereby irrevocably release
              the Aion Labs parties from any and all claims, demands and damages
              (actual and consequential) of every kind and nature, known and
              unknown, arising out of or in any way connected with such disputes.
            </p>

              <h2>12) Indemnification.</h2>
              <p>

              To the fullest extent permitted by law, you agree to defend, indemnify and
              hold harmless the Aion Labs parties from and against any claims, actions
              or demands, including, without limitation, reasonable legal and accounting
              fees, arising or resulting from: (a) your breach of this agreement; (b)
              your access to, use or misuse of the Aion Labs content, trademarks or any
              part of the service; or (c) any false, inaccurate or misleading
              information you provide to Aion Labs. Aion Labs will provide notice to you
              of any such claim, suit or proceeding. Aion Labs reserves the right, in
              its sole discretion, to assume the exclusive defense and control of any
              matter which is subject to indemnification under this section at your sole
              expense if Aion Labs believes that you are unwilling or incapable of
              defending Aion Labs interests. In such case, you agree to cooperate with
              any reasonable requests assisting Aion Labs defense of such matter at your
              sole expense. Notwithstanding the foregoing, nothing contained in this
              agreement shall constitute a waiver by any investor of any legal rights
              under applicable U.S. federal securities laws or any other laws whose
              applicability is not permitted to be contractually waived.
            </p>

              <h2>13) Term and termination of the agreement.</h2>
              <p>

              a. Term. As between you and Aion Labs, the term of this agreement
              commences on your first use of the service and continues until the
              termination of this agreement by either you or Aion Labs.
            </p>
            <p>
              ‍
              b. Suspension, termination and cancellation. You may terminate this agreement
              by sending written notification to us at accounts@snowball.money and
              terminating your use of the service. We reserve the right, in our sole
              discretion, to restrict, suspend, or terminate your access to all or any part
              of the service or to terminate this agreement at any time without prior notice
              or liability if you breach any provision of this agreement or violate the
              rights of any third party on or through the service. We reserve the right to
              change, suspend, or discontinue all or any part of the service at any time
              without prior notice or liability.
            </p>
            <p>
              ‍
              c. Survival. Sections 1.b, 1.c, 1.d, 1.e, 1.g, 1.h, 1.i, 1.j, 2.b, 2.c, 3.b,
              3.c, 3.d, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13.c, 14, 15, 17 and all defined terms
              used therein will survive the termination of this agreement indefinitely.
            </p>

              <h2>14) Consent to electronic communications.</h2>
              <p>

              By using the service, you consent to receiving certain electronic
              communications from us as further described in the privacy policy and
              any onboarding documentation that you may submit when registering for
              the platform. You agree that any notices, agreements, disclosures or
              other communications that we send to you electronically will satisfy
              any legal communication requirements, including that such
              communications be in writing.
            </p>

              <h2>15) Miscellaneous.</h2>
              <p>

              This agreement is governed by the internal substantive laws of the
              state of California without respect to its conflict of laws
              provisions. You agree that no joint venture, partnership, employment
              or agency relationship exists between you and Aion Labs as a result of
              this agreement or use of the service. If any provision of this
              agreement is found to be invalid by any court or arbitrator having
              competent jurisdiction, then the invalidity of such provision will not
              affect the validity of the remaining provisions of this agreement,
              which will remain in full force and effect. Failure of Aion Labs to
              act on or enforce any provision of this agreement will not be
              construed as a waiver of that provision or any other provision in this
              agreement. No waiver will be effective against Aion Labs unless made
              in writing, and no such waiver will be construed as a waiver in any
              other or subsequent instance. This agreement constitutes the entire
              agreement between you and Aion Labs with respect to the subject matter
              hereof, and supersedes all previous or contemporaneous agreements,
              whether written or oral, between the parties with respect to the
              subject matter hereof. The section headings are provided merely for
              convenience and will not be given any legal import. This agreement
              will inure to the benefit of our successors and assigns. You may not
              assign this agreement or any of the rights or licenses granted
              hereunder without the prior express written consent of Aion Labs.
              “Assignment” as used in the prior sentence includes any changes of
              control or sale of stock or assets of any organization. Aion Labs may
              assign this agreement, including all its rights hereunder, without
              restriction. This agreement may only be amended in a writing signed by
              you and an authorized representative of Aion Labs, except as provided
              in section 1.d. You acknowledge and agree that you have had the
              opportunity to consult legal counsel in connection with this agreement
              even if you chose not to do so, and this agreement will not be
              construed against you or Aion Labs as drafter.
            </p>

            <h2>  16) Contact Us.</h2>
            <p>

              If you would like to contact us for any reason email us at admin@cryptowise.ai.
            </p>

              <h2>17) Notice regarding apple.</h2>
              <p>

              You acknowledge that this agreement is between you and Aion Labs only,
              not with apple, and apple is not responsible for the apps or the
              content thereof. Apple has no obligation whatsoever to furnish any
              maintenance and support services with respect to the apps. In the
              event of any failure of any app to conform to any applicable warranty,
              then you may notify apple and apple will refund the purchase price for
              the relevant app to you; and, to the maximum extent permitted by
              applicable law, apple has no other warranty obligation whatsoever with
              respect to the apps. Apple is not responsible for addressing any
              claims by you or any third party relating to the apps or your
              possession and/or use of the apps, including, but not limited to: (a)
              product liability claims; (b) any claim that an app fails to conform
              to any applicable legal or regulatory requirement; and (c) claims
              arising under consumer protection or similar legislation. Apple is not
              responsible for the investigation, defense, settlement and discharge
              of any third party claim that an app or your possession and use of
              such app infringes that third party’s intellectual property rights.
              You agree to comply with any applicable third party terms, when using
              the apps. Apple, and apple’s subsidiaries, are third party
              beneficiaries of this agreement, and upon your acceptance of this
              agreement, apple will have the right (and will be deemed to have
              accepted the right) to enforce this agreement against you as a third
              party beneficiary of this agreement. You hereby represent and warrant
              that: (i) you are not located in a country that is subject to a U.S.
              government embargo, or that has been designated by the U.S. government
              as a “terrorist supporting” country; and (ii) you are not listed on
              any U.S. government list of prohibited or restricted parties. If we
              provide a translation of the English language version of this
              agreement, then the translation is provided solely for convenience,
              and the English version will prevail.
            </p>

              <h3>Questions</h3>
              <p>If you have any questions on the terms of service, please contact us at:</p>
              <p>
              
              Aion Labs Inc.
              754 The Alameda #2316
              San Jose, CA 95126
              admin@cryptowise.ai
            ‍</p>
            <p>Effective date: July 24, 2018</p>


            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <ul>
              <li>By email: eric@cryptowise.ai</li>
            </ul>
          </section>
      </Modal>
    </React.Fragment>

    )
  }
}
