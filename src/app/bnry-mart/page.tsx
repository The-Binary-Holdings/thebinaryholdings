// bnryMartFaq.tsx

import GradientText from '@/components/GradientText'
import React from 'react'

const bnryMartFaq: React.FC = () => {
  return (
    <div className="container px-2 py-20 md:px-6 text-justify">
      <div className="mx-auto lg:w-4/5">
        {/* What is BNRYMart? */}
        <div>
          <h2 className="pt-8 text-center text-4xl font-semibold text-green">
            What is BNRYMart?
          </h2>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Overview of BNRYMart
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              BNRYMart is a dynamic e-commerce store integrated into our
              comprehensive super app, providing a seamless shopping experience
              to users who have engaged with various features of the app. As
              part of this integrated platform, BNRYMart offers a diverse range
              of products, enhancing the value and convenience of the super app.
              BNRYMart is owned and operated by The Binary Holdings, a company
              registered under the laws of Kingdom of Thailand.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Product Range
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              BNRYMart boasts an extensive collection of over 1,000 products
              spanning across multiple distinct categories, including:
            </p>
            <ol className="mt-2 indent-6 text-base text-white/75 xl:indent-20">
              <li>
                <b>1. Electronics and Gadgets</b>: Discover the latest in
                technology, from smartphones and tablets to smart home devices
                and accessories.
              </li>
              <li>
                <b>2. Entertainment</b>: Find top-rated books, movies, music,
                and gaming gear to enrich your leisure time.
              </li>
              <li>
                <b>3. Health and Beauty</b>: Access a wide selection of personal
                care items, skincare products, and wellness essentials.
              </li>
              <li>
                <b>4. Home and Living</b>: Explore items for home improvement,
                decor, and everyday household needs.
              </li>
              <li>
                <b>5. Sports</b>: Shop for sports equipment, activewear, and
                accessories to support your fitness goals.
              </li>
              <li>
                <b>6. Travel</b>: Prepare for your next adventure with travel
                gear, luggage, and accessories.
              </li>
              <li>
                <b>7. Kids</b>: Browse toys, educational materials, and apparel
                designed for children of all ages.
              </li>
              <li>
                <b>8. Parents</b>: Find products catering to the needs of
                parents, including baby care essentials and parenting aids.
              </li>
              <li>
                <b>9. Jewellery and Watches</b>: Choose from a stylish range of
                jewellery and timepieces to complement your look.
              </li>
            </ol>
          </div>
        </div>

        {/* $BNRY Redemption */}
        <div className="mt-10">
          <h2 className="pt-8 text-center text-4xl font-semibold text-green">
            $BNRY Redemption
          </h2>
          <div>
            <p className="mt-8 indent-6 text-white/75 xl:indent-10">
              One of the unique features of BNRYMart is the ability for users to
              redeem exciting products in exchange for Loyalty Points or $BNRY.
              $BNRY are earned through active engagement within the app, such as
              completing activities, making purchases, or participating in
              promotions.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Earning Loyalty Points
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              BNRYMart boasts an extensive collection of over 1,000 products
              spanning across multiple distinct categories, including:Users
              accumulate $BNRYs by interacting with various aspects of the app.
              $BNRYs can be earned through activities like app usage, consuming
              content, engaging with content, participating in challenges, and
              more.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Redeeming $BNRYs:
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              Users can redeem their accumulated $BNRY for products available in
              BNRYMart. The redemption process is designed to be user-friendly,
              allowing customers to select their desired products and use their
              $BNRY to complete the transaction.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Seamless Integration and User Experience
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              BNRYMart is fully integrated into the super app, providing a
              cohesive experience that leverages the app&apos;s functionality.
              Users can easily switch between different features of the app and
              BNRYMart, ensuring a streamlined and enjoyable shopping
              experience. Notifications and updates related to $BNRY
              accumulation and product availability are seamlessly integrated,
              keeping users informed and engaged.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Customer Support and Service
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              The integration of BNRYMart into the super app also means that
              customer support and service are centralised. Users can access
              support for any issues related to product queries, loyalty
              points/$BNRY, or order processing through the super app&apos;s
              customer service channels. This centralization ensures that
              assistance is readily available and efficiently managed.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              Users can correspond with the BNRYMart team via the following
              email address:{' '}
              <a
                href="mailto:BNRYMart@thebinaryholdings.com"
                className="font-medium underline"
              >
                BNRYMart@thebinaryholdings.com
              </a>
            </p>
          </div>
        </div>

        {/* Fulfilment Cycle for Loyalty Points/$BNRY with Loyalty Points Redemption */}
        <div className="mt-10">
          <h2 className="pt-8 text-center text-4xl font-semibold text-green">
            Fulfilment Cycle for Loyalty Points/$BNRY{' '}
            <br className="hidden md:block" /> with Loyalty Points Redemption
          </h2>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Customer Request Initiation
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              Order Placement: The fulfilment cycle begins when a customer
              decides to redeem $BNRY for an exciting product from BNRYMart.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              The customer enters into the TBH hub platform and navigates to the
              redemption section. Here, they select the product they wish to
              redeem in exchange for Loyalty Points/$BNRY and then they complete
              a form that includes necessary details such as shipping address,
              contact information.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              Form Submission: Once the customer fills out and submits the form,
              the system generates a confirmation message indicating that the
              redemption request has been received. An email is sent to the
              customer to confirm the receipt of their request and provide an
              estimated timeline for further updates.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Request Confirmation and Order Processing
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              <b className="font-bold">1. Acknowledgement</b>: After receiving
              the redemption request, the company&apos;s system processes the
              request and verifies the customer&apos;s $BNRY balance. The system
              checks the availability of the selected product with the regional
              partner and confirms whether the product can be fulfilled.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              <b className="font-bold">2. Notification</b>: The customer
              receives an update via email once the order is confirmed, the
              company sends the tracking link as shared by our regional partner.
            </p>
            <div className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              <b className="font-bold">3. Order Fulfilment and Updates</b>
              <ul className="flex flex-col justify-around gap-2 md:indent-10 lg:indent-16">
                <li>
                  <b>a. Order Progress</b>
                  <p className="indent-0 md:ml-10 lg:ml-20">
                    Throughout the order fulfilment process, the customer is
                    kept informed about the status of their order. Automated
                    notifications are sent at key stages, such as when the order
                    is being processed, when it is dispatched from the drop
                    shipper, and when it is out for delivery. The customer can
                    typically track the order through a tracking link provided
                    in these notifications.
                  </p>
                </li>
                <li>
                  <b>b. Tracking Information</b>
                  <p className="indent-0 md:ml-10 lg:ml-20">
                    Customers can access real-time tracking information via the
                    link shared with them through email, if such a link is
                    provided to us by our partners.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Delivery Terms and Product Quality
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              <b>1. Delivery Terms</b>: Delivery terms are subject to our local
              partner&apos;s policies and may vary based on the location of the
              customer and the partner&apos;s shipping capabilities. The
              estimated delivery times are provided at the point of redemption,
              but final delivery times are influenced by the partner&apos;s
              processing and shipping schedules.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              <b>2. Product Quality</b>: The quality of the product is ensured
              by the partner, who is responsible for manufacturing, packaging,
              and shipping the product. TBH selects partners with a reputation
              for high-quality products, but from time to time issues may arise.
              Any issues with product quality should be addressed directly with
              the partner.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              <b>3. Service Boundaries/Service Limitations</b>: Our partners
              work within specific service boundaries, which include limitations
              on product availability, shipping regions, and return policies.
              Customers are advised of these boundaries at the time of
              redemption to ensure they have realistic expectations regarding
              product delivery and service.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              <b>4. Customer Support:</b>: For any issues related to order
              fulfilment, product quality, or service boundaries, customers
              should contact our partner&apos;s customer support team, details
              for which will be furnished in the email communication/s with the
              customer. TBH facilitates communication with our regional partners
              but is not responsible for the actual production or shipping
              process.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Other T&Cs
            </GradientText>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              1. TBH&apos;s team shall share the tracking number and tracking
              link with the user to check on the status of the delivery of the
              product. User is expected to track the delivery of his product.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              2. All communication on the status of the product delivery is
              communicated with the user via the email on record. Alternatively,
              the user can himself/herself track the position of his delivery
              via the tracking link provided by TBH.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              3. TBH holds no responsibility for the correctness of the email as
              provided by the User at the time of redemption of the reward. TBH
              expects the user to check the details in the form before
              proceeding with the redemption.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              4. Product performance, service, warranty, guarantee is not
              managed by TBH and is to be taken up by the user directly with the
              merchant/partner. User is redeeming the product based on the
              partner&apos;s terms and conditions and it is the responsibility
              of the user to carefully review the product and terms and
              conditions.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              5. Should the product be of a compromised quality/performance, and
              if the user returns the product, then the associated Quantity of
              the $BNRYs will be refunded on the condition that the respective
              merchant/partner/vendor accepts the return of the item. If the
              partner/merchant/vendor does not accept the return of the item,
              the user will not be provided with a refund.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              6. The order is fulfilled via BNRYMart&apos;s partners depending
              on the availability of the stock, and serviceability of the
              user&apos;s location by the partner. If the order cannot be
              fulfilled by TBH &apos;s partner due to any/both of the above
              reasons then the appropriate Quantity of the $BNRYs will be
              deposited back to the user&apos;s wallet and the user will be
              informed.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              7. Any/all items to be delivered at your location will depend on
              the stocks available with the local delivery partner in your
              region.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              8. Return/Refund policy shall follow the associated vendor, and
              delivery partner&apos;s policy in your region.
            </p>
            <p className="mt-2 indent-6 text-base text-white/75 xl:indent-10">
              9. TBH reserves the rights to change/modify the redemption value
              of the items at any time without notice.
            </p>
            <p className="mt-4 text-base text-white/75">
              By following this fulfilment cycle, TBH ensures a smooth and
              transparent process for customers redeeming $BNRY for products
              listed in BNRYMart, while clearly communicating the terms and
              boundaries associated with the service.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Legal Terms and Disclosures:
            </GradientText>
            <p className="mt-4 text-base text-white/75">
              TBH and BNRYMart are providing the platform to Redeem $BNRY and
              facilitating the transaction and are not the merchant of record.
              The actual merchant of record is our regional partners and their
              suppliers, depending upon applicable law. To the maximum extent
              permitted by law, TBH shall not be liable for any Loss (including
              loss of profits or indirect, consequential, incidental, special,
              exemplary or punitive loss or damage), howsoever caused (including
              through our negligence), suffered or incurred by user or that uses
              BNRYMart arising from or in connection with: (a) access to, or use
              of, the BNRYMart, any materials, or any linked site or app; (b)
              any decision or action taken by user in reliance on any materials
              available on BNRYMart; (c) any error or defect in the BNRYMart; or
              (d) any order for items via BNRYMart. Please note that TBH
              partners are responsible for any quality, service, delivery and
              support issues. TBH disclaims any responsibility and liability for
              partners and EXPRESSLY DISCLAIMS ANY EXPRESS OR IMPLIED
              WARRANTIES, WARRANTY OF FITNESS OF PURPOSE, WARRANTY OF
              MERCHANTABILITY OR ANY OTHER WARRANTIES THAT MAY BE AVAILABLE
              UNDER THE APPLICABLE LAW. The user shall not use BNRYMart for any
              illegal, immoral, fraudulent or any activity that is against TBH
              policies and TBH retains the full right to take appropriate legal
              action against the user in the event TBH in it’s sole discretion
              determines that user has undertaken any of the activities that are
              prohibited. Users and technical measures created by users, such as
              bots, are prohibited from scraping, copying or otherwise making
              use of any materials on the BNRYMart without TBH written
              permission. BNRYMart is intended for personal use and any
              commercial uses are prohibited. Users may be responsible for
              additional charges such as customs, excise, shipping or other
              charges as advised by the partner at the time of redemption. The
              total maximum liability of BNRYMart and TBH is limited to 100 TBH
              for any or all causes of actions. The laws of The KIngdom of
              Thailand apply and the courts of the Kingdom of Thailand shall
              have the exclusive jurisdiction over any disputes. TBH has the
              right to amend these T&Cs at any time without notice. Your
              continued use of the BNRYMart is your acceptance of the new T&Cs.
            </p>
          </div>
          <div>
            <GradientText className="mt-8 text-center text-3xl lg:text-right">
              Contact
            </GradientText>
            <p className="mt-2 text-base text-white/75">
              <a
                href="mailto:BNRYMart@thebinaryholdings.com"
                className="font-medium underline"
              >
                BNRYMart@thebinaryholdings.com
              </a>
            </p>
            <p className="mt-2 text-base text-white/75">
              The Binary Holdings Co (Thailand) Limited nit 702-703, 7th Floor{' '}
              <br />T Place Building, 150 Thong Lo, Khlong Tan Nuea, Watthana,
              Bangkok 10110 Kingdom of Thailand
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bnryMartFaq
